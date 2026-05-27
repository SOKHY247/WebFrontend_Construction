import { useState, useEffect, useRef } from "react";
import { useTheme } from '../context/ThemeContext';
import { Link, NavLink } from "react-router-dom";
import logoImg from '../assets/logo_1.jpg';
import Profile from '../assets/Profile.png';

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
  { label: "Our Service", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Blogs", to: "/blog" },
];

export default function Navbar() {
  const { dark, setDark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // Close profile dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur border-b border-gray-100 dark:border-gray-700 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-23 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
        <div className="flex items-center gap-4">
          <img src={logoImg} alt="Construction Logo" className="h-15 w-15 rounded-full object-cover" />
          <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Build <span className="text-2xl text-green-300">.</span></span>
          {/* <span className="text-2xl text-green-600 font-bold ">.</span> */}
        </div>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex-row items-center gap-8 sm:flex-col xl:flex">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              end
              className={({ isActive }) =>
                `text-xl font-medium transition-colors ${
                  isActive
                    ? "text-green-600 border-b-2 border-green-600 text-5xl  pb-0.5"
                    : "text-gray-600 dark:text-gray-300 hover:text-green-600 text-5xl"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">

          {/* Dark / Light toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-200"
            aria-label="Toggle dark mode"
          >
            {dark ? (
              // Sun icon
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07-6.07-.71.71M6.34 17.66l-.71.71m12.02 0-.71-.71M6.34 6.34l-.71-.71M12 5a7 7 0 100 14A7 7 0 0012 5z" />
              </svg>
            ) : (
              // Moon icon
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

          {/* Profile dropdown */}
          <div className="relative" ref={profileRef}
          src={Profile}>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 p-1 rounded-full hover:ring-2 hover:ring-green-500 transition"
            >
              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-sm font-bold">
                U
              </div>
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl shadow-lg py-1 z-50">
                <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-800 dark:text-white">My Account</p>
                  <p className="text-xs text-gray-400">user@email.com</p>
                </div>
                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">Profile</Link>
                <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">Settings</Link>
                <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-50 dark:hover:bg-gray-700">Sign Out</button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="xl:hidden  p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="xl:hidden  bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <Link key={l.label} to={l.to} className="text-sm text-gray-700 dark:text-gray-300 font-medium" onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link to="/" className="text-sm text-gray-700 dark:text-gray-300 font-medium" onClick={() => setMenuOpen(false)}>Sign In</Link>
        </div>
      )}
    </header>
  );
}
