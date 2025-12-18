import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Users, 
  Brain, 
  FileText, 
  Activity, 
  Lock,
  Server,
  Network,
  Menu,
  X,
  ChevronRight,
  Send,
  Loader2,
  XCircle
} from 'lucide-react';

// Koru Impact Logo Component
const KoruLogo: React.FC<{ className?: string }> = ({ className = "h-12" }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Koru Text */}
    <text x="100" y="45" textAnchor="middle" fontFamily="Lato, sans-serif" fontWeight="900" fontSize="36" fill="#2563EB">Koru</text>
    
    {/* Plant Graphic */}
    <g transform="translate(100, 110) scale(0.6)">
      {/* Central Stem (Blue) */}
      <path d="M-5 60 C-5 30, 5 30, 5 0 C5 -30, -5 -30, -5 -60" stroke="#2563EB" strokeWidth="12" strokeLinecap="round" />
      
      {/* Leaves (Green) - Right Side */}
      <path d="M5 20 Q30 5, 50 15 Q30 35, 5 20" fill="#16A34A" />
      <path d="M5 -20 Q35 -35, 55 -25 Q35 -5, 5 -20" fill="#16A34A" />
      
      {/* Leaves (Green) - Left Side */}
      <path d="M-5 0 Q-30 -15, -50 -5 Q-30 15, -5 0" fill="#16A34A" />
      <path d="M-5 -40 Q-35 -55, -55 -45 Q-35 -25, -5 -40" fill="#16A34A" />

       {/* Bottom Leaves (Large) */}
       <path d="M0 60 Q40 50, 60 40 Q40 80, 0 60" fill="#16A34A" />
       <path d="M0 60 Q-40 50, -60 40 Q-40 80, 0 60" fill="#16A34A" />

      {/* Gold Tip */}
      <path d="M0 -75 L5 -65 L0 -55 L-5 -65 Z" fill="#FBBF24" />
    </g>

    {/* IMPACT Text */}
    <text x="100" y="170" textAnchor="middle" fontFamily="Lato, sans-serif" fontWeight="700" fontSize="24" letterSpacing="0.2em" fill="#2563EB">IMPACT</text>
  </svg>
);

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeModule, setActiveModule] = useState<number | null>(null);

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Enterprise Licensing',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Handle Scroll Effect for Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', interest: 'Enterprise Licensing', message: '' });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const moduleData = [
    {
      id: 1,
      title: "Module 1: Sensing",
      icon: <Activity className="w-6 h-6 text-koru-blue" />,
      color: "border-koru-blue",
      text: "Deploys validated psychometric instruments (ADKAR, SCARF) to assess organizational readiness and quantify resistance.",
      position: "-translate-x-1/2 -translate-y-[180px]"
    },
    {
      id: 2,
      title: "Module 2: Decision",
      icon: <Brain className="w-6 h-6 text-koru-gold" />,
      color: "border-koru-gold",
      text: "Neurosymbolic AI engine using pre-mortem analysis to structure expert judgment and reduce cognitive bias.",
      position: "translate-x-[140px] translate-y-[80px]"
    },
    {
      id: 3,
      title: "Module 3: Compliance",
      icon: <Shield className="w-6 h-6 text-koru-green" />,
      color: "border-koru-green",
      text: "Generates immutable audit artifacts and DORA-compliant documentation via cryptographic hashing.",
      position: "-translate-x-[140px] translate-y-[80px]"
    }
  ];

  return (
    <div className="font-body text-koru-dark bg-white selection:bg-koru-blue selection:text-white">
      
      {/* NAVIGATION */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <KoruLogo className="h-16 w-auto transition-transform group-hover:scale-105" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#evidence" className="font-heading font-bold text-sm text-gray-600 hover:text-koru-blue transition-colors">The Science</a>
            <a href="#architecture" className="font-heading font-bold text-sm text-gray-600 hover:text-koru-blue transition-colors">Architecture</a>
            <a href="#partners" className="font-heading font-bold text-sm text-gray-600 hover:text-koru-blue transition-colors">Partners</a>
            <a href="#contact" className="px-5 py-2.5 bg-koru-blue text-white font-heading font-bold text-sm rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
              Schedule Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg py-4 px-4 flex flex-col space-y-4">
             <a href="#evidence" onClick={() => setIsMobileMenuOpen(false)} className="font-heading font-bold text-gray-600">The Science</a>
             <a href="#architecture" onClick={() => setIsMobileMenuOpen(false)} className="font-heading font-bold text-gray-600">Architecture</a>
             <a href="#partners" onClick={() => setIsMobileMenuOpen(false)} className="font-heading font-bold text-gray-600">Partners</a>
             <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="font-heading font-bold text-koru-blue">Schedule Demo</a>
          </div>
        )}
      </nav>

      {/* SECTION 1: HERO */}
      <header className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent z-0"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-koru-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-koru-green/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 pt-12 lg:pt-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-koru-blue text-xs font-heading font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 bg-koru-gold rounded-full mr-2 animate-pulse"></span>
              Systemic Intelligence
            </div>
            
            <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl text-koru-slate leading-[1.05] mb-8 tracking-tight">
              The Science of <br/>
              <span className="text-koru-blue">Strategic Decision Making.</span>
            </h1>
            
            <p className="font-body text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl border-l-4 border-koru-gold pl-6">
              When 95% of AI initiatives fail to deliver value, the problem isn't the technology. Koru bridges the gap between algorithmic capability and organizational reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-koru-blue text-white font-heading font-bold rounded-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 group">
                Want to work with us
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#architecture" className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-heading font-bold rounded-lg hover:border-koru-green hover:text-koru-green transition-colors">
                Explore Platform
              </a>
            </div>

            <div className="flex items-center space-x-6 text-gray-400">
              <p className="font-heading text-xs font-bold uppercase tracking-widest">Trusted By Leaders In</p>
              <div className="h-px bg-gray-200 w-12"></div>
              <span className="font-heading font-bold text-gray-500">Finance</span>
              <span className="font-heading font-bold text-gray-500">Retail</span>
              <span className="font-heading font-bold text-gray-500">Advisory</span>
            </div>
          </div>

          {/* Right Visual: Interactive Geometric Abstraction */}
          <div className="lg:col-span-5 relative h-[600px] w-full hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Rotating Rings */}
              <div className="absolute w-96 h-96 border border-gray-200 rounded-full animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute w-72 h-72 border border-gray-200 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
              
              {/* Interactive Nodes */}
              {moduleData.map((mod) => (
                <div key={mod.id} className={`absolute top-1/2 left-1/2 ${mod.position} z-20`}>
                  <button 
                    onClick={() => setActiveModule(activeModule === mod.id ? null : mod.id)}
                    className={`relative w-20 h-20 bg-white shadow-xl rounded-2xl flex items-center justify-center border-2 ${mod.color} hover:scale-110 transition-transform cursor-pointer group`}
                  >
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full"></div>
                    {mod.icon}
                  </button>
                  
                  {/* Popup Card */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 mt-4 w-64 bg-white p-4 rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 origin-top z-30 ${activeModule === mod.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                    <div className="flex justify-between items-start mb-2">
                       <h4 className="font-heading font-bold text-koru-slate text-sm">{mod.title}</h4>
                       <button onClick={(e) => { e.stopPropagation(); setActiveModule(null); }} className="text-gray-400 hover:text-gray-600">
                         <XCircle className="w-4 h-4" />
                       </button>
                    </div>
                    <p className="font-body text-xs text-gray-600 leading-relaxed">{mod.text}</p>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"></div>
                  </div>
                </div>
              ))}

              {/* Central Core - Red & Rotating */}
              <div className="relative z-10 w-36 h-36 flex items-center justify-center">
                 {/* Rotating Outer Ring */}
                 <div className="absolute inset-0 border-4 border-dashed border-red-300 rounded-full animate-[spin_10s_linear_infinite]"></div>
                 {/* Solid Core */}
                 <div className="w-28 h-28 bg-red-700 rounded-full flex flex-col items-center justify-center text-white shadow-2xl shadow-red-900/40 relative z-10">
                    <span className="font-heading font-black text-3xl tracking-tighter">KDSA</span>
                    <span className="text-[0.6rem] uppercase tracking-widest text-red-100 mt-1">Core</span>
                 </div>
              </div>

              {/* Connecting Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="85%" y2="75%" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="15%" y2="75%" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
            <p className="absolute bottom-8 w-full text-center text-gray-400 text-xs font-heading uppercase tracking-widest">Interactive System Map</p>
          </div>
        </div>
      </header>

      {/* SECTION 2: EVIDENCE BASE */}
      <section id="evidence" className="py-24 bg-koru-light relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-koru-slate mb-6">Why Initiatives Fail</h2>
            <p className="font-body text-lg text-gray-600">
              Research from MIT, Gartner, and DALBAR confirms that technical capability has outpaced organizational readiness. The failure is systemic, not technological.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Users className="w-10 h-10 text-koru-blue mb-6" />
              <h3 className="font-heading font-bold text-xl text-koru-slate mb-3">Organizational Readiness</h3>
              <p className="font-body text-sm text-gray-600 mb-4 leading-relaxed">
                Frazier et al. (2017) demonstrated a correlation coefficient of 0.62 between psychological safety and performance. Deployment without readiness assessment guarantees resistance.
              </p>
              <div className="h-1 w-12 bg-koru-blue/20 rounded-full"></div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Brain className="w-10 h-10 text-koru-gold mb-6" />
              <h3 className="font-heading font-bold text-xl text-koru-slate mb-3">Cognitive Bias</h3>
              <p className="font-body text-sm text-gray-600 mb-4 leading-relaxed">
                The Meehl-Dawes Doctrine proves that "mechanical prediction" (algorithms) consistently outperforms "clinical prediction" (experts) by ~10% due to reduced cognitive noise.
              </p>
              <div className="h-1 w-12 bg-koru-gold/20 rounded-full"></div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Shield className="w-10 h-10 text-koru-green mb-6" />
              <h3 className="font-heading font-bold text-xl text-koru-slate mb-3">Regulatory Trap</h3>
              <p className="font-body text-sm text-gray-600 mb-4 leading-relaxed">
                Generative AI is non-deterministic. This conflicts directly with DORA and EU AI Act requirements for auditability, traceability, and reproducibility.
              </p>
              <div className="h-1 w-12 bg-koru-green/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: REGULATORY LANDSCAPE (Dark Mode) */}
      <section className="py-24 bg-koru-slate text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl mb-6">Compliance is No Longer Optional.</h2>
              <p className="font-body text-lg text-gray-300 mb-8 leading-relaxed">
                The era of voluntary guidelines has ended. The Koru Decision-Science Architecture generates the specific artifacts required by European regulators.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-koru-green" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-lg">DORA (EU 2022/2554)</h4>
                    <p className="font-body text-sm text-gray-400 mt-1">
                      Mandatory ICT risk management and operational resilience testing. KDSA provides the immutable audit trails required for Article 26 compliance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-koru-green" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-lg">EU AI Act (EU 2024/1689)</h4>
                    <p className="font-body text-sm text-gray-400 mt-1">
                      Article 14 requires "effective human oversight". Our neurosymbolic architecture ensures humans understand and validate every system decision.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-koru-blue/20 to-koru-green/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-2xl">
                <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
                  <span className="font-heading font-bold text-gray-400 uppercase text-xs tracking-widest">System Status</span>
                  <span className="flex items-center text-koru-green text-xs font-bold uppercase">
                    <span className="w-2 h-2 bg-koru-green rounded-full mr-2 animate-pulse"></span>
                    Enforcement Active
                  </span>
                </div>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Regulation</span>
                    <span className="text-white">DORA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Deadline</span>
                    <span className="text-white">Jan 17, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Scope</span>
                    <span className="text-white">Financial Entities</span>
                  </div>
                  <div className="mt-4 p-3 bg-gray-900/50 rounded border border-gray-700 text-xs text-gray-400">
                    "Member states shall ensure that competent authorities have the power to require financial entities to provide any information..."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ARCHITECTURE (3 MODULES) */}
      <section id="architecture" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-koru-blue font-heading font-bold uppercase tracking-widest text-xs">The Methodology</span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-koru-slate mt-2 mb-6">Three Integrated Modules</h2>
          </div>

          <div className="space-y-6">
            {/* Module 1: Sensing */}
            <div className="group relative bg-white rounded-2xl border border-gray-200 p-8 sm:p-12 hover:border-koru-blue transition-all shadow-sm hover:shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-koru-blue"></div>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Activity className="w-8 h-8 text-koru-blue" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-koru-slate mb-2">Module 1: Human-Factor Sensing</h3>
                  <p className="font-body text-gray-600 leading-relaxed mb-6">
                    Deploys validated psychometric instruments (ADKAR, SCARF, ORS II) to assess organizational readiness before deployment. We quantify "change fatigue" and identify resistance pockets.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <li className="flex items-center text-sm font-heading font-bold text-gray-500"><CheckCircle className="w-4 h-4 text-koru-blue mr-2"/>Psychological Safety Index</li>
                    <li className="flex items-center text-sm font-heading font-bold text-gray-500"><CheckCircle className="w-4 h-4 text-koru-blue mr-2"/>Resistance Mapping</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 2: Decision Engine */}
            <div className="group relative bg-white rounded-2xl border border-gray-200 p-8 sm:p-12 hover:border-koru-gold transition-all shadow-sm hover:shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-koru-gold"></div>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-8 h-8 text-koru-gold" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-koru-slate mb-2">Module 2: Cognitive De-Biasing Engine</h3>
                  <p className="font-body text-gray-600 leading-relaxed mb-6">
                    A neurosymbolic AI engine that structures expert judgment. Uses "Pre-Mortem" analysis and deterministic rules to counter confirmation bias and groupthink.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <li className="flex items-center text-sm font-heading font-bold text-gray-500"><CheckCircle className="w-4 h-4 text-koru-gold mr-2"/>Pre-Mortem Scenarios</li>
                    <li className="flex items-center text-sm font-heading font-bold text-gray-500"><CheckCircle className="w-4 h-4 text-koru-gold mr-2"/>Reasoning Traces</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 3: Compliance */}
            <div className="group relative bg-white rounded-2xl border border-gray-200 p-8 sm:p-12 hover:border-koru-green transition-all shadow-sm hover:shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-koru-green"></div>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-8 h-8 text-koru-green" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-koru-slate mb-2">Module 3: Regulatory Documentation</h3>
                  <p className="font-body text-gray-600 leading-relaxed mb-6">
                    Transforms decision logs into immutable audit artifacts. Uses SHA-256 cryptographic hashing to create a tamper-evident chain of custody for every AI output.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <li className="flex items-center text-sm font-heading font-bold text-gray-500"><CheckCircle className="w-4 h-4 text-koru-green mr-2"/>Immutable Ledger</li>
                    <li className="flex items-center text-sm font-heading font-bold text-gray-500"><CheckCircle className="w-4 h-4 text-koru-green mr-2"/>DORA/AI Act Artifacts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONTACT FORM & CTA */}
      <section id="contact" className="py-24 bg-koru-slate relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-koru-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-koru-green/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Text Content */}
          <div className="text-white flex flex-col justify-center">
            <h2 className="font-heading font-black text-4xl mb-6">Deploy the Architecture.</h2>
            <p className="font-body text-gray-300 text-lg mb-8 leading-relaxed">
              We are currently selecting partners for the 2025 pilot program. Whether you are an enterprise leader seeking compliance or a consultancy looking to embed KDSA, let's define the pilot parameters.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4 border border-gray-700">
                  <Server className="w-5 h-5 text-koru-blue" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg">Enterprise Deployment</h4>
                  <p className="text-gray-400 text-sm">On-premise or Private Cloud (GCP/Azure)</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4 border border-gray-700">
                  <Network className="w-5 h-5 text-koru-green" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg">Partner API Access</h4>
                  <p className="text-gray-400 text-sm">White-label integration for advisory firms</p>
                </div>
              </div>
            </div>
          </div>

          {/* Functional Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-koru-green" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-koru-slate mb-2">Inquiry Received</h3>
                <p className="font-body text-gray-600 mb-8">
                  Thank you for your interest in Koru Impact. Our technical team will review your parameters and contact you within 24 hours.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="px-6 py-2 text-sm font-bold text-koru-blue hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-heading font-bold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-koru-blue focus:border-koru-blue transition-all outline-none"
                    placeholder="Dr. Sarah Connor"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-heading font-bold text-gray-700 mb-2">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-koru-blue focus:border-koru-blue transition-all outline-none"
                    placeholder="sarah@cyberdyne.corp"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-heading font-bold text-gray-700 mb-2">Area of Interest</label>
                  <div className="relative">
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-koru-blue focus:border-koru-blue transition-all outline-none appearance-none bg-white"
                    >
                      <option>Enterprise Licensing</option>
                      <option>Consulting Partnership</option>
                      <option>Technical Demo Request</option>
                      <option>Research Collaboration</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                      <ChevronRight className="w-4 h-4 text-gray-500 rotate-90" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-heading font-bold text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-koru-blue focus:border-koru-blue transition-all outline-none"
                    placeholder="Describe your organization's current AI governance maturity..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-4 bg-koru-blue text-white font-heading font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 flex items-center justify-center"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Processing Request...
                    </>
                  ) : (
                    <>
                      Request Consultation
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <a href="#" className="inline-block mb-4">
                 <KoruLogo className="h-10 w-auto" />
              </a>
              <p className="font-body text-gray-600 max-w-sm mb-6">
                Systemic consulting and decision-science infrastructure for the enterprise. Founded by Şener Cem Irmak.
              </p>
              <div className="flex space-x-4">
                 {/* Social placeholders */}
                 <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-koru-blue hover:text-white transition-colors cursor-pointer">In</div>
                 <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-koru-slate hover:text-white transition-colors cursor-pointer">X</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading font-bold text-koru-slate mb-4">Platform</h4>
              <ul className="space-y-3 font-body text-sm text-gray-600">
                <li><a href="#evidence" className="hover:text-koru-blue">The Science</a></li>
                <li><a href="#architecture" className="hover:text-koru-blue">Architecture</a></li>
                <li><a href="#partners" className="hover:text-koru-blue">Partners</a></li>
                <li><a href="#" className="hover:text-koru-blue">API Documentation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-koru-slate mb-4">Legal</h4>
              <ul className="space-y-3 font-body text-sm text-gray-600">
                <li><a href="#" className="hover:text-koru-blue">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-koru-blue">Terms of Service</a></li>
                <li><a href="#" className="hover:text-koru-blue">DORA Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-body">
            <p>&copy; 2025 Koru Impact. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Istanbul, Turkey • info@koruimpact.org</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;