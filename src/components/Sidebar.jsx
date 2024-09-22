import { NavLink } from 'react-router-dom';
import './Sidebar.scss'; // Ensure your global styles are imported

const Sidebar = () => {
    return (
        <aside className="sidebar text-white">
            <h1 className='my-5 flex-wrap hidden md:inline'>React Dashboard</h1>
            <hr className="divider my-5" />
            <ul className="space-y-2">
                <li>
                    <NavLink to="/" className={({ isActive }) => `flex p-2  rounded ${isActive ? 'bg-pink-500' : 'hover:bg-gray-800'}`}>
                        <i className="ri-dashboard-fill me-2"></i>
                        <span className="hidden md:inline">Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tables" className={({ isActive }) => `flex p-2 rounded ${isActive ? 'bg-pink-500' : 'hover:bg-gray-800'}`}>
                        <i className="ri-grid-fill me-2"></i>
                        <span className="hidden md:inline">Tables</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/billing" className={({ isActive }) => `flex p-2 rounded ${isActive ? 'bg-pink-500' : 'hover:bg-gray-800'}`}>
                        <i className="ri-bill-fill me-2"></i>
                        <span className="hidden md:inline">Billing</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/virtual-reality" className={({ isActive }) => `flex p-2 rounded ${isActive ? 'bg-pink-500' : 'hover:bg-gray-800'}`}>
                        <i className="ri-box-3-fill me-2"></i>
                        <span className="hidden md:inline">Virtual Reality</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/notifications" className={({ isActive }) => `flex p-2 rounded ${isActive ? 'bg-pink-500' : 'hover:bg-gray-800'}`}>
                        <i className="ri-notification-2-fill me-2"></i>
                        <span className="hidden md:inline">Notifications</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile" className={({ isActive }) => `flex p-2 rounded ${isActive ? 'bg-pink-500' : 'hover:bg-gray-800'}`}>
                        <i className="ri-profile-fill me-2"></i>
                        <span className="hidden md:inline">Profile</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sign-in" className={({ isActive }) => `flex p-2 rounded ${isActive ? 'bg-pink-500' : 'hover:bg-gray-800'}`}>
                        <i className="ri-login-box-fill me-2"></i>
                        <span className="hidden md:inline">Sign In</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sign-up" className={({ isActive }) => `flex p-2 rounded ${isActive ? 'bg-pink-500' : 'hover:bg-gray-800'}`}>
                        <i className="ri-account-pin-box-fill me-2"></i>
                        <span className="hidden md:inline">Sign Up</span>
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
