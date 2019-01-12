import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
export default (props) => {
    let param = props._this.state
  return (
    <Router>
      <div>
            <NavLink to="/">All
                </NavLink>
            {param.group.map((element, index) =>{
            return(<NavLink to={(`/group=${element.GROUP}`)}>{element.GROUP}</NavLink>)
                })}
        
        {param.group.map((element, index) =>{
            return(<Route path={(`/group=${element.GROUP}`)} component={"props._this.getItemList"}/>)
                })}
      </div>
    </Router>
  );
}