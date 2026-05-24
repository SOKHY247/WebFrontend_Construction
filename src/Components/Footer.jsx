import { Link} from "react-router-dom";
import logoImg from '../assets/logo_1.jpg';
import { Send } from "lucide-react";

const GithubIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>;
const LinkedinIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const FacebookIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.254h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>;
const FOOTER_COLS = [
  {
    heading: "Company",
    links: ["About Us", "Our Team", "Careers", "News & Media", "Contact"],
  },
  {
    heading: "Company",
    links: ["Services", "Portfolio", "Consulting", "Safety Policy", "Partners"],
  },
  {
    heading: "Company",
    links: ["FAQ", "Support", "Terms of Use", "Privacy Policy", "Sitemap"],
  },
];


export default function Footer() {
  return (
    <footer className="bg-green-900/10 text-gray-400 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
            {/* Logo */}
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

            {/* Socail media */}
           <div className='size-20 flex items-center gap-4 animate-fade-in animation-delay-400 cursor-pointer'>
              {/* <span className='text-sm text-muted-foreground font-bold'>{t('hero.followMe')}</span> */}
              {[
                { icon: GithubIcon, href: "https://github.com/SOKHY247" },
                { icon: LinkedinIcon, href: "https://www.linkedin.com/in/sokhy-vann-7b5659308/" },
                { icon: Send, href: "https://t.me/SOKHY_VAN" },
                { icon: FacebookIcon, href: "https://web.facebook.com/sokhy.vann" },
              ].map((social, index) => (
                <a key={index} href={social.href}
                  className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300  hover:text-blue-950'>
                  <social.icon className='w-5 h-5 ' />
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
  )
}
