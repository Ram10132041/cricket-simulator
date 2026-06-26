import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PlayingXI from "./components/cards/PlayingXI/PlayingXI";
import Toss from "./components/cards/Toss";
import PageLayout from "./components/layout/PageLayout";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import MatchPreview from "./pages/MatchPreview";
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
            <Route path="/playingxi" element={<PlayingXI />} />
            <Route path="/toss" element={<Toss />} />
            <Route path="/match-preview" element={<MatchPreview />} />
          </Routes>
        </PageLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
