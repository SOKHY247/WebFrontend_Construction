
import { Link } from "react-router-dom";

function SectionLabel({ children }) {
  return (
    <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-bold mb-2">
      {children}
    </p>
  );
}

  const images =[
    {
      id: 1,
      url : "https://img.magnific.com/free-photo/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus_1418-474.jpg?semt=ais_hybrid&w=740&q=80",
      desc : "'Experience the serenity of the peaks.",
      stye : 'card'
    },
    {
      id: 1,
      url : "https://img.magnific.com/free-photo/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus_1418-474.jpg?semt=ais_hybrid&w=740&q=80",
      desc : "'Experience the serenity of the peaks.",
      stye : 'card'
    },
    {
      id: 1,
      url : "https://img.magnific.com/free-photo/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus_1418-474.jpg?semt=ais_hybrid&w=740&q=80",
      desc : "'Experience the serenity of the peaks.",
      stye : 'card'
    }

  ];




function OurService() {
  return (
    // it same it hero section in home page
    <div >
       <section className="relative min-h-screen flex items-center overflow-hidden pt-20 ">
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
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              We Build What{" "}
              <span className="text-green-400">Lasts</span>{" "}
              for the Future
            </h1>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
              With decades of experience, we specialise in turning ideas into well-designed structures that stand the test of time.
            </p>
            <div className="flex flex-wrap gap-4">
      
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

       
        
      </section>
       {/* Our service section it have image with above text*/}
  <section className="max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 py-16 sm:py-20 lg:py-28">
        <div className="max-w-screen-2xl mx-auto">
          <SectionLabel>Who We Are</SectionLabel>
          {/* Heading + CTA row */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-20 max-w-full">
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

             {/* image full */}
              <div className="w-full pt-10 border-t border-gray-100 dark:border-gray-800">
                <img src="https://img.freepik.com/free-photo/working-housing-project_1098-17511.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Construction site"
                  className="w-[900px] h-[500px] object-cover rounded-xl"/>
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

              {/* 3 imaeg have text belove */}
      <div className="mt-15 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 py-16 sm:py-20 lg:py-35">
          <div className="max-w-screen-2xl mx-auto text-gray-300">
            <div className="text-center mb-12 sm:16">
            <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-bold mb-2">
               Our business
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12">
              Feature Project
            </h2>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* 1. Standard Card Design */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img src={images[0].url} alt="Construction" className="max-w-full h-100 object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800">{images[0].title}</h3>
                  <p className="text-gray-600 mt-2">{images[0].desc}</p>
                </div>
              </div>

              {/* 2. Full Gradient Overlay */}
              <div className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer">
                <img src={images[1].url} alt="Coast" className="w-full h-full min-h-[300px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">{images[1].title}</h3>
                  <p className="text-gray-200 text-sm">{images[1].desc}</p>
                </div>
              </div>

              {/* 3. Hover Slide-up Reveal */}
              <div className="relative overflow-hidden rounded-xl shadow-lg group bg-black">
                <img 
                  src={images[2].url} 
                  alt="Forest" 
                  className="w-full h-full min-h-[300px] object-cover group-hover:scale-110 group-hover:opacity-75 transition-all duration-500" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold text-gray-900">{images[2].title}</h3>
                  <p className="text-sm text-gray-700 font-medium">View Details →</p>
                </div>
              </div>

            </div>
          </div>
                </div>
      </section>
  </div>
  )
}

export default OurService
