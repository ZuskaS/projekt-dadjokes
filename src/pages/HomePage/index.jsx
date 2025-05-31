import './style.css';

import likeDown from './img/like-down.png';
import likeUp from './img/like-up.png';
import { useState } from 'react';

export const HomePage = () => {
  const [btnUp, setBtnUp] = useState(0);
  const [btnDown, setBtnDown] = useState(0);

  const handleClickDown = () => {
    setBtnDown(btnDown + 1);
  };

  const handleClickUp = () => {
    setBtnUp(btnUp + 1);
  };
  return (
    <div className="conatiner">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img
              className="user-avatar"
              src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
            />
            <p className="user-name">Neroxx</p>
          </div>

          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
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
