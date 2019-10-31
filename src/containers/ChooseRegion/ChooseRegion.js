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

  handleRegion = (region) => {
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

  handleFlagAmount = (amount) => {
    if (amount === 'ten') {
      this.setState({ tenLimit: true})
    } else if (amount === 'all') {
      this.setState({ tenLimit: false })
    }
  }

  render() {
    return (
      <main>
        <h1>Choose a Region</h1>
        <img className="region" onClick={() => this.handleRegion('africa')} src="https://svgsilh.com/svg/151640.svg" />
        <img className="region" onClick={() => this.handleRegion('europe')} src="https://svgsilh.com/svg/151641.svg" />
        <img className="region" onClick={() => this.handleRegion('asia-oceania')} src="https://svgsilh.com/svg/307197.svg" />
        <img className="region" onClick={() => this.handleRegion('americas')} src="https://svgsilh.com/svg_v2/714733.svg" />
        <div className="flag-amount-container">
          <h4>Choose How Many Flags You'd Like To Be Tested On</h4>
          <button type="button" onClick={() => this.handleFlagAmount('all')}>All Flags for this Region</button>
          <button type="button" onClick={() => this.handleFlagAmount('ten')}>Test me on 10 flags for this region</button>
        </div>
        <Link to='/flag-fest/play'>
          <h4 className="play-button">Play!</h4>
        </Link>
      </main>
    )
  }

}

export default ChooseRegion;