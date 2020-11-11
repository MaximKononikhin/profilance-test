import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import { IAppState } from '../../utils/types'
import './Main.scss';

const Main: React.FC = () => {
  const userName = useSelector<IAppState, string>(state => state.userName);
  return (
    <section className="main">
      <h1 className="main__heading">
        Привет, {userName}!
      </h1>
      <Link className="main__link" to='/news'>Перейти в новости</Link>
    </section>
  )
}

export default Main
