import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Calendar, MapPin, Users, Mic2, Clock, Award, Ticket, ChevronDown, ArrowRight, Sparkles, Mountain, Building2, Mail, Globe, Link2, Share2 } from 'lucide-react'

// --- Data placeholders for Ranchi ---
const stats = ["10+ Speakers", "800+ Participants", "10+ Sessions", "2+ Workshops", "Networking", "Swag & Goodies"]

const speakers = [
  { name: "Pankaj Rai", role: "GDG Android & Firebase", company: "Google Developer Expert", color: "bg-gdgBlue" },
  { name: "Aprajita Verma", role: "Frontend Architect", company: "@MYCOM", color: "bg-gdgRed" },
  { name: "Vivek Yadav", role: "Enterprise Solutions Architect", company: "@FlutterFlow", color: "bg-gdgYellow" },
  { name: "Om Prakash", role: "Founder & CEO", company: "AppyCrown", color: "bg-gdgGreen" },
  { name: "Rajesh Ranjan", role: "Deep Tech Angel Investor", company: "Investor", color: "bg-gdgBlue" },
  { name: "Chandan Tiwari", role: "Serial Entrepreneur", company: "Founder", color: "bg-gdgRed" },
  { name: "Kumar Saurabh", role: "Startup Evangelist", company: "Community Lead", color: "bg-gdgGreen" },
  { name: "Aarohi Singh", role: "AI/ML Engineer", company: "GDG Ranchi", color: "bg-gdgYellow" },
]

const team = [
  { name: "Anurag Verma", role: "Organizer", group: "Overall Lead" },
  { name: "Barkha Agarwal", role: "Co-Organizer", group: "Overall Lead" },
  { name: "Md Alkama", role: "Tech Co-Lead", group: "Team Leads" },
  { name: "Ayush Roy", role: "Tech Co-Lead", group: "Team Leads" },
  { name: "Amikar Ananya", role: "Operation Lead", group: "Team Leads" },
  { name: "Tanya Gupta", role: "Operation Co-Lead", group: "Team Leads" },
  { name: "Shivangi Gupta", role: "Website Developer", group: "Technical Team" },
  { name: "Vishal Kumar", role: "Website Developer", group: "Technical Team" },
]

const agenda = [
  { time: "09:00 AM", title: "Registration & Breakfast", desc: "Check-in, swag collection, networking" },
  { time: "10:00 AM", title: "Opening Keynote", desc: "Welcome by GDG Ranchi + Keynote on AI Future" },
  { time: "11:00 AM", title: "Tech Sessions - Track 1", desc: "Android, Flutter, Web & Cloud" },
  { time: "01:00 PM", title: "Lunch & Networking", desc: "Connect with speakers & community" },
  { time: "02:00 PM", title: "Workshops", desc: "Hands-on: GenAI, Firebase, FlutterFlow" },
  { time: "04:00 PM", title: "Panel + Closing", desc: "Fireside chat & closing ceremony" },
]

