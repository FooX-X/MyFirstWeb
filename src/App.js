import React, { Component } from 'react';
import './App.css';
import TVchannel from './TVchannel/channel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="SearchBox">
          <input type="text"></input>
          <button>Search</button>
        </div>
        <div>
          <button>Add New</button>
          <button>Delete</button>
        </div>
        <TVchannel/>
      </div>
    );
  }
}

export default App;
