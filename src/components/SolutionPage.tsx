import React from 'react';
import { Camera, Clock, BarChart3, Settings, Zap, ArrowRight, Eye, ShieldCheck, Gamepad2, Sun, Cpu, Database, BellRing } from 'lucide-react';

export function SolutionPage() {
  return (
    <div className="min-h-screen py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-6 shadow-sm">
            <span className="font-bold text-slate-800 text-sm">The Solution</span>
          </div>
          <h1 className="text-slate-900 mb-6 text-5xl font-black tracking-tight">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">EyeGuard</span>
          </h1>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto">
            EyeGuard runs quietly in the background, analyzing your gameplay to keep you healthy without pausing the action.
          </p>
        </div>

        {/* Bento Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 animate-fade-in-up delay-100">
          
          {/* Card 1: Large - The Core AI */}
          <div className="md:col-span-2 bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/30 rounded-full blur-[80px] group-hover:bg-purple-500/50 transition-colors duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                <Eye className="text-purple-300" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Real-Time Strain Detection</h3>
              <p className="text-slate-300 text-lg max-w-md">
                Our computer vision engine detects blink rates and squinting instantly, alerting you before the headache sets in.
              </p>
            </div>
          </div>

          {/* Card 2: Vertical - Posture */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 group hover:border-blue-300 transition-colors">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
              <Camera size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Posture Coach</h3>
            <p className="text-slate-500">Maintains the optimal 50-75cm distance from your screen.</p>
          </div>

          {/* Card 3: Standard - Lighting */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 border border-orange-100">
            <div className="flex items-center justify-between mb-4">
               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-orange-500">
                 <Sun size={20} />
               </div>
               <span className="text-xs font-bold text-orange-600 bg-white px-2 py-1 rounded-full">AUTO</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Smart Dimming</h3>
            <p className="text-slate-600 text-sm">Adjusts screen brightness based on room light.</p>
          </div>

          {/* Card 4: Large - Breaks */}
          <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-200 relative overflow-hidden group">
             <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                   <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 text-green-600">
                      <Clock size={24} />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-2">Intelligent 20-20-20 Rule</h3>
                   <p className="text-slate-500">
                     We track your activity, not just time. Alerts wait until you finish a match or level.
                   </p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 w-full md:w-48 text-center">
                    <div className="text-3xl font-black text-slate-900 mb-1">20m</div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Break Interval</div>
                </div>
             </div>
          </div>

          {/* Card 5: Standard - Privacy */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 group hover:border-purple-300 transition-colors">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-600 group-hover:rotate-12 transition-transform">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">100% Private</h3>
            <p className="text-slate-500">No video ever leaves your device. All processing is local.</p>
          </div>

          {/* Card 6: Standard - Analytics */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 text-slate-600">
              <BarChart3 size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Wellness XP</h3>
            <p className="text-slate-500">Track your eye health stats like you track your K/D ratio.</p>
          </div>

        </div>

        {/* How It Works Section */}
        <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
              <p className="text-slate-600 mt-2">Four simple steps to keep you playing at your best.</p>
            </div>

            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-1/2 z-0 hidden md:block"></div>
              <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-1/2 z-0 block md:hidden"></div>

              {/* Step 1: Input */}
              <div className="relative z-10 mb-16 md:mb-24 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="order-2 md:order-1 md:text-right pl-16 md:pl-0">
                    <div className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-bold mb-2">STEP 1</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Secure Scan</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      The app connects to your webcam to see you, but <strong>never records you</strong>. It simply watches your movement in real-time, completely private.
                    </p>
                </div>
                <div className="order-1 md:order-2 flex md:justify-start">
                    <div className="w-16 h-16 bg-white border-4 border-blue-500 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/20 relative z-10 ml-0 md:-ml-8">
                        <Camera className="text-blue-600" size={32} />
                    </div>
                </div>
              </div>

              {/* Step 2: Processing (Dark Mode for contrast) */}
              <div className="relative z-10 mb-16 md:mb-24 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="order-2 pl-16 md:pl-0">
                    <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-[50px]"></div>
                      <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-4">
                              <Cpu className="text-purple-400" size={20} />
                              <span className="font-mono text-sm text-purple-200">AI_CORE</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">Smart Tracking</h3>
                          <p className="text-slate-400 text-xs mb-4">
                            Our AI instantly maps points on your face to measure how fast you blink and if you are slouching.
                          </p>
                          <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                              <div className="h-full bg-purple-500 w-2/3 animate-pulse"></div>
                          </div>
                      </div>
                    </div>
                </div>
                <div className="order-1 flex md:justify-end">
                    <div className="w-16 h-16 bg-slate-900 border-4 border-purple-500 rounded-2xl flex items-center justify-center shadow-xl shadow-purple-500/20 relative z-10 ml-0 md:-mr-8">
                        <Database className="text-purple-400" size={32} />
                    </div>
                </div>
              </div>

              {/* Step 3: Logic */}
              <div className="relative z-10 mb-16 md:mb-24 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="order-2 md:order-1 md:text-right pl-16 md:pl-0">
                    <div className="inline-block px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-bold mb-2">STEP 3</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Health Check</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      The system constantly asks: Are you blinking enough? Are you too close to the screen? It knows when you are tired before you do.
                    </p>
                </div>
                <div className="order-1 md:order-2 flex md:justify-start">
                    <div className="w-16 h-16 bg-white border-4 border-amber-500 rounded-2xl flex items-center justify-center shadow-xl shadow-amber-500/20 relative z-10 ml-0 md:-ml-8">
                        <Zap className="text-amber-500" size={32} />
                    </div>
                </div>
              </div>

              {/* Step 4: Output */}
              <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="order-2 pl-16 md:pl-0">
                    <div className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold mb-2">STEP 4</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Gentle Nudge</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      If you need a break, we send a subtle alert. It's designed to help you fix your posture without ruining your kill streak.
                    </p>
                </div>
                <div className="order-1 flex md:justify-end">
                    <div className="w-16 h-16 bg-white border-4 border-green-500 rounded-2xl flex items-center justify-center shadow-xl shadow-green-500/20 relative z-10 ml-0 md:-mr-8">
                        <BellRing className="text-green-500" size={32} />
                    </div>
                </div>
              </div>
            </div>
        </div>

        {/* Bottom Call to Action / Summary */}
        <div className="bg-slate-900 rounded-3xl p-10 text-center relative overflow-hidden">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>
           <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-6">Built for the Grind</h2>
              <div className="flex flex-wrap justify-center gap-4">
                 {[
                   "Zero Latency Impact", "Works with OBS", "Low CPU Usage"
                 ].map((tag, i) => (
                   <div key={i} className="px-5 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-white font-medium">
                     {tag}
                   </div>
                 ))}
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}