import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Instagram, Linkedin, ArrowUpRight, X, ArrowLeft } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: 'Clients' | 'Personal' | 'Showreels';
  image: string;
  client?: string;
  description?: string;
  role?: string;
  year?: string;
  gallery?: string[];
}

interface JournalPost {
  id: number;
  date: string;
  title: string;
  excerpt: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Showreel 2025",
    category: "Showreels",
    image: "https://picsum.photos/seed/showreel/1200/800",
    description: "A compilation of my best work from 2024 and early 2025, focusing on dynamic motion and high-end visual effects.",
    role: "Director / Motion Designer",
    year: "2025",
    gallery: ["https://picsum.photos/seed/sr1/1200/800", "https://picsum.photos/seed/sr2/1200/800"]
  },
  {
    id: 2,
    title: "Google AI Mode",
    category: "Clients",
    client: "Google",
    image: "https://picsum.photos/seed/google/1200/800",
    description: "Visualizing the future of AI through abstract motion and fluid interfaces for Google's latest AI initiatives.",
    role: "Lead Motion Designer",
    year: "2024",
    gallery: ["https://picsum.photos/seed/g1/1200/800", "https://picsum.photos/seed/g2/1200/800"]
  },
  {
    id: 3,
    title: "The Intelligence Age",
    category: "Clients",
    client: "OpenAI",
    image: "https://picsum.photos/seed/openai/1200/800",
    description: "A brand film exploring the intersection of human creativity and artificial intelligence.",
    role: "Art Director",
    year: "2024",
    gallery: ["https://picsum.photos/seed/oa1/1200/800"]
  },
  {
    id: 4,
    title: "SanDisk",
    category: "Clients",
    client: "SanDisk",
    image: "https://picsum.photos/seed/sandisk/1200/800",
    description: "Product launch visuals for the new Extreme Pro series, highlighting speed and durability.",
    role: "Motion Designer",
    year: "2023",
    gallery: ["https://picsum.photos/seed/sd1/1200/800"]
  },
  {
    id: 5,
    title: "Chromebook Plus",
    category: "Clients",
    client: "Google",
    image: "https://picsum.photos/seed/chromebook/1200/800",
    description: "Campaign visuals for the Chromebook Plus launch, focusing on productivity and ease of use.",
    role: "Motion Designer",
    year: "2023"
  },
  {
    id: 6,
    title: "Abstract Motion",
    category: "Personal",
    image: "https://picsum.photos/seed/abstract/1200/800",
    description: "An experimental exploration of physics-based motion and procedural textures.",
    role: "Director",
    year: "2024"
  },
  {
    id: 7,
    title: "Pegasus 40",
    category: "Clients",
    client: "Nike",
    image: "https://picsum.photos/seed/nike/1200/800",
    description: "Dynamic social media campaign for the 40th anniversary of the Nike Pegasus.",
    role: "Motion Designer",
    year: "2023"
  },
  {
    id: 8,
    title: "Geometric Forms",
    category: "Personal",
    image: "https://picsum.photos/seed/forms/1200/800",
    description: "A series of minimalist loops exploring basic shapes and complex lighting.",
    role: "Director",
    year: "2024"
  },
];

const JOURNAL: JournalPost[] = [
  {
    id: 1,
    date: "MAR 2025",
    title: "The Future of Motion in AI Interfaces",
    excerpt: "Exploring how motion design can make AI interactions feel more human and less transactional."
  },
  {
    id: 2,
    date: "FEB 2025",
    title: "Milan Design Week 2025 Preview",
    excerpt: "A look at the upcoming installations and what they mean for the digital design community."
  },
  {
    id: 3,
    date: "JAN 2025",
    title: "Why Minimalism Still Matters",
    excerpt: "In an age of visual noise, the power of a single moving line is more potent than ever."
  }
];

const CATEGORIES = ['All', 'Clients', 'Personal', 'Showreels'] as const;

export default function App() {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  // Prevent scroll when project is selected
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F7F7F7]/80 backdrop-blur-md">
        <div className="container-custom py-8 flex justify-between items-center">
          <a href="/" className="text-xl font-semibold tracking-tight">Richprjcts</a>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#projects" className="hover:opacity-50 transition-opacity">Projects</a>
            <a href="#journal" className="hover:opacity-50 transition-opacity">Journal</a>
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
                  onClick={() => setSelectedProject(project)}
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

        {/* Journal Section */}
        <section id="journal" className="py-24 border-t border-[#1A1A1A]/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <h2 className="text-3xl font-medium tracking-tight">Journal</h2>
            <div className="space-y-12">
              {JOURNAL.map((post) => (
                <motion.div 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer border-b border-[#1A1A1A]/5 pb-8 last:border-0"
                >
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/30">
                    {post.date}
                  </span>
                  <h3 className="text-2xl font-medium tracking-tight mt-2 group-hover:opacity-50 transition-opacity">
                    {post.title}
                  </h3>
                  <p className="text-[#1A1A1A]/60 mt-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
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

      {/* Project Detail Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#F7F7F7] overflow-y-auto"
          >
            <div className="container-custom py-12">
              <button 
                onClick={() => setSelectedProject(null)}
                className="flex items-center gap-2 text-sm font-medium hover:opacity-50 transition-opacity mb-12"
              >
                <ArrowLeft size={16} />
                Back to projects
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8">
                  <motion.img
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full aspect-[16/9] object-cover rounded-sm mb-8"
                    referrerPolicy="no-referrer"
                  />
                  {selectedProject.gallery?.map((img, idx) => (
                    <img 
                      key={idx}
                      src={img}
                      className="w-full aspect-[16/9] object-cover rounded-sm mb-8"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>

                <div className="lg:col-span-4 lg:sticky lg:top-12 h-fit">
                  <h2 className="text-4xl font-medium tracking-tight mb-4">{selectedProject.title}</h2>
                  {selectedProject.client && (
                    <p className="text-xl text-[#1A1A1A]/40 mb-8">{selectedProject.client}</p>
                  )}
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/30 mb-2">Description</h4>
                      <p className="text-[#1A1A1A]/70 leading-relaxed">
                        {selectedProject.description || "Project details coming soon."}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/30 mb-2">Role</h4>
                        <p className="text-sm font-medium">{selectedProject.role || "Motion Designer"}</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/30 mb-2">Year</h4>
                        <p className="text-sm font-medium">{selectedProject.year || "2024"}</p>
                      </div>
                    </div>

                    <button className="w-full py-4 bg-[#1A1A1A] text-white rounded-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                      Launch Project <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Banner */}
      <AnimatePresence>
        {showCookieBanner && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 bg-black text-white py-2 px-6 z-[100] flex justify-between items-center"
          >
            <p className="text-[10px] md:text-xs opacity-80">
              By using this website, you agree to our use of cookies. We use cookies to provide you with a great experience and to help our website run effectively.
            </p>
            <button 
              onClick={() => setShowCookieBanner(false)}
              className="text-[10px] md:text-xs font-bold uppercase tracking-widest hover:opacity-50 transition-opacity ml-4"
            >
              OK
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
