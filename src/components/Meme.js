import React, {useEffect, useState} from "react";

function Meme({ title, artist, image }){
  
  return (
    <>
      <h3> - {title} - </h3>
      <img src={image} alt={'eh?'} />
      <p>by: {artist}</p>
    </>
  )
}

export default Meme;