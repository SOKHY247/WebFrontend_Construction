import { Link } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import Footer from "../Components/Footer";

function SectionLabel({ children }) {
  return (
    <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-bold mb-2">
      {children}
    </p>
  );
}

const images = [
  {
    url: "https://img.magnific.com/free-photo/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus_1418-474.jpg?semt=ais_hybrid&w=740&q=80",
    desc: "Experience the serenity of the peaks. Live the modern life in the local.",
  },
  {
    url: "https://img.magnific.com/free-photo/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus_1418-474.jpg?semt=ais_hybrid&w=740&q=80",
    desc: "Experience the serenity of the peaks.",
  },
  {
    url: "https://img.magnific.com/free-photo/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus_1418-474.jpg?semt=ais_hybrid&w=740&q=80",
    desc: "Experience the serenity of the peaks.",
  },
];

const SERVICES = [
  { img: "https://5.imimg.com/data5/SELLER/Default/2022/7/ZL/OJ/OD/5478571/home-building-construction-service.jpg", title: "Residential Construction", date: "25 July 2026" },
  { img: "https://www.sustainableplaces.eu/wp-content/uploads/2017/02/SmartBuilding.jpg", title: "Smart Building", date: "25 July 2026" },
  { img: "https://themillsbuilding.com/userfiles/cms/building/images/1/The-Mills-Building-exterior.jpg", title: "Commercial Projects", date: "25 July 2026" },
  { img: "https://themillsbuilding.com/userfiles/cms/building/images/1/The-Mills-Building-exterior.jpg", title: "Infrastructure Works", date: "25 July 2026" },
  { img: "https://www.aroundthehouse.co.za/wp-content/uploads/2024/07/house-construction-kolkata-bimg2.jpg", title: "Interior Design", date: "25 July 2026" },
  { img: "https://content.jdmagicbox.com/v2/comp/nagpur/y6/0712px712.x712.191126202606.c4y6/catalogue/perfect-building-solutions-ramna-maroti-nagar-ishwar-nagar-nagpur-building-renovation-contractors-gtbsy14ohn.jpg", title: "Renovation Services", date: "25 July 2026" },
];

function OurService() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://img.freepik.com/free-photo/working-housing-project_1098-17511.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <span className="inline-block bg-green-500/20 text-green-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-green-500/30 mb-6">
              Trusted Since 2014
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              We Build What{" "}
              <span className="text-green-400">Lasts</span>{" "}
              for the Future
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
              With decades of experience, we specialise in turning ideas into well-designed structures that stand the test of time.
            </p>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* About section */}
      <section className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-28">
        <SectionLabel>Who We Are</SectionLabel>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-20">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-gray-900 dark:text-white leading-tight">
              About Our Company
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-base sm:text-lg">
              Founded in 2014, <span className="font-semibold text-gray-900 dark:text-white">BuildCo</span> is
              a leading construction company specialising in residential, commercial, and infrastructure
              projects. We bring together experienced engineers, architects, and project managers to deliver
              excellence at every scale.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-base sm:text-lg">
              Our mission is to build structures that stand the test of time — combining modern technology
              with sustainable practices to shape the future of construction.
            </p>
            <div className="w-full pt-10 border-t border-gray-100 dark:border-gray-800">
              <img
                src="https://img.freepik.com/free-photo/working-housing-project_1098-17511.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Construction site"
                className="w-full h-48 sm:h-72 lg:h-[500px] object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-row lg:flex-col gap-3 lg:pt-4 lg:min-w-[220px]">
            <Link to="/contact" className="flex-1 lg:flex-none bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/25 text-center text-sm sm:text-base">
              Start Your Project
            </Link>
            <Link to="/about" className="flex-1 lg:flex-none border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-green-500 hover:text-green-600 font-semibold px-8 py-4 rounded-full transition-all duration-200 text-center text-sm sm:text-base">
              Learn More
            </Link>
          </div>
        </div>

        {/* Feature Projects */}
        <div className="mt-16 py-12 px-4 sm:px-8 bg-gray-100 dark:bg-gray-900 rounded-2xl">
          <div className="text-center mb-10">
            <SectionLabel>Our Business</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Feature Project</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img src={img.url} alt="Construction" className="w-full h-52 object-cover" />
                <div className="p-5">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => (
              <div key={i} className="group overflow-hidden rounded-xl">
                <img src={s.img} alt={s.title} className="w-full h-56 object-cover rounded-xl" />
                <div className="flex justify-between items-center mt-3">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">{s.title}</h3>
                  <p className="flex items-center gap-1 text-gray-500 text-sm whitespace-nowrap">
                    <MdDateRange className="w-4 h-4" /> {s.date}
                  </p>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  A leading construction company specialising in residential, commercial, and infrastructure projects.
                </p>
                <Link to="/contact" className="mt-3 inline-flex items-center text-green-600 font-semibold group-hover:text-green-700 text-sm">
                  Read more
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default OurService;
