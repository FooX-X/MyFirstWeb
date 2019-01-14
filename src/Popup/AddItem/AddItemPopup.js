import React from 'react';
import Popup from 'reactjs-popup';

export default (props) =>{
  let _this = props._this.state
  let create = _this.create
  return (
    <Popup trigger={<button className="button"> Add New </button>} modal>
      {close => (
        <div className="modal">
          <div className="header"> Add New Item </div>
          <div className="content">
            <div>Name:<input type="text" onChange={props.handleInput.bind(this, create, 'NAME')}/></div>
            <div>Group: 
              <select onChange={props.handleInput.bind(this, create, 'GROUP')}>
                {_this.group.map((element, index) =>{
                  return(<option defaultValue={element.GROUP}>{element.GROUP}</option>)
                })}
              </select>
            </div>
            <div>
              Language: 
              <select onChange={props.handleInput.bind(this, create, 'LANGUAGE')}>
                {_this.language.map((element, index) =>{
                  return(<option defaultValue={element.LANGUAGE}>{element.LANGUAGE}</option>)
                })}
              </select>
            </div>
          <div>IP adress:<input type="text" onChange={props.handleInput.bind(this, create, 'IP_ADRESS')}/></div>
          <div>Video_ID:<input type="number" onChange={props.handleInput.bind(this, create, 'VIDEO_ID')}/></div>
          <div>Audio_ID:<input type="number" onChange={props.handleInput.bind(this, create, 'AUDIO_ID')}/></div>
          <div>
            Unique_ID: <input type="text" defaultValue={create.body.UNIQUE_NAME} onChange={props.UniqueNameGenerator.bind(this, create, 'UNIQUE_NAME')}disabled/>
            <button onClick={props.UniqueNameGenerator.bind(this, create, 'UNIQUE_NAME')}>Generate unique ID</button>
            </div>
          <div>Logo:<input type="file" onChange={props.handleInput.bind(this, create, 'LOGO')}/></div>
          </div>
          <div className="actions">
            <button onClick={props.handleSubmit.bind(this, create)}>Create new item</button>
            <button onClick={() => {return(close(), console.log('new data'))}}> Close </button>
          </div>
        </div>
      )}
    </Popup>
  )}