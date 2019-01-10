import React, { Component } from 'react';
import Channel from './TVchannel/channel'
import Popup from './Popup/AddItem/AddItemPopup'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTh, faList, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faList, faTh, faPencilAlt);

class App extends Component {
  state ={
      create: {
          method: 'POST',
          body: {
              NAME: '',
              GROUP: 'Lietuviski',
              LANGUAGE: 'LT',
              IP_ADRESS: '',
              VIDEO_ID: null,
              AUDIO_ID: null,
              LOGO: '',
              UNIQUE_NAME: 'sadasf',
          },
          path: 'createValue'
      },
    channelData:[],
    dropdownData:[],
    addClass: false
  }

componentWillMount () {
    return( fetch('http://localhost:2000/getValues')
        .then((resp) => resp.json())
        .then((data)=> {
            this.setState({channelData: data})
        }),
        fetch('http://localhost:2000/getValues2')
        .then((resp) => resp.json())
        .then((data)=> {
            this.setState({dropdownData: data})
            console.log(this.state.dropdownData)
        })
        )}
handleSubmit (obj) {
  obj.body.VIDEO_ID = parseInt(obj.body.VIDEO_ID)
  obj.body.AUDIO_ID = parseInt(obj.body.AUDIO_ID)
  obj.body.LOGO = obj.body.LOGO.substring(obj.body.LOGO.lastIndexOf('\\')+1)
  console.log(obj.body.LOGO)
  fetch(`http://localhost:2000/${obj.path}`, {
      method: obj.method,
      body: JSON.stringify(obj.body),
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          
      }
  }).then(response => {
      //After post
  })
}

toggleClass () {
  this.setState({addClass: !this.state.addClass});
}

handleInput (obj, key, e) {
  obj.body[key] = e.target.value
}
  render() {
    let channelList = ["channelList"];
    let listClass = ["list"]
    let gridClass = ["grid active"]
      if(this.state.addClass) {
        channelList.push('line');
        listClass.push('active')
        gridClass = ["grid"]
      }
    return (
      <div className="App">
          <nav>
            <Popup  _this ={this}
                    handleInput ={this.handleInput}
                    handleSubmit ={this.handleSubmit}/>     
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
          <div onClick={this.toggleClass.bind(this)} className={listClass.join(' ')}><FontAwesomeIcon  icon="list" /></div>
          <div onClick={this.toggleClass.bind(this)} className={gridClass.join(' ')}><FontAwesomeIcon icon="th" /></div>
          </div>
          <div className={channelList.join(' ')}>
          {this.state.channelData.map((element,index) =>{
                      return(<Channel key={index}
                                      element = {element}
                                      />)
                  })}
          </div>
      </div>
    );
  }
}

export default App;
