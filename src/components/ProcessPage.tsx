import React from 'react';
import { Users, ClipboardCheck, Search, AlertTriangle, CheckCircle2, User, GraduationCap, Video } from 'lucide-react';

export function ProcessPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-6 shadow-sm">
            <span className="font-bold text-slate-800 text-sm">Testing & Insights</span>
          </div>
          <h1 className="text-slate-900 mb-6 text-5xl font-black tracking-tight">
            Refining the Design
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We didn't just build it; we tested it. By watching real users and applying expert rules, we transformed a paper sketch into a usable digital product.
          </p>
        </div>

        {/* Methodology & Tasks */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 animate-fade-in-up delay-100">
           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                    <ClipboardCheck size={24} />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900">The Procedure</h2>
              </div>
              <ul className="space-y-4">
                 <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></div>
                    <p className="text-slate-600"><span className="font-bold text-slate-900">Think Aloud Protocol:</span> Participants vocalized their thoughts while attempting specific tasks on our paper prototype.</p>
                 </li>
                 <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></div>
                    <p className="text-slate-600"><span className="font-bold text-slate-900">Heuristic Evaluation:</span> We inspected the interface using Nielsen's 10 Usability Heuristics to find deeper usability flaws.</p>
                 </li>
              </ul>
           </div>

           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                    <Search size={24} />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900">Tasks Tested</h2>
              </div>
              <div className="space-y-4">
                 <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-1">Primary Task 1</h3>
                    <p className="text-slate-600">AI Live Monitoring and Break Recommendations.</p>
                 </div>
                 <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-1">Primary Task 2</h3>
                    <p className="text-slate-600">Overview of Ergonomic Trends and Data Insights.</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Participants */}
        <div className="mb-20 animate-fade-in-up delay-200">
           <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-slate-200 flex-1"></div>
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                 <Users className="text-slate-400" />
                 Target Participants
              </h2>
              <div className="h-px bg-slate-200 flex-1"></div>
           </div>
           
           <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                   id: 'A', 
                   role: 'The Competitive Gamer', 
                   icon: User, 
                   desc: 'Plays 6+ hours/day. Ignores fatigue to keep rank. Needs zero interruptions.',
                   color: 'blue'
                },
                { 
                   id: 'B', 
                   role: 'The Student', 
                   icon: GraduationCap, 
                   desc: 'Works late hours on assignments. Wears glasses. Needs reminders to rest eyes.',
                   color: 'purple'
                },
                { 
                   id: 'C', 
                   role: 'The Streamer', 
                   icon: Video, 
                   desc: 'Broadcasts live. Requires unobtrusive notifications that don\'t ruin the stream.',
                   color: 'pink'
                }
              ].map((p, i) => (
                 <div key={i} className={`bg-${p.color}-50/50 p-6 rounded-2xl border border-${p.color}-100 hover:shadow-lg transition-shadow`}>
                    <div className="flex justify-between items-start mb-4">
                       <div className={`p-3 bg-white rounded-xl text-${p.color}-600 shadow-sm`}>
                          <p.icon size={24} />
                       </div>
                       <span className={`text-xs font-bold px-2 py-1 bg-white rounded-lg text-${p.color}-600 border border-${p.color}-100`}>
                          User {p.id}
                       </span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{p.role}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                 </div>
              ))}
           </div>
        </div>

        {/* Heuristic Evaluation Results */}
        <div className="animate-fade-in-up delay-200">
           <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Testing Results & Fixes</h2>
           
           <div className="grid gap-6">
              
              {/* Highlight Card: Dark Mode */}
              <div className="bg-slate-900 text-white rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/20 rounded-full blur-[80px]"></div>
                 <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                       <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">HE-01</span>
                          <span className="text-red-300 font-bold text-sm tracking-wide uppercase">Severity 4: Critical</span>
                       </div>
                       <h3 className="text-2xl font-bold mb-4">Match between system & real world</h3>
                       <div className="space-y-4 text-slate-300 mb-6">
                          <p><strong className="text-white">Problem:</strong> The paper prototype used a white background. For an eye-strain app, this contradicts the user's goal of reducing light exposure.</p>
                          <p><strong className="text-white">Insight:</strong> An app meant to minimize eye strain should not produce harsh white light.</p>
                       </div>
                       <div className="flex items-center gap-2 text-[#00E096] font-bold">
                          <CheckCircle2 size={20} />
                          <span>Fixed: Switched to Dark Mode / Glassmorphism</span>
                       </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                       <div className="flex items-center gap-4 mb-4 opacity-50">
                          <div className="w-8 h-8 rounded-full bg-white"></div>
                          <div className="h-4 bg-white rounded w-32"></div>
                       </div>
                       <div className="h-32 bg-white/10 rounded-lg flex items-center justify-center text-center p-4">
                          <span className="text-sm">"White background hurts my eyes at night!" <br/>- Participant B</span>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Other Issues Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                 {[
                   {
                     id: "HE-02",
                     severity: 3,
                     name: "Visibility of system status",
                     problem: "The timer is hidden inside 'Break Reminders'. Users can't see remaining time on Dashboard.",
                     fix: "Added Timer Widget to Dashboard"
                   },
                   {
                     id: "HE-03",
                     severity: 2,
                     name: "User control and freedom",
                     problem: "Users cannot easily 'reset' or 'recalibrate' the distance sensor if they move their chair.",
                     fix: "Added 'Calibrate' button to Quick Actions"
                   },
                   {
                     id: "HE-05",
                     severity: 2,
                     name: "Error prevention",
                     problem: "'Log Break' button is too close to 'End Session'. Risk of accidental clicks.",
                     fix: "Added spacing between critical actions"
                   },
                   {
                     id: "HE-04",
                     severity: 1,
                     name: "Consistency and standards",
                     problem: "The icons for 'Patterns' and 'Fatigue' looked too similar in the sketch.",
                     fix: "Ignored (Prioritized functionality over cosmetic icons)"
                   }
                 ].map((issue, i) => (
                    <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                       <div className="flex justify-between items-center mb-4">
                          <span className="text-xs font-bold text-slate-400">{issue.id}</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                             issue.severity >= 3 ? 'bg-orange-100 text-orange-700' :
                             issue.severity === 2 ? 'bg-yellow-100 text-yellow-700' :
                             'bg-slate-100 text-slate-600'
                          }`}>
                             Severity {issue.severity}
                          </span>
                       </div>
                       <h3 className="font-bold text-slate-900 mb-2">{issue.name}</h3>
                       <p className="text-slate-600 text-sm mb-4">{issue.problem}</p>
                       <div className="pt-4 border-t border-slate-100 flex items-start gap-2">
                          <div className={`mt-0.5 ${issue.fix.includes('Ignored') ? 'text-slate-400' : 'text-green-600'}`}>
                             {issue.fix.includes('Ignored') ? <AlertTriangle size={16} /> : <CheckCircle2 size={16} />}
                          </div>
                          <span className={`text-sm font-medium ${issue.fix.includes('Ignored') ? 'text-slate-500' : 'text-slate-900'}`}>
                             {issue.fix}
                          </span>
                       </div>
                    </div>
                 ))}
              </div>

           </div>
        </div>

      </div>
    </div>
  );
}