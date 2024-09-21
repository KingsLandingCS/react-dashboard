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
            });
        } else {
            gsap.to(sidebar, {
                x: '-100%',
                duration: 0.5,
                ease: 'power2.in',
            });
        }
    }, [isSidebarVisible]);

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
                {/* Sidebar - Absolutely positioned with margin */}
                <div
                    ref={sidebarRef}
                    className={`fixed top-5 left-5 bottom-5 p-6 w-64 bg-gradient-to-t from-gray-900 to-gray-700 z-10 transform ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out rounded-xl shadow-lg`}
                >
                    <Sidebar />
                </div>
                {/* Main content: 100% width on small screens, 80% width on xl screens */}
                <div className="main-content flex-1 flex flex-col w-full xl:ml-72 xl:w-[80%]">
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
