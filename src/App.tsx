// App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import Layout from './components/Layout';  // Importing Layout component

const App: React.FC = () => {
  // Check if there's a saved value in localStorage
  const savedState = localStorage.getItem('isSidebarExpanded');
  const [isExpanded, setIsExpanded] = useState(savedState ? JSON.parse(savedState) : true);

  const toggleSidebar = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    localStorage.setItem('isSidebarExpanded', JSON.stringify(newState));  // Save the state in localStorage
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout isExpanded={isExpanded} onToggle={toggleSidebar} />}>
          <Route path="homepage" element={<HomePage isExpanded={isExpanded} onToggle={toggleSidebar} />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
