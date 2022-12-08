import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header';
import Myprofile from './components/Myprofile';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './components/app.css';
import Home from './components/Home';
import Hotel from './components/Hotel';

function App() {
  const [id, setID] = useState(null);
  const getID = (id) => {
    setID(id);
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/my-profile" element={<Myprofile />} />
          <Route path="/" element={<Home getID={getID} />} />
          <Route path="/hotel" element={<Hotel id={id} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
