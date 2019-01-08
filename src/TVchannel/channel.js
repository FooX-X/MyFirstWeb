import React from 'react'
import './channel.css'

export default (props) =>{
    let param = props._this;
    const styleIMG = (`./img/${param.LOGO}`)
    return(
    <div className="channelItem">
        <img src={styleIMG} alt={param.NAME}></img>
        <div>{param.NAME}</div>
    </div>
)}