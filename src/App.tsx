import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: 'Clients' | 'Personal' | 'Showreels';
  image: string;
  client?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Showreel 2025",
    category: "Showreels",
    image: "https://picsum.photos/seed/showreel/800/600",
  },
  {
    id: 2,
    title: "Google AI Mode",
    category: "Clients",
    client: "Google",
    image: "https://picsum.photos/seed/google/800/600",
  },
  {
    id: 3,
    title: "The Intelligence Age",
    category: "Clients",
    client: "OpenAI",
    image: "https://picsum.photos/seed/openai/800/600",
  },
  {
    id: 4,
    title: "SanDisk",
    category: "Clients",
    client: "SanDisk",
    image: "https://picsum.photos/seed/sandisk/800/600",
  },
  {
    id: 5,
    title: "Chromebook Plus",
    category: "Clients",
    client: "Google",
    image: "https://picsum.photos/seed/chromebook/800/600",
  },
  {
    id: 6,
    title: "Abstract Motion",
    category: "Personal",
    image: "https://picsum.photos/seed/abstract/800/600",
  },
  {
    id: 7,
    title: "Pegasus 40",
    category: "Clients",
    client: "Nike",
    image: "https://picsum.photos/seed/nike/800/600",
  },
  {
    id: 8,
    title: "Geometric Forms",
    category: "Personal",
    image: "https://picsum.photos/seed/forms/800/600",
  },
];

const CATEGORIES = ['All', 'Clients', 'Personal', 'Showreels'] as const;

export default function App() {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('All');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F7F7F7]/80 backdrop-blur-md">
        <div className="container-custom py-8 flex justify-between items-center">
          <a href="/" className="text-xl font-semibold tracking-tight">Richprjcts</a>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#projects" className="hover:opacity-50 transition-opacity">Projects</a>
            <a href="#about" className="hover:opacity-50 transition-opacity">About me</a>
            <a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a>
          </div>
        </div>
      </nav>

      <main className="container-custom">
        {/* Hero Section */}
        <section className="py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight max-w-4xl">
              Hello! I'm Riccardo<br />
              <span className="text-[#1A1A1A]/40">Freelance Motion Designer & Director</span>
            </h1>
          </motion.div>
        </section>

        {/* Filters */}
        <section id="projects" className="mb-12">
          <div className="flex flex-wrap gap-6 text-sm font-medium">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`transition-all duration-300 relative pb-1 ${
                  activeCategory === cat ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/40 hover:text-[#1A1A1A]'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#1A1A1A]"
                  />
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Project Grid */}
        <section className="pb-24">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-gray-200 rounded-sm">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="bg-white text-black p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <ArrowUpRight size={24} />
                      </motion.div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium tracking-tight">{project.title}</h3>
                      {project.client && (
                        <p className="text-sm text-[#1A1A1A]/40 mt-1">{project.client}</p>
                      )}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/30 mt-1">
                      {project.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 border-t border-[#1A1A1A]/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <h2 className="text-3xl font-medium tracking-tight">About me</h2>
            <div className="space-y-6 text-lg text-[#1A1A1A]/70 leading-relaxed">
              <p>
                I am a multidisciplinary motion designer and director based in Milan, focusing on creating high-end visual experiences for global brands.
              </p>
              <p>
                With over 8 years of experience in the industry, I've had the pleasure of working with clients like Google, Nike, and OpenAI, bringing stories to life through movement and design.
              </p>
              <div className="pt-6 flex gap-6">
                <a href="#" className="text-[#1A1A1A] hover:opacity-50 transition-opacity"><Instagram size={20} /></a>
                <a href="#" className="text-[#1A1A1A] hover:opacity-50 transition-opacity"><Linkedin size={20} /></a>
                <a href="#" className="text-[#1A1A1A] hover:opacity-50 transition-opacity"><Mail size={20} /></a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 border-t border-[#1A1A1A]/10 text-center">
          <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-[#1A1A1A]/40 mb-8">Get in touch</h2>
          <a 
            href="mailto:hello@richprjcts.com" 
            className="text-4xl md:text-6xl font-medium tracking-tight hover:opacity-50 transition-opacity break-all"
          >
            hello@richprjcts.com
          </a>
        </section>
      </main>

      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6 text-xs tracking-widest uppercase font-bold opacity-50">
          <p>© 2025 Riccardo. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-black text-white py-2 px-6 z-[100] flex justify-between items-center">
        <p className="text-[10px] md:text-xs opacity-80">
          By using this website, you agree to our use of cookies. We use cookies to provide you with a great experience and to help our website run effectively.
        </p>
        <button className="text-[10px] md:text-xs font-bold uppercase tracking-widest hover:opacity-50 transition-opacity ml-4">
          OK
        </button>
      </div>
    </div>
  );
}
