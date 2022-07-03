import React, {useState, useEffect} from "react";
import MemeList from "../components/MemeList";
import MemeSelect from "../components/MemeSelect";


const MemeContainer = ({ themes }) => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    getMemes(themes[0].url)
  }, [themes])

  const getMemes = url => {
    fetch(url)
      .then(res => res.json())
      .then(memesData => setMemes(memesData.data.children))
  }

  const handleMemeTheme = evt => {
    getMemes(evt.target.value);
  }

  return (
    <>
      <MemeSelect handleMemeTheme={handleMemeTheme} themes={themes}/>
      <MemeList memes={memes} url={themes[0].url} handleMemeTheme={handleMemeTheme}/>
    </>
  );

};

export default MemeContainer;