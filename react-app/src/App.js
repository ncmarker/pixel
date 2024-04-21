import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './pages/Landing';
import EnterLinks from './pages/enterlinks';
import ComparePage from './pages/compare';
import ReactDOM from 'react-dom/client';



function App() {
  return (
    <>
    <Router basename="/">
      <Routes>
        {/* Route to Landing Page (root) */}
        <Route path="/" component={LandingPage} />

        {/* Route to EnterLinks Page */}
        {/* <Route path="/enterlinks" component={EnterLinks} /> */}

        {/* Route to Comparison Page */}
        {/* <Route path="/compare" component={ComparePage} /> */}

        {/* Redirect all other paths to Home */}
        {/* <Navigate to="/" /> */}
      </Routes>
    </Router>
    {/* <LandingPage /> */}
    </>
  );
}

export default App;
