import React from 'react';
import { Camera, Cpu, BellRing, Database, Lock, Zap, ArrowDown } from 'lucide-react';

export function ProcessPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-6 shadow-sm">
            <span className="font-bold text-slate-800 text-sm">The Process</span>
          </div>
          <h1 className="text-slate-900 mb-6 text-5xl font-black tracking-tight">
            How It Works
          </h1>
          <p className="text-slate-600 text-lg">
            Four simple steps to keep you playing at your best.
          </p>
        </div>

        {/* Vertical Pipeline */}
        <div className="relative animate-fade-in-up delay-100">
          
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
    </div>
  );
}