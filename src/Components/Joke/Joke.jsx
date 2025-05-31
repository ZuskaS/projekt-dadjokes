import './Joke.css';
import likeDown from './img/like-down.png';
import likeUp from './img/like-up.png';
import { useState } from 'react';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [btnUp, setBtnUp] = useState(likes);
  const [btnDown, setBtnDown] = useState(dislikes);

  const handleClickDown = () => {
    setBtnDown(btnDown + 1);
  };

  const handleClickUp = () => {
    setBtnUp(btnUp + 1);
  };
  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={userAvatar} />
            <p className="user-name">{userName}</p>
          </div>

          <p className="joke__text">{text}</p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={handleClickUp}
          >
            <img
              className="btn-like btn-like--up"
              src={likeUp}
              alt="palec-nahoru"
            />
          </button>
          <span id="likes-up" className="likes-count likes-count--up">
            {btnUp}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={handleClickDown}
          >
            <img
              className="btn-like btn-like--down"
              src={likeDown}
              alt="palec-dolů"
            />
          </button>
          <span id="likes-down" className="likes-count likes-count--down">
            {btnDown}
          </span>
        </div>
      </div>
    </div>
  );
};
