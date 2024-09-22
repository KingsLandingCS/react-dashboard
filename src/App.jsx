import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

    return (
        <Router>
            <div className="app flex h-screen">
                {/* Sidebar */}
                <div
                    className={`m-5 p-6 w-1/6 md:w-1/4 lg:w-1/6 bg-gradient-to-t from-gray-900 to-gray-700 z-10 rounded-[20px] shadow-lg`}
                >
                    <Sidebar />
                </div>
                {/* Main content: fixed width */}
                <div className="main-content flex-1 flex flex-col transition-all duration-300 w-5/6 md:w-3/4 lg:w-5/6 ">
                    <Header />
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
