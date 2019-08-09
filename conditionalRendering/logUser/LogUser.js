import React from 'react';

const LogUser = (props) => {
  return(
    <div>
      <input type="button" value={props.onClick ? "Logout" : "Login"} onClick={props.onClick}/>
    </div>
  )
}

export default LogUser;