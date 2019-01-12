import React from 'react'
import './channel.css'
import Popup from '../Popup/EditItem/EditItemPopup'


export default (props) =>{
    let param = props.element;
    const styleIMG = (`./img/${param.LOGO}`)
    return(
    <div className="channelItem" data-tag={param.GROUP}>
        <div className="edit"><Popup _this={props._this} mapParam = {param}/></div>
        <img src={styleIMG} alt={param.NAME}></img>
        <div>{param.NAME}</div>
    </div>
)}