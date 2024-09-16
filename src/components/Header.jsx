// src/components/Header.jsx
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <header className="header bg-white text-zinc-500 p-4">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">Your Dashboard</h1>
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
        </header>
    );
};

export default Header;
