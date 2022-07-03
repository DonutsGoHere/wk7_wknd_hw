import React from "react";

function Meme({ title, place, artist, image }){
  
  return (
    <div className="Meme">
      <h2> - {title} - </h2>
      <img src={image} alt={'Whoops, I dunno what\'s happened. CORB somethin? yup cheers!'} />
      <p>by: {artist}</p>
    </div>
  );
};

export default Meme;