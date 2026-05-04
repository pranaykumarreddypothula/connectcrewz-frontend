import { useState, useEffect, FormEvent } from 'react';
import Logo from './components/Logo';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Lock, 
  Phone, 
  PlusCircle, 
  LayoutDashboard, 
  LogOut, 
  Wrench, 
  ClipboardList,
  CheckCircle2,
  Clock,
  AlertCircle,
  Database,
  Terminal,
  Activity,
  Cpu,
  Sun,
  Moon,
  Globe,
  Star,
  Mail,
  Shield,
  ShieldCheck,
  Zap,
  MapPin,
  RefreshCw,
  Info,
  HelpCircle,
  Briefcase,
  Users,
  Compass,
  ChevronDown,
  Power,
  Settings,
  Rocket,
  Instagram,
  Twitter,
  Facebook
} from 'lucide-react';

// API Configuration
const API_BASE = '/api';

// --- Content Components ---

// --- Utility Components ---

const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-slate-800/10 dark:bg-slate-800/50 rounded-2xl ${className}`}></div>
);

const EmptyState = ({ 
  icon: Icon, 
  title, 
  desc, 
  actionLabel, 
  onAction,
  theme 
}: { 
  icon: any, 
  title: string, 
  desc: string, 
  actionLabel?: string, 
  onAction?: () => void,
  theme: 'dark' | 'light'
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`flex flex-col items-center justify-center p-12 text-center rounded-[3rem] border border-dashed transition-all duration-500 ${theme === 'dark' ? 'bg-[#0d0d0f] border-white/5' : 'bg-slate-50 border-slate-200'}`}
  >
    <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-6 ${theme === 'dark' ? 'bg-white/5 text-slate-500' : 'bg-white text-slate-300'}`}>
      <Icon size={40} />
    </div>
    <h3 className={`text-xl font-bold mb-2 uppercase tracking-tight font-mono ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
    <p className="text-sm text-slate-500 max-w-xs mb-8">{desc}</p>
    {actionLabel && (
      <button
        onClick={onAction}
        className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg"
      >
        {actionLabel}
      </button>
    )}
  </motion.div>
);

const HomeView = ({ theme, onNavigate, user, onBookService }: { theme: 'dark' | 'light', onNavigate: (tab: any) => void, user: any, onBookService: (service: string) => void }) => (
  <div className="flex-1 w-full flex flex-col">
    {/* Hero Section */}
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative overflow-hidden pt-16 md:pt-28 pb-20 md:pb-40 px-5 md:px-12 flex flex-col items-center text-center"
    >
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[800px] pointer-events-none opacity-20">
        <div className={`absolute inset-0 blur-[80px] md:blur-[150px] rounded-full mix-blend-multiply transition-all duration-1000 ${theme === 'dark' ? 'bg-purple-900/40' : 'bg-purple-200'}`}></div>
        <div className={`absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] blur-[60px] md:blur-[120px] rounded-full mix-blend-screen animate-pulse ${theme === 'dark' ? 'bg-indigo-900/30' : 'bg-indigo-100'}`}></div>
      </div>

      <div className="relative z-10 max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex justify-center mb-8">
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] border ${theme === 'dark' ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-100 text-purple-600'}`}>
              <Rocket size={12} className="animate-bounce" />
              Better Service for You
            </span>
          </div>
          <h2 className={`text-5xl md:text-8xl font-serif italic mb-8 leading-[1.1] ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Service</span> <br className="hidden md:block" /> 
            <span className="md:pl-20">Network Near You</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-xl leading-relaxed mb-12 font-medium px-4 md:px-0">
            Book professional plumbers, electricians, cleaners, and more in seconds. Standardized quality, verified pros, instant results.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col items-center gap-5 w-full"
        >
          {user?.role === 'WORKER' ? (
            <div className="flex flex-col items-center gap-6 w-full px-5">
              <motion.button 
                onClick={() => onNavigate('dashboard')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-12 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] shadow-[0_20px_50px_rgba(79,70,229,0.3)] cursor-pointer flex items-center justify-center gap-3 group"
              >
                <Briefcase size={18} className="group-hover:rotate-12 transition-transform" />
                Go to My Jobs
              </motion.button>
              <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-500">
                <span className="flex items-center gap-2"><Shield size={12} className="text-emerald-500" /> Verified Pro</span>
                <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-800"></span>
                <span className="flex items-center gap-2"><Activity size={12} className="text-purple-500" /> Highly Rated Pro</span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-10 w-full px-5">
              <div className="flex flex-col md:flex-row justify-center gap-5 w-full">
                <motion.button 
                  onClick={() => onNavigate('dashboard')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto px-12 py-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl font-black text-xs md:text-base uppercase tracking-[0.2em] md:tracking-[0.3em] shadow-[0_20px_50px_rgba(147,51,234,0.3)] cursor-pointer flex items-center justify-center gap-3 group"
                >
                  <Rocket size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Book Now
                </motion.button>
                <motion.button 
                  onClick={() => onNavigate('services')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full md:w-auto px-12 py-6 rounded-2xl font-black text-xs md:text-base uppercase tracking-[0.2em] md:tracking-[0.3em] border transition-all cursor-pointer flex items-center justify-center gap-3 shadow-2xl ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white shadow-black/50' : 'bg-white border-slate-200 text-slate-800 shadow-slate-200'}`}
                >
                  <Compass size={20} />
                  Explore
                </motion.button>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 pt-6 opacity-60 hover:opacity-100 transition-opacity">
                {[
                  { icon: <Shield size={14} />, label: "Safe and Secure" },
                  { icon: <Lock size={14} />, label: "Private Account" },
                  { icon: <Star size={14} />, label: "Top Rated Experts" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-white/5 text-purple-400' : 'bg-purple-50 text-purple-600'}`}>
                      {item.icon}
                    </div>
                    <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest ${theme === 'dark' ? 'text-slate-400' : 'text-slate-700'}`}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>

    {/* Popular Services Grid */}
    <section className={`py-20 md:py-32 px-5 md:px-12 transition-colors duration-500 ${theme === 'dark' ? 'bg-[#050506]' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Available On-Demand</span>
            <h3 className={`text-4xl md:text-5xl font-serif italic mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              What can we help you with <span className="text-slate-500">today?</span>
            </h3>
            <p className="text-slate-500 text-sm md:text-base font-medium">Select from our most popular categories to find a verified expert instantly.</p>
          </div>
          <button 
            onClick={() => onNavigate('services')}
            className={`w-full md:w-auto px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all flex items-center justify-center gap-2 group ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50 shadow-xl shadow-slate-200/40'}`}
          >
            View All Services
            <ChevronDown size={14} className="-rotate-90 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Plumbing", icon: <Wrench size={32} />, color: "border-blue-500/20" },
            { title: "Electrical", icon: <Activity size={32} />, color: "border-amber-500/20" },
            { title: "Cleaning", icon: <Sun size={32} />, color: "border-rose-500/20" },
            { title: "Painting", icon: <Globe size={32} />, color: "border-emerald-500/20" }
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: theme === 'dark' ? "0 20px 40px rgba(0,0,0,0.5)" : "0 20px 40px rgba(0,0,0,0.05)" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => onBookService(service.title)}
              className={`group p-10 rounded-[3rem] border cursor-pointer transition-all duration-500 relative overflow-hidden ${theme === 'dark' ? 'bg-[#0a0a0b] border-white/5 hover:border-white/20' : 'bg-white border-slate-200 hover:shadow-2xl hover:shadow-slate-200'}`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 blur-[50px] opacity-10 group-hover:opacity-30 transition-opacity bg-gradient-to-br from-indigo-500 to-purple-500`}></div>
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ${theme === 'dark' ? 'bg-[#1a1a1c] text-white' : 'bg-slate-50 text-slate-900 group-hover:bg-slate-900 group-hover:text-white'}`}>
                {service.icon}
              </div>
              <h4 className={`text-xl font-bold mb-2 uppercase tracking-tight font-mono ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{service.title}</h4>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black group-hover:text-purple-500 transition-colors flex items-center gap-2">
                Book Expert <Rocket size={10} />
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className={`py-20 md:py-40 px-5 md:px-12 border-y transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0a0a0b] border-white/5' : 'bg-white border-slate-100 shadow-inner'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 md:mb-24">
          <span className="text-purple-500 text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] mb-4 block">The ConnectCrewz Standard</span>
          <h3 className={`text-4xl md:text-5xl font-serif italic mb-4 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Professionalism in <span className="text-slate-500 md:inline">Every Layer</span></h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {[
            { icon: <Clock className="text-purple-500" size={32} />, title: "Quick Matching", desc: "No long waits. Our fast matching system connects you with the nearest verified worker in minutes." },
            { icon: <Shield className="text-indigo-500" size={32} />, title: "Verified Experts", desc: "Every professional on our network undergoes strict background checks and skill testing." },
            { icon: <Activity className="text-emerald-500" size={32} />, title: "Live Updates", desc: "Track your booking in real-time and chat directly with your assigned professional." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(147,51,234,0.2)] ${theme === 'dark' ? 'bg-[#1a1a1c]' : 'bg-purple-50'}`}>
                {feature.icon}
              </div>
              <h4 className={`text-lg font-bold mb-6 uppercase tracking-tight font-mono ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{feature.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium max-w-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works Section */}
    <section className={`py-20 md:py-32 px-5 md:px-12 transition-colors duration-500 ${theme === 'dark' ? 'bg-[#050506]' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
          <div className="relative text-center md:text-left">
            <div className={`absolute -top-10 -left-10 w-40 h-40 blur-[80px] rounded-full hidden md:block ${theme === 'dark' ? 'bg-purple-900/20' : 'bg-purple-100'}`}></div>
            <span className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">How it Works</span>
            <h3 className={`text-4xl md:text-6xl font-serif italic mb-12 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Book a Pro in <br /><span className="text-slate-500">3 simple steps</span>
            </h3>
            
            <div className="space-y-10 md:space-y-12">
              {[
                { step: "01", title: "Tell us what you need", desc: "Pick a service, describe the job, and share your location in a few taps." },
                { step: "02", title: "Wait for a match", desc: "We find and connect you with the best professional available near you." },
                { step: "03", title: "Get the job done", desc: "Your professional arrives with the right tools. Confirm when the work is finished and rate your experience." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 group">
                  <span className={`text-4xl md:text-4xl font-serif italic text-transparent bg-clip-text bg-gradient-to-b from-purple-500 to-indigo-500 transition-opacity duration-500 group-hover:opacity-100 opacity-40`}>
                    {item.step}
                  </span>
                  <div className="flex-1">
                    <h4 className={`text-lg font-bold mb-2 uppercase tracking-tight font-mono ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium max-w-md mx-auto md:mx-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
            <motion.div 
              initial={{ rotate: -5, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              className={`p-2 rounded-[3.5rem] border shadow-3xl ${theme === 'dark' ? 'bg-[#0f0f12] border-white/10 shadow-black' : 'bg-white border-slate-200'}`}
            >
              <div className={`w-[240px] sm:w-[320px] aspect-[9/18.5] rounded-[2.8rem] overflow-hidden relative ${theme === 'dark' ? 'bg-black' : 'bg-slate-100'}`}>
                {/* Mock UI in "phone" */}
                <div className="absolute inset-0 p-6 flex flex-col">
                  <div className="flex justify-between items-center mb-8">
                    <Logo className="w-8 h-8" />
                    <div className="w-8 h-8 rounded-full bg-slate-800 animate-pulse"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-10 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-xl w-3/4"></div>
                    <div className="h-4 bg-slate-800 rounded w-1/2"></div>
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      {[1,2,3,4].map(x => <div key={x} className="h-24 bg-slate-800/50 rounded-2xl"></div>)}
                    </div>
                    <div className="h-14 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl w-full mt-auto"></div>
                  </div>
                </div>
                {/* Screen reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className={`py-20 md:py-32 px-5 md:px-12 transition-colors duration-500 ${theme === 'dark' ? 'bg-[#0a0a0b]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-indigo-500 text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] mb-4 block">Crowd Consensus</span>
          <h3 className={`text-4xl md:text-5xl font-serif italic mb-4 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Trusted by thousands of <span className="text-slate-500">residents</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Sarah Jenkins", role: "Homeowner", text: "The response time was incredible. Within 15 minutes of booking an electrician, he was at my door. Professional and high quality work.", rating: 5 },
            { name: "Michael Chen", role: "Property Manager", text: "ConnectCrewz has revolutionized how I handle maintenance. The verified worker network gives me peace of mind for every job.", rating: 5 },
            { name: "Elena Rodriguez", role: "Homeowner", text: "Finally an app that works! Easy booking, transparent pricing and the cleaning crew did an absolutely meticulous job.", rating: 5 }
          ].map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 md:p-10 rounded-[2.5rem] border flex flex-col ${theme === 'dark' ? 'bg-[#0e0e11] border-white/5' : 'bg-slate-50 border-slate-200'}`}
            >
              <div className="flex gap-1 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={14} className="fill-amber-500 text-amber-500" />)}
              </div>
              <p className={`text-sm italic leading-relaxed mb-10 flex-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-white flex-shrink-0 ${theme === 'dark' ? 'bg-purple-600' : 'bg-slate-900'}`}>
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className={`text-sm font-black uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{testimonial.name}</h4>
                  <p className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-widest font-black">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Worker Section */}
    <section className="py-20 md:py-32 px-5 md:px-12 relative overflow-hidden">
      <div className={`absolute inset-0 pointer-events-none transition-colors duration-500 ${theme === 'dark' ? 'bg-gradient-to-b from-[#050506] to-indigo-950/20' : 'bg-indigo-50/50'}`}></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`p-8 md:p-20 rounded-[3rem] md:rounded-[4rem] border shadow-3xl text-center flex flex-col items-center overflow-hidden relative ${theme === 'dark' ? 'bg-[#0e0e11] border-white/10 shadow-black' : 'bg-white border-slate-200 shadow-slate-200'}`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] -translate-y-1/2 translate-x-1/2 hidden md:block"></div>
          
          <span className="text-indigo-500 text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] mb-8 block">Expand Your Presence</span>
          <h2 className={`text-4xl md:text-7xl font-serif italic mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Join our network as a <br className="hidden md:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Professional Worker</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-xl font-medium mb-12 px-2 md:px-0">
            Build your business with ConnectCrewz. We provide the leads, the platform, and the tools. You provide the expertise.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full mb-12 max-w-4xl">
            {[
              { title: "Weekly Payouts", desc: "Reliable revenue streams with transparent tracking." },
              { title: "Flexible Flow", desc: "Choose your own hours and service specialization." },
              { title: "Smart Matching", desc: "Get jobs that match your skills within your radius." }
            ].map((item, i) => (
              <div key={i} className={`p-6 md:p-8 rounded-3xl border ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                <h4 className={`text-[10px] md:text-xs font-black uppercase tracking-widest mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                <p className="text-[10px] md:text-[11px] text-slate-500 leading-relaxed max-w-[200px] mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>

          <button 
            onClick={() => onNavigate('dashboard')}
            className="w-full md:w-auto px-12 py-6 bg-slate-900 text-white rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-2xl flex items-center justify-center gap-3 group border border-white/10"
          >
            Become a Partner <Zap size={18} className="fill-amber-500 text-amber-500 group-hover:scale-125 transition-transform" />
          </button>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-24 md:py-32 px-5 md:px-12 text-center relative overflow-hidden bg-gradient-to-b from-transparent to-purple-600/5">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className={`text-4xl md:text-6xl font-serif italic mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Ready to get <span className="text-purple-500 md:inline">everything</span> <br className="hidden md:block" /> sorted at home?
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-lg mb-12 font-medium px-4 md:px-0">
            Join thousands of happy homeowners who trust ConnectCrewz for their everyday service needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5 w-full md:w-auto px-5 md:px-0">
            <motion.button 
              onClick={() => onNavigate('dashboard')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-12 py-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] shadow-2xl shadow-purple-600/40 cursor-pointer text-center"
            >
              Book Your First Service
            </motion.button>
            <motion.button 
              onClick={() => onNavigate('help')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full md:w-auto px-12 py-6 rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] border transition-all shadow-xl text-center ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white shadow-black/40' : 'bg-white border-slate-200 text-slate-800 shadow-slate-200/40'}`}
            >
              Contact Support
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

const AboutView = ({ theme }: { theme: 'dark' | 'light' }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="flex-1 p-5 md:p-8 lg:p-16 max-w-6xl mx-auto w-full"
  >
    <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-3xl font-serif italic mb-6">Our Story & Goal</h2>
        <div className="space-y-6 text-slate-500 text-sm md:text-base leading-relaxed font-mono">
          <p>
            ConnectCrewz was founded on the principle that professional services should be as accessible and responsive as digital infrastructure.
          </p>
          <p>
            Our platform is built to make finding and booking services simple and stress-free, creating a seamless way for you to connect with local experts.
          </p>
          <div className={`p-6 rounded-xl border-l-4 border-emerald-500 text-center md:text-left ${theme === 'dark' ? 'bg-[#1f2937]/30' : 'bg-slate-100'}`}>
            "To build the world's most reliable and friendly service network."
          </div>
        </div>
      </div>
      <div className={`aspect-square w-full max-w-md mx-auto rounded-[2.5rem] md:rounded-[3rem] overflow-hidden relative border ${theme === 'dark' ? 'border-white/5 bg-[#0e0e11]' : 'border-slate-200 bg-white'}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-purple-600/20 blur-3xl absolute -top-4 -left-4"></div>
            <Logo className="w-32 md:w-48 h-32 md:h-48 relative z-10" />
          </div>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className={`p-4 md:p-6 rounded-2xl backdrop-blur-md border ${theme === 'dark' ? 'bg-black/40 border-white/10' : 'bg-white/60 border-slate-200'}`}>
            <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-emerald-500 mb-2">Securely Connected</p>
            <p className="text-[10px] md:text-xs text-slate-400 font-mono">ConnectCrewz Verified Network • Since 2024</p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const ServicesView = ({ theme, onBookService }: { theme: 'dark' | 'light', onBookService: (service: string) => void }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex-1 p-5 md:p-8 lg:p-16 max-w-6xl mx-auto w-full text-center"
  >
    <div className="relative mb-16 md:mb-20">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 md:w-96 h-64 md:h-96 bg-amber-500/10 blur-[100px] pointer-events-none rounded-full"></div>
      <h2 className="text-4xl md:text-5xl font-serif italic mb-4 relative z-10">Our <span className="text-amber-500">Services</span></h2>
      <p className="text-slate-500 max-w-2xl mx-auto text-[10px] md:text-sm uppercase tracking-[0.2em] font-mono leading-relaxed px-4">
        Select a category below to book your service. Our verified professionals are ready to help.
      </p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 md:mb-32">
      {[
        { title: "Plumbing", icon: <Wrench size={32} />, desc: "Expert pipe maintenance, leak detection, and precision system installations." },
        { title: "Electrical", icon: <Activity size={32} />, desc: "Certified diagnostics, circuit restoration, and high-voltage safety checks." },
        { title: "Painting", icon: <Globe size={32} />, desc: "Precision interior/exterior coating and aesthetic surface preservation." },
        { title: "Cleaning", icon: <Sun size={32} />, desc: "Premium sanitization and environmental maintenance for workspace or home." },
        { title: "Carpentry", icon: <Briefcase size={32} />, desc: "Custom woodwork, structural framing, and specialized furniture restoration." },
        { title: "Appliance Repair", icon: <Cpu size={32} />, desc: "Technical diagnostics and hardware maintenance for essential home systems." },
        { title: "Pest Control", icon: <Shield size={32} />, desc: "Advanced protection methods and environmental pest management." },
        { title: "Installation", icon: <PlusCircle size={32} />, desc: "Professional hardware mounting and specialized equipment setup." }
      ].map((service, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -12, scale: 1.02 }}
          className={`group relative p-8 rounded-[2.5rem] border transition-all duration-500 ${theme === 'dark' ? 'bg-[#0e0e11] border-white/5 hover:border-amber-500/30' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-amber-500/10'}`}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[40px] pointer-events-none group-hover:bg-amber-500/10 transition-all"></div>
          
          <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-8 mx-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${
            theme === 'dark' 
              ? 'bg-[#1f2937] text-amber-400 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]' 
              : 'bg-amber-50 text-amber-600 shadow-lg shadow-amber-500/5'
          }`}>
            {service.icon}
          </div>
          
          <h3 className={`text-xl font-bold mb-4 uppercase tracking-tight font-mono ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{service.title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-8 min-h-[4.5rem] px-2">{service.desc}</p>
          
          <button 
            onClick={() => onBookService(service.title)}
            className={`w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all relative overflow-hidden ${
              theme === 'dark' 
                ? 'bg-[#1f2937] hover:bg-amber-500 hover:text-white border border-[#374151]' 
                : 'bg-slate-50 hover:bg-slate-900 hover:text-white border border-slate-200 text-slate-800'
            }`}
          >
            <span className="relative z-10">Book Now</span>
          </button>
        </motion.div>
      ))}
    </div>

    {/* Trust Guarantee Section */}
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`p-10 md:p-16 rounded-[3rem] border transition-all duration-500 relative overflow-hidden ${theme === 'dark' ? 'bg-[#0e0e11] border-white/5' : 'bg-white border-slate-200 shadow-2xl'}`}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500/0 via-amber-500/50 to-amber-500/0"></div>
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        <div className="text-left lg:max-w-md">
          <div className="flex items-center gap-2 text-amber-500 mb-4 uppercase tracking-[0.3em] font-black text-[10px]">
            <Shield size={16} />
            ConnectCrewz Promise
          </div>
          <h2 className={`text-3xl md:text-4xl font-serif italic mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
        Quality Service. <br />
        <span className="text-slate-500">Every Time.</span>
      </h2>
      <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
        Every booking made through ConnectCrewz is backed by our satisfaction guarantee. We only send experts who pass our quality checks and maintain high performance.
      </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full lg:w-auto">
          {[
            { icon: <ShieldCheck className="text-emerald-500" />, title: "Verified Pros", desc: "100% Background Checked" },
            { icon: <Zap className="text-amber-500" />, title: "Quick Response", desc: "Fast Professional Matching" },
            { icon: <CheckCircle2 className="text-indigo-500" />, title: "Quality Work", desc: "Rated by Customers" }
          ].map((item, idx) => (
            <div key={idx} className={`p-6 rounded-[2rem] border transition-all hover:scale-105 ${theme === 'dark' ? 'bg-white/5 border-white/5 hover:border-white/10' : 'bg-slate-50 border-slate-100'}`}>
              <div className="mb-4">{item.icon}</div>
              <h4 className={`text-[10px] font-black uppercase tracking-widest mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
              <p className="text-[9px] text-slate-500 uppercase tracking-widest font-mono">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const HelpView = ({ theme }: { theme: 'dark' | 'light' }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', category: 'General Help', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormState({ name: '', email: '', category: 'General Help', message: '' });
        // Success message reset
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      }
    } catch (err) {
      console.error('Failed to send support request:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex-1 p-6 md:p-8 lg:p-16 max-w-6xl mx-auto w-full"
    >
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-serif italic mb-4">Help & Support</h2>
        <p className="text-slate-500 text-xs md:text-sm max-w-xl mx-auto leading-relaxed px-4">
          Need help with your booking? We're here to assist you with any questions or issues you might have.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
        {/* Left Column: FAQ & Email */}
        <div className="space-y-8 md:space-y-12">
          <section>
            <h3 className="text-lg md:text-xl font-bold mb-6 md:mb-8 uppercase tracking-tighter flex items-center gap-2">
              <HelpCircle className="text-rose-400" size={20} md:size={24} />
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {[
                { q: "How to book a service?", a: "Simply log in to your account, go to the Dashboard, choose a service category, describe your needs, and click 'Book Service'. A professional will contact you soon." },
                { q: "How does payment work?", a: "We support various payment methods. You can pay securely through our platform once the service is completed to your satisfaction." },
                { q: "Can I cancel a booking?", a: "Yes, you can cancel your booking from your dashboard before it is accepted by a service provider. For late cancellations, please contact support." },
                { q: "How can I track my request?", a: "You can see the live status of all your service requests in the 'My Requests' section of your Dashboard." }
              ].map((item, i) => (
                <details key={i} className={`p-4 md:p-5 rounded-2xl border transition-all ${theme === 'dark' ? 'bg-[#0e0e11] border-white/5' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <summary className="text-[13px] md:text-sm font-bold cursor-pointer list-none flex items-center justify-between hover:text-rose-400 transition-colors">
                    {item.q}
                    <PlusCircle size={14} md:size={16} className="opacity-50" />
                  </summary>
                  <p className="mt-3 md:mt-4 text-[11px] md:text-xs text-slate-500 leading-relaxed pl-3 md:pl-4 border-l-2 border-rose-500/30">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className={`p-6 md:p-8 rounded-3xl border ${theme === 'dark' ? 'bg-rose-500/5 border-rose-500/10' : 'bg-rose-50 border-rose-200'}`}>
            <div className="flex items-start gap-4">
              <div className={`p-2.5 md:p-3 rounded-xl ${theme === 'dark' ? 'bg-rose-500/20 text-rose-400' : 'bg-white text-rose-50 text-rose-500 border border-rose-200'}`}>
                <Mail size={20} md:size={24} />
              </div>
              <div className="min-w-0">
                <h4 className="text-base md:text-lg font-bold mb-1 uppercase tracking-tight">Direct Email Support</h4>
                <a 
                  href="mailto:pranaykumarreddypothula.devwork@gmail.com" 
                  className="text-[11px] md:text-sm text-rose-500 font-mono hover:underline block mb-2 break-words"
                >
                  pranaykumarreddypothula.devwork@gmail.com
                </a>
                <p className="text-[8px] md:text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                  ● We usually respond within 24 hours
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Contact Form */}
        <div className={`p-6 md:p-8 rounded-3xl border h-fit lg:sticky lg:top-24 ${theme === 'dark' ? 'bg-[#0e0e11] border-white/5' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50'}`}>
          <h3 className="text-lg md:text-xl font-bold mb-6 uppercase tracking-tighter flex items-center gap-2">
            <Mail className="text-purple-400" size={20} md:size={24} />
            Send us a Message
          </h3>
          
          {formSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-8 md:p-10 rounded-2xl border text-center ${theme === 'dark' ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-50 border-emerald-200'}`}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg shadow-emerald-500/30">
                <CheckCircle2 size={24} md:size={32} />
              </div>
              <h4 className="text-lg md:text-xl font-bold mb-2">Message Sent!</h4>
              <p className="text-xs md:text-sm text-slate-500">Your request has been sent to our team. We'll get back to you shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div>
                <label className="block text-[9px] md:text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1.5 ml-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className={`w-full px-4 py-2.5 md:py-3 rounded-xl outline-none transition-all text-xs md:text-sm ${theme === 'dark' ? 'bg-[#0d0d0f] border-white/5 focus:border-purple-500/50' : 'bg-slate-50 border-slate-200 focus:border-purple-400'}`}
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-[9px] md:text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1.5 ml-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  className={`w-full px-4 py-2.5 md:py-3 rounded-xl outline-none transition-all text-xs md:text-sm ${theme === 'dark' ? 'bg-[#0d0d0f] border-white/5 focus:border-purple-500/50' : 'bg-slate-50 border-slate-200 focus:border-purple-400'}`}
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-[9px] md:text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1.5 ml-1">Category</label>
                <select 
                  required
                  className={`w-full px-4 py-2.5 md:py-3 rounded-xl outline-none transition-all text-xs md:text-sm appearance-none cursor-pointer ${theme === 'dark' ? 'bg-[#0d0d0f] border-white/5 focus:border-purple-500/50 text-slate-300' : 'bg-slate-50 border-slate-200 focus:border-purple-400 text-slate-700'}`}
                  value={formState.category}
                  onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                >
                  <option value="Booking Issue">Booking Issue</option>
                  <option value="Payment Issue">Payment Issue</option>
                  <option value="General Help">General Help</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-[9px] md:text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1.5 ml-1">How can we help?</label>
                <textarea 
                  rows={3} md:rows={4} 
                  required
                  placeholder="Describe your issue or question..."
                  className={`w-full px-4 py-2.5 md:py-3 rounded-xl outline-none transition-all text-xs md:text-sm resize-none ${theme === 'dark' ? 'bg-[#0d0d0f] border-white/5 focus:border-purple-500/50' : 'bg-slate-50 border-slate-200 focus:border-purple-400'}`}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-600 hover:to-indigo-600 text-white font-black py-3.5 md:py-4 rounded-xl transition-all shadow-lg active:scale-[0.98] uppercase tracking-widest text-[10px] md:text-xs disabled:opacity-50"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Request'}
              </button>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [formData, setFormData] = useState({ name: '', phone: '', password: '', role: 'USER', skill: '', address: '', city: '', landmark: '', pincode: '', avatar: '' });
  const [bookings, setBookings] = useState<any[]>([]);
  const [newBooking, setNewBooking] = useState({ 
    service: '', 
    description: '', 
    address: '', 
    city: '', 
    landmark: '', 
    pincode: '', 
    schedule: 'now' 
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState<string | null>(null);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ratingBooking, setRatingBooking] = useState<any>(null);
  const [ratingValue, setRatingValue] = useState(5);
  const [ratingReview, setRatingReview] = useState('');
  const [workerOnline, setWorkerOnline] = useState(true);
  const [serviceFilter, setServiceFilter] = useState('All');
  const [logs, setLogs] = useState<string[]>(['Welcome to ConnectCrewz', 'Ready to help.']);
  const [toasts, setToasts] = useState<{id: string, message: string, type: 'info' | 'success' | 'warning'}[]>([]);
  const [viewMode, setViewMode] = useState<'available' | 'my-jobs'>('available');
  const [isUpdating, setIsUpdating] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'services' | 'help' | 'dashboard' | 'profile'>('home');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileFormData, setProfileFormData] = useState({ 
    name: '', 
    skills: [] as string[],
    address: '',
    city: '',
    landmark: '',
    pincode: '',
    avatar: ''
  });

  const addToast = (message: string, type: 'info' | 'success' | 'warning' = 'info') => {
    const id = Math.random().toString(36).slice(2, 9);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 5000);
  };

  const filteredBookings = bookings.filter(b => {
    if (!user) return false;
    
    // Normal User View: Only their own bookings
    if (user.role === 'USER') {
      const userId = typeof b.user === 'string' ? b.user : b.user?._id;
      return userId === user._id;
    }
    
    // Worker Views
    if (viewMode === 'my-jobs') {
      const workerId = typeof b.worker === 'string' ? b.worker : b.worker?._id;
      return workerId === user._id;
    } else {
      // Available jobs (Pending) 
      // Only ONLINE workers see jobs
      if (!workerOnline) return false;

      const isPending = b.status === 'pending';
      
      // Match bookings with workers based on service type
      // Check if booking service is in worker's skills
      const hasCorrectSkill = user.skills?.includes(b.service) || false;
      
      // Filter by service type if selected in UI
      const matchesFilter = serviceFilter === 'All' || b.service === serviceFilter;
      
      return isPending && hasCorrectSkill && matchesFilter;
    }
  });

  const toggleWorkerStatus = async () => {
    if (!user || user.role === 'USER') return;
    const newStatus = !workerOnline;
    setWorkerOnline(newStatus);
    try {
      await fetch(`${API_BASE}/auth/status`, {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}` 
        },
        body: JSON.stringify({ isOnline: newStatus }),
      });
      addLog(`Status updated to: ${newStatus ? 'Online' : 'Offline'}`);
    } catch (err) {
      addLog('Failed to sync status');
    }
  };

  const handleCancelBooking = async (id: string) => {
    if (!confirm('Are you sure you want to cancel this request?')) return;
    try {
      addLog(`Cancelling booking ${id}...`);
      const response = await fetch(`${API_BASE}/bookings/${id}/cancel`, {
        method: 'PATCH',
        headers: { 'Authorization': `Bearer ${user.token}` }
      });
      console.log('Cancel API Response:', response);
      if (response.ok) {
        addLog('Booking Cancelled');
        addToast('Booking cancelled successfully', 'success');
        fetchBookings(user.token);
      } else {
        const errData = await response.json();
        addToast(errData.message || 'Failed to cancel booking', 'warning');
      }
    } catch (err) {
      addLog('Cancel Error');
      addToast('Error cancelling booking', 'warning');
    }
  };

  const handleRateBooking = async (e: FormEvent) => {
    e.preventDefault();
    if (!ratingBooking) return;
    try {
      addLog('Submitting rating...');
      const response = await fetch(`${API_BASE}/bookings/${ratingBooking._id}/rate`, {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}` 
        },
        body: JSON.stringify({ rating: ratingValue, review: ratingReview }),
      });
      if (response.ok) {
        addLog('Rating Submitted');
        setRatingBooking(null);
        fetchBookings(user.token);
      }
    } catch (err) {
      addLog('Rating Error');
    }
  };

  const handleUpdateProfile = async (e: FormEvent) => {
    e.preventDefault();
    if (!user) return;
    try {
      addLog('PATCH /api/auth/profile...');
      const response = await fetch(`${API_BASE}/auth/profile`, {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}` 
        },
        body: JSON.stringify(profileFormData),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUser({ ...user, ...updatedUser });
        localStorage.setItem('service_user', JSON.stringify({ ...user, ...updatedUser }));
        setIsEditingProfile(false);
        addToast('Profile updated successfully', 'success');
      } else {
        addToast('Failed to update profile', 'warning');
      }
    } catch (err) {
      addToast('Update error', 'warning');
    }
  };

  const toggleSkill = (skill: string) => {
    setProfileFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill) 
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const addLog = (msg: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [`[${timestamp}] ${msg}`, ...prev].slice(0, 5));
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('service_user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      addLog(`Authenticated as ${parsedUser.name}`);
      fetchBookings(parsedUser.token);
      
      // Default to Online for active worker session
      if (parsedUser.role === 'WORKER') {
        setWorkerOnline(true);
        // Sync with server
        fetch(`${API_BASE}/auth/status`, {
          method: 'PATCH',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${parsedUser.token}` 
          },
          body: JSON.stringify({ isOnline: true }),
        }).catch(() => console.error('Session status sync failed'));
      }
      
      // Auto-set filter for workers
      if (parsedUser.role === 'WORKER' && parsedUser.skills && parsedUser.skills.length > 0) {
        setServiceFilter(parsedUser.skills[0]);
      }
    }
  }, []);

  const handleAuth = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const endpoint = authMode === 'login' ? '/auth/login' : '/auth/register';
      addLog(`POST ${endpoint}...`);
      
      const payload = authMode === 'register' ? {
        ...formData,
        skills: formData.skill ? [formData.skill] : []
      } : formData;

      const response = await fetch(`${API_BASE}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        setUser(data);
        localStorage.setItem('service_user', JSON.stringify(data));
        setFormData({ name: '', phone: '', password: '', role: 'USER', skill: '' });
        
        // Default to Online on login for Workers
        if (data.role === 'WORKER') {
          setWorkerOnline(true);
          // Sync with server as well
          fetch(`${API_BASE}/auth/status`, {
            method: 'PATCH',
            headers: { 
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${data.token}` 
            },
            body: JSON.stringify({ isOnline: true }),
          }).catch(() => console.error('Initial status sync failed'));
        }

        addLog('Auth Success: 200 OK');
        fetchBookings(data.token);
      } else {
        setMessage(data.message || 'Authentication failed');
        addLog(`Auth Failed: ${data.message || 'Error'}`);
      }
    } catch (err) {
      setMessage('Server error. Please check if MongoDB is running.');
      addLog('Server error: 500');
    } finally {
      setLoading(false);
    }
  };

  const fetchBookings = async (token: string, isBackground = false) => {
    try {
      if (!isBackground) setIsUpdating(true);
      const response = await fetch(`${API_BASE}/bookings`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      const data = await response.json();
      if (response.ok) {
        // Check for status changes to trigger notifications
        if (bookings.length > 0) {
          data.forEach((newBooking: any) => {
            const oldBooking = bookings.find(b => b._id === newBooking._id);
            if (oldBooking && oldBooking.status !== newBooking.status) {
              if (newBooking.status === 'assigned' && user.role === 'USER') {
                addToast(`Your ${newBooking.service} booking has been accepted!`, 'success');
              } else if (newBooking.status === 'completed' && user.role === 'USER') {
                addToast(`Your ${newBooking.service} job is complete. Please rate the worker.`, 'success');
              } else if (newBooking.status === 'completed' && user.role === 'WORKER') {
                addToast(`Booking successful: ${newBooking.service} is confirmed.`, 'success');
              }
            }
          });

          // Check for new jobs for workers
          if (user.role === 'WORKER' && workerOnline) {
            const newJobs = data.filter((nb: any) => 
              nb.status === 'pending' && 
              !bookings.find(ob => ob._id === nb._id) &&
              user.skills?.includes(nb.service)
            );
            if (newJobs.length > 0) {
              addToast(`${newJobs.length} new job(s) available in your field!`, 'info');
            }
          }
        }

        setBookings(data);
      }
    } catch (err) {
      addLog('Fetch Error');
    } finally {
      setIsUpdating(false);
    }
  };

  // Real-time Polling Effect
  useEffect(() => {
    if (!user) return;
    
    // Initial fetch handled elsewhere, but let's ensure polling starts
    const interval = setInterval(() => {
      fetchBookings(user.token, true);
    }, 5000);

    return () => clearInterval(interval);
  }, [user, bookings, workerOnline]);

  // Auto-fill booking address from user profile when user changes or booking service is selected
  useEffect(() => {
    if (user && !newBooking.address) {
      setNewBooking(prev => ({
        ...prev,
        address: user.address || '',
        city: user.city || '',
        landmark: user.landmark || '',
        pincode: user.pincode || ''
      }));
    }
  }, [user]);

  const handleCreateBooking = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validation: Ensure profile has address
    if (!user.address || !user.city || !user.pincode) {
      addToast('Please add your address in profile first', 'warning');
      setActiveTab('profile');
      setIsEditingProfile(true);
      return;
    }

    setLoading(true);
    setBookingSuccess(null);
    try {
      addLog('POST /api/bookings...');
      const response = await fetch(`${API_BASE}/bookings`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}` 
        },
        body: JSON.stringify(newBooking),
      });

      const data = await response.json();
      if (response.ok) {
        setBookingSuccess(data._id);
        setNewBooking({ service: '', description: '', address: '', city: '', landmark: '', pincode: '', schedule: 'now' });
        addLog('Booking Created: 201');
        addToast('Booking Sent: Your request is now live.', 'success');
        fetchBookings(user.token);
        // Clear success message after 5 seconds
        setTimeout(() => setBookingSuccess(null), 5000);
      }
    } catch (err) {
      setMessage('Failed to create booking');
      addLog('Create Error');
    } finally {
      setLoading(false);
    }
  };

  const handleAcceptBooking = async (id: string) => {
    try {
      addLog(`Accepting booking ${id}...`);
      const response = await fetch(`${API_BASE}/bookings/${id}/accept`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });

      if (response.ok) {
        addLog('Booking Accepted: 200');
        addToast('Booking Accepted: A worker is assigned.', 'success');
        setViewMode('my-jobs');
        fetchBookings(user.token);
      } else {
        const errorData = await response.json();
        addToast(`Acceptance failed: ${errorData.message || 'Unknown error'}`, 'warning');
        addLog('Accept failed ❌');
      }
    } catch (err) {
      addToast('Network error during acceptance', 'warning');
      addLog('Accept Error ❌');
    }
  };

 const handleCompleteBooking = async (id: string) => {
  try {
    addLog('Completing booking...');

    const response = await fetch(`${API_BASE}/bookings/${id}/complete`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });

    if (response.ok) {
      addLog('Booking Completed ✅');
      addToast('Service Completed: Status updated.', 'success');
      fetchBookings(user.token);
    } else {
      const errorData = await response.json();
      addToast(`Completion failed: ${errorData.message || 'Unknown error'}`, 'warning');
      addLog('Complete failed ❌');
    }
  } catch (err) {
    addToast('Network error during completion', 'warning');
    addLog('Complete Error ❌');
  }
};

  const logout = async () => {
    if (user && user.role === 'WORKER') {
      try {
        // Automatically set Offline on logout
        await fetch(`${API_BASE}/auth/status`, {
          method: 'PATCH',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}` 
          },
          body: JSON.stringify({ isOnline: false }),
        });
      } catch (err) {
        console.error('Failed to set offline on logout');
      }
    }
    setShowLogoutConfirm(false);
    setUser(null);
    localStorage.removeItem('service_user');
    setBookings([]);
    setActiveTab('home');
    setWorkerOnline(false);
  };

  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const onBookService = (serviceName: string) => {
    setNewBooking(prev => ({ 
      ...prev, 
      service: serviceName,
      address: user?.address || '',
      city: user?.city || '',
      landmark: user?.landmark || '',
      pincode: user?.pincode || ''
    }));
    setActiveTab('dashboard');
    if (!user) {
      setAuthMode('login');
      addLog(`Redirected to auth for ${serviceName}`);
    } else {
      addLog(`Pre-selected service: ${serviceName}`);
    }
  };

  const renderTabContent = () => {
    // Role-based protection: Workers can only see Dashboard, Profile, and About
    if (user && user.role === 'WORKER') {
      if (!['dashboard', 'profile', 'about'].includes(activeTab)) {
        setActiveTab('dashboard');
        addToast('Restricted: Redirected to Worker Dashboard', 'info');
      }
    }

    switch (activeTab) {
      case 'home':
        return <HomeView 
          theme={theme} 
          onNavigate={setActiveTab} 
          user={user} 
          onBookService={onBookService}
        />;
      case 'about':
        return <AboutView theme={theme} />;
      case 'services':
        return <ServicesView 
          theme={theme} 
          onBookService={onBookService} 
        />;
      case 'help':
        return <HelpView theme={theme} />;
      case 'profile':
        return (
          <div className="flex-1 overflow-y-auto px-4 md:px-6 lg:px-20 py-8 md:py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                <div className="flex items-center gap-6">
                  <div className="relative group/avatar">
                    <div className={`w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center text-4xl shadow-xl overflow-hidden ${theme === 'dark' ? 'bg-purple-600' : 'bg-slate-900'} text-white`}>
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                      ) : (
                        user.name.charAt(0)
                      )}
                    </div>
                  </div>
                  <div>
                    <h1 className={`text-2xl md:text-4xl font-serif italic ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{user.name}</h1>
                    <p className="text-slate-500 text-xs md:text-sm uppercase tracking-[0.2em] font-mono mt-1">{user.role === 'USER' ? 'Customer' : 'Worker'} Profile</p>
                  </div>
                </div>
                {!isEditingProfile && (
                  <button
                    onClick={() => {
                      setProfileFormData({ 
                        name: user.name, 
                        skills: user.skills || [], 
                        address: user.address || '', 
                        city: user.city || '', 
                        landmark: user.landmark || '', 
                        pincode: user.pincode || '',
                        avatar: user.avatar || ''
                      });
                      setIsEditingProfile(true);
                    }}
                    className={`px-8 py-3 rounded-2xl text-[10px] uppercase tracking-widest font-black transition-all active:scale-95 border ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'}`}
                  >
                    Edit Profile
                  </button>
                )}
              </div>

              <div className={`p-8 md:p-10 rounded-[2.5rem] border shadow-2xl transition-all duration-500 mb-8 ${theme === 'dark' ? 'bg-[#0e0e11] border-white/5' : 'bg-white border-slate-200'}`}>
                <form onSubmit={handleUpdateProfile} className="space-y-10">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-500 mb-6 flex items-center gap-2">
                        <User size={14} /> Profile Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Full Name</label>
                          {isEditingProfile ? (
                            <input
                              type="text"
                              required
                              placeholder="Your full name"
                              className={`w-full px-5 py-4 rounded-2xl text-xs outline-none transition-all ${theme === 'dark' ? 'bg-[#0a0a0b] border-white/5 text-white focus:border-purple-500/50' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-400'}`}
                              value={profileFormData.name}
                              onChange={(e) => setProfileFormData({ ...profileFormData, name: e.target.value })}
                            />
                          ) : (
                            <p className={`px-5 py-4 text-xs font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{user.name}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Phone Number</label>
                          <p className={`px-5 py-4 text-xs font-black ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{user.phone}</p>
                        </div>
                        
                        {isEditingProfile && (
                          <div className="space-y-2 md:col-span-2">
                            <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Profile Picture URL</label>
                            <input
                              type="url"
                              placeholder="https://example.com/avatar.jpg"
                              className={`w-full px-5 py-4 rounded-2xl text-xs outline-none transition-all ${theme === 'dark' ? 'bg-[#0a0a0b] border-white/5 text-white focus:border-purple-500/50' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-400'}`}
                              value={profileFormData.avatar}
                              onChange={(e) => setProfileFormData({ ...profileFormData, avatar: e.target.value })}
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pt-8 border-t border-white/5">
                      <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500 mb-6 flex items-center gap-2">
                        <MapPin size={14} /> Primary Address
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2 md:col-span-2">
                          <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Full Address</label>
                          {isEditingProfile ? (
                            <input
                              type="text"
                              required
                              placeholder="Street name, house number, area"
                              className={`w-full px-5 py-4 rounded-2xl text-xs outline-none transition-all ${theme === 'dark' ? 'bg-[#0a0a0b] border-white/5 text-white focus:border-purple-500/50' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-400'}`}
                              value={profileFormData.address}
                              onChange={(e) => setProfileFormData({ ...profileFormData, address: e.target.value })}
                            />
                          ) : (
                            <p className={`px-5 py-4 text-xs font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'} leading-relaxed`}>{user.address || 'No address saved'}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">City</label>
                          {isEditingProfile ? (
                            <input
                              type="text"
                              required
                              placeholder="Your city"
                              className={`w-full px-5 py-4 rounded-2xl text-xs outline-none transition-all ${theme === 'dark' ? 'bg-[#0a0a0b] border-white/5 text-white focus:border-purple-500/50' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-400'}`}
                              value={profileFormData.city}
                              onChange={(e) => setProfileFormData({ ...profileFormData, city: e.target.value })}
                            />
                          ) : (
                            <p className={`px-5 py-4 text-xs font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{user.city || '-'}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Pincode</label>
                          {isEditingProfile ? (
                            <input
                              type="text"
                              required
                              placeholder="6-digit code"
                              className={`w-full px-5 py-4 rounded-2xl text-xs outline-none transition-all ${theme === 'dark' ? 'bg-[#0a0a0b] border-white/5 text-white focus:border-purple-500/50' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-400'}`}
                              value={profileFormData.pincode}
                              onChange={(e) => setProfileFormData({ ...profileFormData, pincode: e.target.value })}
                            />
                          ) : (
                            <p className={`px-5 py-4 text-xs font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{user.pincode || '-'}</p>
                          )}
                        </div>

                        <div className="space-y-2 md:col-span-2">
                          <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Landmark</label>
                          {isEditingProfile ? (
                            <input
                              type="text"
                              placeholder="Optional landmark nearby"
                              className={`w-full px-5 py-4 rounded-2xl text-xs outline-none transition-all ${theme === 'dark' ? 'bg-[#0a0a0b] border-white/5 text-white focus:border-purple-500/50' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-400'}`}
                              value={profileFormData.landmark}
                              onChange={(e) => setProfileFormData({ ...profileFormData, landmark: e.target.value })}
                            />
                          ) : (
                            <p className={`px-5 py-4 text-xs font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{user.landmark || '-'}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {user.role === 'WORKER' && (
                    <div className="space-y-6 pt-8 border-t border-white/5">
                      <div className="flex items-center justify-between">
                        <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">My Skills</label>
                        {isEditingProfile && (
                          <span className="text-[9px] text-purple-400 font-bold">Select your skills</span>
                        )}
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {['Plumbing', 'Electrical', 'Painting', 'Cleaning', 'Carpentry', 'Appliance Repair', 'Pest Control', 'Installation'].map(skill => (
                          <button
                            key={skill}
                            type="button"
                            disabled={!isEditingProfile}
                            onClick={() => toggleSkill(skill)}
                            className={`py-3 px-4 rounded-xl text-[9px] uppercase tracking-widest font-black border transition-all ${
                              (isEditingProfile ? profileFormData.skills : user.skills)?.includes(skill)
                                ? (theme === 'dark' ? 'bg-purple-600 border-purple-600 text-white' : 'bg-slate-900 border-slate-900 text-white')
                                : (theme === 'dark' ? 'bg-transparent border-white/5 text-slate-500' : 'bg-transparent border-slate-100 text-slate-400')
                            } ${!isEditingProfile ? 'cursor-default' : 'hover:scale-[1.02] cursor-pointer'}`}
                          >
                            {skill}
                          </button>
                        ))}
                      </div>
                      {isEditingProfile && profileFormData.skills.length === 0 && (
                        <p className="text-rose-500 text-[9px] font-bold">At least one skill is required for workers</p>
                      )}
                    </div>
                  )}

                   {isEditingProfile && (
                    <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 pt-8">
                      <button
                        type="submit"
                        disabled={profileFormData.name.trim() === '' || (user.role === 'WORKER' && profileFormData.skills.length === 0) || (user.role === 'USER' && (profileFormData.address === '' || profileFormData.city === '' || profileFormData.pincode === ''))}
                        className="flex-1 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-lg shadow-emerald-500/20 active:scale-95 disabled:opacity-50"
                      >
                        Save Changes
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsEditingProfile(false)}
                        className={`flex-1 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] border transition-all active:scale-95 ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'}`}
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </form>
              </div>

              {user.role === 'WORKER' && (
                <div className={`p-8 rounded-[2rem] border transition-all duration-300 ${theme === 'dark' ? 'bg-[#0e0e11] border-white/5' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className={`text-sm font-black uppercase tracking-widest ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Show My Profile Online</h3>
                      <p className="text-xs text-slate-500 mt-1">When turned on, customers can see you</p>
                    </div>
                    <button 
                      onClick={toggleWorkerStatus}
                      className={`w-14 h-7 rounded-full relative transition-colors ${workerOnline ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-slate-700'}`}
                    >
                      <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all shadow-md ${workerOnline ? 'left-8' : 'left-1'}`}></div>
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        );
      case 'dashboard':
        if (!user) {
          return (
            <div className="flex-1 flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`p-5 sm:p-8 rounded-xl border shadow-2xl w-full max-w-md relative overflow-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0e0e11] border-[#1f2937]' : 'bg-white border-slate-200'}`}
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 shadow-[0_0_15px_rgba(147,51,234,0.3)]"></div>
                
                <div className="flex justify-center mb-10">
                  <div className={`w-24 h-24 rounded-3xl overflow-hidden shadow-2xl border transition-all duration-500 bg-white p-3 ${theme === 'dark' ? 'shadow-purple-500/20 border-white/10' : 'shadow-purple-200 border-slate-100'}`}>
                    <Logo className="w-full h-full" />
                  </div>
                </div>
                
                <div className="text-center mb-8">
                  <h2 className={`text-2xl font-serif italic tracking-wide transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    ConnectCrewz
                  </h2>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Connecting People. Getting Things Done.</p>
                </div>
                
                <p className="text-slate-500 text-center font-bold text-[10px] uppercase tracking-widest mb-10">
                  {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
                </p>

                {message && (
                  <div className="mb-6 p-3 bg-red-900/20 border border-red-500/30 text-red-400 rounded text-xs flex items-center gap-2 font-mono">
                    <AlertCircle size={14} />
                    {message}
                  </div>
                )}

                <form onSubmit={handleAuth} className="space-y-5">
                  {authMode === 'register' && (
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1.5 ml-1">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
                        <input
                          type="text"
                          required
                          className={`w-full pl-10 pr-4 py-2.5 rounded outline-none transition-all text-sm font-mono ${theme === 'dark' ? 'bg-[#0a0a0b] border-[#1f2937] text-white focus:border-purple-500/50' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-400'}`}
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1.5 ml-1">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
                      <input
                        type="text"
                        required
                        className={`w-full pl-10 pr-4 py-2.5 rounded outline-none transition-all text-sm font-mono ${theme === 'dark' ? 'bg-[#0a0a0b] border-[#1f2937] text-white focus:border-purple-500/50' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-400'}`}
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1.5 ml-1">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
                      <input
                        type="password"
                        required
                        className={`w-full pl-10 pr-4 py-2.5 rounded outline-none transition-all text-sm font-mono ${theme === 'dark' ? 'bg-[#0a0a0b] border-[#1f2937] text-white focus:border-purple-500/50' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-400'}`}
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      />
                    </div>
                  </div>

                  {authMode === 'register' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2 ml-1">Account Role</label>
                        <div className="grid grid-cols-2 gap-2">
                          {['USER', 'WORKER'].map(r => (
                            <button
                              key={r}
                              type="button"
                              onClick={() => setFormData({ ...formData, role: r })}
                              className={`py-3 rounded-xl text-[10px] uppercase tracking-widest font-black border transition-all ${formData.role === r ? (theme === 'dark' ? 'bg-purple-600 border-purple-600 text-white' : 'bg-slate-900 border-slate-900 text-white') : (theme === 'dark' ? 'border-white/5 text-slate-500' : 'border-slate-100 text-slate-500')}`}
                            >
                              {r === 'USER' ? 'Customer' : 'Worker'}
                            </button>
                          ))}
                        </div>
                      </div>

                      {formData.role === 'WORKER' && (
                        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                          <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2 ml-1">Your Primary Skill</label>
                          <select
                            required
                            className={`w-full px-4 py-3 rounded-xl text-xs outline-none transition-all appearance-none cursor-pointer ${theme === 'dark' ? 'bg-[#0a0a0b] border-white/5 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
                            value={formData.skill}
                            onChange={(e) => setFormData({ ...formData, skill: e.target.value })}
                          >
                            <option value="">Select your skill</option>
                            <option value="Plumbing">Plumbing</option>
                            <option value="Electrical">Electrical</option>
                            <option value="Painting">Painting</option>
                            <option value="Cleaning">Cleaning</option>
                            <option value="Carpentry">Carpentry</option>
                            <option value="Appliance Repair">Appliance Repair</option>
                            <option value="Pest Control">Pest Control</option>
                            <option value="Installation">Installation</option>
                          </select>
                        </div>
                      )}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-[#f8fafc] font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 text-xs uppercase tracking-widest active:scale-[0.98]"
                  >
                    {loading ? 'Processing...' : (authMode === 'login' ? 'SIGN IN' : 'CREATE ACCOUNT')}
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <button 
                    onClick={() => {
                      setAuthMode(authMode === 'login' ? 'register' : 'login');
                      setMessage('');
                    }}
                    className="text-purple-400 hover:text-purple-300 text-[11px] font-mono uppercase tracking-wider"
                  >
                    {authMode === 'login' ? "New User? Create Account" : "Already have an account? Sign In"}
                  </button>
                </div>
              </motion.div>
            </div>
          );
        }
        return (
          <main className="flex-1 max-w-[1600px] mx-auto w-full flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
            {/* Sidebar & Dashboard Content */}
            <aside className={`w-full lg:w-72 border-b lg:border-b-0 lg:border-r flex flex-col flex-shrink-0 transition-colors duration-300 ${theme === 'dark' ? 'border-[#1f2937] bg-[#0a0a0b]' : 'border-slate-200 bg-white'}`}>
              <div className="p-4 md:p-6 text-[9px] md:text-[10px] uppercase tracking-widest text-slate-500 font-bold border-b border-[#1f2937]/50 hidden lg:block">Menu</div>
              
              <div className="flex-1 p-4 md:p-6 overflow-y-auto custom-scrollbar">
                {user.role === 'USER' ? (
                  <div className="space-y-6">
                    <section className={`p-5 rounded-2xl border transition-all duration-300 ${theme === 'dark' ? 'bg-[#0e0e11] border-white/5' : 'bg-white border-slate-200 shadow-sm'}`}>
                      <div className="flex items-center justify-between mb-6 group">
                        <div className="flex items-center gap-2 text-purple-400">
                          <PlusCircle size={18} className="group-hover:rotate-90 transition-transform duration-500" />
                          <h2 className={`text-xs font-black uppercase tracking-widest ${theme === 'dark' ? 'text-slate-300' : 'text-slate-800'}`}>Book a Service</h2>
                        </div>
                        <div className={`flex items-center gap-1.5 px-2 py-1 rounded-lg border text-[8px] font-black uppercase tracking-widest ${theme === 'dark' ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' : 'bg-indigo-50 border-indigo-100 text-indigo-600'}`}>
                          <Shield size={10} />
                          Safe
                        </div>
                      </div>
                      
                      {(!user.address || !user.city || !user.pincode) ? (
                        <div className={`p-6 rounded-2xl border text-center ${theme === 'dark' ? 'bg-amber-500/10 border-amber-500/20' : 'bg-amber-50 border-amber-200'}`}>
                          <AlertCircle size={32} className="text-amber-500 mx-auto mb-3" />
                          <p className="text-[10px] uppercase tracking-widest font-black text-amber-600 mb-2">Incomplete Profile</p>
                          <p className="text-[11px] text-slate-500 mb-4 leading-relaxed font-medium">Please add your default address in profile first for a faster booking experience.</p>
                          <button 
                            onClick={() => {
                              setActiveTab('profile');
                              setIsEditingProfile(true);
                            }}
                            className="w-full py-3 bg-amber-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all shadow-lg shadow-amber-500/20"
                          >
                            Update Profile Now
                          </button>
                        </div>
                      ) : bookingSuccess ? (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className={`p-6 rounded-xl border text-center mb-4 ${theme === 'dark' ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-50 border-emerald-200'}`}
                        >
                          <CheckCircle2 size={32} className="text-emerald-500 mx-auto mb-3" />
                          <p className="text-[10px] uppercase tracking-widest font-black text-emerald-500 mb-1">Request Sent!</p>
                          <p className="text-[10px] text-slate-500 font-mono">ID: {bookingSuccess.slice(-8).toUpperCase()}</p>
                          <p className="text-[11px] text-slate-500 mt-2 font-medium">A worker will respond within a few minutes.</p>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleCreateBooking} className="space-y-5">
                          <div>
                            <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2 ml-1">What service do you need?</label>
                            <select
                              required
                              className={`w-full px-4 py-2.5 rounded-xl text-xs outline-none transition-all appearance-none cursor-pointer ${theme === 'dark' ? 'bg-[#0d0d0f] border-white/5 text-white focus:border-purple-500/50' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-400'}`}
                              value={newBooking.service}
                              onChange={(e) => setNewBooking({ ...newBooking, service: e.target.value })}
                            >
                              <option value="">Choose a Service Area</option>
                              <option value="Plumbing">Plumbing</option>
                              <option value="Electrical">Electrical</option>
                              <option value="Painting">Painting</option>
                              <option value="Cleaning">Cleaning</option>
                              <option value="Carpentry">Carpentry</option>
                              <option value="Appliance Repair">Appliance Repair</option>
                              <option value="Pest Control">Pest Control</option>
                              <option value="Installation">Installation</option>
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2 ml-1">When do you need it?</label>
                            <div className="grid grid-cols-2 gap-2">
                              {['now', 'later'].map(opt => (
                                <button
                                  key={opt}
                                  type="button"
                                  onClick={() => setNewBooking({ ...newBooking, schedule: opt })}
                                  className={`py-2.5 rounded-xl text-[10px] uppercase tracking-widest font-black border transition-all ${newBooking.schedule === opt ? (theme === 'dark' ? 'bg-purple-500 border-purple-500 text-white shadow-lg' : 'bg-slate-900 border-slate-900 text-white shadow-lg') : (theme === 'dark' ? 'border-white/5 text-slate-500' : 'border-slate-100 text-slate-500 hover:bg-slate-50')}`}
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2 ml-1">Booking Details</label>
                            <textarea
                              rows={3}
                              required
                              className={`w-full px-4 py-2.5 rounded-xl text-xs outline-none transition-all resize-none ${theme === 'dark' ? 'bg-[#0d0d0f] border-white/5 text-white focus:border-purple-500/50' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-400'}`}
                              placeholder="Tell us what you need help with..."
                              value={newBooking.description}
                              onChange={(e) => setNewBooking({ ...newBooking, description: e.target.value })}
                            ></textarea>
                          </div>

                          <div className="pt-4 border-t border-[#1f2937]/30 space-y-4">
                            <label className="block text-[10px] uppercase tracking-widest text-purple-500 font-black flex items-center gap-2 mb-1">
                              <MapPin size={14} /> Job Location
                            </label>
                            
                            <div className="space-y-3">
                              <input
                                type="text"
                                required
                                placeholder="Full Address (House/Plot No, Building, Street)"
                                className={`w-full px-4 py-2.5 rounded-xl text-xs outline-none transition-all ${theme === 'dark' ? 'bg-[#0d0d0f] border-white/5 text-white focus:border-purple-500/50' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-400'}`}
                                value={newBooking.address}
                                onChange={(e) => setNewBooking({ ...newBooking, address: e.target.value })}
                              />
                              
                              <div className="grid grid-cols-2 gap-3">
                                <input
                                  type="text"
                                  required
                                  placeholder="City"
                                  className={`w-full px-4 py-2.5 rounded-xl text-xs outline-none transition-all ${theme === 'dark' ? 'bg-[#0d0d0f] border-white/5 text-white focus:border-purple-500/50' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-400'}`}
                                  value={newBooking.city}
                                  onChange={(e) => setNewBooking({ ...newBooking, city: e.target.value })}
                                />
                                <input
                                  type="text"
                                  required
                                  placeholder="Pincode"
                                  className={`w-full px-4 py-2.5 rounded-xl text-xs outline-none transition-all ${theme === 'dark' ? 'bg-[#0d0d0f] border-white/5 text-white focus:border-purple-500/50' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-400'}`}
                                  value={newBooking.pincode}
                                  onChange={(e) => setNewBooking({ ...newBooking, pincode: e.target.value })}
                                />
                              </div>

                              <input
                                type="text"
                                placeholder="Landmark (Optional)"
                                className={`w-full px-4 py-2.5 rounded-xl text-xs outline-none transition-all ${theme === 'dark' ? 'bg-[#0d0d0f] border-white/5 text-white focus:border-purple-500/50' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-400'}`}
                                value={newBooking.landmark}
                                onChange={(e) => setNewBooking({ ...newBooking, landmark: e.target.value })}
                              />
                            </div>
                          </div>

                          <button 
                            type="submit"
                            disabled={loading || !newBooking.service || !newBooking.description || !newBooking.address || !newBooking.city || !newBooking.pincode}
                            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black py-4 rounded-xl transition-all text-[11px] uppercase tracking-[0.2em] shadow-lg shadow-purple-600/20 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
                          >
                            {loading ? <Activity size={14} className="animate-spin" /> : <Rocket size={14} />}
                            {loading ? 'Confirming Booking...' : 'Confirm Booking'}
                          </button>
                          
                          <p className={`text-[9px] text-center uppercase tracking-widest font-bold ${theme === 'dark' ? 'text-slate-600' : 'text-slate-400'}`}>
                            ● A worker will respond within a few minutes
                          </p>
                        </form>
                      )}
                    </section>
                    
                    <section className={`p-4 rounded-xl border transition-all duration-300 ${theme === 'dark' ? 'bg-indigo-900/5 border-indigo-500/10' : 'bg-indigo-50 border-indigo-100 shadow-sm'}`}>
                      <div className="flex items-center gap-2 mb-2 text-indigo-400">
                        <Shield size={14} className="animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest">ConnectCrewz Verified</span>
                      </div>
                      <p className="text-[10px] text-slate-500 leading-normal font-medium">
                        All our workers undergo ID checks and skills testing before joining our team.
                      </p>
                    </section>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <section>
                      <div className="flex items-center gap-2 mb-4 text-emerald-400">
                        <Briefcase size={16} />
                        <h2 className={`text-[11px] font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-slate-300' : 'text-slate-800'}`}>Work Menu</h2>
                      </div>
                      
                      <nav className="space-y-2">
                        <button 
                          onClick={() => setViewMode('available')}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${viewMode === 'available' ? (theme === 'dark' ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30' : 'bg-purple-50 text-purple-600 border border-purple-200') : 'text-slate-500 hover:bg-slate-500/5'}`}
                        >
                          <span>Available Jobs</span>
                          <Activity size={12} className={viewMode === 'available' ? 'animate-pulse' : ''} />
                        </button>
                        <button 
                          onClick={() => setViewMode('my-jobs')}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${viewMode === 'my-jobs' ? (theme === 'dark' ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30' : 'bg-indigo-50 text-indigo-600 border border-indigo-200') : 'text-slate-500 hover:bg-slate-500/5'}`}
                        >
                          <span>My Active Jobs</span>
                          <LayoutDashboard size={12} />
                        </button>
                      </nav>
                    </section>

                    <div className={`p-5 rounded-2xl border transition-all duration-300 ${theme === 'dark' ? 'bg-[#0e0e11] border-white/5' : 'bg-white border-slate-200 shadow-sm'}`}>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                             <div className={`w-2 h-2 rounded-full ${workerOnline ? 'bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-rose-500'}`}></div>
                             <p className={`text-[10px] font-black uppercase tracking-widest ${workerOnline ? (theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600') : 'text-rose-500'}`}>
                               You are {workerOnline ? 'Online 🟢' : 'Offline 🔴'}
                             </p>
                          </div>
                          <button 
                            onClick={toggleWorkerStatus}
                            className={`w-10 h-5 rounded-full relative transition-colors ${workerOnline ? 'bg-emerald-500' : 'bg-slate-700'}`}
                          >
                            <div className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-all ${workerOnline ? 'left-6' : 'left-1'}`}></div>
                          </button>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                          {workerOnline 
                            ? `You are ready to accept jobs. ${filteredBookings.length} jobs available for your skills.` 
                            : 'You are currently offline. Go online to see available jobs nearby.'}
                        </p>
                      </div>

                    {viewMode === 'available' && (
                      <section className="mt-6">
                        <div className="flex items-center gap-2 mb-4 text-slate-400">
                          <RefreshCw size={14} />
                          <h3 className="text-[9px] font-bold uppercase tracking-widest">Filter by category</h3>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          {['All', 'Plumbing', 'Electrical', 'Painting', 'Cleaning', 'Carpentry', 'Appliance Repair', 'Pest Control', 'Installation'].map(cat => (
                            <button
                              key={cat}
                              onClick={() => setServiceFilter(cat)}
                              className={`text-[9px] uppercase tracking-widest font-black py-2.5 px-4 rounded-lg border text-left transition-all ${serviceFilter === cat ? (theme === 'dark' ? 'bg-white/10 border-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]' : 'bg-slate-900 border-slate-900 text-white') : (theme === 'dark' ? 'border-white/5 text-slate-500 hover:border-white/10' : 'border-slate-100 text-slate-500 hover:bg-slate-50')}`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      </section>
                    )}
                  </div>
                )}
              </div>
              
              <div className="hidden">
                 <div className="flex items-center gap-2 mb-2 md:mb-3 text-slate-600">
                  <Briefcase size={12} />
                  <span className="text-[8px] md:text-[9px] uppercase tracking-widest font-bold">Activity</span>
                </div>
                <div className="flex-1 font-mono text-[9px] md:text-[10px] space-y-1 md:space-y-1.5 overflow-hidden">
                  {logs.map((log, i) => (
                    <div key={i} className={`${i === 0 ? 'text-slate-300' : 'text-slate-600'} truncate`}>
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Workspace Feed */}
            <section className={`flex-1 flex flex-col p-4 md:p-6 lg:p-12 transition-colors duration-300 overflow-x-hidden ${theme === 'dark' ? 'bg-[#0d0d0f]' : 'bg-slate-50'}`}>
              <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-8 md:mb-10 gap-4">
                <div className="flex items-start md:items-center gap-4">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-purple-400 border shadow-lg shadow-purple-500/5 flex-shrink-0 ${theme === 'dark' ? 'bg-[#1f2937] border-[#374151]' : 'bg-white border-slate-200'}`}>
                    <ClipboardList size={20} md:size={22} />
                  </div>
                  <div>
                    <h2 className={`text-xl md:text-2xl font-serif italic transition-colors leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {user.role !== 'USER' 
                        ? (viewMode === 'my-jobs' ? 'My Active Jobs' : 'Available Requests') 
                        : 'My Bookings'}
                    </h2>
                    <p className="text-[9px] md:text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em] md:tracking-[0.3em] mt-1.5 whitespace-nowrap overflow-hidden text-ellipsis">
                      {user.role === 'USER' ? 'Track your current and past bookings' : (viewMode === 'my-jobs' ? 'Manage your assigned work' : 'Browse and accept new jobs in your area')}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 w-full xl:w-auto">
                  {user.role !== 'USER' && (
                    <div className={`p-1 rounded-lg border flex transition-all duration-300 overflow-hidden ${theme === 'dark' ? 'bg-[#1f2937]/50 border-[#374151]' : 'bg-white border-slate-200'}`}>
                      <button 
                        onClick={() => setViewMode('available')}
                        className={`px-2 md:px-3 py-1 rounded-md text-[8px] md:text-[9px] uppercase tracking-widest font-black transition-all ${viewMode === 'available' ? 'bg-purple-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                      >
                        Available
                      </button>
                      <button 
                        onClick={() => setViewMode('my-jobs')}
                        className={`px-2 md:px-3 py-1 rounded-md text-[8px] md:text-[9px] uppercase tracking-widest font-black transition-all ${viewMode === 'my-jobs' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                      >
                        My Jobs
                      </button>
                    </div>
                  )}
                  
                    <div className={`flex items-center gap-2 px-4 py-2 border rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${theme === 'dark' ? 'bg-[#1f2937]/30 border-white/5 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-500'}`}>
                      <motion.div
                        animate={{ rotate: isUpdating ? 360 : 0 }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      >
                        <RefreshCw size={14} className={isUpdating ? 'text-purple-400' : 'text-slate-600'} />
                      </motion.div>
                      <span className="flex items-center gap-1.5">
                        {isUpdating ? 'Updating...' : 'Connected'}
                        <span className={`w-1.5 h-1.5 rounded-full ${isUpdating ? 'bg-purple-500 animate-pulse' : 'bg-emerald-500'}`}></span>
                      </span>
                    </div>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <AnimatePresence mode="popLayout" initial={false}>
                  {loading && filteredBookings.length === 0 ? (
                    <div className="space-y-4">
                      {[1, 2, 3].map(i => (
                        <div key={i} className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-[#0e0e11] border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                          <div className="flex gap-4">
                            <Skeleton className="w-12 h-12" />
                            <div className="flex-1 space-y-3">
                              <Skeleton className="w-1/3 h-4" />
                              <Skeleton className="w-full h-12" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : filteredBookings.length === 0 ? (
                    <EmptyState 
                      icon={ClipboardList}
                      title={user.role === 'USER' ? 'No Bookings Found' : 'No Jobs Available'}
                      desc={user.role === 'USER' ? 'Your service history is empty. Start by booking a service from our catalog.' : 'There are no active requests matching your criteria at the moment.'}
                      actionLabel={user.role === 'USER' ? 'View Catalog' : (workerOnline ? undefined : 'Go Online')}
                      onAction={() => {
                        if (user.role === 'USER') setActiveTab('services');
                        else toggleWorkerStatus();
                      }}
                      theme={theme}
                    />
                  ) : (
                    <div className="grid gap-4">
                      {filteredBookings.map((booking: any) => (
                        <motion.div
                          key={booking._id}
                          layout
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          className={`p-4 md:p-6 rounded-xl border transition-all group relative ${theme === 'dark' ? 'bg-[#0e0e11] border-[#1f2937] hover:border-[#374151]' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-lg'}`}
                        >
                          <div className={`absolute top-0 left-0 w-1.5 h-full rounded-l-xl transition-colors duration-500 ${
                            booking.status === 'pending' ? 'bg-amber-500' :
                            booking.status === 'assigned' ? 'bg-blue-500' :
                            booking.status === 'cancelled' ? 'bg-rose-500' :
                            'bg-emerald-500'
                          }`}></div>
                          <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-purple-600/5 blur-[40px] pointer-events-none group-hover:bg-purple-600/10 transition-all"></div>
                          
                          <div className="flex flex-col md:flex-row items-start justify-between relative z-10 gap-6">
                            <div className="flex-1 space-y-4 min-w-0">
                              <div className="flex flex-wrap items-center gap-3">
                                <span className={`text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-black px-3 py-1 rounded-lg border shadow-sm ${
                                  booking.status === 'pending' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                                  booking.status === 'assigned' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                                  booking.status === 'cancelled' ? 'bg-rose-500/10 text-rose-500 border-rose-500/20' :
                                  'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                                }`}>
                                  {booking.status}
                                </span>
                                <span className="text-[9px] font-mono text-slate-500/60 font-bold">REF_{booking._id.slice(-6).toUpperCase()}</span>
                              </div>
                              
                              <div>
                                <h3 className={`font-black text-xl md:text-2xl tracking-tight uppercase font-mono mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{booking.service}</h3>
                                
                                <div className={`flex flex-col gap-1.5 mb-4 p-3.5 rounded-2xl border border-dashed text-slate-500 transition-colors group-hover:border-purple-500/30 ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                                  <div className="flex items-start gap-2.5">
                                    <div className={`p-1.5 rounded-lg shrink-0 ${theme === 'dark' ? 'bg-rose-500/20 text-rose-400' : 'bg-rose-50 text-rose-500'}`}>
                                      <MapPin size={12} className="animate-bounce" style={{ animationDuration: '3s' }} />
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                      <div className="flex items-center gap-2">
                                        <span className={`text-[10px] font-black uppercase tracking-widest ${theme === 'dark' ? 'text-slate-100' : 'text-slate-900'}`}>
                                          {booking.address || booking.location || 'Location Needed'}
                                        </span>
                                        <span className={`px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest ${theme === 'dark' ? 'bg-white/5 text-slate-500' : 'bg-slate-200 text-slate-600'}`}>Confirmed Location</span>
                                      </div>
                                      <div className="flex flex-wrap items-center gap-2 text-[9px] font-bold uppercase tracking-widest">
                                        <span className="text-slate-500">{booking.city || '-'}</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-500 opacity-20"></span>
                                        <span className="text-slate-500">{booking.pincode || '-'}</span>
                                        {booking.landmark && (
                                          <>
                                            <span className="w-1 h-1 rounded-full bg-slate-500 opacity-20"></span>
                                            <span className="text-purple-500/80 italic lowercase tracking-normal font-sans">near {booking.landmark}</span>
                                          </>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <p className={`text-xs md:text-sm font-medium leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{booking.description}</p>
                              </div>
                              
                              <div className={`flex flex-wrap items-center gap-x-6 gap-y-3 pt-5 border-t border-dashed ${theme === 'dark' ? 'border-[#1f2937]' : 'border-slate-200'}`}>
                                <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono font-bold uppercase tracking-tight">
                                  <Clock size={14} className="text-slate-400" />
                                  <span className="opacity-60">Posted:</span>
                                  <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-800'}>{new Date(booking.createdAt).toLocaleDateString()}</span>
                                </div>
                                
                                {booking.user && (
                                  <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono font-bold uppercase tracking-tight">
                                    <User size={14} className="text-slate-400" />
                                    <span className="opacity-60">Customer:</span> 
                                    <span className={theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}>
                                      {(typeof booking.user === 'string' ? booking.user === user._id : booking.user?._id === user._id) 
                                        ? 'Me' 
                                        : (typeof booking.user === 'string' ? 'Customer' : booking.user.name)}
                                    </span>
                                  </div>
                                )}
                                
                                 {booking.status !== 'pending' && (
                                  <div className={`flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-xl border border-dashed transition-all ${
                                    booking.status === 'assigned' 
                                      ? (theme === 'dark' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-blue-50 text-blue-600 border-blue-200')
                                      : (theme === 'dark' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-emerald-50 text-emerald-600 border-emerald-200')
                                  }`}>
                                    <div className="flex items-center gap-1">
                                      <Shield size={10} className="text-purple-400" />
                                      <span className="text-[8px] font-black text-purple-400/80 mr-1">CERTIFIED PRO</span>
                                    </div>
                                    <span className="opacity-60 border-l border-white/10 pl-2">
                                      {booking.status === 'assigned' ? 'Worker:' : 'Completed by:'}
                                    </span>
                                    <span className="ml-1 font-black">
                                       {(typeof booking.worker === 'string' ? booking.worker === user._id : booking.worker?._id === user._id)
                                          ? 'YOU'
                                          : (typeof booking.worker === 'string' ? 'WORKER' : (booking.worker?.name || booking.assignedWorker || 'VERIFIED_WORKER'))}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
    
                            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 w-full md:w-auto md:ml-6 shrink-0 mt-4 md:mt-0">
                              {user.role !== 'USER' && booking.status === 'pending' && (
                                <button
                                  onClick={() => handleAcceptBooking(booking._id)}
                                  className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 hover:shadow-xl hover:shadow-purple-600/20 text-white px-8 py-4 md:py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 border-b-4 border-purple-800"
                                >
                                  Accept Job
                                </button>
                              )}
                              
                              {user.role !== 'USER' && booking.status === 'assigned' && (
                                <button
                                  onClick={() => handleCompleteBooking(booking._id)}
                                  className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/20 text-white px-8 py-4 md:py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 border-b-4 border-emerald-800"
                                >
                                  Complete Task
                                </button>
                              )}
                              {user.role === 'USER' && booking.status === 'pending' && (
                                <button
                                  onClick={() => handleCancelBooking(booking._id)}
                                  className="w-full md:w-auto py-4 md:py-3 px-8 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border border-rose-500/30 text-rose-500 hover:bg-rose-500 hover:text-white active:scale-95 shadow-lg shadow-rose-500/10"
                                >
                                  Cancel Booking
                                </button>
                              )}

                              {user.role === 'USER' && booking.status === 'completed' && !booking.rating && (
                                <button
                                  onClick={() => setRatingBooking(booking)}
                                  className="w-full md:w-auto py-4 md:py-3 px-8 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all bg-amber-500 hover:bg-amber-600 text-white active:scale-95 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
                                >
                                  <Star size={14} />
                                  Rate Expert
                                </button>
                              )}

                              {booking.status === 'completed' && booking.rating > 0 && (
                                <div className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 shadow-sm">
                                  <Star size={14} fill="currentColor" />
                                  <span className="text-xs font-black">{booking.rating}/5</span>
                                </div>
                              )}

                              {booking.status === 'completed' && !booking.rating && user.role !== 'USER' && (
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-emerald-500/30 flex items-center justify-center text-emerald-500 shadow-inner bg-emerald-500/5 mx-auto md:mx-0">
                                  <CheckCircle2 size={18} md:size={24} />
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </section>
          </main>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0a0a0b] text-[#e2e8f0]' : 'bg-slate-50 text-slate-900'} font-sans flex flex-col`}>
      {/* Header - Always Visible */}
      <header className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md border-b ${theme === 'dark' ? 'bg-[#0a0a0b]/80 border-white/5' : 'bg-white/80 border-slate-200 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0 h-auto min-h-16 py-3 md:py-0">
          <div className="flex items-center justify-between w-full md:w-auto h-full">
            <div 
              onClick={() => setActiveTab('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-2xl ${theme === 'dark' ? 'bg-white text-slate-900 shadow-purple-500/10' : 'bg-slate-900 text-white shadow-slate-200'}`}>
                <Logo className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h1 className={`text-lg md:text-xl font-serif italic tracking-tight transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Connect<span className="text-purple-500 font-bold">Crewz</span>
              </h1>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all ${theme === 'dark' ? 'text-amber-400 bg-white/5' : 'text-slate-500 bg-slate-100'}`}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>

          <nav className="flex items-center space-x-1 md:space-x-8 overflow-x-auto no-scrollbar py-2 md:py-0 w-full md:w-auto justify-center md:justify-start">
            {[
              { id: 'home', label: 'Home' },
              { id: 'services', label: 'Services' },
              ...(user ? [{ id: 'dashboard', label: 'Dashboard' }] : []),
              { id: 'help', label: 'Help' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`whitespace-nowrap px-3 md:px-0 py-2 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] transition-all relative group flex-shrink-0 cursor-pointer ${
                  activeTab === tab.id 
                    ? (theme === 'dark' ? 'text-purple-400' : 'text-purple-600') 
                    : (theme === 'dark' ? 'text-slate-500 hover:text-purple-400' : 'text-slate-500 hover:text-purple-600')
                }`}
              >
                {tab.label}
                <span className={`absolute bottom-0 left-3 md:left-0 right-3 md:right-0 h-[2px] transition-all duration-300 ${activeTab === tab.id ? 'bg-purple-500 w-auto opacity-100' : 'w-0 opacity-0 group-hover:w-auto group-hover:opacity-100 group-hover:bg-purple-500/50'}`}></span>
              </button>
            ))}
          </nav>
          
          <div className="flex items-center space-x-3 md:space-x-5 w-full md:w-auto justify-center md:justify-end py-2 md:py-0 border-t md:border-none border-slate-100 dark:border-white/5">
            <button 
              onClick={toggleTheme}
              className={`hidden md:flex p-2 rounded-lg transition-all duration-300 ${theme === 'dark' ? 'text-amber-400 hover:bg-amber-400/10' : 'text-slate-500 hover:bg-slate-100'}`}
              title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            {user ? (
              <div className="relative group">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`flex items-center gap-2.5 px-4 py-2 rounded-xl transition-all duration-300 border ${isMenuOpen ? (theme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-slate-100 border-slate-300') : (theme === 'dark' ? 'border-white/5 hover:bg-white/5' : 'border-slate-200 hover:bg-slate-50')}`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all overflow-hidden ${theme === 'dark' ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                    {user.avatar ? (
                      <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-[10px] font-black">{user.name.charAt(0)}</span>
                    )}
                  </div>
                  <span className={`hidden xs:block text-[11px] font-black uppercase tracking-widest ${theme === 'dark' ? 'text-[#f8fafc]' : 'text-slate-900'}`}>
                    {user.name.split(' ')[0]}
                  </span>
                  <ChevronDown size={14} className={`text-slate-500 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isMenuOpen && (
                    <>
                      <div 
                        className="fixed inset-0 z-40" 
                        onClick={() => setIsMenuOpen(false)}
                      ></div>
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className={`absolute right-0 mt-3 w-56 rounded-2xl border shadow-2xl z-50 overflow-hidden ${theme === 'dark' ? 'bg-[#0e0e11] border-white/10' : 'bg-white border-slate-200'}`}
                      >
                        <div className={`p-4 border-b ${theme === 'dark' ? 'border-white/5' : 'border-slate-100'}`}>
                          <p className={`text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1`}>Account Info</p>
                          <p className={`text-xs font-black truncate ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{user.name}</p>
                          <p className="text-[9px] text-slate-500 mt-0.5">{user.phone}</p>
                        </div>

                        <div className="p-2">
                          <button
                            onClick={() => {
                              setActiveTab('dashboard');
                              setIsMenuOpen(false);
                              if (user.role === 'WORKER') setViewMode('my-jobs');
                            }}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[10px] uppercase tracking-widest font-black transition-all ${theme === 'dark' ? 'text-slate-400 hover:bg-white/5 hover:text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                          >
                            {user.role === 'WORKER' ? <Briefcase size={14} /> : <ClipboardList size={14} />}
                            {user.role === 'WORKER' ? 'My Jobs' : 'My Bookings'}
                          </button>

                          <button
                            onClick={() => {
                              setActiveTab('profile');
                              setIsMenuOpen(false);
                              setIsEditingProfile(false);
                            }}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[10px] uppercase tracking-widest font-black transition-all ${theme === 'dark' ? 'text-slate-400 hover:bg-white/5 hover:text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                          >
                            <Settings size={14} />
                            My Profile
                          </button>

                          {user.role === 'WORKER' && (
                            <button
                              onClick={() => {
                                toggleWorkerStatus();
                                setIsMenuOpen(false);
                              }}
                              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-[10px] uppercase tracking-widest font-black transition-all ${theme === 'dark' ? 'text-slate-400 hover:bg-white/5 hover:text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                            >
                              <div className="flex items-center gap-3">
                                <Power size={14} className={workerOnline ? 'text-emerald-500' : 'text-rose-500'} />
                                Availability
                              </div>
                              <span className={`px-2 py-0.5 rounded-md text-[8px] ${workerOnline ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
                                {workerOnline ? 'ONLINE' : 'OFFLINE'}
                              </span>
                            </button>
                          )}
                        </div>

                        <div className={`p-2 border-t ${theme === 'dark' ? 'border-white/5' : 'border-slate-100'}`}>
                          <button
                            onClick={() => {
                              setIsMenuOpen(false);
                              setShowLogoutConfirm(true);
                            }}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[10px] uppercase tracking-widest font-black transition-all text-rose-500 hover:bg-rose-500/10`}
                          >
                            <LogOut size={14} />
                            Logout
                          </button>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => {
                    setAuthMode('login');
                    setActiveTab('dashboard');
                  }}
                  className={`px-3 py-1.5 md:px-6 md:py-2.5 text-[8px] md:text-[10px] uppercase tracking-widest font-black transition-all duration-300 border rounded-full ${theme === 'dark' ? 'text-purple-400 border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10' : 'text-purple-600 border-purple-200 bg-purple-50/50 hover:bg-purple-100'}`}
                >
                  Sign In
                </button>
                <button 
                  onClick={() => {
                    setAuthMode('register');
                    setActiveTab('dashboard');
                  }}
                  className="px-3 py-1.5 md:px-6 md:py-2.5 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-black text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full transition-all duration-300 active:scale-95"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-1 flex flex-col w-full overflow-x-hidden"
        >
          {renderTabContent()}
        </motion.div>
      </AnimatePresence>

      {/* Main Footer */}
      <footer className={`pt-24 pb-12 px-6 lg:px-16 border-t transition-all duration-700 overflow-hidden relative ${theme === 'dark' ? 'bg-[#020203] border-white/5' : 'bg-white border-slate-200'}`}>
        {/* Aesthetic Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className={`absolute inset-0 opacity-[0.03] ${theme === 'dark' ? 'bg-[url("https://www.transparenttextures.com/patterns/carbon-fibre.png")]' : 'bg-[url("https://www.transparenttextures.com/patterns/cubes.png")]'}`}></div>
          <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]' : 'bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)]'} bg-[size:40px_40px]`}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">
            {/* Column 1: Brand */}
            <div className="space-y-8 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-2xl transition-transform hover:rotate-12 ${theme === 'dark' ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'}`}>
                  <Logo className="w-6 h-6" />
                </div>
                <h3 className={`text-xl font-serif italic tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  Connect<span className="text-purple-500">Crewz</span>
                </h3>
              </div>
              <p className={`text-sm font-medium leading-relaxed max-w-xs md:max-w-md ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                Connect with professionals for all your home and office maintenance needs. Reliable service, every time.
              </p>
              <div className="flex items-center gap-4">
                {[
                  { icon: Twitter, name: 'Twitter' },
                  { icon: Instagram, name: 'Instagram' },
                  { icon: Facebook, name: 'Facebook' }
                ].map((social) => (
                  <button key={social.name} className={`p-2.5 rounded-xl transition-all cursor-pointer ${theme === 'dark' ? 'bg-white/5 text-slate-500 hover:text-white' : 'bg-slate-100 text-slate-400 hover:text-slate-900 shadow-sm'}`}>
                    <social.icon size={18} />
                  </button>
                ))}
              </div>
            </div>

            {/* Column 2: Platform */}
            <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
              <h4 className={`text-[10px] font-black uppercase tracking-[0.3em] mb-8 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-900'}`}>Platform</h4>
              <ul className="space-y-4 w-full">
                {[
                  { name: 'Home', tab: 'home' },
                  { name: 'About Us', tab: 'about' },
                  { name: 'Our Services', tab: 'services' },
                  { name: 'Help Center', tab: 'help' }
                ].map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => setActiveTab(link.tab as any)}
                      className="text-slate-500 hover:text-purple-500 text-[11px] font-bold uppercase tracking-wider transition-colors py-1 cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Categories */}
            <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
              <h4 className={`text-[10px] font-black uppercase tracking-[0.3em] mb-8 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-900'}`}>Categories</h4>
              <ul className="space-y-4 w-full">
                {['Plumbing', 'Electrical', 'Cleaning', 'Painting', 'Appliance Repair'].map((service) => (
                  <li key={service}>
                    <button 
                      onClick={() => onBookService(service)}
                      className="text-slate-500 hover:text-indigo-500 text-[11px] font-bold uppercase tracking-wider transition-colors py-1 cursor-pointer"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Newsletter/Status */}
            <div className="space-y-8 flex flex-col items-center sm:items-start">
              <div className="w-full">
                <h4 className={`text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-center sm:text-left ${theme === 'dark' ? 'text-slate-300' : 'text-slate-900'}`}>Stay Updated</h4>
                <div className="flex gap-2 w-full max-w-sm mx-auto sm:mx-0">
                  <input 
                    type="email" 
                    placeholder="EMAIL ADDRESS" 
                    className={`flex-1 px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest outline-none transition-all ${theme === 'dark' ? 'bg-white/5 border border-white/10 focus:border-purple-500 text-white' : 'bg-slate-100 border border-transparent focus:bg-white focus:border-slate-300 text-slate-900'}`}
                  />
                  <button className="px-5 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/30 cursor-pointer">
                    <Rocket size={14} />
                  </button>
                </div>
              </div>
              
              <div className={`p-6 rounded-3xl border group w-full max-w-sm mx-auto sm:mx-0 ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-100 shadow-sm'}`}>
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500">All Systems Go</span>
                </div>
                <p className="text-[10px] font-bold text-slate-500 leading-relaxed uppercase tracking-wider text-center sm:text-left">Working smoothly for you</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={`pt-12 border-t flex flex-col md:flex-row items-center justify-between gap-12 ${theme === 'dark' ? 'border-white/5' : 'border-slate-100'}`}>
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-6">
                {['Privacy Policy', 'Terms of Service', 'Legal'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => setActiveTab('help')}
                    className={`text-[9px] font-black uppercase tracking-[0.25em] transition-colors hover:text-purple-500 cursor-pointer ${theme === 'dark' ? 'text-slate-700' : 'text-slate-400'}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <p className={`text-[10px] font-black uppercase tracking-[0.25em] ${theme === 'dark' ? 'text-slate-800' : 'text-slate-300'}`}>
                © 2026 ConnectCrewz • Built by 
                <span className="text-purple-500 ml-1">Pranay Kumar Reddy</span>
              </p>
            </div>

            <div className="flex items-center gap-8">
              {['App Store', 'Play Store'].map((store) => (
                <div key={store} className="group cursor-pointer text-center md:text-right">
                  <p className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-500 mb-1">Coming Soon</p>
                  <p className={`text-xs font-serif italic tracking-tight transition-colors ${theme === 'dark' ? 'text-white/50 group-hover:text-white' : 'text-slate-400 group-hover:text-slate-900'}`}>{store}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Logout Confirmation Modal */}
      <AnimatePresence>
        {showLogoutConfirm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLogoutConfirm(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className={`relative z-10 w-full max-w-sm p-8 rounded-[2rem] border shadow-2xl transition-all duration-300 ${theme === 'dark' ? 'bg-[#0e0e11] border-white/10' : 'bg-white border-slate-200'}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-rose-500/10 text-rose-500 rounded-2xl flex items-center justify-center mb-6">
                  <LogOut size={32} />
                </div>
                <h3 className={`text-xl font-bold mb-2 uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Logout Confirmation</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                  Are you sure you want to logout? You will need to sign in again to access your dashboard.
                </p>
                <div className="flex flex-col md:flex-row items-stretch md:items-center w-full gap-3">
                  <button 
                    onClick={logout}
                    className="flex-1 py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-lg shadow-rose-500/20 active:scale-95"
                  >
                    Yes, Logout
                  </button>
                  <button 
                    onClick={() => setShowLogoutConfirm(false)}
                    className={`flex-1 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] border transition-all active:scale-95 ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'}`}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Rating Modal */}
      <AnimatePresence>
        {ratingBooking && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setRatingBooking(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className={`relative z-10 w-full max-w-sm p-8 rounded-[2rem] border shadow-2xl transition-all duration-300 ${theme === 'dark' ? 'bg-[#0e0e11] border-white/10' : 'bg-white border-slate-200'}`}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mb-6">
                  <Star size={32} />
                </div>
                <h3 className={`text-xl font-bold mb-2 uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Rate Service</h3>
                <p className="text-slate-500 text-sm mb-8 text-center leading-relaxed">
                  How was your experience with <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{ratingBooking.service}</span>?
                </p>
                
                <form onSubmit={handleRateBooking} className="w-full space-y-6">
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRatingValue(star)}
                        className={`p-1 transition-all hover:scale-110 ${ratingValue >= star ? 'text-amber-500' : 'text-slate-700'}`}
                      >
                        <Star size={24} fill={ratingValue >= star ? 'currentColor' : 'none'} />
                      </button>
                    ))}
                  </div>
                  
                  <div>
                    <label className="block text-[9px] uppercase tracking-widest text-slate-500 font-bold mb-1.5 ml-1">Review (Optional)</label>
                    <textarea
                      placeholder="Tell us more about the service..."
                      className={`w-full px-4 py-2.5 rounded-xl text-xs outline-none transition-all min-h-[80px] resize-none ${theme === 'dark' ? 'bg-[#0a0a0b] border-white/5 focus:border-purple-500/50 text-white' : 'bg-slate-50 border-slate-200 focus:border-purple-400 text-slate-900'}`}
                      value={ratingReview}
                      onChange={(e) => setRatingReview(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="flex flex-col md:flex-row items-stretch md:items-center w-full gap-3">
                    <button 
                      type="submit"
                      className="flex-1 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-lg shadow-amber-500/20 active:scale-95"
                    >
                      Submit Rating
                    </button>
                    <button 
                      type="button"
                      onClick={() => setRatingBooking(null)}
                      className={`flex-1 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] border transition-all active:scale-95 ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'}`}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {/* Toast Notifications */}
      <div className="fixed bottom-20 right-6 z-[200] flex flex-col gap-3 items-end pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              className={`pointer-events-auto px-6 py-4 rounded-2xl shadow-2xl border flex items-center gap-3 backdrop-blur-xl min-w-[280px] max-w-sm ${
                toast.type === 'success' 
                  ? (theme === 'dark' ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400' : 'bg-white border-emerald-200 text-emerald-600')
                  : toast.type === 'warning'
                    ? (theme === 'dark' ? 'bg-rose-500/20 border-rose-500/30 text-rose-400' : 'bg-white border-rose-200 text-rose-600')
                    : (theme === 'dark' ? 'bg-purple-500/20 border-purple-500/30 text-purple-400' : 'bg-white border-purple-200 text-purple-600')
              }`}
            >
              <div className={`p-2 rounded-xl scale-90 ${
                toast.type === 'success' ? 'bg-emerald-500 text-white' : 
                toast.type === 'warning' ? 'bg-rose-500 text-white' : 
                'bg-purple-500 text-white'
              }`}>
                {toast.type === 'success' ? <CheckCircle2 size={16} /> : 
                 toast.type === 'warning' ? <AlertCircle size={16} /> : 
                 <Info size={16} />}
              </div>
              <p className="text-[11px] font-black uppercase tracking-tight leading-snug">{toast.message}</p>
              <button 
                onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
                className="ml-auto opacity-50 hover:opacity-100 transition-opacity"
              >
                <PlusCircle size={16} className="rotate-45" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>

      </div>
    </div>
  );
}
