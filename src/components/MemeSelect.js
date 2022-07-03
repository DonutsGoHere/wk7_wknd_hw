import React from "react";

const MemeSelect = ({handleMemeTheme, themes}) => {

  return (
    <div className="MemeSelect">
      <h1>Meme Themes</h1>
      <select onChange={handleMemeTheme}>
        {themes.map(theme => {
          return( <option key={theme.name} value={theme.url}>{theme.name}</option>)
        })}
      </select>
    </div>
  );
};

export default MemeSelect;