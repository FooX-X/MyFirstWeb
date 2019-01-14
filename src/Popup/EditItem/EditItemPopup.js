import React from 'react';
import Popup from 'reactjs-popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (props) =>{
let prop = props.mapParam
let _this = props._this.state
let edit = _this.update

function handleInput(key, e) {
  prop[key] = e.target.value;
}

function onSubmit(){
  edit.body = prop;
  props._this.handleSubmit(edit);
}

  return (
    <Popup trigger={<FontAwesomeIcon icon="pencil-alt"/>} modal>
      {close => (
        <div className="modal">
          <div className="header"> Edit Item: {prop.NAME} ({prop._id}) </div>
          <div className="content">
          <div>Name:<input type="text" defaultValue={prop.NAME} onChange={handleInput.bind(this, 'NAME')}/></div>
          <div>IP adress:<input type="text" defaultValue={prop.IP_ADRESS} onChange={handleInput.bind(this, 'IP_ADRESS')}/></div>
          <div>Video_ID:<input type="number" defaultValue={prop.VIDEO_ID} onChange={handleInput.bind(this, 'VIDEO_ID')}/></div>
          <div>Audio_ID:<input type="number" defaultValue={prop.AUDIO_ID} onChange={handleInput.bind(this, 'AUDIO_ID')}/></div>
          <select defaultValue={prop.LANGUAGE} onChange={handleInput.bind(this, 'LANGUAGE')}>
                {_this.language.map((element, index) =>{
                  return(<option defaultValue={element.LANGUAGE}>{element.LANGUAGE}</option>)
                })}
          </select>
          <select defaultValue={prop.GROUP} onChange={handleInput.bind(this, 'GROUP')}>
                {_this.group.map((element, index) =>{
                  return(<option defaultValue={element.GROUP}>{element.GROUP}</option>)
                })}
          </select>
          </div>
          <div className="actions" >
            <button onClick={onSubmit.bind(this)}>Edit Item</button>
            <button onClick={() => {close()}}> Close </button>
          </div>
        </div>
      )}
    </Popup>
  )}