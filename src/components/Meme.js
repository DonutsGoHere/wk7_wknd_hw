import React from "react";

function Meme({ title, place, artist, image }){
  
  return (
    <div className="Meme">
      <h2 className="MemeTitle">{title}</h2>
      <img className="Memeimg" src={image} alt={'Whoops, I dunno what\'s happened. CORB somethin? yup cheers!'} />
      <p>by: {artist}</p>
    </div>
  );
};

export default Meme;