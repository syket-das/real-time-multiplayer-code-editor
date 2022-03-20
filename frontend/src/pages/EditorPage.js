import React, { useState } from 'react';
import Client from '../components/Client';
import Editor from '../components/Editor';

const EditorPage = () => {
  const [clients, setClients] = useState([
    {
      socketId: 1,
      username: 'Syket Das',
    },
    {
      socketId: 2,
      username: 'Saurabh',
    },
    {
      socketId: 3,
      username: 'Syket Das',
    },
    {
      socketId: 4,
      username: 'Saurabh',
    },
  ]);

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
