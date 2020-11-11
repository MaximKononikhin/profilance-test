import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { signOut, switchModal } from '../../Store/actions';
import { ActionTypes } from '../../Store/actionTypes';
import { IAppState } from '../../utils/types';

import './Header.scss';



const Header: React.FC = () => {
  const isAuthNeed = useSelector<IAppState, boolean>(state => state.isAuthNeed);
  const dispatch = useDispatch<Dispatch<ActionTypes>>();

  return (
    <header className="header">
      <div className="header__wrapper">
        <img src="/favicon.ico" width="30" height="30" alt=""/>
        <Link to='/' className="header__main-link">
          Главная
        </Link>
        <Link to='/news' className="header__main-link">
          Новости
        </Link>
      </div>
      <a href="/#" className="header__main-link" onClick={(evt) => {
        evt.preventDefault();
        isAuthNeed? dispatch(switchModal(true)) : dispatch(signOut());
      }}>
        {isAuthNeed? 'Войти' : 'Выйти'}
      </a>
    </header>
  )
};

export default Header;