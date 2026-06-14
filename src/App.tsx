import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PlayingEleven from "./components/cards/PlayingEleven";
import Home from "./pages/Home";
import TeamSelection from "./pages/TeamSelection";

function App() {
  // const [screen, setScreen] = useState<Screen>("start");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team-selection" element={<TeamSelection />} />
        <Route path="/playingxi" element={<PlayingEleven />} />
      </Routes>
    </Router>
  );
}

export default App;
