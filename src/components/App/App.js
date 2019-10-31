import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import StartPage from '../StartPage/StartPage';
import ChooseRegion from '../ChooseRegion/ChooseRegion';
import './App.scss';

class App extends Component {
  render() {
    return (
      <main>
        <Route exact path='/' render={ () => <StartPage />}/>
        <Route exact path='/choose-region' render={ () => <ChooseRegion />}/>
      </main>
    )

  }

}


export default App;
