import { useState, useEffect, useRef} from "react";
import { useTheme } from '../context/ThemeContext';
import { Link, NavLink } from "react-router-dom";
import logoImg from '../assets/logo_1.jpg';
import Profile from '../assets/Profile.png';

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
  { label: "Blogs", to: "/blog" },
  {
    label: "Our Service",
    to: "/services",
    dropdown: [
      { label: "Service Detail", to: "/service_detail" },
      { label: "Service Detail", to: "/service_detail" },
    ],
  },
  {
    label: "Products",
    to: "/products",
    dropdown: [
      { label: "Product Detail", to: "/product_detail" },
      { label: "Product Detail", to: "/product_detail" },
    ],
  },
];

export default function Navbar() {
  const { dark, setDark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const profileRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
      if (navRef.current && !navRef.current.contains(e.target)) setOpenDropdown(null);
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
          </div>
        </Link>

        {/* Nav Links — desktop */}
        <nav ref={navRef} className="hidden md:flex-row items-center gap-8 sm:flex-col xl:flex">
          {NAV_LINKS.map((l) =>
            l.dropdown ? (
              <div key={l.label} className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === l.label ? null : l.label)}
                  className={`flex items-center gap-1 text-xl font-medium transition-colors ${
                    openDropdown === l.label
                      ? "text-green-600"
                      : "text-gray-600 dark:text-gray-300 hover:text-green-600"
                  }`}
                >
                  {l.label}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${openDropdown === l.label ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openDropdown === l.label && (
                  <div className="absolute left-0 mt-2 w-52 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100/80 dark:border-gray-700 p-1.5 z-50">
                    <Link
                      to={l.to}
                      onClick={() => setOpenDropdown(null)}
                      className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-xl transition-colors text-gray-900 dark:text-white bg-gray-100/80 dark:bg-gray-700"
                    >
                      {l.label}
                      <svg className="w-3.5 h-3.5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    {l.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        onClick={() => setOpenDropdown(null)}
                        className="w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-xl transition-colors text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 mt-0.5"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={l.label}
                to={l.to}
                end
                className={({ isActive }) =>
                  `text-xl font-medium transition-colors ${
                    isActive
                      ? "text-green-600 border-b-2 border-green-600 pb-0.5"
                      : "text-gray-600 dark:text-gray-300 hover:text-green-600"
                  }`
                }
              >
                {l.label}
              </NavLink>
            )
          )}
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
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07-6.07-.71.71M6.34 17.66l-.71.71m12.02 0-.71-.71M6.34 6.34l-.71-.71M12 5a7 7 0 100 14A7 7 0 0012 5z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

          {/* Profile dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 p-1 rounded-full hover:ring-2 hover:ring-blue-200 transition"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold">
                <img src={Profile} className="w-full h-full object-cover rounded-full" />
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
          <button onClick={() => setMenuOpen(!menuOpen)} className="xl:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="xl:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((l) =>
            l.dropdown ? (
              <div key={l.label}>
                {/* Row: link label left, chevron right */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                  <Link
                    to={l.to}
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </Link>
                  <button
                    onClick={() => setOpenMobileDropdown(openMobileDropdown === l.label ? null : l.label)}
                    className="p-1 text-gray-400 dark:text-gray-500 hover:text-green-600"
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${openMobileDropdown === l.label ? "rotate-180" : ""}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Expandable children */}
                {openMobileDropdown === l.label && (
                  <div className="flex flex-col bg-gray-50 dark:bg-gray-800/60 rounded-xl mx-0 mt-1 mb-1 overflow-hidden">
                    {l.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        className="px-5 py-3 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-green-600 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-0"
                        onClick={() => { setMenuOpen(false); setOpenMobileDropdown(null); }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 py-3 border-b border-gray-100 dark:border-gray-800 hover:text-green-600"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            )
          )}
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 py-3 hover:text-green-600"
            onClick={() => setMenuOpen(false)}
          >
            Sign In
          </Link>
        </div>
      )}
    </header>
  );
}