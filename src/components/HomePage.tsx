import { ArrowRight, Eye, Monitor, Activity, ChevronRight, ShieldCheck, Zap } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decorative blobs */}
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] opacity-70 translate-x-1/4 -translate-y-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">HCI Project Milestone 4</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[0.95]">
                Play Harder. <br />
                <span className="text-blue-600 italic">Stay Healthy.</span>
              </h1>
              
              <div className="space-y-4 max-w-lg">
                <p className="text-slate-600 text-xl font-medium leading-relaxed">
                  AI-powered ergonomic monitoring that watches your posture and eye strain while you focus on the game.
                </p>
                <div className="flex flex-col gap-3 pt-4">
                  <div className="flex items-center gap-3 text-slate-500">
                    <ShieldCheck size={18} className="text-green-500" />
                    <span className="text-sm">100% Private. No video ever leaves your PC.</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500">
                    <Zap size={18} className="text-amber-500" />
                    <span className="text-sm">Zero Latency. Built for competitive gaming.</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => onNavigate('process')}
                  className="group px-8 py-4 bg-slate-900 text-white rounded-2xl hover:bg-slate-800 transition-all shadow-xl hover:shadow-blue-500/20 flex items-center gap-3 font-bold text-lg"
                >
                  How It Works
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('final')}
                  className="px-8 py-4 bg-white text-slate-700 rounded-2xl hover:bg-slate-50 border border-slate-200 transition-all font-bold text-lg"
                >
                  Try Demo
                </button>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up delay-200 lg:block hidden">
              <div className="absolute inset-0 bg-blue-600 rounded-[3rem] transform rotate-3 opacity-10 blur-2xl"></div>
              <div 
                onClick={() => onNavigate('final')}
                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 cursor-pointer group/image aspect-[4/5]"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1694919123854-24b74b376da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMGRlc2t8ZW58MXx8fHwxNzY1MzA5NDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Gaming Setup"
                  className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-10 left-10 right-10">
                    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
                        <div className="text-white font-bold mb-1">Live Tracking Simulation</div>
                        <div className="flex items-center gap-2 text-blue-300 text-sm font-bold">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                            Detecting Blink Rate...
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid - Scan Friendly */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Eye, title: "Eye Health", desc: "Prevents dry eyes by tracking blink frequency.", color: "blue" },
              { icon: Monitor, title: "Posture Pro", desc: "Real-time alerts for slouching and screen distance.", color: "indigo" },
              { icon: Activity, title: "Flow Breaks", desc: "Suggests breaks only when you're between games.", color: "purple" }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className={`w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300`}>
                  <feature.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed max-w-[240px]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simplified "Grind" Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Stop Reacting to Pain.</h2>
              <p className="text-slate-400 text-xl mb-10">
                Most gamers wait until their neck hurts to take a break. EyeGuard helps you prevent fatigue before it starts.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                    <div className="text-3xl font-black text-red-400 mb-1">80%</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Experience Strain</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                    <div className="text-3xl font-black text-blue-400 mb-1">90%</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Forget Breaks</div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('problem')}
                className="text-white font-bold inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                Why we built this <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}