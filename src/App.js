import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import DetailsPage from "./components/DetailsPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/item/:id" element={<DetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
