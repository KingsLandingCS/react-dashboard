// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap'; // Import GSAP for animations
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Billing from './pages/Billing';
import VirtualReality from './pages/VirtualReality';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.scss'; // Add your CSS for styling

function App() {
  const sidebarRef = useRef(null); // Reference for the sidebar element
  const mainContentRef = useRef(null); // Reference for the main content
  const [isSidebarVisible, setIsSidebarVisible] = useState(window.innerWidth >= 1280); // Track sidebar visibility

  // Function to handle window resizing and trigger animations
  const handleSidebarAnimation = () => {
    const sidebar = sidebarRef.current;
    const mainContent = mainContentRef.current;

    if (window.innerWidth >= 1280 && !isSidebarVisible) {
      // Show the sidebar with animation on XL screens and above
      gsap.to(sidebar, { x: '0%', duration: 0.5, ease: 'power2.out' });
      gsap.to(mainContent, { width: '83.3333%', duration: 0.5, ease: 'power2.out' }); // 5/6 width for main content
      setIsSidebarVisible(true);
    } else if (window.innerWidth < 1280 && isSidebarVisible) {
      // Hide the sidebar with animation on smaller screens
      gsap.to(sidebar, {
        x: '-100%',
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          setIsSidebarVisible(false); // Only update state after animation completes
        },
      });
      gsap.to(mainContent, { width: '100%', duration: 0.5, ease: 'power2.in' }); // Full width for main content
    }
  };

  useEffect(() => {
    // Apply the animation when component mounts
    handleSidebarAnimation();

    // Listen for window resize to apply the animation
    window.addEventListener('resize', handleSidebarAnimation);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleSidebarAnimation);
    };
  }, [isSidebarVisible]); // Re-run the effect when sidebar visibility changes

  return (
    <Router>
      {/* main-app */}
      <div className="app flex h-screen">

        {/* sidebar */}
        <div
          ref={sidebarRef} // Attach the sidebar reference for GSAP to manipulate
          className={`sidebar-overlay p-5 w-1/6 m-5 rounded-3xl bg-gradient-to-t from-gray-900 to-gray-700 ${isSidebarVisible ? 'block' : 'hidden'}`}
          style={{ transform: 'translateX(-100%)' }} // Sidebar is initially hidden
        >
          <Sidebar />
        </div>

        {/* main content area */}
        <div
          ref={mainContentRef} // Attach the main content reference for GSAP to manipulate
          className="main-content flex flex-col text-red-300 w-full xl:w-5/6"
        >
          {/* Header component */}
          <Header />
          <div className="flex-1 flex items-center justify-center p-6">

            {/* pages */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/virtual-reality" element={<VirtualReality />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
