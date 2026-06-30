import { ArrowRight, BookOpen, Sparkles, Crown, Hash } from 'lucide-react';
import ParticleField from './ParticleField';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
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
            <Sparkles className="h-3.5 w-3.5" /> The all-in-one Discord bot
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Elevate Your Server with{' '}
            <span className="relative whitespace-nowrap">
              <span className="text-gradient">Aesthetic King</span>
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
                    <stop stopColor="#9a5cff" />
                    <stop offset="1" stopColor="#ff3df0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
            Moderation, custom profiles, economy, music, and fun — wrapped in a
            beautifully designed experience your community will love. One bot to
            rule them all.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center">
            <a
              href="https://discord.com/oauth2/authorize?client_id=0&scope=bot+applications.commands&permissions=8"
              target="_blank"
              rel="noreferrer"
              className="btn-glow group w-full sm:w-auto"
            >
              <Crown className="h-5 w-5" />
              Invite Bot
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#commands" className="btn-ghost group w-full sm:w-auto">
              <BookOpen className="h-5 w-5" />
              Explore Commands
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <span className="chip">
              <span className="h-2 w-2 rounded-full bg-neon-green shadow-[0_0_8px_#3dffb0]" />
              Online now
            </span>
            <span className="chip">Slash commands</span>
            <span className="chip">100+ commands</span>
            <span className="chip">Free forever</span>
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
      <div className="flex items-center gap-2 border-b border-white/10 bg-ink-900/80 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 flex items-center gap-1.5 text-xs font-medium text-slate-400">
          <Hash className="h-3.5 w-3.5" /> aesthetic-king
        </span>
        <span className="ml-auto text-[10px] font-medium uppercase tracking-wider text-slate-500">
          12,402 online
        </span>
      </div>

      {/* Chat body */}
      <div className="space-y-4 p-4 sm:p-5">
        {/* User message */}
        <div className="flex items-start gap-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-neon-blue to-accent-500 text-xs font-bold text-white">
            L
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-semibold text-white">luna</span>
              <span className="text-[10px] text-slate-500">Today at 14:32</span>
            </div>
            <p className="text-sm text-slate-300">/profile</p>
          </div>
        </div>

        {/* Bot embed response */}
        <div className="flex items-start gap-3">
          <div className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent-500 to-neon-magenta">
            <Crown className="h-4 w-4 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-ink-800 bg-neon-green" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-semibold text-white">Aesthetic King</span>
              <span className="rounded bg-accent-500/20 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent-200">
                Bot
              </span>
              <span className="text-[10px] text-slate-500">Today at 14:32</span>
            </div>

            {/* Embed */}
            <div className="mt-1.5 overflow-hidden rounded-lg border-l-4 border-accent-500 bg-ink-700/60 p-3.5">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">👑 Profile — @luna</span>
              </div>
              <p className="mt-1 text-xs text-slate-400">
                A custom-designed profile card with badges, rank, and balance.
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-md bg-white/5 px-2.5 py-1.5">
                  <span className="text-slate-500">Level</span>
                  <p className="font-semibold text-white">42 · 12,840 XP</p>
                </div>
                <div className="rounded-md bg-white/5 px-2.5 py-1.5">
                  <span className="text-slate-500">Balance</span>
                  <p className="font-semibold text-neon-green">◈ 8,420</p>
                </div>
                <div className="col-span-2 rounded-md bg-white/5 px-2.5 py-1.5">
                  <span className="text-slate-500">Badges</span>
                  <p className="mt-0.5 text-base">💎 🏆 ⭐ 🎨</p>
                </div>
              </div>
              <p className="mt-2.5 text-[10px] text-slate-500">
                Earn XP by chatting • Prestige II
              </p>
            </div>
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
          <span className="text-xs text-slate-500">Message #aesthetic-king</span>
          <span className="ml-auto h-4 w-px animate-blink bg-accent-400" />
        </div>
      </div>
    </div>
  );
}
