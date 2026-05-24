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
       {/* Our service section it have image with above text*/}
       <div className="flex-1 space-y-6 px-4 sm:px-8 py-10">
  <div>
    <span className="text-xs uppercase tracking-[0.2em] text-green-600 font-bold">
      Our Service
    </span>
  </div>

  <h2 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-black text-gray-900 dark:text-white leading-[1.05]">
    How to build dreams that come true in the future
  </h2>

  <div className="w-full space-y-6">
    <div className="overflow-hidden rounded-xl w-full">
      <img
        src="https://infoera.md/storage/321/VanSchendel-Construction.jpg"
        alt="Construction site"
        className="w-full h-56 sm:h-72 md:h-96 lg:h-[480px] xl:h-[560px] 2xl:h-[640px] object-cover object-center"
      />
    </div>

    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pt-2">
      <div className="flex flex-col gap-3 max-w-xl">
        <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold">
          Our Service
        </p>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          With decades of experience, we specialise in turning ideas into
          well-designed structures that stand the test of time.
        </p>
      </div>

      <div className="flex sm:flex-shrink-0">
        <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/30">
          Start your project
        </button>
      </div>
    </div>
  </div>
</div>
  </div>
  )
}

export default OurService
