// src/App.tsx
import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Archive from './pages/Archive';
import Resources from './pages/Resources';
import Research from './pages/Research';
import SummerLectures from './pages/Summer';
import Awards from './pages/Awards';

const App: FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/research" element={<Research />} />
        <Route path="/summer" element={<SummerLectures />} />
        <Route path="/awards" element={<Awards />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
