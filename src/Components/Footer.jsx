import { Link } from "react-router-dom";
import logoImg from '../assets/logo_1.jpg';
import { FaTelegram, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";

const FOOTER_COLS = [
  {
    heading: "Company",
    links: ["About Us", "Our Team", "Careers", "News & Media", "Contact"],
  },
  {
    heading: "Services",
    links: ["Services", "Portfolio", "Consulting", "Safety Policy", "Partners"],
  },
  {
    heading: "Support",
    links: ["FAQ", "Support", "Terms of Use", "Privacy Policy", "Sitemap"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-green-900/35 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Link to="/" className="flex items-center gap-2 cursor-pointer">
                <div className="flex items-center gap-4">
                  <img src={logoImg} alt="Construction Logo" className="h-15 w-15 rounded-full object-cover" />
                  <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Build <span className="text-2xl text-green-300">.</span></span>
                </div>
              </Link>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Building excellence since 2014. Quality construction, delivered on time.
            </p>

            {/* Social media */}
            <div className="flex items-center gap-4">
              {[
                { icon: FaTelegram, href: "",   hover: "hover:text-sky-400" },
                { icon: FaYoutube, href: "",    hover: "hover:text-red-500" },
                { icon: FaLinkedin, href: "",   hover: "hover:text-blue-500" },
                { icon: FaFacebook, href: "",   hover: "hover:text-blue-600" },
              ].map((social, index) => (
                <a key={index} href={social.href} target="_blank" rel="noreferrer"
                  className={`p-2 rounded hover:bg-green-600/20 transition-all duration-300 ${social.hover}`}>
                  <social.icon className="w-7 h-7" />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLS.map((col, i) => (
            <div key={i}>
              <h4 className="text-white font-bold mb-4 text-sm">{col.heading}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm hover:text-green-400 transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">© 2025 Buildix. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs hover:text-green-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}