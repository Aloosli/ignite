import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./actions/gamesAction";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div className="App">
      <h1>hello</h1>
      <h2>Fucksake</h2>
    </div>
  );
}

export default App;
