import React from 'react';

import { firestore } from '../firebase/firebase-config';

class Application extends React.Component {
  constructor() {
    super();

    this.state = {
      hidden: false
    }
  }

  hideBox = () => {
    console.log('clicked...')
    this.setState({
      hidden: !this.state.hidden
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Firebase with React
          </h1>
          <div className={`box ${this.state.hidden ? 'fade-out' : 'fade-in'}`}>
            <span>Hello There...</span>
          </div>
          <button onClick={this.hideBox}>{this.state.hidden ? 'Show Box' : 'Hide Box'}</button>
        </header>
      </div>
    )
  }
}

export default Application;
