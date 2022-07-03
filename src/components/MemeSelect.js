import React from "react";

const MemeSelect = ({handleMemeTheme, themes}) => {

  return (
    <div className="MemeSelect">
      <h2>Meme Themes</h2>
      <select onChange={handleMemeTheme}>
        {themes.map(theme => {
          return( <option key={theme.name} value={theme.url}>{theme.name}</option>)
        })}
      </select>
    </div>
  );
};

export default MemeSelect;