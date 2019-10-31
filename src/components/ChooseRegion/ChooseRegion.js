import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ChooseRegion.scss'

class ChooseRegion extends Component {
  constructor() {
    super();
    this.state = {
      region: [],
      tenLimit: false,
    }
  }

  handleClick = (e, region) => {
    if (region === 'africa') {
      this.setState({ region: ['Africa']})
    } else if (region === 'europe') {
      this.setState({ region: ['Europe']})
    } else if (region === 'asia-oceania') {
      this.setState({ region: ['Asia', 'Oceania'] })
    } else if (region === 'americas') {
      this.setState({ region: ['America']})
    }
  }

  render() {
    console.log(this.state)
    return (
      <main>
        <h1>Choose a Region</h1>
        <img className="region" onClick={(e) => this.handleClick(e, 'africa')} src="https://svgsilh.com/svg/151640.svg" />
        <img className="region" onClick={(e) => this.handleClick(e, 'europe')} src="https://svgsilh.com/svg/151641.svg" />
        <img className="region" onClick={(e) => this.handleClick(e, 'asia-oceania')} src="https://svgsilh.com/svg/307197.svg" />
        <img className="region" onClick={(e) => this.handleClick(e, 'americas')} src="https://svgsilh.com/svg_v2/714733.svg" />
        <div className="flag-amount-container">
          <h4>Choose How Many Flags You'd Like To Be Tested On</h4>
          <button type="button">All Flags for this Region</button>
          <button type="button">Test me on 10 flags for this region</button>
        </div>
        <button type="button" className="play-button">Play!</button>
      </main>
    )
  }

}

export default ChooseRegion;