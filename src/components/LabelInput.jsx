import React from "react";

export const LabelInput = (props) => {

  console.log(props)

  const name = props.name.toLowerCase()

  return (
    <div className={`col-md-${props.width}`}>
      <label 
        htmlFor={name}
        className="form-label"
      >
        {props.name}
      </label>
      <input 
        type="text" 
        className="form-control" 
        id={name}
        placeholder={`Digite: ${props.name}`}
      />
    </div>
  );
};
