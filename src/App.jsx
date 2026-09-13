import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Calendar, MapPin, Users, Mic2, Clock, Award, Ticket, ChevronDown, ArrowRight, Sparkles, Mountain, Building2, Mail, Globe, Link2, Share2 } from 'lucide-react'

// --- Data placeholders for Ranchi ---
const stats = ["10+ Speakers", "800+ Participants", "10+ Sessions", "2+ Workshops", "Networking", "Swag & Goodies"]

const speakers = [
  { name: "Pankaj Rai", role: "GDE Android & Firebase", company: "Google Developer Expert", color: "bg-gdgBlue", track: "Android", talk: "Modern Android with Gemini", featured: true },
  { name: "Aprajita Verma", role: "Frontend Architect", company: "@MYCOM", color: "bg-gdgRed", track: "Web", talk: "Design Systems at Scale", featured: true },
  { name: "Vivek Yadav", role: "Enterprise Solutions Architect", company: "@FlutterFlow", color: "bg-gdgYellow", track: "Flutter", talk: "FlutterFlow in Production", featured: false },
  { name: "Om Prakash", role: "Founder & CEO", company: "AppyCrown", color: "bg-gdgGreen", track: "Startup", talk: "Building for Bharat", featured: false },
  { name: "Rajesh Ranjan", role: "Deep Tech Angel Investor", company: "Investor", color: "bg-gdgBlue", track: "AI", talk: "Investing in Deep Tech", featured: false },
  { name: "Chandan Tiwari", role: "Serial Entrepreneur", company: "Founder", color: "bg-gdgRed", track: "Product", talk: "Zero to One, Again", featured: false },
  { name: "Kumar Saurabh", role: "Startup Evangelist", company: "Community Lead", color: "bg-gdgGreen", track: "Community", talk: "Community Led Growth", featured: false },
  { name: "Aarohi Singh", role: "AI/ML Engineer", company: "GDG Ranchi", color: "bg-gdgYellow", track: "GenAI", talk: "GenAI for Developers", featured: false },
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
  const carouselRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2400)
    return () => clearTimeout(t)
  }, [])

  const scrollCarousel = (dir) => {
    if (!carouselRef.current) return
    carouselRef.current.scrollBy({ left: dir === 'left' ? -360 : 360, behavior: 'smooth' })
  }

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

            {/* GDG / Google Developer PNGs floating - developer elements */}
            <motion.img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/48px-Google_%22G%22_logo.svg.png"
              alt="Google"
              className="absolute top-[18%] left-[12%] w-12 h-12 md:w-14 md:h-14 object-contain bg-white border-2 border-black rounded-xl p-1.5 shadow-[3px_3px_0_0_#000] hidden md:block"
              animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/200px-Android_robot.svg.png"
              alt="Android"
              className="absolute top-[20%] right-[14%] w-11 h-11 md:w-12 md:h-12 object-contain bg-white border-2 border-black rounded-xl p-1 shadow-[3px_3px_0_0_#000] hidden md:block"
              animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />
            <motion.img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Google-flutter-logo.png/240px-Google-flutter-logo.png"
              alt="Flutter"
              className="absolute bottom-[22%] left-[10%] w-12 h-12 md:w-14 md:h-8 object-contain bg-white border-2 border-black rounded-xl p-1.5 shadow-[3px_3px_0_0_#000] hidden md:block"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            />
            <motion.img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/200px-Firebase_Logo.svg.png"
              alt="Firebase"
              className="absolute bottom-[20%] right-[12%] w-11 h-11 md:w-12 md:h-12 object-contain bg-white border-2 border-black rounded-xl p-1 shadow-[3px_3px_0_0_#000] hidden md:block"
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/256px-Google_Cloud_logo.svg.png"
              alt="Google Cloud"
              className="absolute top-[48%] left-[6%] w-10 h-10 md:w-11 md:h-11 object-contain bg-white border-2 border-black rounded-lg p-1 shadow-[2px_2px_0_0_#000] hidden lg:block"
              animate={{ y: [0, -6, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            />
            <motion.img
              src="https://cdn.worldvectorlogo.com/logos/google-developers-1.svg"
              alt="GDG"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
              className="absolute top-[46%] right-[7%] w-10 h-10 md:w-12 md:h-12 object-contain bg-white border-2 border-black rounded-lg p-1.5 shadow-[2px_2px_0_0_#000] hidden lg:block"
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            />

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
          <div className="text-center pt-10 md:pt-8 pb-[210px] md:pb-[290px] max-w-[900px] mx-auto relative w-full">
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

        {/* hero.png - height thodi kam, width same, neatly inside */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none select-none flex justify-center px-2 md:px-4">
          <img src="/hero.png" alt="Ranchi Skyline - Jagannath Mandir, Hundru Falls, JSCA, Hills" className="w-full h-auto max-h-[190px] md:max-h-[260px] lg:max-h-[300px] object-contain object-bottom" />
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

      {/* About - Premium Editorial Split */}
      <section id="about" className="relative overflow-hidden bg-white border-y-[3px] border-black">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: `linear-gradient(to right, #0D2818 1px, transparent 1px), linear-gradient(to bottom, #0D2818 1px, transparent 1px)`, backgroundSize: '36px 36px' }} />
        <div className="absolute top-0 left-0 w-full h-[7px] flex">
          <div className="flex-1 bg-gdgBlue" /><div className="flex-1 bg-gdgRed" /><div className="flex-1 bg-gdgYellow" /><div className="flex-1 bg-gdgGreen" />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-start">
            {/* Left - Editorial */}
            <div>
              <motion.div initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 bg-[#FFFBF0] border-2 border-black rounded-full px-3 py-1 text-xs font-extrabold shadow-[2px_2px_0_0_#000]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <span className="w-2 h-2 bg-gdgBlue rounded-full animate-pulse" /> ABOUT • COMMUNITY • 2026
              </motion.div>

              <div className="mt-5 flex gap-4">
                <div className="hidden sm:flex flex-col items-center">
                  <span className="text-[11px] font-extrabold tracking-[0.2em] text-black/30" style={{ writingMode: 'vertical-rl' }}>WHAT IS</span>
                  <div className="w-[2px] flex-1 bg-black/10 mt-2 rounded-full" />
                </div>
                <div>
                  <h2 className="text-[42px] md:text-[56px] font-extrabold leading-[0.9] tracking-[-0.04em]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>
                    <span className="block text-black/30 text-[14px] tracking-[0.28em] font-extrabold mb-1">WHAT IS</span>
                    DevFest<span className="inline-block bg-gdgYellow border-[2.5px] border-black rounded-full px-3 py-0.5 text-[30px] md:text-[40px] ml-2 -rotate-1 shadow-[4px_4px_0_0_#000]">?</span>
                  </h2>

                  <div className="mt-6 space-y-4 text-[14px] md:text-[15px] leading-relaxed text-black/70 font-medium" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <p className="border-l-[3px] border-gdgBlue pl-4">
                      DevFest is an annual, globally recognized, decentralized tech conference hosted by <span className="font-extrabold text-black">Google Developer Groups</span> across the world. Thousands of developers, learners, and tech enthusiasts come together to explore cutting-edge technologies.
                    </p>
                    <p>
                      <span className="font-extrabold text-black bg-[#FFFBF0] border border-black px-1.5 py-0.5 rounded">DevFest Ranchi 2026</span> marks the inaugural edition in the capital of Jharkhand — built for meaningful learning, collaboration, and strengthening the developer community in the region. Organized by <span className="font-bold text-black">GDG Ranchi</span>, this DevFest brings a full day of expert sessions, workshops, lightning talks, demos, and networking.
                    </p>
                    <p className="bg-ranchiGreen text-white rounded-xl px-4 py-3 border-2 border-black shadow-[3px_3px_0_0_#000] text-sm">
                      Celebrating Ranchi's spirit — the <span className="font-extrabold text-gdgYellow">City of Waterfalls</span> — with a local flavor of Sohrai art, tribal culture, and the youthful energy of Jharkhand. Learn, build, and connect.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      { k: "14th", l: "Global Edition" },
                      { k: "1st", l: "Ranchi Edition" },
                      { k: "800+", l: "Developers" },
                    ].map(s => (
                      <div key={s.k} className="bg-white border-2 border-black rounded-full px-4 py-2 flex items-center gap-2 shadow-[2px_2px_0_0_#000]">
                        <span className="font-extrabold text-[16px]">{s.k}</span><span className="text-xs font-bold text-black/60">{s.l}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right - What to Expect - Bento cool */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="bg-[#FFFBF0] border-[2.5px] border-black rounded-[24px] p-5 md:p-6 shadow-[6px_6px_0_0_#000] relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gdgYellow/20 rounded-full blur-[30px]" />
              <div className="flex items-center justify-between">
                <h3 className="text-[18px] md:text-[20px] font-extrabold tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>What to Expect</h3>
                <span className="hidden sm:inline-flex text-[11px] font-extrabold tracking-widest bg-black text-white rounded-full px-3 py-1">4 EXPERIENCES</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-3.5 mt-5">
                {[
                  { t: "Technical Content", d: "In-depth insights from experts on AI, Cloud, Web, Android & Flutter.", icon: Mic2, color: "bg-gdgBlue", rot: "-rotate-1" },
                  { t: "Networking", d: "Meet 800+ developers, founders, and hiring managers.", icon: Users, color: "bg-gdgGreen", rot: "rotate-1" },
                  { t: "Fun Activities", d: "Quizzes, swag, photo booths & community challenges.", icon: Sparkles, color: "bg-gdgYellow", rot: "rotate-1" },
                  { t: "Knowledge Sharing", d: "Lightning talks, demos, and hands-on workshops.", icon: Award, color: "bg-gdgRed", rot: "-rotate-1" },
                ].map((c, i) => (
                  <motion.div key={c.t} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 * i }} whileHover={{ y: -3, rotate: i % 2 === 0 ? -0.7 : 0.7 }} className={`bg-white border-2 border-black rounded-2xl p-4 shadow-[3px_3px_0_0_#000] hover:shadow-[5px_5px_0_0_#000] transition-all ${c.rot}`}>
                    <div className={`w-10 h-10 rounded-xl ${c.color} border-2 border-black flex items-center justify-center shadow-[2px_2px_0_0_#000]`}><c.icon size={18} strokeWidth={2.5} /></div>
                    <div className="font-extrabold mt-3 text-[14px] tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{c.t}</div>
                    <div className="text-xs font-semibold text-black/60 mt-1 leading-relaxed">{c.d}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 bg-black text-white rounded-full px-4 py-2.5 flex items-center justify-between text-xs font-bold">
                <span>Full day • One stage • Many tracks</span><span className="hidden sm:inline bg-white text-black rounded-full px-2 py-1 text-[11px] font-extrabold">09 AM — 05 PM</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speakers - Premium Editorial */}
      <section id="speakers" className="bg-[#FFFBF0] border-y-[3px] border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(to right, #0D2818 1px, transparent 1px), linear-gradient(to bottom, #0D2818 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
        <div className="absolute -top-20 right-0 w-[420px] h-[420px] bg-gdgBlue/8 rounded-full blur-[60px]" />
        <div className="absolute -bottom-20 left-0 w-[420px] h-[420px] bg-gdgYellow/10 rounded-full blur-[60px]" />

        <div className="relative max-w-[1280px] mx-auto px-4 md:px-6 py-12 md:py-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-white border-2 border-black rounded-full px-3 py-1 text-xs font-extrabold shadow-[2px_2px_0_0_#000]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <span className="w-2 h-2 bg-gdgRed rounded-full animate-pulse" /> LEARN FROM THE BEST • 2026 LINEUP
              </div>
              <h2 className="mt-3 text-[38px] md:text-[52px] font-extrabold tracking-[-0.04em] leading-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>
                Our <span className="bg-gdgYellow border-[2.5px] border-black rounded-full px-4 py-1 text-[32px] md:text-[42px] shadow-[4px_4px_0_0_#000] inline-block -rotate-1">Speakers</span>
              </h2>
              <p className="mt-3 text-sm md:text-[15px] text-black/60 max-w-[580px] font-semibold leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Industry experts, GDEs & community leaders — sharing real-world insights on <span className="font-extrabold text-black">AI, Android, Web & Cloud</span> to level up your craft.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-1.5 bg-white border-2 border-black rounded-full px-3 py-2 shadow-[2px_2px_0_0_#000]">
                <span className="w-2.5 h-2.5 rounded-full bg-gdgBlue" /><span className="w-2.5 h-2.5 rounded-full bg-gdgRed" /><span className="w-2.5 h-2.5 rounded-full bg-gdgYellow" /><span className="w-2.5 h-2.5 rounded-full bg-gdgGreen" />
              </div>
              <div className="bg-black text-white rounded-full px-4 py-2 text-xs font-extrabold border-2 border-black">8 Speakers • TBA</div>
            </div>
          </div>

          {/* Horizontal Carousel - Cool distinct layout */}
          <div className="relative mt-8">
            {/* scroll buttons - desktop */}
            <button onClick={() => scrollCarousel('left')} className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border-2 border-black rounded-full items-center justify-center shadow-[3px_3px_0_0_#000] hover:bg-black hover:text-white transition">
              <ChevronDown size={18} className="rotate-90" />
            </button>
            <button onClick={() => scrollCarousel('right')} className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border-2 border-black rounded-full items-center justify-center shadow-[3px_3px_0_0_#000] hover:bg-black hover:text-white transition">
              <ChevronDown size={18} className="-rotate-90" />
            </button>

            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {speakers.map((s, idx) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07 }}
                  whileHover={{ y: -6, rotate: idx % 2 === 0 ? -0.6 : 0.6 }}
                  className={`${s.featured ? 'min-w-[320px] md:min-w-[380px]' : 'min-w-[300px] md:min-w-[320px]'} snap-center shrink-0 group bg-white border-[2.5px] border-black rounded-[22px] overflow-hidden shadow-[5px_5px_0_0_#000] hover:shadow-[7px_7px_0_0_#000] transition-all cursor-pointer flex flex-col`}
                >
                  <div className={`relative ${s.featured ? 'h-[176px]' : 'h-[160px]'} ${s.color} p-4 flex flex-col justify-between overflow-hidden`}>
                    <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`, backgroundSize: '14px 14px' }} />
                    <div className="absolute -right-1 -top-1 text-[68px] font-extrabold text-white/15 leading-none select-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.name.split(' ').map(n=>n[0]).join('')}</div>

                    <div className="relative flex justify-between items-start">
                      <span className="bg-white border-2 border-black rounded-full px-2.5 py-1 text-[10px] font-extrabold tracking-widest shadow-[2px_2px_0_0_#000]">{s.track}</span>
                      <span className="bg-black text-white rounded-full px-2.5 py-1 text-[10px] font-bold">0{idx + 1}</span>
                    </div>

                    <div className="relative flex items-center gap-3">
                      <div className="w-[64px] h-[64px] md:w-[72px] md:h-[72px] rounded-full bg-white border-[2.5px] border-black flex items-center justify-center text-lg md:text-xl font-extrabold shadow-[3px_3px_0_0_#000] group-hover:scale-[1.05] transition shrink-0">
                        {s.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="bg-white border border-black rounded-full px-2 py-0.5 text-[10px] font-bold inline-block truncate max-w-[150px]">{s.company}</div>
                        <div className="mt-1.5 bg-black text-white rounded-full px-2.5 py-1 text-xs font-bold inline-block max-w-full truncate">{s.talk}</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col bg-white">
                    <div className="font-extrabold text-[17px] leading-tight tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.name}</div>
                    <div className="text-xs font-bold text-black/55 mt-0.5">{s.role}</div>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-[#FFFBF0] border-2 border-black">View Talk →</span>
                      <span className={`ml-auto w-8 h-8 rounded-full ${s.color} border-2 border-black flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition`}><ArrowRight size={13} strokeWidth={2.5} /></span>
                    </div>
                  </div>

                  {/* bottom color strip */}
                  <div className="h-[6px] w-full flex">
                    <div className="flex-1 bg-gdgBlue" /><div className="flex-1 bg-gdgRed" /><div className="flex-1 bg-gdgYellow" /><div className="flex-1 bg-gdgGreen" />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-2 flex justify-center gap-1.5 md:hidden">
              <span className="text-xs font-bold text-black/40">← Swipe to explore →</span>
            </div>
            <div className="hidden md:flex justify-center gap-1.5 mt-3">
              <span className="w-6 h-1.5 bg-black rounded-full" /><span className="w-1.5 h-1.5 bg-black/20 rounded-full" /><span className="w-1.5 h-1.5 bg-black/20 rounded-full" />
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-3 bg-white border-2 border-black rounded-full px-4 py-3 shadow-[3px_3px_0_0_#000]">
            <span className="text-xs font-bold text-black/60">* Final lineup TBA — curated with GDG & community. Want to speak?</span>
            <a href="mailto:gdg.ranchi@gmail.com" className="px-5 py-2 rounded-full bg-black text-white text-xs font-extrabold border border-black hover:bg-white hover:text-black transition">Apply as Speaker →</a>
          </div>
        </div>
      </section>

      {/* Agenda - Normal Ranchi DevFest Theme */}
      <section id="agenda" className="relative overflow-hidden bg-white border-y-[3px] border-black">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(to right, #0D2818 1px, transparent 1px), linear-gradient(to bottom, #0D2818 1px, transparent 1px)`, backgroundSize: '36px 36px' }} />
        <div className="absolute top-0 left-0 w-full h-[6px] flex">
          <div className="flex-1 bg-gdgBlue" /><div className="flex-1 bg-gdgRed" /><div className="flex-1 bg-gdgYellow" /><div className="flex-1 bg-gdgGreen" />
        </div>
        <div className="absolute -top-16 -right-20 w-[380px] h-[380px] bg-gdgBlue/6 rounded-full blur-[60px]" />
        <div className="absolute -bottom-16 -left-20 w-[380px] h-[380px] bg-gdgYellow/8 rounded-full blur-[60px]" />

        <div className="relative max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FFFBF0] border-2 border-black rounded-full px-3 py-1 text-xs font-extrabold shadow-[2px_2px_0_0_#000]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <span className="w-2 h-2 bg-gdgGreen rounded-full animate-pulse" /> FULL DAY • ONE STAGE • MANY TRACKS
              </div>
              <h2 className="mt-3 text-[32px] md:text-[46px] font-extrabold tracking-[-0.04em] leading-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>
                Agenda <span className="inline-block bg-black text-white border-2 border-black rounded-full px-3 py-1 text-[13px] md:text-[15px] rotate-1 ml-1">09 AM — 05:30 PM</span>
              </h2>
              <p className="mt-2 text-sm font-semibold text-black/60 max-w-[520px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                A power-packed day of learning, building, and networking — <span className="text-black font-extrabold">Sohrai soul, Sal-forest calm</span> and Ranchi's waterfall energy.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-white border-2 border-black rounded-full px-3 py-1.5 text-xs font-extrabold shadow-[2px_2px_0_0_#000] hidden md:inline-flex">6 Sessions</span>
              <span className="bg-black text-white rounded-full px-3 py-1.5 text-xs font-extrabold">09 AM — 05:30 PM</span>
            </div>
          </div>

          {/* grid - all visible without scroll */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {agenda.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4, rotate: i % 2 === 0 ? -0.6 : 0.6 }}
                className="group"
              >
                <div className="flex justify-center -mb-3 relative z-10">
                  <div className={`w-10 h-10 rounded-full ${i === 0 ? 'bg-gdgBlue' : i === 1 ? 'bg-gdgRed' : i === 2 ? 'bg-gdgYellow text-black' : i === 3 ? 'bg-gdgGreen' : i === 4 ? 'bg-ranchiGreen' : 'bg-gdgBlue'} border-[2.5px] border-black flex items-center justify-center shadow-[2px_2px_0_0_#000] text-white font-extrabold text-sm`}>
                    {i + 1}
                  </div>
                </div>
                <div className="bg-white border-[2.5px] border-black rounded-[18px] overflow-hidden shadow-[4px_4px_0_0_#000] group-hover:shadow-[6px_6px_0_0_#000] transition-all">
                  <div className="h-[5px] w-full flex">
                    <div className="flex-1 bg-gdgBlue" /><div className="flex-1 bg-gdgRed" /><div className="flex-1 bg-gdgYellow" /><div className="flex-1 bg-gdgGreen" />
                  </div>
                  <div className="bg-[#FFFBF0] border-b-2 border-black px-3 py-2 flex items-center justify-between">
                    <span className="text-xs font-extrabold tracking-widest bg-black text-white rounded-full px-2.5 py-1">{a.time}</span>
                    <span className="text-[10px] font-extrabold px-2 py-1 rounded-full bg-white border border-black">{i < 2 ? 'Main Stage' : i < 4 ? 'Track' : 'Workshop'}</span>
                  </div>
                  <div className="p-4">
                    <div className="font-extrabold text-[15px] leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{a.title}</div>
                    <div className="text-xs font-semibold text-black/60 mt-1.5 leading-relaxed min-h-[36px]">{a.desc}</div>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-[#FFFBF0] border border-black">
                      <Clock size={12} /> {i === 0 ? 'Welcome' : i === 5 ? 'Closing' : 'Session'}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <span className="inline-flex items-center gap-2 bg-gdgYellow border-2 border-black rounded-full px-4 py-2 text-xs font-extrabold shadow-[2px_2px_0_0_#000]">
              <Sparkles size={14} /> More sessions to be announced • Stay tuned @GDGRanchi
            </span>
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

      {/* Team - Premium Bento */}
      <section id="team" className="relative overflow-hidden bg-[#FFFBF0] border-y-[3px] border-black">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(to right, #0D2818 1px, transparent 1px), linear-gradient(to bottom, #0D2818 1px, transparent 1px)`, backgroundSize: '36px 36px' }} />
        <div className="absolute -top-20 left-0 w-[380px] h-[380px] bg-gdgBlue/8 rounded-full blur-[60px]" />
        <div className="absolute -bottom-20 right-0 w-[380px] h-[380px] bg-gdgGreen/10 rounded-full blur-[60px]" />

        <div className="relative max-w-[1280px] mx-auto px-4 md:px-6 py-12 md:py-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-white border-2 border-black rounded-full px-3 py-1 text-xs font-extrabold shadow-[2px_2px_0_0_#000]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <span className="w-2 h-2 bg-gdgGreen rounded-full animate-pulse" /> THE HUMANS BEHIND THE MAGIC
              </div>
              <h2 className="mt-3 text-[34px] md:text-[48px] font-extrabold tracking-[-0.04em] leading-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>
                Our <span className="inline-block bg-gdgGreen text-white border-[2.5px] border-black rounded-full px-4 py-1 -rotate-1 shadow-[4px_4px_0_0_#000]">Team</span>
              </h2>
              <p className="mt-3 text-sm font-semibold text-black/60 max-w-[560px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Students + professionals building DevFest Ranchi together — <span className="font-extrabold text-black">one community, many teams.</span>
              </p>
            </div>
            <div className="bg-black text-white rounded-full px-4 py-2 text-xs font-extrabold border-2 border-black hidden md:block">8 Members • 3 Squads</div>
          </div>

          {/* Tadakta-Fadakta with Images */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {team.filter(m => m.group === "Overall Lead").map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 14, rotate: i === 0 ? -1 : 1 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -6, rotate: i === 0 ? -1.5 : 1.5, scale: 1.02 }} className="group relative bg-white border-[3px] border-black rounded-[22px] overflow-hidden shadow-[6px_6px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] transition-all">
                <div className={`h-28 ${i === 0 ? 'bg-gdgBlue' : 'bg-gdgRed'} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(white 1.5px, transparent 1.5px)`, backgroundSize: '12px 12px' }} />
                  <div className="absolute -right-6 -top-6 w-20 h-20 bg-white/20 rounded-full blur-[12px]" />
                </div>
                <div className="px-5 pb-5">
                  <div className="-mt-10 relative flex justify-center">
                    <img src={`https://i.pravatar.cc/200?img=${11 + i}`} alt={m.name} className="w-20 h-20 rounded-full border-[3px] border-black object-cover shadow-[3px_3px_0_0_#000] group-hover:scale-105 group-hover:rotate-2 transition" />
                    <span className="absolute -bottom-1 right-1/2 translate-x-8 bg-gdgYellow border-2 border-black rounded-full px-2 py-0.5 text-[10px] font-extrabold">LEAD</span>
                  </div>
                  <div className="text-center mt-3">
                    <div className="font-extrabold text-[17px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{m.name}</div>
                    <div className="text-xs font-bold text-white bg-black rounded-full px-3 py-1 inline-block mt-1">{m.role}</div>
                    <div className="flex justify-center gap-1.5 mt-2">
                      <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center"><Link2 size={10} /></span><span className="w-6 h-6 rounded-full bg-gdgBlue text-white flex items-center justify-center"><Globe size={10} /></span>
                    </div>
                  </div>
                </div>
                <div className="h-1.5 flex"><div className="flex-1 bg-gdgBlue" /><div className="flex-1 bg-gdgRed" /><div className="flex-1 bg-gdgYellow" /><div className="flex-1 bg-gdgGreen" /></div>
              </motion.div>
            ))}
            <motion.div whileHover={{ y: -4, rotate: 1 }} className="bg-gdgYellow border-[3px] border-black rounded-[22px] p-6 shadow-[6px_6px_0_0_#000] flex flex-col justify-center text-center border-dashed relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-white/40 rounded-full" />
              <div className="text-3xl">✨</div>
              <div className="font-extrabold text-[18px] mt-2">Join Us!</div>
              <div className="text-xs font-bold text-black/70 mt-1">Volunteer for DevFest Ranchi 2026 — be the tadka!</div>
              <a href="mailto:gdg.ranchi@gmail.com" className="mt-3 mx-auto bg-black text-white rounded-full px-5 py-2 text-xs font-extrabold flex items-center gap-1">Apply Now <ArrowRight size={12} /></a>
            </motion.div>
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {team.filter(m => m.group !== "Overall Lead").map((m, idx) => {
              const imgId = 20 + idx
              const bg = idx % 4 === 0 ? 'bg-gdgBlue' : idx % 4 === 1 ? 'bg-gdgRed' : idx % 4 === 2 ? 'bg-gdgYellow' : 'bg-gdgGreen'
              return (
                <motion.div key={m.name} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} whileHover={{ y: -5, rotate: idx % 2 === 0 ? -1 : 1 }} className="group bg-white border-[2.5px] border-black rounded-[20px] overflow-hidden shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] transition-all">
                  <div className={`h-20 ${bg} relative overflow-hidden flex items-end justify-center`}>
                    <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `linear-gradient(45deg, transparent 50%, white 50%)`, backgroundSize: '10px 10px' }} />
                    <img src={`https://i.pravatar.cc/200?img=${imgId}`} alt={m.name} className="w-16 h-16 rounded-full border-[2.5px] border-black object-cover -mb-6 shadow-[2px_2px_0_0_#000] group-hover:scale-110 group-hover:-rotate-2 transition" />
                  </div>
                  <div className="pt-8 p-3 text-center">
                    <div className="font-extrabold text-sm leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{m.name}</div>
                    <div className="text-[11px] font-extrabold text-black/60 mt-1 bg-[#FFFBF0] border border-black rounded-full px-2 py-0.5 inline-block">{m.role}</div>
                    <div className="text-[10px] font-bold text-white bg-black rounded-full px-2 py-1 inline-block mt-2">{m.group}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>
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
            <div className="flex items-center gap-3">
              <span>Made with ❤️ by GDG Ranchi Tech Team</span>
              <span className="hidden sm:inline">•</span>
              <a href="https://vasudevai.in" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-gdgYellow transition underline decoration-white/30 underline-offset-4">Build by Vasudev AI →</a>
            </div>
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
