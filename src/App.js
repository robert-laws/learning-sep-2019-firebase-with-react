import React from 'react';

import './App.scss';

class App extends React.Component {
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
          <button onClick={this.hideBox}>Click Here</button>
        </header>
      </div>
    )
  }
}

export default App;
