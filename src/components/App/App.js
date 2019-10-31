import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import StartPage from '../StartPage/StartPage';
import ChooseRegion from '../../containers/ChooseRegion/ChooseRegion';
import GameContainer from '../../containers/GameContainer/GameContainer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <main>
        <Route exact path='/' render={ () => <StartPage />}/>
        <Route exact path='/flag-fest' render={ () => <ChooseRegion />}/>
        <Route exact path='/flag-fest/play' render={ () => <GameContainer />} />
      </main>
    )

  }

}


export default App;
