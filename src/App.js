import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <h1> Hello team, we are almost done...</h1>
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
