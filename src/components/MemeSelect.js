import React from "react";

function MemeSelect ({handleChange}){
  
  function onChange(evt){
    if(evt.target.value === '')
    console.log(evt.target.value);
    handleChange(evt.target.value);
  }

  return (
  <label>
    Meme choice<input onChange={onChange} type='number'/>
  </label>
  )
}
export default MemeSelect;