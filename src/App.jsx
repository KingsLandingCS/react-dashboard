import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
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
import './App.scss';

function App() {
  const sidebarRef = useRef(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(window.innerWidth >= 1280);

  const handleSidebarAnimation = useCallback(() => {
    const sidebar = sidebarRef.current;

    if (isSidebarVisible) {
      gsap.to(sidebar, {
        x: '0%',
        duration: 0.5,
        ease: 'power2.out',
        display: 'block',
      });
    } else {
      gsap.to(sidebar, {
        x: '-100%',
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(sidebar, { display: 'none' });
        },
      });
    }
  }, [isSidebarVisible]); // Added isSidebarVisible as dependency

  const toggleSidebar = () => {
    setIsSidebarVisible(prevState => !prevState);
  };

  useEffect(() => {
    handleSidebarAnimation();
  }, [handleSidebarAnimation]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsSidebarVisible(true);
      } else {
        setIsSidebarVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <div className="app flex h-screen">
        <div
          ref={sidebarRef}
          className={`sidebar-overlay fixed xl:relative xl:flex p-5 w-1/6 m-5 rounded-3xl bg-gradient-to-t from-gray-900 to-gray-700 z-2`}
          style={{ display: isSidebarVisible ? 'block' : 'none' }}
        >
          <Sidebar />
        </div>
        <div className="main-content flex flex-col text-red-300 w-full z-1">
          <Header toggleSidebar={toggleSidebar} />
          <div className="flex-1 flex items-center justify-center p-6">
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
