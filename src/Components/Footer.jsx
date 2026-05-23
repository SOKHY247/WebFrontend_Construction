
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
                <div className="w-8 h-8 rounded-md bg-green-600 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-white font-bold text-lg">Buildix</span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Building excellence since 2014. Quality construction, delivered on time.
              </p>
              <div className="flex gap-3">
                {["facebook", "twitter", "instagram", "linkedin"].map((s) => (
                  <a key={s} href="#" className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors">
                    <span className="text-xs font-bold text-white">{s[0].toUpperCase()}</span>
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
