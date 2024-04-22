import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './pages/Landing';
import EnterLinks from './pages/Enterlinks';
import ComparePage from './pages/compare';



function App() {
  return (
    <div className="App">
    <Router basename="/">
      <Routes>
        {/* Route to Landing Page (root) */}
        <Route path="/" element={<LandingPage/>} />

        {/* Route to EnterLinks Page */}
        <Route path="/enterlinks" element={<EnterLinks/>} />

        {/* Route to Comparison Page */}
        <Route path="/compare" element={<ComparePage/>} />
      </Routes>
      {/* Redirect all other paths to Home */}
      {/* <Navigate to="/" /> */}
    </Router>
    </div>
  );
}

export default App;
