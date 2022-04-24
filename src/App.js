import Home from './components/Home';
import Navbar from './components/Navbar';
import Songs from './components/Songs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <div className="content">
    <Switch>
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/tracks">
    <Songs />
    </Route>
    </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
