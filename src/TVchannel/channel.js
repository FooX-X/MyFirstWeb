import React from 'react'
import './channel.css'

export default (props) =>{
    let param = props._this.state.channel;
    const styleIMG = {
        backgroundImage: `url(${require(`./img/${param.imageName}`)})` 
    } 
    return(
    <div style={styleIMG} className="channelItem">
        <strong>{param.name}</strong>
        
    </div>
)}