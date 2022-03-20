import React from 'react';

const Home = () => {
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className='homePageLogo' src="logo192.png" alt="LOGO" />
        <h4 className="mainLabel">Paste Invitation Room Id</h4>
        <div className="inputGroup">
          <input type="text" className="inputBox" placeholder="Room Id" />
          <input type="text" className="inputBox" placeholder="User Name" />
          <button className="btn joinBtn">Join</button>
          <span className="createInfo">
            If you don't have a room id, &nbsp;{' '}
            <a className="createNewBtn" href="#/">
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
