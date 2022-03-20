import React, { useEffect, useRef, useState } from 'react';
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import ACTIONS from '../Actions';
import Client from '../components/Client';
import Editor from '../components/Editor';
import { initSocket } from '../socket';

import toast from 'react-hot-toast';

const EditorPage = () => {
  const location = useLocation();
  const socketRef = useRef(null);
  const codeRef = useRef(null);

  const reactNavigate = useNavigate();

  const { roomId } = useParams();

  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function init() {
      socketRef.current = await initSocket();

      socketRef.current.on('connect_error', (err) => handleErrors(err));
      socketRef.current.on('connect_failed', (err) => handleErrors(err));

      function handleErrors(err) {
        console.log('socket error: ', err);
        toast.error(err.message);
        reactNavigate('/');
      }

      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        username: location.state?.username,
      });

      // Listening for joined event
      socketRef.current.on(
        ACTIONS.JOINED,
        ({ clients, username, socketId }) => {
          if (username !== location.state?.username) {
            toast.success(`${username} joined the room.`);
            console.log(`${username} joined`);
          }
          setClients(clients);
          socketRef.current.emit(ACTIONS.SYNC_CODE, {
            code: codeRef.current,
            socketId,
          });
        }
      );

        // Listening for disconnected
        socketRef.current.on(
          ACTIONS.DISCONNECTED,
          ({ socketId, username }) => {
              toast.success(`${username} left the room.`);
              setClients((prev) => {
                  return prev.filter(
                      (client) => client.socketId !== socketId
                  );
              });
          }
      );



    }
    init();
    return () => {
      socketRef.current.disconnect();
      socketRef.current.off(ACTIONS.JOINED);
      socketRef.current.off(ACTIONS.DISCONNECTED);
  };
  }, []);

  if (!location.state) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="mainWrap">
        <div className="aside">
          <div className="asideInner">
            <div className="logo">
              <img className="logoImage" src="/logo192.png" alt="" />
            </div>
            <h3>Connected</h3>
            <div className="clientsList">
              {clients.map((client) => (
                <Client key={client.socketId} username={client.username} />
              ))}
            </div>
          </div>

          <button className="btn copyBtn">Copy Room Id</button>
          <button className="btn leaveBtn">Leave</button>
        </div>
        <div className="editorWrap">
          <Editor />
        </div>
      </div>
    </>
  );
};

export default EditorPage;
