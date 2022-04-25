import Home from './components/Home';
import Navbar from './components/Navbar';
import Songs from './components/Songs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <div className="content">
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/tracks" element={<Songs />} />
    </Routes>
    </div>
    </div>
    </Router>
  );
}

export default App;
