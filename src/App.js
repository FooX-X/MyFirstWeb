import React, { Component } from 'react';
import Channel from './TVchannel/channel'
import Popup from './Popup/AddPopup'
import './App.css';

class App extends Component {
  state ={
    channel:{
      name: 'TV-3',
      type: 'Lietuviski',
      IPadress: '192.1.1.1',
      port: '1234',
      imageName: 'TV3.png'
    },
  }

  render() {
    return (
      <div className="App">
          <nav>
            <button onClick={<Popup/>} >Add</button>
            <button>Export</button>
            <button>Delete</button>
          </nav>
          <h1>My IPTV channel list</h1>
          <div className="SerchBox">
            <input></input>
            <button>Serch</button>
          </div>
        <div className="FilterList">
          <div>filter by type</div>
        </div>
        <div className="channelList">
        <Channel _this = {this}/>
        <Channel _this = {this}/>
        <Channel _this = {this}/>
        <Channel _this = {this}/>
        <Channel _this = {this}/>
        <Channel _this = {this}/>

        </div>
        <Popup trigger={<button> Open Modal </button>} modal>
      {close => (
        <div className="modal">
          <div className="header"> Modal Title </div>
          <div className="content">
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
            Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
            delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
            commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
            explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
          </div>
          <div className="actions">
            <button onClick={() => {close()}}> close modal </button>
          </div>
        </div>
      )}
    </Popup>
      </div>
    );
  }
}

export default App;
