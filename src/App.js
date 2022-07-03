import MemeContainer from "./containers/MemeContainer";


function App() {
  const themes = [
    {name: "All", url: "https://www.reddit.com/r/memes.json"},
    {name: "Lotr", url: "https://www.reddit.com/r/lotrmemes.json"},
    {name: "40k", url: "https://www.reddit.com/r/Grimdank.json"},
    {name: "Dank", url: "https://www.reddit.com/r/dankmemes.json"},
    {name: "History", url: "https://www.reddit.com/r/HistoryMemes.json"}
  ]

  return (
    <MemeContainer themes={themes}/>
  );
};

export default App;
