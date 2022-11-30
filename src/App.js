import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
