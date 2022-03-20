import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';

const Home = () => {
  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
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
          />
          <input
            type="text"
            className="inputBox"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="User Name"
          />
          <button className="btn joinBtn">Join</button>
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
