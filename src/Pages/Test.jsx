import {
  Search, MapPin, Calendar,
  DollarSign, Maximize2, Bath, BedDouble,
  SlidersHorizontal
} from 'lucide-react';
import { useState } from 'react';

const allProjects = [
  { title: "StoneCore Office Park", location: "Phnom Penh City", price: "$100k", area: "200 m²", baths: "2", beds: "2", date: "21 Jul 2026", image: "https://images.pexels.com/photos/12403323/pexels-photo-12403323.jpeg" },
  { title: "Riverside Villa", location: "Siem Reap", price: "$250k", area: "450 m²", baths: "3", beds: "4", date: "15 Jun 2026", image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg" },
  { title: "Central Apartment", location: "Phnom Penh City", price: "$85k", area: "120 m²", baths: "1", beds: "2", date: "10 May 2026", image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg" },
  { title: "Green Tower Suite", location: "Kampot", price: "$180k", area: "300 m²", baths: "2", beds: "3", date: "01 Apr 2026", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg" },
  { title: "Lotus Business Hub", location: "Phnom Penh City", price: "$320k", area: "600 m²", baths: "4", beds: "0", date: "18 Mar 2026", image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg" },
  { title: "Mekong Residence", location: "Battambang", price: "$140k", area: "220 m²", baths: "2", beds: "3", date: "05 Feb 2026", image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg" },
];

const StatItem = ({ icon: Icon, label }) => (
  <div className="flex flex-col items-center gap-1">
    <Icon size={15} className="text-gray-400" />
    <span className="text-[10px] text-gray-500">{label}</span>
  </div>
);

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
    <img src={project.image} alt={project.title} className="w-full h-40 object-cover" loading="lazy" />
    <div className="p-3">
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-medium text-gray-800 text-sm leading-tight">{project.title}</h3>
        <div className="flex items-center gap-1 text-gray-400 shrink-0 ml-2">
          <Calendar size={11} />
          <span className="text-[10px]">{project.date}</span>
        </div>
      </div>
      <div className="flex items-center gap-1 mb-3">
        <MapPin size={12} className="text-gray-400" />
        <span className="text-xs text-gray-500">{project.location}</span>
      </div>
      <div className="grid grid-cols-4 gap-1 border-t border-gray-100 pt-3 mb-3">
        <StatItem icon={DollarSign} label={project.price} />
        <StatItem icon={Maximize2} label={project.area} />
        <StatItem icon={Bath} label={`${project.baths} bath`} />
        <StatItem icon={BedDouble} label={`${project.beds} bed`} />
      </div>
      <button className="w-full bg-[#cbd5c0] hover:bg-[#b8c4a9] text-[#3d4c38] py-2 rounded-lg text-xs font-medium transition-colors">
        View more
      </button>
    </div>
  </div>
);

export default function ProjectListing() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeQuery, setActiveQuery] = useState('');
  const [typeFilters, setTypeFilters] = useState([]);
  const [priceFilters, setPriceFilters] = useState([]);

  // Run search on button click or Enter key
  const handleSearch = () => setActiveQuery(query.trim().toLowerCase());

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  const toggleType = (type) => {
    setTypeFilters(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const togglePrice = (range) => {
    setPriceFilters(prev =>
      prev.includes(range) ? prev.filter(r => r !== range) : [...prev, range]
    );
  };

  const priceInRange = (priceStr, range) => {
    const num = parseInt(priceStr.replace(/\D/g, ''));
    if (range === 'Under $100k') return num < 100;
    if (range === '$100k – $500k') return num >= 100 && num <= 500;
    if (range === '$500k+') return num > 500;
    return true;
  };

  const typeMap = {
    Apartment: (p) => p.title.toLowerCase().includes('apartment') || parseInt(p.beds) <= 2,
    Villa: (p) => p.title.toLowerCase().includes('villa'),
    Office: (p) => p.title.toLowerCase().includes('office') || p.title.toLowerCase().includes('hub') || p.title.toLowerCase().includes('business'),
  };

  const filtered = allProjects.filter(p => {
    const matchesSearch =
      !activeQuery ||
      p.title.toLowerCase().includes(activeQuery) ||
      p.location.toLowerCase().includes(activeQuery);

    const matchesType =
      typeFilters.length === 0 ||
      typeFilters.some(t => typeMap[t]?.(p));

    const matchesPrice =
      priceFilters.length === 0 ||
      priceFilters.some(r => priceInRange(p.price, r));

    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <div className="flex flex-col md:flex-row  min-h-screen p-4 md:p-8 gap-6">

      {/* Mobile filter toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="flex items-center gap-2 md:hidden border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 bg-white w-fit"
      >
        <SlidersHorizontal size={15} />
        Filters
      </button>

      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'flex' : 'hidden'} md:flex flex-row flex-wrap md:flex-col gap-4 md:gap-6 w-full md:w-56 md:shrink-0`}>

        {/* Search */}
        <div className="relative min-w-[200px] flex-1 md:flex-none md:w-full">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full py-2 pl-8 pr-20 rounded-full border border-gray-200 bg-white text-sm text-gray-700 outline-none focus:border-[#a3b18a]"
            placeholder="Search..."
          />
          <button
            onClick={handleSearch}
            className="absolute right-1 top-1 bottom-1 bg-[#a3b18a] hover:bg-[#8fa876] px-3 rounded-full text-white text-xs transition-colors"
          >
            Search
          </button>
        </div>

        {/* Types */}
        <div className="flex-1 min-w-[140px] md:min-w-0">
          <h4 className="font-medium text-sm mb-3">Types</h4>
          {['Apartment', 'Villa', 'Office'].map(type => (
            <label key={type} className="flex items-center gap-2 mb-2 text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                checked={typeFilters.includes(type)}
                onChange={() => toggleType(type)}
                className="accent-[#a3b18a] w-3.5 h-3.5"
              />
              {type}
            </label>
          ))}
        </div>

        {/* Price range */}
        <div className="flex-1 min-w-[140px] md:min-w-0">
          <h4 className="font-medium text-sm mb-3">Price range</h4>
          {['Under $100k', '$100k – $500k', '$500k+'].map(range => (
            <label key={range} className="flex items-center gap-2 mb-2 text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                checked={priceFilters.includes(range)}
                onChange={() => togglePrice(range)}
                className="accent-[#a3b18a] w-3.5 h-3.5"
              />
              {range}
            </label>
          ))}
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-w-0">
        <h2 className="text-xl font-semibold text-center mb-6">Popular projects</h2>

        {filtered.length === 0 ? (
          <div className="text-center text-gray-400 mt-20">
            <Search size={32} className="mx-auto mb-3 opacity-40" />
            <p className="text-sm">No projects found. Try a different search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        )}
      </main>

    </div>
  );
}