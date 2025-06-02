import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './components/Homepage'
import Header from './components/Header'
import Projectspage from './components/Projectspage'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutpage from './components/Aboutpage'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Router basename="/PortfolioWebsite">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutpage" element={<Aboutpage />} />
        <Route path="/projectspage" element={<Projectspage />} />
      </Routes>
    </Router>
  );
}

export default App
