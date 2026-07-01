import { ArrowRight, BookOpen, Sparkles, Crown, Hash } from 'lucide-react';
import ParticleField from './ParticleField';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <ParticleField />
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-40" />
        <div className="absolute left-1/2 top-0 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent-500/20 blur-[120px]" />
        <div className="absolute right-0 top-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-neon-magenta/10 blur-[120px]" />
        <div className="absolute left-0 top-60 -z-10 h-[28rem] w-[28rem] rounded-full bg-neon-blue/10 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Left: copy */}
        <div className="reveal text-center lg:text-left">
          <span className="section-eyebrow">
            <Sparkles className="h-3.5 w-3.5" /> Curate Your Digital Presence
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Rule Your Profile with{' '}
            <span className="relative whitespace-nowrap">
              <span className="text-gradient font-bold">Aesthetic King</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9C60 3 120 3 150 6C180 9 240 9 298 4"
                  stroke="url(#underline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="underline" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="#ffb7b2" />
                    <stop offset="0.5" stopColor="#b5ead7" />
                    <stop offset="1" stopColor="#c7ceea" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
            No moderation overhead, no heavy economy loops, and no clutter. Just
            seamless profile coordination, AI-assisted aesthetic bios, dynamic
            canvas layout previews, and matching color palettes.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center">
            <a
              href="https://discord.com/oauth2/authorize?client_id=0&scope=bot+applications.commands&permissions=8"
              target="_blank"
              rel="noreferrer"
              className="btn-glow group w-full smash:w-auto"
            >
              <Crown className="h-5 w-5" />
              Invite Bot
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#commands" className="btn-ghost group w-full sm:w-auto">
              <BookOpen className="h-5 w-5" />
              Explore Slash Commands
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <span className="chip">
              <span className="h-2 w-2 rounded-full bg-neon-green shadow-[0_0_8px_#3dffb0]" />
              Online
            </span>
            <span className="chip">Slash Commands Only</span>
            <span className="chip">Privacy First (No Saved Logs)</span>
            <span className="chip">Cloudflare R2 Storage</span>
          </div>
        </div>

        {/* Right: Discord mockup */}
        <div className="reveal reveal-delay-2 perspective">
          <div className="relative mx-auto max-w-md animate-float-slow lg:max-w-none">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-accent-500/30 via-neon-magenta/20 to-neon-blue/20 blur-2xl" />
            <DiscordMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function DiscordMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-800/80 shadow-card backdrop-blur-xl">
      {/* Window bar */}
      <div className="flex window-bar items-center gap-2 border-b border-white/10 bg-ink-900/80 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 flex items-center gap-1.5 text-xs font-medium text-slate-400">
          <Hash className="h-3.5 w-3.5" /> aesthetic-lounge
        </span>
        <span className="ml-auto text-[10px] font-medium uppercase tracking-wider text-slate-500">
          Authentic Aesthetics
        </span>
      </div>

      {/* Chat body */}
      <div className="space-y-4 p-4 sm:p-5 text-left">
        {/* User interaction reference header row */}
        <div className="flex items-center gap-2 text-sm text-[#b5bac1] pl-12 mb-[-4px]">
          <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center text-[10px] text-white font-bold shrink-0">
            P
          </div>
          <span className="font-semibold text-white text-opacity-90 text-xs">
            P4rz1val
          </span>
          <span className="text-xs text-slate-400">used</span>
          <span className="text-[#949cf7] bg-[#3c4270] bg-opacity-40 px-1 rounded text-xs font-medium flex items-center gap-1 cursor-pointer hover:bg-opacity-60">
            theme
          </span>
        </div>

        {/* Bot response block wrapper */}
        <div className="flex items-start gap-3">
          <div className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
            <Crown className="h-4 w-4 text-slate-700" />
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-ink-800 bg-neon-green" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-semibold text-white">
                Aesthetic King
              </span>
              <span className="rounded bg-accent-500/20 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent-200">
                APP
              </span>
              <span className="text-[10px] text-slate-500">8:03 PM</span>
            </div>

            <p className="text-sm text-slate-300 mt-1">
              Here is your generated design!
            </p>

            {/* ================= CANVAS DESIGN BLOCK ================= */}
            <div className="mt-2.5 w-full max-w-[440px] bg-[#b4bdbc] rounded-xl p-4 flex flex-col gap-3.5 shadow-md">
              {/* Top Row: Left PFP asset + Right Color blocks */}
              <div className="flex gap-3.5 items-center">
                <img
                  src="/46 pfp.jpg"
                  alt="Theme Target Asset"
                  className="w-28 h-28 rounded-sm object-cover shadow"
                />

                <div className="flex-1 flex flex-col gap-2">
                  <div>
                    <span className="text-[11px] font-bold text-white block mb-0.5 font-sans">
                      Primary Color
                    </span>
                    <div className="bg-[#373b5d] text-white font-mono text-center py-1.5 px-3 rounded text-xs border border-black/10 shadow-sm">
                      #373b5d
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-white block mb-0.5 font-sans">
                      Secondary Color
                    </span>
                    <div className="bg-[#48456aff] text-white font-mono text-center py-1.5 px-3 rounded text-xs border border-black/10 shadow-sm">
                      <span className="text-white">#48456aff</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Row: Banner Extract View */}
              <div className="w-full h-14 overflow-hidden rounded-sm shadow">
                <img
                  src="/46 banner.jpg"
                  alt="Theme Banner Track"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Row: Dynamic Client Overlay Simulation */}
              <div className="w-full bg-[#313338] rounded-md overflow-hidden relative shadow">
                <div className="w-full h-14 overflow-hidden">
                  <img
                    src="/46 banner.jpg"
                    alt="Client Cover Track"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="px-2.5 pb-2.5 pt-0.5 flex justify-between items-end bg-[#242528]">
                  <div className="relative -mt-6 ml-0.5">
                    <div className="w-11 h-11 rounded-full bg-[#242528] p-0.5">
                      <img
                        src="/46 pfp.jpg"
                        alt="Client Overlay Avatar"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#23a55a] rounded-full border-2 border-[#242528]" />
                  </div>

                  <div className="bg-[#1e1f22] bg-opacity-70 px-1.5 py-0.5 rounded flex items-center gap-1.5 text-[9px]">
                    <span>🔮</span>
                    <span>🔺</span>
                    <span>✨</span>
                  </div>
                </div>
              </div>
            </div>
            {/* ================================================================================= */}
          </div>
        </div>

        {/* Typing indicator */}
        <div className="flex items-center gap-2 pl-12 text-xs text-slate-500">
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-500 [animation-delay:-0.3s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-500 [animation-delay:-0.15s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-500" />
          </span>
          <span>Aesthetic King is typing…</span>
        </div>
      </div>

      {/* Input bar */}
      <div className="border-t border-white/10 bg-ink-900/60 px-4 py-3">
        <div className="flex items-center gap-2 rounded-lg bg-ink-700/60 px-3 py-2.5">
          <span className="text-slate-500">+</span>
          <span className="text-xs text-slate-500">
            Message #aesthetic-lounge
          </span>
          <span className="ml-auto h-4 w-px animate-blink bg-pink-300" />
        </div>
      </div>
    </div>
  );
}
