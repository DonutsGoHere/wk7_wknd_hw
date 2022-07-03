import MemeContainer from "./containers/MemeContainer";


function App() {
  const memeTheme = [
    {name: "All", url: "https://www.reddit.com/r/memes.json"},
    {name: "Lotr", url: "https://www.reddit.com/r/lotrmemes.json"},
    {name: "Battleclub 5-milly", url: "https://www.reddit.com/r/Grimdank.json"}
  ]

  return (
  <>
    <h1>Meme Machine</h1>
    <MemeContainer memeTheme={memeTheme}/>
  </>
  );
}

export default App;
