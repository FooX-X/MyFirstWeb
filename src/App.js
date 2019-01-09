import React, { Component } from 'react';
import Channel from './TVchannel/channel'
import Popup from './Popup/AddPopup'
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
              Name: '',
              Group: '',
              Language: '',
              IP_Adress: '',
              Video_ID: '',
              Audio_ID: '',
              Logo: '1234'
          },
          path: 'createValue'
      },

    rec:[],
    addClass: false
  }

componentWillMount () {
    return fetch('http://localhost:2000/getValues')
        .then((resp) => resp.json())
        .then((data)=> {
            this.setState({rec: data})
        })
}
handleSubmit (obj) {
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
          {this.state.rec.map((element,index) =>{
                      return(<Channel key={index}
                                      _this = {element}/>)
                  })}
          </div>
      </div>
    );
  }
// function gallerySection( target, data ) {
//   let panaudoti_tagai = [],
//       kiekis = data.length,
//       tagas = '',
//               for ( var i=0; i<kiekis; i++) {
//                   tagas = data[i].tag.toLowerCase();
//                   if ( panaudoti_tagai.indexOf(tagas) === -1 ) {
//                       panaudoti_tagai.push(tagas);
//                   }
//               }
// }

export default App;
