import React from 'react';
import Popup from 'reactjs-popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (props) =>{
let prop = props.mapParam
let _this = props._this.state
  return (
    <Popup trigger={<FontAwesomeIcon icon="pencil-alt"/>} modal>
      {close => (
        <div className="modal">
          <div className="header"> Edit Item: {prop.NAME} </div>
          <div className="content">
          <div>Name:<input type="text" defaultValue={prop.NAME}/></div>
          <div>IP adress:<input type="text" defaultValue={prop.IP_ADRESS}/></div>
          <div>Video_ID:<input type="number" defaultValue={prop.VIDEO_ID}/></div>
          <div>Audio_ID:<input type="number" defaultValue={prop.AUDIO_ID}/></div>
          <select defaultValue={prop.LANGUAGE}>
                {_this.language.map((element, index) =>{
                  return(<option value={element.LANGUAGE}>{element.LANGUAGE}</option>)
                })}
          </select>
          <select defaultValue={prop.GROUP}>
                {_this.group.map((element, index) =>{
                  return(<option value={element.GROUP}>{element.GROUP}</option>)
                })}
          </select>
          <div>Logo:<input type="file" /></div>
          </div>
          <div className="actions" >
            <button onClick={() => {close()}}> Close </button>
          </div>
        </div>
      )}
    </Popup>
  )}