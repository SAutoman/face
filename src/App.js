import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/user/Home';



function App() {
  return (
    <div className=' flex  '>
      <Router>
        <Routes>
          <Route path='/'  element= {<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