const faqs = [
  { q: "What is DevFest?", a: "DevFest is a tech conference led by GDG community, with the goal of exchanging knowledge, networking, and learning about Google Developer Technologies." },
  { q: "Who can attend DevFest Ranchi?", a: "Anyone! Students, professionals, developers, designers, entrepreneurs - if you love technology, you are welcome. No prior GDG membership needed." },
  { q: "What is the venue for DevFest Ranchi 2026?", a: "Venue TBA - Ranchi, Jharkhand. We are finalizing a premium auditorium in central Ranchi. Stay tuned! Announcement soon on our socials @GDGRanchi." },
  { q: "Will accommodation be provided?", a: "We will help outstation attendees with nearby hotel recommendations & discounted group stays. Travel support for speakers will be provided." },
  { q: "How to contact for queries?", a: "Reach us at gdg.ranchi@gmail.com or Telegram @gdgRanchi | Instagram @gdg.ranchi" },
]

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [badgeOpen, setBadgeOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2400)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Cinematic DevFest Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#FFFBF0] flex flex-col items-center justify-center overflow-hidden"
          >
            {/* fine grid + blobs */}
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(to right, #0D2818 1px, transparent 1px), linear-gradient(to bottom, #0D2818 1px, transparent 1px)`, backgroundSize: '36px 36px' }} />
            <div className="absolute -top-20 -left-20 w-[520px] h-[520px] bg-gdgYellow/15 rounded-full blur-[70px]" />
            <div className="absolute -bottom-20 -right-20 w-[520px] h-[520px] bg-gdgBlue/12 rounded-full blur-[70px]" />

            {/* orbital */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full border-[1.5px] border-black/10 border-dashed" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }} className="absolute inset-[18px] rounded-full border border-black/8 border-dotted" />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-3 h-3 bg-gdgBlue rounded-full border-2 border-black" style={{ top: '8px', left: '50%', marginLeft: '-6px' }} />
                <div className="absolute w-2.5 h-2.5 bg-gdgRed rounded-full border-2 border-black" style={{ bottom: '12px', left: '50%', marginLeft: '-5px' }} />
                <div className="absolute w-2 h-2 bg-gdgYellow rounded-full border border-black" style={{ top: '50%', left: '8px', marginTop: '-4px' }} />
                <div className="absolute w-2 h-2 bg-gdgGreen rounded-full border border-black" style={{ top: '50%', right: '8px', marginTop: '-4px' }} />
              </motion.div>
            </div>

            {/* center content */}
            <div className="relative text-center px-6">
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 bg-white border-2 border-black rounded-full px-4 py-1.5 text-xs font-extrabold shadow-[2px_2px_0_0_#000]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <span className="w-2 h-2 bg-gdgGreen rounded-full animate-pulse" /> GDG Ranchi • Jharkhand
              </motion.div>

              <div className="mt-6 overflow-hidden">
                <motion.div initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col items-center">
                  <span className="text-[12px] md:text-[14px] font-extrabold tracking-[0.32em] text-black/50" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>DEVFEST</span>
                  <span className="text-[44px] md:text-[64px] font-extrabold tracking-[-0.04em] leading-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>RANCHI</span>
                  <motion.span initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5, type: "spring" }} className="mt-2 bg-gdgBlue text-white border-[2.5px] border-black rounded-full px-7 py-1.5 text-[20px] md:text-[28px] font-extrabold shadow-[4px_4px_0_0_#000]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>2026</motion.span>
                </motion.div>
              </div>

              {/* Google progress bar */}
              <div className="mt-8 w-[220px] md:w-[260px] mx-auto">
                <div className="h-[6px] bg-white border-2 border-black rounded-full overflow-hidden flex">
                  <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 2, ease: "easeInOut" }} className="h-full flex">
                    <div className="flex-1 bg-gdgBlue" /><div className="flex-1 bg-gdgRed" /><div className="flex-1 bg-gdgYellow" /><div className="flex-1 bg-gdgGreen" />
                  </motion.div>
                </div>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-3 text-xs font-bold tracking-widest text-black/50" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  LOADING EXPERIENCE
                </motion.p>
              </div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-6 flex justify-center gap-1.5">
                {[0, 1, 2].map(i => (
                  <motion.span key={i} animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }} className="w-1.5 h-1.5 bg-black rounded-full" />
                ))}
              </motion.div>
            </div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-6 text-[11px] font-bold tracking-widest text-black/40" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              CITY OF WATERFALLS • SOHRAI ART • COMMUNITY LED
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top tribal border */}
      <div className="tribal-border w-full fixed top-0 z-[60]" />

      {/* Navbar */}
      <nav className="fixed top-[6px] w-full z-50 bg-[#FFFBF0]/80 glass border-b border-black/5">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 h-[64px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-gdgBlue" /><span className="w-2 h-2 rounded-full bg-gdgRed" /><span className="w-2 h-2 rounded-full bg-gdgYellow" /><span className="w-2 h-2 rounded-full bg-gdgGreen" />
            </div>
            <span className="font-black text-[18px] tracking-tight">GDG <span className="font-normal">Ranchi</span></span>
            <span className="hidden sm:inline-flex text-xs bg-black text-white px-2 py-1 rounded-full ml-2">DevFest 2026</span>
          </div>

          <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {["Home", "About", "Speakers", "Agenda", "Sponsors", "Team", "FAQ"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-gdgBlue transition">{l}</a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button onClick={() => setBadgeOpen(true)} className="px-4 py-2 rounded-full border border-black text-sm font-semibold hover:bg-black hover:text-white transition">Get Badge</button>
            <a href="#tickets" className="px-5 py-2 rounded-full bg-gdgBlue text-white text-sm font-semibold hover:bg-blue-600 transition flex items-center gap-2">Get Ticket <ArrowRight size={16} /></a>
          </div>

          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t px-4 py-6 space-y-4">
            {["Home", "About", "Speakers", "Agenda", "Sponsors", "Team", "FAQ"].map(l => (
              <a key={l} onClick={() => setMobileOpen(false)} href={`#${l.toLowerCase()}`} className="block py-2 font-medium">{l}</a>
            ))}
            <button onClick={() => { setBadgeOpen(true); setMobileOpen(false) }} className="w-full py-3 rounded-full border-2 border-black font-bold">Get Your Badge</button>
            <a href="#tickets" onClick={() => setMobileOpen(false)} className="block text-center py-3 rounded-full bg-gdgBlue text-white font-bold">Get Ticket</a>
          </div>
        )}
      </nav>

      {/* HERO - Premium Editorial + Orbital - Full viewport centered */}
      <section id="home" className="pt-[72px] min-h-[100dvh] flex flex-col justify-center relative overflow-hidden bg-[#FFFBF0]">
        {/* Fine square grid - editorial */}
        <div className="absolute inset-0 opacity-[0.045]" style={{
          backgroundImage: `linear-gradient(to right, #0D2818 1px, transparent 1px), linear-gradient(to bottom, #0D2818 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }} />
        {/* Sohrai subtle */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230D2818' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        {/* Gradient blobs - Google energy */}
        <div className="absolute -top-28 -left-24 w-[520px] h-[520px] bg-gdgYellow/18 rounded-full blur-[70px] pointer-events-none" />
        <div className="absolute -top-16 -right-24 w-[560px] h-[560px] bg-gdgGreen/14 rounded-full blur-[70px] pointer-events-none" />
        <div className="absolute top-[260px] left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-gdgBlue/10 rounded-full blur-[60px] pointer-events-none" />

        {/* Orbital circular graphics - centered behind heading */}
        <div className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="relative w-[560px] h-[560px] md:w-[780px] md:h-[780px] opacity-[0.09]">
            <div className="absolute inset-0 rounded-full border-[2px] border-black border-dashed" />
            <div className="absolute inset-[42px] rounded-full border-[1.5px] border-black border-dashed" />
            <div className="absolute top-1/2 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 bg-gdgBlue rounded-full border-2 border-black" style={{ transform: 'translateY(-280px)' }} />
            <div className="absolute top-1/2 left-1/2 w-2.5 h-2.5 -ml-[5px] -mt-[5px] bg-gdgRed rounded-full border-2 border-black" style={{ transform: 'translateY(280px)' }} />
            <div className="absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1 bg-gdgYellow rounded-full border border-black" style={{ transform: 'translateX(-280px)' }} />
            <div className="absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1 bg-gdgGreen rounded-full border border-black" style={{ transform: 'translateX(280px)' }} />
          </motion.div>
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 55, repeat: Infinity, ease: "linear" }} className="absolute inset-0 w-[560px] h-[560px] md:w-[780px] md:h-[780px] opacity-[0.06]">
            <div className="absolute inset-[18px] rounded-full border border-black border-dotted" />
          </motion.div>
        </div>

        {/* Floating Google geometric shapes */}
        <motion.div animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="hidden lg:flex absolute top-[120px] left-[6%] w-12 h-12 bg-gdgYellow border-[2.5px] border-black rounded-xl shadow-[3px_3px_0_0_#000] items-center justify-center">
          <div className="w-3 h-3 bg-black rounded-full" />
        </motion.div>
        <motion.div animate={{ y: [0, 12, 0], rotate: [0, -4, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }} className="hidden lg:flex absolute top-[140px] right-[7%] w-10 h-10 bg-gdgGreen border-[2.5px] border-black rotate-45 shadow-[3px_3px_0_0_#000]" />
        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="hidden md:flex absolute top-[220px] left-[14%] w-7 h-7 bg-gdgRed border-2 border-black rounded-full shadow-[2px_2px_0_0_#000]" />
        <motion.div animate={{ y: [0, 9, 0], rotate: [0, 6, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }} className="hidden md:flex absolute top-[200px] right-[13%] w-8 h-8 bg-gdgBlue border-2 border-black rounded-lg shadow-[2px_2px_0_0_#000] rotate-12" />
        {/* small diamonds */}
        <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3.8, repeat: Infinity }} className="absolute top-[96px] left-[22%] w-3 h-3 bg-black rotate-45 hidden xl:block opacity-80" />
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 4.2, repeat: Infinity, delay: 0.8 }} className="absolute top-[108px] right-[22%] w-2.5 h-2.5 bg-gdgRed rotate-45 hidden xl:block border border-black" />

        <div className="relative max-w-[1280px] mx-auto px-4 md:px-6 w-full flex-1 flex flex-col justify-center">
          {/* CENTERED EDITORIAL TEXT */}
          <div className="text-center py-10 md:py-8 max-w-[900px] mx-auto relative w-full">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2.5 bg-white border-[2px] border-black rounded-full px-4 py-2 text-xs font-bold shadow-[3px_3px_0_0_#000]">
              <span className="w-2 h-2 bg-gdgGreen rounded-full animate-pulse" /> GDG Ranchi presents • 1st Edition in Ranchi
              <span className="hidden sm:inline-flex items-center gap-1.5 ml-2 pl-3 border-l-2 border-black/10"><Sparkles size={12} className="text-gdgYellow" /> Jharkhand — City of Waterfalls</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }} className="leading-[0.82] mt-7 relative">
              <span className="block text-[13px] md:text-[17px] font-extrabold tracking-[0.32em] text-black/55" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>DEVFEST</span>
              <span className="block text-[64px] md:text-[104px] lg:text-[124px] tracking-[-0.05em] font-extrabold text-black" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, letterSpacing: '-0.05em' }}>
                RANCHI
              </span>
              <div className="flex justify-center mt-3">
                <motion.span initial={{ scale: 0.88, rotate: -1 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.55, type: "spring", stiffness: 180 }} className="inline-flex items-center gap-3 bg-gdgBlue text-white border-[3px] border-black rounded-full px-8 md:px-10 py-2.5 md:py-3 text-[30px] md:text-[50px] lg:text-[56px] font-extrabold tracking-tighter shadow-[6px_6px_0_0_#000] leading-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>
                  2026 <span className="hidden sm:inline-flex w-2 h-2 bg-white rounded-full animate-pulse ml-1" />
                </motion.span>
              </div>
              {/* subtle underline scribble */}
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.9, duration: 0.6 }} className="mx-auto mt-4 h-[3px] w-[160px] md:w-[220px] bg-black/10 rounded-full origin-center" />
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="mt-6 text-[14px] md:text-[16px] text-black/65 max-w-[680px] mx-auto leading-relaxed font-semibold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Jharkhand's most awaited community-led tech festival. A premium, hands-on celebration of <span className="font-extrabold text-black">AI, Web, Cloud &amp; Mobile</span> — crafted with Sohrai soul, Sal-forest calm, and Ranchi's waterfall energy.
            </motion.p>

            {/* Date / Venue - neo-brutalism */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mt-8 flex flex-col sm:flex-row gap-3.5 justify-center items-stretch max-w-[600px] mx-auto">
              <motion.div whileHover={{ y: -3, rotate: -0.5 }} className="flex-1 bg-white border-[2.5px] border-black rounded-[18px] px-5 py-4 flex items-center gap-3.5 shadow-[5px_5px_0_0_#000] text-left cursor-default">
                <div className="w-[48px] h-[48px] rounded-xl bg-gdgYellow border-[2px] border-black flex items-center justify-center shrink-0"><Calendar size={20} strokeWidth={2.5} /></div>
                <div>
                  <div className="text-[11px] font-extrabold tracking-widest text-black/45" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>DATE • TBA</div>
                  <div className="font-extrabold text-[16px] leading-none tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>December 2026</div>
                  <div className="text-xs font-semibold text-black/55">Announcement Soon</div>
                </div>
              </motion.div>
              <motion.div whileHover={{ y: -3, rotate: 0.5 }} className="flex-1 bg-black text-white rounded-[18px] px-5 py-4 flex items-center gap-3.5 shadow-[5px_5px_0_0_#000] border-[2.5px] border-black text-left cursor-default">
                <div className="w-[48px] h-[48px] rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0"><MapPin size={20} strokeWidth={2.5} /></div>
                <div>
                  <div className="text-[11px] font-extrabold tracking-widest text-white/60">VENUE • RANCHI</div>
                  <div className="font-bold text-[16px] leading-none tracking-tight">TBA, Ranchi</div>
                  <div className="text-xs font-semibold text-white/60">Jharkhand • India</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="mt-7 flex flex-wrap gap-3 justify-center">
              <motion.button whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} onClick={() => setBadgeOpen(true)} className="group px-8 py-3.5 rounded-full bg-gdgYellow text-black font-extrabold text-[15px] flex items-center gap-2 border-[2.5px] border-black shadow-[5px_5px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] hover:translate-y-[1px] transition-all" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Get Your Badge <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </motion.button>
              <motion.a whileHover={{ y: -2 }} href="#about" className="px-8 py-3.5 rounded-full bg-white border-[2.5px] border-black font-extrabold text-[15px] shadow-[5px_5px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] hover:bg-black hover:text-white transition-all flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Explore Agenda <Sparkles size={16} />
              </motion.a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-4 flex justify-center items-center gap-2 text-xs font-bold text-black/45">
              <span className="w-1.5 h-1.5 bg-gdgGreen rounded-full" /> 800+ participants • 10+ speakers • 2 workshops
            </motion.div>
          </div>


        </div>
      </section>

      {/* marquee stats */}
      <div className="bg-black text-white py-3 overflow-hidden border-y-2 border-black">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...stats, ...stats, ...stats, ...stats].map((s, i) => (
            <span key={i} className="mx-6 flex items-center gap-6 text-sm font-bold tracking-widest">
              <span className="w-1.5 h-1.5 bg-gdgYellow rounded-full" />{s}
            </span>
          ))}
        </div>
      </div>

      {/* Pre-summit banner + tickets */}
      <section id="tickets" className="max-w-[1280px] mx-auto px-4 md:px-6 py-6">
        <div className="bg-[#EAF2FF] border-2 border-black rounded-[20px] p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-[4px_4px_0_0_#000]">
          <div>
            <div className="text-xs font-black tracking-widest text-gdgBlue">COMMUNITY CONFERENCE • RANCHI</div>
            <div className="font-black text-[20px] md:text-[24px]">Tickets Opening Soon!</div>
            <div className="text-sm text-black/60">Early Bird registrations will open shortly. Get your badge now to get notified first.</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button onClick={() => setBadgeOpen(true)} className="px-6 py-3 rounded-full bg-black text-white font-bold text-sm whitespace-nowrap">Notify Me →</button>
            <div className="px-4 py-2 rounded-full bg-white border-2 border-black text-xs font-bold text-center">Sale starts: TBA Dec 2026</div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-[1280px] mx-auto px-4 md:px-6 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="text-xs font-black tracking-[0.18em] text-gdgRed">WHAT IS</div>
            <h2 className="display font-black text-[42px] md:text-[56px] leading-none tracking-tighter">DevFest?</h2>
            <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-black/70">
              <p>DevFest is an annual, globally recognized, decentralized tech conference hosted by Google Developer Groups (GDG) across the world. Thousands of developers, learners, and tech enthusiasts come together to explore cutting-edge technologies.</p>
              <p><strong className="text-black">DevFest Ranchi 2026</strong> marks the inaugural edition in the capital of Jharkhand — built for meaningful learning, collaboration, and strengthening the developer community in the region. Organized by GDG Ranchi, this DevFest brings a full day of expert sessions, workshops, lightning talks, demos, and networking.</p>
              <p>Celebrating Ranchi's spirit — the <strong>City of Waterfalls</strong> — with a local flavor of Sohrai art, tribal culture, and the youthful energy of Jharkhand. Learn, build, and connect with the community.</p>
            </div>
          </div>
          <div className="bg-white border-2 border-black rounded-[24px] p-6 shadow-[6px_6px_0_0_#000]">
            <h3 className="font-black text-[20px]">What to Expect</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-5">
              {[
                { t: "Technical Content", d: "In-depth insights from experts on AI, Cloud, Web, Android & Flutter.", icon: Mic2, color: "bg-gdgBlue" },
                { t: "Networking", d: "Meet 800+ developers, founders, and hiring managers.", icon: Users, color: "bg-gdgGreen" },
                { t: "Fun Activities", d: "Quizzes, swag, photo booths & community challenges.", icon: Sparkles, color: "bg-gdgYellow" },
                { t: "Knowledge Sharing", d: "Lightning talks, demos, and hands-on workshops.", icon: Award, color: "bg-gdgRed" },
              ].map(c => (
                <div key={c.t} className="border-2 border-black rounded-2xl p-4 bg-[#FFFBF0]">
                  <div className={`w-10 h-10 rounded-xl ${c.color} border-2 border-black flex items-center justify-center`}><c.icon size={18} /></div>
                  <div className="font-black mt-3 text-sm">{c.t}</div>
                  <div className="text-xs text-black/60 mt-1 leading-relaxed">{c.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section id="speakers" className="bg-white border-y-2 border-black">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs font-black tracking-widest text-gdgBlue">LEARN FROM THE BEST</div>
              <h2 className="display font-black text-[36px] md:text-[48px] tracking-tighter">Our Speakers</h2>
              <p className="text-sm text-black/60 max-w-[560px]">Hear from industry experts, innovators, and community leaders sharing insights that can elevate your skills and perspective.</p>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gdgBlue" /><span className="w-3 h-3 rounded-full bg-gdgRed" /><span className="w-3 h-3 rounded-full bg-gdgYellow" /><span className="w-3 h-3 rounded-full bg-gdgGreen" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
            {speakers.map(s => (
              <div key={s.name} className="border-2 border-black rounded-[20px] overflow-hidden bg-[#FFFBF0] shadow-[4px_4px_0_0_#000] group hover:translate-y-[-2px] transition">
                <div className={`h-[160px] ${s.color} relative flex items-end justify-center`}>
                  <div className="w-24 h-24 rounded-full bg-white border-2 border-black mb-4 flex items-center justify-center text-2xl font-black">{s.name.split(' ').map(n => n[0]).join('')}</div>
                  <div className="absolute top-3 right-3 bg-white border border-black rounded-full px-2 py-1 text-[10px] font-bold">{s.company}</div>
                </div>
                <div className="p-4 text-center">
                  <div className="font-black text-[15px]">{s.name}</div>
                  <div className="text-xs text-black/60">{s.role}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-black/50 mt-6">* Final speaker lineup TBA — stay tuned on @GDGRanchi</p>
        </div>
      </section>

      {/* Agenda */}
      <section id="agenda" className="max-w-[1280px] mx-auto px-4 md:px-6 py-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <div className="bg-ranchiGreen text-white rounded-[24px] p-7 border-2 border-black shadow-[6px_6px_0_0_#000]">
            <div className="text-gdgYellow text-xs font-black tracking-widest">FULL DAY • ONE STAGE • MANY TRACKS</div>
            <h2 className="display font-black text-[34px] leading-none mt-2">Agenda</h2>
            <p className="text-sm text-white/70 mt-3">A power-packed day of learning, building, and networking. Timings are tentative and will be finalized with venue announcement.</p>
            <div className="mt-6 inline-flex items-center gap-2 bg-white text-black rounded-full px-4 py-2 text-xs font-bold"><Clock size={14} /> 09:00 AM — 05:30 PM • Full Day Event</div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[{ k: "10+", l: "Sessions" }, { k: "2+", l: "Workshops" }, { k: "800+", l: "Attendees" }].map(st => (
                <div key={st.l} className="bg-white/10 rounded-2xl py-3 border border-white/15">
                  <div className="font-black text-xl">{st.k}</div><div className="text-xs text-white/70">{st.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {agenda.map((a, i) => (
              <div key={i} className="flex gap-4 bg-white border-2 border-black rounded-2xl p-4 shadow-[3px_3px_0_0_#000]">
                <div className="shrink-0 w-[92px] text-center">
                  <div className="bg-black text-white rounded-full px-2 py-1 text-xs font-bold">{a.time}</div>
                  <div className="w-px h-full bg-black/10 mx-auto mt-2 hidden md:block" />
                </div>
                <div>
                  <div className="font-black text-[15px]">{a.title}</div>
                  <div className="text-sm text-black/60">{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsors" className="bg-[#FFF8E7] border-y-2 border-black">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 text-center">
          <div className="text-xs font-black tracking-widest text-black/50">THANKS TO OUR SUPPORTERS</div>
          <h2 className="display font-black text-[36px] tracking-tighter">Our Sponsors</h2>
          <p className="text-sm text-black/60 max-w-[600px] mx-auto mt-2">Thanks to our sponsors for supporting DevFest Ranchi. Want to sponsor? Reach us at gdg.ranchi@gmail.com</p>

          <div className="mt-8 space-y-6">
            <div>
              <div className="inline-block bg-gdgYellow border-2 border-black rounded-full px-4 py-1 text-xs font-black tracking-widest shadow-[2px_2px_0_0_#000]">GOLD SPONSOR</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-[96px] bg-white border-2 border-black rounded-2xl flex items-center justify-center font-bold text-black/20">Your Logo Here</div>
                ))}
              </div>
            </div>
            <div>
              <div className="inline-block bg-white border-2 border-black rounded-full px-4 py-1 text-xs font-black tracking-widest">SILVER & COMMUNITY PARTNERS</div>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mt-4">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="h-[72px] bg-white border border-black/15 rounded-xl flex items-center justify-center text-xs font-bold text-black/20">Logo</div>
                ))}
              </div>
            </div>
          </div>

          <a href="mailto:gdg.ranchi@gmail.com" className="inline-flex mt-8 px-6 py-3 bg-black text-white rounded-full font-bold text-sm items-center gap-2">Become a Sponsor <ArrowRight size={16} /></a>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="max-w-[1280px] mx-auto px-4 md:px-6 py-10">
        <div className="text-center">
          <div className="text-xs font-black tracking-widest text-gdgGreen">THE HUMANS BEHIND THE MAGIC</div>
          <h2 className="display font-black text-[36px] md:text-[44px] tracking-tighter">Our Team</h2>
          <p className="text-sm text-black/60 max-w-[600px] mx-auto">Meet the people who make DevFest possible — students and professionals working together across teams.</p>
        </div>

        <div className="mt-8">
          {["Overall Lead", "Team Leads", "Technical Team"].map(group => (
            <div key={group} className="mb-8">
              <h3 className="font-black text-sm tracking-widest text-black/50 mb-3">{group.toUpperCase()}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {team.filter(m => m.group === group).map(m => (
                  <div key={m.name} className="bg-white border-2 border-black rounded-2xl p-4 text-center shadow-[3px_3px_0_0_#000]">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gdgBlue to-gdgGreen mx-auto border-2 border-black flex items-center justify-center text-white font-black">{m.name[0]}</div>
                    <div className="font-bold text-sm mt-3">{m.name}</div>
                    <div className="text-xs text-black/60">{m.role}</div>
                  </div>
                ))}
                {group === "Overall Lead" && <div className="bg-gdgYellow border-2 border-black rounded-2xl p-4 flex flex-col items-center justify-center border-dashed">
                  <div className="font-black text-sm">Join Us!</div><div className="text-xs text-center">Volunteer for DevFest Ranchi 2026</div><a href="mailto:gdg.ranchi@gmail.com" className="mt-2 bg-black text-white rounded-full px-3 py-1 text-xs font-bold">Apply</a>
                </div>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ticket CTA */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-6 pb-6">
        <div className="bg-black rounded-[24px] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-black shadow-[6px_6px_0_0_#999]">
          <div className="text-white">
            <div className="text-gdgYellow text-xs font-black tracking-widest">JOIN THE COMMUNITY-LED EVENT OF THE YEAR</div>
            <div className="font-black text-[28px] md:text-[36px] leading-none mt-1">Get Your Ticket Now</div>
            <div className="text-sm text-white/60 mt-2">Early Bird ends soon • Limited seats • T-shirts & swags included</div>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <button onClick={() => setBadgeOpen(true)} className="px-8 py-4 bg-gdgYellow border-2 border-black rounded-full font-black text-black flex items-center justify-center gap-2 shadow-[3px_3px_0_0_#fff]"><Ticket size={18} /> Get Ticket — Coming Soon</button>
            <div className="text-center text-xs text-white/50">* Ranchi edition • GDG Ranchi 2026</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-[1280px] mx-auto px-4 md:px-6 py-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <div>
            <div className="text-xs font-black tracking-widest text-gdgRed">ANSWERS</div>
            <h2 className="display font-black text-[42px] leading-none tracking-tighter">Frequently Asked</h2>
            <p className="text-sm text-black/60 mt-3">Everything you need to know about DevFest Ranchi 2026.</p>
            <div className="mt-6 hidden lg:block">
              <div className="bg-white border-2 border-black rounded-2xl p-4 inline-flex items-center gap-3 shadow-[3px_3px_0_0_#000]">
                <Mail size={18} /><span className="text-sm font-bold">gdg.ranchi@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="border-2 border-black rounded-2xl bg-white overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="w-full flex items-center justify-between p-4 text-left">
                  <span className="font-bold text-sm pr-4">{f.q}</span>
                  <span className={`w-8 h-8 rounded-full border-2 border-black flex items-center justify-center shrink-0 transition ${openFaq === i ? "bg-black text-white rotate-180" : "bg-white"}`}><ChevronDown size={16} /></span>
                </button>
                {openFaq === i && <div className="px-4 pb-4 text-sm text-black/60 leading-relaxed border-t-2 border-black/10 pt-3 bg-[#FFFBF0]">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ranchiGreen text-white mt-6">
        <div className="tribal-border" />
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10">
          <div className="grid md:grid-cols-[1.4fr_0.8fr_0.8fr] gap-8">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1"><span className="w-2 h-2 rounded-full bg-gdgBlue" /><span className="w-2 h-2 rounded-full bg-gdgRed" /><span className="w-2 h-2 rounded-full bg-gdgYellow" /><span className="w-2 h-2 rounded-full bg-gdgGreen" /></div>
                <span className="font-black">GDG Ranchi</span>
              </div>
              <p className="text-sm text-white/70 mt-3 max-w-[520px]">Google Developer Groups Ranchi is an initiative that brings together developers across Jharkhand to learn, share knowledge, and build with Google technologies.</p>
              <p className="text-sm mt-3 font-semibold">Reach out to us at telegram @gdgRanchi</p>
              <div className="flex gap-3 mt-4">
                {[Globe, Link2, Share2, Mail].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-ranchiGreen transition"><Icon size={16} /></a>
                ))}
              </div>
            </div>
            <div>
              <div className="font-black text-sm tracking-widest">USEFUL LINKS</div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><a href="#home" className="hover:text-white">DevFest 2026</a></li>
                <li><a href="#about" className="hover:text-white">About DevFest</a></li>
                <li><a href="#speakers" className="hover:text-white">Speakers</a></li>
                <li><a href="#team" className="hover:text-white">Team</a></li>
                <li><a href="#" className="hover:text-white">Community Guidelines</a></li>
              </ul>
            </div>
            <div>
              <div className="font-black text-sm tracking-widest">OUR SOCIALS</div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>Instagram — @gdg.ranchi</li>
                <li>LinkedIn — GDG Ranchi</li>
                <li>Twitter — @GDGRanchi</li>
                <li>Telegram — @gdgRanchi</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50">
            <span>© Google Developer Groups Ranchi 2026</span>
            <span>Made with ❤️ by GDG Ranchi Tech Team</span>
          </div>
        </div>
      </footer>

      {/* Badge Modal */}
      {badgeOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setBadgeOpen(false)} />
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative bg-white border-2 border-black rounded-[24px] p-6 md:p-8 max-w-[480px] w-full shadow-[8px_8px_0_0_#000]">
            <button onClick={() => setBadgeOpen(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center"><X size={16} /></button>
            <div className="text-center">
              <div className="inline-flex bg-gdgYellow border-2 border-black rounded-full px-3 py-1 text-xs font-black">#DevFestRanchi2026</div>
              <h3 className="display font-black text-[28px] mt-3">Get Your Badge</h3>
              <p className="text-sm text-black/60">Show off that you're attending DevFest Ranchi 2026!</p>
            </div>
            <div className="mt-6 bg-[#FFFBF0] border-2 border-black rounded-2xl p-4 flex gap-4 items-center">
              <div className="w-16 h-16 rounded-full bg-gdgBlue border-2 border-black flex items-center justify-center text-white font-black text-xl shrink-0">GR</div>
              <div>
                <div className="font-black">Your Name</div>
                <div className="text-xs text-black/60">is attending DevFest Ranchi 2026</div>
                <div className="text-xs font-bold mt-1">📍 Ranchi, Jharkhand • Dec 2026</div>
              </div>
            </div>
            <input placeholder="Enter your name" className="mt-4 w-full border-2 border-black rounded-full px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gdgBlue" />
            <button className="mt-3 w-full py-3 rounded-full bg-black text-white font-bold">Generate Badge (Coming Soon)</button>
            <p className="text-xs text-center text-black/50 mt-3">Badges will be live once registrations open</p>
          </motion.div>
        </div>
      )}
    </div>
  )
}
