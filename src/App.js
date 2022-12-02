import {
  BrowserRouter, Routes, Route, NavLink,
} from 'react-router-dom';
import Header from './components/Header';
import Myprofile from './components/Myprofile';

function App() {
  return (
    <BrowserRouter>
      <NavLink to="/">Header</NavLink>
      <NavLink to="/myprofile">My Profile</NavLink>
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route exact path="/myprofile" element={<Myprofile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
