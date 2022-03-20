import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';

import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');

  const navigate = useNavigate();

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success('Room created!');
  };

  const joinRoom = () => {
    if (!roomId || !userName) {
      toast.error('Please enter room id and user name !');
      return;
    }

    navigate(`/editor/${roomId}`, {
      state: {
        userName,
      },
    });
  };

  const handleInputEnter = (e) => {
    if (e.key === 'Enter') {
      joinRoom();
    }
  };

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className="homePageLogo" src="logo192.png" alt="LOGO" />
        <h4 className="mainLabel">Paste Invitation Room Id</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="Room Id"
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputBox"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="User Name"
            onKeyUp={handleInputEnter}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            If you don't have a room id, &nbsp;{' '}
            <a onClick={createNewRoom} className="createNewBtn" href="#/">
              create one here
            </a>
          </span>
        </div>
      </div>

      <footer>
        <h4>
          All rights reserved. &copy; 2022 | Developed By{' '}
          <a target="_blank" rel="noreferrer" href="https://syket-das.me">
            Syket Das
          </a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
