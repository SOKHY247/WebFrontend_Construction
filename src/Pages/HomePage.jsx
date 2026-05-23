import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Footer from "../Components/Footer";


const STATS = [
  { target: 10,  suffix: "+", label: "Years Experience" },
  { target: 500, suffix: "+", label: "Projects Completed" },
  { target: 200, suffix: "+", label: "Expert Team" },
  { target: 9.8, suffix: "/10", label: "Satisfaction Score" },
];

const ALTERNATING_SECTIONS = [
  {
    src: "https://infoera.md/storage/321/VanSchendel-Construction.jpg",
    label: "Our Service",
    title: "Residential Building",
    text: "From single-family homes to multi-unit complexes, we craft living spaces with precision and care — built to last generations.",
    reverse: false,
  },
  {
    src: "https://infoera.md/storage/321/VanSchendel-Construction.jpg",
    label: "Our Service",
    title: "Commercial Projects",
    text: "Office towers, retail centres, hospitality — our commercial division delivers on scale without sacrificing quality or schedule.",
    reverse: true,
  },
  {
    src: "https://infoera.md/storage/321/VanSchendel-Construction.jpg",
    label: "Our Service",
    title: "Infrastructure Works",
    text: "Roads, bridges, utilities, and public works — we're proud to shape the backbone of communities for decades to come.",
    reverse: false,
  },
  {
    src: "https://infoera.md/storage/321/VanSchendel-Construction.jpg",
    label: "Our Service",
    title: "Renovation & Restoration",
    text: "Breathing new life into existing structures with expert retrofitting, heritage restoration, and modern upgrades.",
    reverse: true,
  },
];

const SERVICE_CARDS = [
  { src: "https://infoera.md/storage/321/VanSchendel-Construction.jpg", label: "Residential", title: "Home Building", text: "Custom homes crafted to your vision — from foundations to finishes." },
  { src: "https://infoera.md/storage/321/VanSchendel-Construction.jpg", label: "Commercial", title: "Commercial Build", text: "Large-scale commercial construction delivered on time and on budget." },
  { src: "https://infoera.md/storage/321/VanSchendel-Construction.jpg", label: "Infrastructure", title: "Civil Works", text: "Public infrastructure built to meet the needs of growing communities." },
  { src: "https://infoera.md/storage/321/VanSchendel-Construction.jpg", label: "Renovation", title: "Restoration", text: "Expert renovation and restoration to modernise or preserve your space." },
];

const REVIEWS = [
  { name: "Sarah M.", role: "Home Owner", text: "BuildCo transformed our vision into reality. The craftsmanship is exceptional — every detail considered." },
  { name: "James R.", role: "Business Owner", text: "Our commercial fit-out was completed ahead of schedule. Professionalism at every step of the process." },
  { name: "Linda K.", role: "Property Developer", text: "We've partnered with BuildCo on five projects. Consistent quality, transparent communication, zero surprises." },
  { name: "Tom W.", role: "Happy Customer", text: "From the initial consultation to handover, the BuildCo team was outstanding. Highly recommended." },
];



function CountUp({ target, suffix = "+", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 60;
          const increment = target / steps;
          const intervalMs = duration / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Number.isInteger(target) ? Math.floor(current) : parseFloat(current.toFixed(1)));
            }
          }, intervalMs);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl xl:text-6xl font-black text-gray-900 dark:text-white tabular-nums">
      {count}{suffix}
    </span>
  );
}


function SectionLabel({ children }) {
  return (
    <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-bold mb-2">
      {children}
    </p>
  );
}



function HomePage() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-gray-950 transition-colors duration-300 overflow-x-hidden">
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 py-16 sm:py-20 lg:py-28">
        <div className="max-w-screen-2xl mx-auto">

          <SectionLabel>Who We Are</SectionLabel>

          {/* Heading + CTA row */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-20">

            {/* Left – copy + stats */}
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-black text-gray-900 dark:text-white leading-[1.05]">
                About Our Company
              </h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl text-base sm:text-lg">
                Founded in 2014, <span className="font-semibold text-gray-900 dark:text-white">BuildCo</span> is
                a leading construction company specialising in residential, commercial, and infrastructure
                projects. We bring together experienced engineers, architects, and project managers to deliver
                excellence at every scale.
              </p>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl text-base sm:text-lg">
                Our mission is to build structures that stand the test of time — combining modern technology
                with sustainable practices to shape the future of construction.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                {STATS.map((s) => (
                  <div key={s.label} className="flex flex-col gap-1 pt-4">
                    <CountUp target={s.target} suffix={s.suffix} />
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – CTA */}
            <div className="flex flex-row lg:flex-col gap-3 lg:pt-4 lg:min-w-[220px]">
              <Link
                to="/contact"
                className="flex-1 lg:flex-none bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-green-500/25 text-center text-sm sm:text-base whitespace-nowrap"
              >
                Start Your Project
              </Link>
              <Link
                to="/about"
                className="flex-1 lg:flex-none border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-green-500 hover:text-green-600 font-semibold px-8 py-4 rounded-full transition-all duration-200 text-center text-sm sm:text-base whitespace-nowrap"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

  
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 pb-20 lg:pb-28">
        <div className="max-w-screen-2xl mx-auto space-y-16 sm:space-y-24">
          {ALTERNATING_SECTIONS.map((section, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                section.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } gap-8 lg:gap-16 xl:gap-24 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 flex-shrink-0">
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={section.src}
                    alt={section.title}
                    className="w-full h-64 sm:h-80 lg:h-96 xl:h-[420px] object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 space-y-4">
                <SectionLabel>{section.label}</SectionLabel>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 dark:text-white leading-tight">
                  {section.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-base sm:text-lg max-w-lg">
                  {section.text}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all duration-200 text-sm sm:text-base"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    
      <div className="w-full">
        <div className="overflow-hidden">
          <img
            src="https://infoera.md/storage/321/VanSchendel-Construction.jpg"
            alt="Construction site"
            className="w-full h-56 sm:h-72 md:h-96 lg:h-[480px] xl:h-[560px] object-cover"
          />
        </div>
      </div>

   
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 py-16 sm:py-20 lg:py-28">
        <div className="max-w-screen-2xl mx-auto">

          <div className="text-center mb-12 sm:mb-16">
            <SectionLabel>Our Service</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white">
              Let Us Help You Build
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {SERVICE_CARDS.map((item, index) => (
              <div key={index} className="group flex flex-col gap-4">
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-52 sm:h-60 lg:h-64 xl:h-56 2xl:h-64 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                  />
                </div>
                <SectionLabel>{item.label}</SectionLabel>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white -mt-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full bg-gray-50 dark:bg-gray-900 py-16 sm:py-20 lg:py-28 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <div className="max-w-screen-2xl mx-auto">

          <div className="text-center mb-12 sm:mb-14">
            <SectionLabel>Our Customers</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white max-w-2xl mx-auto leading-tight">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {REVIEWS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-6 sm:p-7 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed flex-1">
                  "{item.text}"
                </p>

                <div className="flex items-center gap-3 pt-2 border-t border-gray-100 dark:border-gray-700">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="https://allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white text-sm">{item.name}</p>
                    <p className="text-xs text-gray-400">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <Footer />
    </div>
  );
}

export default HomePage;