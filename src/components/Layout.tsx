// Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/layout.css'; // Import the layout styles

interface LayoutProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const Layout: React.FC<LayoutProps> = ({ isExpanded, onToggle }) => {
  return (
    <div className={`layout-container ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <NavBar onToggle={onToggle} isExpanded={isExpanded} /> {/* NavBar */}
      <main className={`page-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <Outlet />  {/* Page-specific content */}
      </main>
      <Footer />  {/* Footer */}
    </div>
  );
};

export default Layout;
