import React from "react";

function Input({label,id,error, ...props}) {
  return ( <div className="control no-margin">
          <label htmlFor="email">{label}</label>
          <input id={id}
          className="input"
          {...props}
          />
       <div className="control-error"><p>{error}</p></div>
        </div>
        
        );

}

export default Input;
