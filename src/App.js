import React, { Component } from 'react';
import Channel from './TVchannel/channel'
import Popup from './Popup/AddPopup'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTh, faList } from '@fortawesome/free-solid-svg-icons'

library.add(faList, faTh);

class App extends Component {
  state ={
    rec:[],
    addClass: false
  }

  componentWillMount (data) {
    return fetch('http://localhost:2000/getValues')
        .then((resp) => resp.json())
        .then((data)=> {
            this.setState({rec: data})
            console.log(this.state.rec)
        })
}
toggleClass () {
  this.setState({addClass: !this.state.addClass});
}

  render() {
    let channelList = ["channelList"];
    let boxClass = ["channelList"];
    if(this.state.addClass) {
      boxClass.push('line');
    }
    return (
      <div className="App">
          <nav>
            <Popup/>
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
          <div className="ItemListing">                    
          <div onClick={this.toggleClass.bind(this)} className="fa fa-lsit"><FontAwesomeIcon  icon="list" /></div>
          <div onClick={this.toggleClass.bind(this)} className="fa fa-grid"><FontAwesomeIcon icon="th" /></div>
          </div>
          <div className={channelList.join(' ')}>
          {this.state.rec.map((element,index) =>{
                      return(<Channel _this = {element}/>)
                  })}
          </div>
      </div>
    );
  }
}

export default App;
