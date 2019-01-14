import React, { Component } from 'react';
import Channel from './TVchannel/channel'
import PopupAddNewItem from './Popup/AddItem/AddItemPopup'
import axios from 'axios'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import {  faTh, faList, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
library.add(faList, faTh, faPencilAlt, faTrash);

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
              CHECKED: false
          },
          path: 'createValue'
      },
      update: {
        method: 'PUT',
        body: {},
        path: 'updateValue'
    },
      delete: {
        method: 'DELETE',
        body: {},
        path: 'deleteValue'
    },
    channelData:[],
    group: [],
    language: [],
    serchValue: '',
    addClass: false,
    trashActive: false,
    selectedValues: []
  }
  toggleClass () {
    this.props._this.setState({addClass: !this.props._this.state.addClass});
  }

  componentWillMount () {
    this.getDropDownDataFromDB()
   }

   getItemListFromBD(){
    return(axios.get('http://localhost:2000/getValues')
    .then(data => {this.setState({channelData: data.data})
    }))
}
getDropDownDataFromDB(){
        return( fetch('http://localhost:2000/getValuesGroup')
        .then((resp) => resp.json())
        .then((data)=> {
            this.setState({group: data})
        }),
        fetch('http://localhost:2000/getValuesLanguage')
        .then((resp) => resp.json())
        .then((data)=> {
            this.setState({language: data})
        })
        )
}
handleSubmit (obj) {
  if(obj.method !== "DELETE"){
    obj.body.VIDEO_ID = parseInt(obj.body.VIDEO_ID)
    obj.body.AUDIO_ID = parseInt(obj.body.AUDIO_ID)
    obj.body.LOGO = obj.body.LOGO.substring(obj.body.LOGO.lastIndexOf('\\')+1)
    obj.body.CHECKED = false
  }
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
handleInput (obj, key, e) {
  obj.body[key] = e.target.value
}
UniqueNameGenerator(obj, key, e){
  let text = '';
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

    obj.body[key] = text
}
SerchValueHandle =(event) =>{
  this.setState({serchValue: event.target.value})
}
SerachDataShandler(event){
  this.setState({serchValue: event.target.value})
}
  render() {
    return (
      <div className="App">
          <nav>
            <PopupAddNewItem  _this ={this}
                    handleInput ={this.handleInput}
                    handleSubmit ={this.handleSubmit}
                    UniqueNameGenerator ={this.UniqueNameGenerator}/>     
            <button>Export</button>
          </nav>
          <h1>My IPTV channel list</h1>
          <div className="SerchBox">
            <input type="text" onChange={this.SerchValueHandle}></input>
            <button onClick={this.SerachDataShandler}></button>
          </div>
          <div className="FilterList">
          <NavLink to="/" exact>All</NavLink>
          {this.state.group.map((element, indet)=>{
            return(<NavLink to={`/group=${element.GROUP}`}>{element.GROUP}</NavLink>)
          })}
          

        <Switch>
            <Route path="/" exact  render={() => <Channel _this ={this}/>} />
            {this.state.group.map((element, indet)=>{
            return(<Route path={`/group=${element.GROUP}`} render={() => <Channel _this ={this}/>}/>)
          })}
          <Redirect to="/" />
        </Switch>
        
          </div>
          
      </div>
    );
  }
}

export default App;
