import { AlertCircle, Gamepad2, GraduationCap, Tv, Eye, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export function ProblemPage() {
  const personas = [
    {
      icon: Gamepad2,
      name: 'Pro Gamers',
      desc: 'Training 4+ hours daily.',
      needs: 'Performance optimization without pain.',
      pain: 'Tournament eye strain, neck tension.',
      color: 'blue'
    },
    {
      icon: GraduationCap,
      name: 'Students',
      desc: 'Studying 5-6 hours on screens.',
      needs: 'Break reminders during study marathons.',
      pain: 'Forgetting breaks, poor dorm lighting.',
      color: 'purple'
    },
    {
      icon: Tv,
      name: 'Streamers',
      desc: 'Broadcasting live for extended periods.',
      needs: 'Non-intrusive monitoring, privacy.',
      pain: 'Cannot break flow, cumulative fatigue.',
      color: 'pink'
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-6 shadow-sm">
            <span className="font-bold text-slate-800 text-sm">The Problem</span>
          </div>
          <h1 className="text-slate-900 mb-6 text-5xl font-black tracking-tight">
            Understand the Problem
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Gamers know about ergonomics, but they ignore it to win.
          </p>
        </div>

        {/* Problem Highlight */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-20 border border-slate-100 animate-fade-in-up delay-100">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-red-100 rounded-xl">
                  <AlertCircle className="text-red-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">The Reality</h2>
              </div>
              <div className="space-y-6">
                {[
                  "Eye pain and neck soreness appear after just 2 hours.",
                  "Monitors are usually too close (< 50cm).",
                  "Everyone knows the 20-20-20 rule, but no one follows it.",
                  "Users react to pain instead of preventing it."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-sm font-bold flex-shrink-0 mt-0.5">{i+1}</div>
                    <p className="text-slate-700 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[300px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1592869642456-7fee88e27aad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBzdHJhaW4lMjBzY3JlZW58ZW58MXx8fHwxNzY1MzM5MzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Eye Strain"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { val: '80%', label: 'Feel Fatigue', sub: 'Dry eyes & headaches' },
            { val: '4/5', label: 'Bad Posture', sub: 'Slouching & neck pain' },
            { val: '90%', label: 'Ignore Rules', sub: 'Knows but forgets' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl font-black bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">{stat.val}</div>
              <div className="text-xl font-bold text-slate-900 mb-1">{stat.label}</div>
              <div className="text-slate-500">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Personas */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-slate-200 flex-1"></div>
            <h2 className="text-2xl font-bold text-slate-900">Who is this for?</h2>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {personas.map((p, i) => {
              // Define explicit color classes for each color variant
              const colorClasses = {
                blue: {
                  gradient: 'bg-gradient-to-r from-blue-500 to-blue-300',
                  bg: 'bg-blue-50',
                  text: 'text-blue-600'
                },
                purple: {
                  gradient: 'bg-gradient-to-r from-purple-500 to-purple-300',
                  bg: 'bg-purple-50',
                  text: 'text-purple-600'
                },
                pink: {
                  gradient: 'bg-gradient-to-r from-pink-500 to-pink-300',
                  bg: 'bg-pink-50',
                  text: 'text-pink-600'
                }
              };
              
              const colors = colorClasses[p.color as keyof typeof colorClasses];
              
              return (
                <div key={i} className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 transition-all hover:shadow-xl relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 ${colors.gradient}`}></div>
                  <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <p.icon className={colors.text} size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{p.name}</h3>
                  <p className="text-slate-600 mb-6 min-h-[3rem]">{p.desc}</p>
                  
                  <div className="space-y-3 pt-6 border-t border-slate-100">
                    <div className="flex gap-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">Needs</span>
                      <span className="text-sm text-slate-700">{p.needs}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">Pain</span>
                      <span className="text-sm text-slate-700">{p.pain}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Insights Section */}
        <div className="bg-slate-900 rounded-3xl p-10 lg:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px]"></div>
          
          <h2 className="text-3xl font-bold mb-10 text-center relative z-10">Key Research Insights</h2>
          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            {[
              "Lighting inconsistencies cause significant glare.",
              "Privacy is a top concern for webcam-based tools.",
              "Users want 'set and forget' background tools.",
              "Gamers reject anything that interrupts gameplay."
            ].map((insight, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 font-bold border border-blue-500/30">{i+1}</div>
                <p className="text-slate-200">{insight}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}