function OurService() {
  return (
    // it same it hero section in home page
       <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
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
              {/* <a href="#" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/30">
                Start Your Project
              </a>
              <a href="#" className="border border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-all duration-200 backdrop-blur-sm">
                View Portfolio
              </a> */}
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>
  )
}

export default OurService
