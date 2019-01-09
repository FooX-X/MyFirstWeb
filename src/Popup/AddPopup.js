import React from 'react';
import Popup from 'reactjs-popup';

export default (props) =>{
let prop = props._this.state.create
  return (
    <Popup trigger={<button className="button"> Add New </button>} modal>
      {close => (
        <div className="modal">
          <div className="header"> Add New Item </div>
          <div className="content">
            <div>Name:<input type="text" onChange={props.handleInput.bind(this, prop, 'Name')}/></div>
            <div>Group:<input type="text" onChange={props.handleInput.bind(this, prop, 'Group')}/></div>
          <div>Language:<input type="text" onChange={props.handleInput.bind(this, prop, 'Language')}/></div>
          <div>IP adress:<input type="text" onChange={props.handleInput.bind(this, prop, 'IP_Adress')}/></div>
          <div>Video_ID:<input type="text" onChange={props.handleInput.bind(this, prop, 'Video_ID')}/></div>
          <div>Audio_ID:<input type="text" onChange={props.handleInput.bind(this, prop, 'Audio_ID')}/></div>
          <div>Logo:<input type="file" onChange={props.handleInput.bind(this, prop, 'Logo')}/></div>
          </div>
          <div className="actions">
            <button onClick={props.handleSubmit.bind(this, prop)}>Create new item</button>
            <button onClick={() => {close()}}> Close </button>
          </div>
        </div>
      )}
    </Popup>
  )}