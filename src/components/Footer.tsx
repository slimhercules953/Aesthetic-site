import { Crown, Github, MessageCircle, FileText, Shield, Heart } from 'lucide-react';

const LINKS = [
  {
    title: 'Resources',
    items: [
      { label: 'Support Server', href: 'https://discord.gg/', icon: MessageCircle },
      { label: 'GitHub Repository', href: 'https://github.com/slimhercules953/Aesthetic-king', icon: Github },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'Terms of Service', href: '#terms', icon: FileText },
      { label: 'Privacy Policy', href: '#privacy', icon: Shield },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="relative mt-10 overflow-hidden">
      {/* Animated separator */}
      <div className="relative h-px w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-400/60 to-transparent" />
        <div className="absolute inset-y-0 -left-1/3 w-1/3 animate-marquee bg-gradient-to-r from-transparent via-neon-magenta to-transparent" />
      </div>

      <div className="relative border-t border-white/5 bg-ink-900/40 backdrop-blur-xl">
        {/* ambient glow */}
        <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-[40rem] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[100px]" />

        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="#top" className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent-500 to-neon-magenta shadow-glow">
                  <Crown className="h-5 w-5 text-white" strokeWidth={2.5} />
                </span>
                <span className="font-display text-lg font-bold text-white">
                  Aesthetic<span className="text-gradient">King</span>
                </span>
              </a>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
                The all-in-one Discord bot for moderation, aesthetics, economy,
                and fun. Elevate your server with a premium experience your
                community will love.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href="https://discord.com/oauth2/authorize?client_id=0&scope=bot+applications.commands&permissions=8"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-glow !px-5 !py-2.5 text-sm"
                >
                  <Crown className="h-4 w-4" /> Invite Bot
                </a>
                <a
                  href="https://github.com/slimhercules953/Aesthetic-king"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost !px-4 !py-2.5 text-sm"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Link columns */}
            {LINKS.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                          className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                        >
                          <Icon className="h-4 w-4 text-slate-500 transition-colors group-hover:text-accent-300" />
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Aesthetic King. Not affiliated with Discord Inc.
            </p>
            <p className="flex items-center gap-1.5 text-xs text-slate-500">
              Crafted with <Heart className="h-3.5 w-3.5 fill-neon-magenta text-neon-magenta" /> for communities everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
