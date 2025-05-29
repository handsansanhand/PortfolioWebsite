import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './components/Homepage'
import Header from './components/Header'
import Projectspage from './components/Projectspage'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projectspage" element={<Projectspage />} />
      </Routes>
    </Router>
  );
}

export default App
