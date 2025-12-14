import { ArrowRight, Eye, Monitor, Activity, ChevronRight } from 'lucide-react';
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
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[100px] opacity-70 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] opacity-70 -translate-x-1/3 translate-y-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span className="text-sm font-medium text-slate-600">HCI 4-2 Milestone 4 Project</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Smart Eye Care for <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Next-Gen Gamers
                </span>
              </h1>
              
              <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
                Real-time AI monitoring for your posture and eye strain. Play longer, play safer, and avoid burnout.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => onNavigate('process')}
                  className="group px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 font-medium"
                >
                  How It Works
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('final')}
                  className="px-8 py-4 bg-white text-slate-700 rounded-xl hover:bg-slate-50 border border-slate-200 transition-all shadow-sm hover:shadow-md font-medium flex items-center gap-2"
                >
                  Try Demo
                </button>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up delay-200">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl transform rotate-3 scale-[1.02] opacity-20 blur-lg"></div>
              <div 
                onClick={() => onNavigate('final')}
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 cursor-pointer group/image"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1694919123854-24b74b376da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMGRlc2t8ZW58MXx8fHwxNzY1MzA5NDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Gaming Setup"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover group-hover/image:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 group-hover/image:bg-green-500/20 group-hover/image:border-green-500/30 transition-all">
                      <div className="w-2 h-2 rounded-full bg-green-500 group-hover/image:animate-pulse"></div>
                      <span className="text-xs font-medium">Tracking Active</span>
                    </div>
                    <div className="text-xs text-white/70 group-hover/image:text-white/90 transition-colors">
                      Click to try demo →
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Why Matters */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Why It Matters</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Gamers ignore fatigue until it hurts. EyeGuard prevents burnout.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Eye, title: "Eye Health", desc: "Tracks blinking to stop dry eyes.", color: "blue" },
              { icon: Monitor, title: "Posture Tracking", desc: "Fixes slouching in real-time.", color: "purple" },
              { icon: Activity, title: "Smart Breaks", desc: "Reminds you to rest without annoying you.", color: "blue" }
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300 card-hover">
                <div className={`w-14 h-14 rounded-2xl bg-${feature.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`text-${feature.color}-600`} size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Teaser */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0 items-center">
              <div className="p-10 lg:p-16">
                <div className="inline-block px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm font-medium mb-6">The Issue</div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">The "Grind" Hurts</h2>
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  Hours of focus lead to eye strain and neck pain. We often forget the 20-20-20 rule.
                </p>
                <button
                  onClick={() => onNavigate('problem')}
                  className="text-white font-medium flex items-center gap-2 hover:gap-3 transition-all mt-4"
                >
                  See The Research <ChevronRight size={20} />
                </button>
              </div>
              <div className="relative h-[300px] sm:h-[400px] md:h-full md:min-h-[400px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1731816803705-54ab8fbd6a8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwY29tcHV0ZXIlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NjUzMzkzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Student at Computer"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}