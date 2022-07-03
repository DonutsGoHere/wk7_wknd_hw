import React from "react";
import Meme from "./Meme";

const MemeList = ({memes}) => {;
  if (memes == null || memes.length === 0) {
    return <p>Loading...</p>;
  }

  return(
    <>
      {memes.map((meme) => {
      return (
        <Meme
          key={meme.data.id}
          title={meme.data.title}
          artist={meme.data.author_fullname}
          image={meme.data.url_overridden_by_dest}
        />
      )
    })}
    </>
  )
}
export default MemeList;
