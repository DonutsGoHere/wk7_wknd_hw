import React from "react";

function Meme({ title, place, artist, image }){
  
  return (
    <div className="Meme">
      <h1> - {title} - </h1>
      <img className="Memeimg" src={image} alt={'Whoops, I dunno what\'s happened. CORB somethin? yup cheers!'} />
      <p>by: {artist}</p>
    </div>
  );
};

export default Meme;