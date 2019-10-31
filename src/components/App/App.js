import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import StartPage from '../StartPage/StartPage';
import './App.scss';

class App extends Component {
  render() {
    return (
      <main>
        <Route exact path='/' render={ () => <StartPage />}/>
        {/* <Route exact path='/signup' render={ () => <SignUpForm />}/> */}
      </main>
    )

  }

}


export default App;
