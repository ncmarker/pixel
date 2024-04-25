import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './pages/Landing';
import EnterLinks from './pages/Enterlinks';
import PickScreens from './pages/PickScreens';
import ResultsPage from './pages/Results';


function App() {
  return (
    <div className="App">
    <Router basename="/">
      <Routes>
        {/* Route to Landing Page (root) */}
        <Route path="/" element={<LandingPage/>} />

        {/* Route to EnterLinks Page */}
        <Route path="/enterlinks" element={<EnterLinks/>} />

        {/* Route to Dropdown Page ----- EDIT */}
        <Route path="/pickscreens" element={<PickScreens/>} />

        {/* Route to Comparison Page */}
        <Route path="/results" element={<ResultsPage/>} />
      </Routes>
      {/* Redirect all other paths to Home */}
      {/* <Navigate to="/" /> */}
    </Router>
    </div>
  );
}

export default App;
