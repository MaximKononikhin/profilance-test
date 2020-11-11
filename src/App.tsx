import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Main from './pages/Main/Main';
import News from './pages/News/News';

import './App.scss';
import Header from './components/Header/Header';
import LoginModal from './components/LoginModal/LoginModal';
import { useSelector } from 'react-redux';
import { IAppState } from './utils/types';

const App: React.FC = () => {
  const isModalOpen = useSelector<IAppState, boolean>(state => state.isModalOpen);

  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact render={() => <Main/>}/>
          <Route path='/news' exact render={() => <News/>}/>
        </Switch>
        {isModalOpen && <LoginModal/>}
      </Router>
    </>
  );
}

export default App;
