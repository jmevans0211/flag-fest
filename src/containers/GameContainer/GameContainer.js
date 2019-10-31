import React, { Component } from 'react';

class GameContainer extends Component {
  constructor() {
    super();
    this.state = {
      roundComplete: false
    }
  }

  render() {
    return(
      <h1>in game container</h1>
    )
  }
}

export default GameContainer