import React from "react";
import {Button} from "react-bootstrap"
function Popup(props) {
  const {login} = props;
  return !login?(
    <div className="popup">
        <div className="popup-inner">
        <Button style={{position:"absolute",right:"3px",top:"3px" }} href ="/Login" variant="primary">Login</Button>
                <h3>Please Login</h3>
                <p>You don`t have accession</p>
        </div>
    </div>
  ):"";
}
  
export default Popup;