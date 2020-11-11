import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { signIn, switchModal } from '../../Store/actions';
import { ActionTypes } from '../../Store/actionTypes';
import { IAppState } from '../../utils/types';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import './LoginModal.scss';

const LoginModal: React.FC = () => {
  const referance = useRef<HTMLDivElement>(null);
  const isLoginError = useSelector<IAppState, boolean>(state => state.isLoginError);
  const dispatch = useDispatch<Dispatch<ActionTypes>>();

  const onSignInHandler = useCallback((evt) => {
    evt.preventDefault();
    const {login, password} = evt.target.elements;
    dispatch(signIn({
      login: login.value,
      password: password.value
    }));
  }, [])

  return (
    <div className="overlay" onClick={(evt) => {
      evt.stopPropagation()
      !referance.current?.contains(evt.currentTarget) && dispatch(switchModal(false));
    }}>
      <div ref={referance} className="login" onClick={evt => evt.stopPropagation()}>
        <div className="login__close-btn-wrapper">
          <div className="login__close-btn" onClick={() => dispatch(switchModal(false))}></div>
        </div>
        <form onSubmit={onSignInHandler}>
          <img src="/favicon.ico" width="60" height="60" alt=""/>
          <h3 className="login__heading">Test App</h3>
          {isLoginError && <ErrorMessage text='Неверный логин или пароль'/>}
          <label className="login__login-input">
            Логин
            <input name="login" type="text"/>
          </label>
          
          <label className="login__password">
            Пароль
            <input name="password" type="password"/>
          </label>
          
          <button>Войти</button>
        </form>
      </div>
    </div>
  )
}

export default LoginModal
