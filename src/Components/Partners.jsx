import logo1 from "../assets/logo_1.jpg";
import logo2 from "../assets/logon_2.jpg";

const PARTNERS = [
  { logo: logo1 },
  { logo: logo2 },
  { logo: logo1 },
  { logo: logo2 },
  { logo: logo1 },
  { logo: logo2 },
  { logo: logo1 },
  { logo: logo2 },
];

export default function Partners() {
  return (
    <section className="py-12 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-20xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs uppercase tracking-widest text-green-600 font-semibold mb-2">Our Network</p>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white uppercase">Cooperation Partners</h2>
      </div>

      <div className="overflow-hidden w-full">
        <div className="flex w-max animate-scroll-left">
          {[...PARTNERS, ...PARTNERS].map((p, i) => (
            <div
              key={i}
              className="mx-6 flex items-center justify-center w-full h-37 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-green-500 transition-all duration-300"
            >
              <img
                src={p.logo}
                alt="partner"
                className="h-60 w-40 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
