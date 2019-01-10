import React from 'react';
import Popup from 'reactjs-popup';

export default (props) =>{
  let _this = props._this.state
  let prop = _this.create
  let obj = _this.dropdownData
  console.log(...obj.LANGUAGE[1])
  return (
    <Popup trigger={<button className="button"> Add New </button>} modal>
      {close => (
        <div className="modal">
          <div className="header"> Add New Item </div>
          <div className="content">
            <div>Name:<input type="text" onChange={props.handleInput.bind(this, prop, 'NAME')}/></div>
            <div>Group: 
              {/* <select onChange={props.handleInput.bind(this, prop, 'GROUP')}>
                {GROUP.map((element) =>{
                  return(<option value={element}>{element}</option>)
                })}
              </select> */}
            </div>
            <div>
              Language: 
              <select onChange={props.handleInput.bind(this, prop, 'LANGUAGE')}>
                {_this.dropdownData.value((element) =>{
                  element.LANGUAGE.map((element, index) =>{
                    return(<option value={element}>{element}</option>)
                  }
                )})}
            </select>
            </div>
          <div>IP adress:<input type="text" onChange={props.handleInput.bind(this, prop, 'IP_ADRESS')}/></div>
          <div>Video_ID:<input type="number" onChange={props.handleInput.bind(this, prop, 'VIDEO_ID')}/></div>
          <div>Audio_ID:<input type="number" onChange={props.handleInput.bind(this, prop, 'AUDIO_ID')}/></div>
          <div>Logo:<input type="file" onChange={props.handleInput.bind(this, prop, 'LOGO')}/></div>
          </div>
          <div className="actions">
            <button onClick={props.handleSubmit.bind(this, prop)}>Create new item</button>
            <button onClick={() => {close()}}> Close </button>
          </div>
        </div>
      )}
    </Popup>
  )}