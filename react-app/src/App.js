import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/landing';
import EnterLinks from './pages/enterlinks';

import ComparePage from './pages/compare';


function App() {
  return (
    <Router>
      <Switch>
        {/* Route to Landing Page (root) */}
        <Route exact path="/" component={LandingPage} />

        {/* Route to EnterLinks Page */}
        <Route path="/enterlinks" component={EnterLinks} />

        {/* Route to Comparison Page */}
        <Route path="/compare" component={ComparePage} />

        {/* Redirect all other paths to Home */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
