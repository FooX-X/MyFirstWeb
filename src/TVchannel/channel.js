import React from 'react'
import './channel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default (props) =>{
    let param = props._this;
    const styleIMG = (`./img/${param.LOGO}`)
    return(
    <div className="channelItem" data-tag={param.GROUP}>
        <div className="edit" ><FontAwesomeIcon icon="pencil-alt" /></div>
        <img src={styleIMG} alt={param.NAME}></img>
        <div>{param.NAME}</div>
    </div>
)}