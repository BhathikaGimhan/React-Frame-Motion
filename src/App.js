
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './tools/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import { AnimatePresence } from 'framer-motion';

// import New from './components/New';

function App() {
  const location = useLocation();
  return (
    <div >
      <NavBar />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
