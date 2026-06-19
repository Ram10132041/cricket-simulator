import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PlayingEleven from "./components/cards/PlayingEleven";
import Toss from "./components/cards/Toss";
import PageLayout from "./components/layout/PageLayout";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import TeamSelection from "./pages/TeamSelection";

function App() {
  // const [screen, setScreen] = useState<Screen>("start");

  return (
    <ThemeProvider>
      <Router>
        <PageLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team-selection" element={<TeamSelection />} />
            <Route path="/playingxi" element={<PlayingEleven />} />
            <Route path="/toss" element={<Toss />} />
          </Routes>
        </PageLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
