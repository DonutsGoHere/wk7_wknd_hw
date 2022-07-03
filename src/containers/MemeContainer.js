import React, {useState, useEffect} from "react";
import MemeList from "../components/MemeList";
import Meme from "../components/Meme";


const MemeContainer = ({ memeTheme }) => {
  const [memes, setMemes] = useState([]);


  const getMemes = url => {
    fetch(url)
      .then(res => res.json())
      .then(memesData => setMemes(memesData.data.children))
  }

  useEffect(() => {getMemes(memeTheme[0].url)}, [memeTheme])

  return (
    <>
      <h1>Container</h1>
      <MemeList memes={memes} url={memeTheme[0].url}/>
    </>
  );

}
export default MemeContainer;