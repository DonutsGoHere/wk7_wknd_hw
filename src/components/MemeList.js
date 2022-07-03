import React from "react";
import Meme from "./Meme";

const MemeList = ({memes}) => {
  if (memes == null || memes.length === 0) {
    return <p>Loading...</p>;
  }


  return(
    <div className="MemeList">
      {memes.map((meme, index) => {
        if (meme.data.over_18 === true) {
          return <p key={meme.data.id}>NSFW</p>
        }
      return (
        <Meme
          key={meme.data.id}
          place={index + 1}
          title={meme.data.title}
          artist={meme.data.author}
          image={meme.data.url}
        />
      )
    })}
    </div>
  )
}
export default MemeList;
