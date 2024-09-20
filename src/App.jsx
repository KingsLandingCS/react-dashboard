// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header'; // Import the Header component
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
  return (
    <Router>
      {/* main-app */}
      <div className="app flex h-screen">

        {/* sidebar */}
        <div className="sidebar-overlay p-5 w-1/6  m-5 rounded-3xl bg-gradient-to-t from-gray-900 to-gray-700 hidden xl:block">
          <Sidebar />
        </div>

        {/* main content area */}
        <div className="main-content flex flex-col w-full xl:w-5/6 text-red-300">

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
