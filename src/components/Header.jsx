import { Link, useLocation } from 'react-router-dom';
import { FiSettings, FiBell } from 'react-icons/fi';

const Header = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <header className="header bg-white text-zinc-500 p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <nav aria-label="Breadcrumb">
                        <ol className="flex space-x-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-gray-300">Home</Link>
                            </li>
                            {pathnames.map((pathname, index) => {
                                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                                const isLast = index === pathnames.length - 1;
                                return (
                                    <li key={routeTo} className="flex items-center space-x-2">
                                        <svg className="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                        <Link
                                            to={routeTo}
                                            className={`text-gray-400 ${isLast ? 'font-semibold' : 'hover:text-gray-300'}`}
                                            aria-current={isLast ? 'page' : undefined}
                                        >
                                            {pathname.charAt(0).toUpperCase() + pathname.slice(1).replace('-', ' ')}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ol>
                    </nav>
                </div>

                <h1 className="text-xl font-bold">Your Dashboard</h1>

                <div className="flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:border-gray-400"
                    />
                    <button className="bg-red-50 text-red-500 px-4 py-1 rounded outline outline-1 outline-red-500 hover:bg-red-500 hover:text-white">
                        Search
                    </button>
                    <Link to="/settings">
                        <FiSettings className="text-xl text-gray-500 hover:text-gray-600" />
                    </Link>
                    <Link to="/notifications">
                        <FiBell className="text-xl text-gray-500 hover:text-gray-600" />
                    </Link>
                    <Link to="/sign-in" className="text-zinc-500 px-4 py-1 rounded font-semibold">
                        Sign In
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
