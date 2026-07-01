import { useEffect, useState } from 'react';
import { Menu, X, Crown, Github } from 'lucide-react';

const LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Commands', href: '#commands' },
  { label: 'Stats', href: '#stats' },
  { label: 'Support', href: '#footer' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-ink-950/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent-500 to-neon-magenta shadow-glow">
            <Crown className="h-5 w-5 text-white" strokeWidth={2.5} />
            <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Aesthetic<span className="text-gradient">King</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                <span className="relative z-10">{l.label}</span>
                <span className="absolute inset-0 scale-90 rounded-lg bg-white/0 opacity-0 transition-all duration-300 hover:scale-100 hover:bg-white/5 hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/slimhercules953/Aesthetic-king"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost !px-3.5 !py-2 text-sm"
            aria-label="GitHub repository"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://discord.com/oauth2/authorize?client_id=940337120684425216&permissions=2147535936&integration_type=0&scope=bot+applications.commands"
            target="_blank"
            rel="noreferrer"
            className="btn-glow !px-5 !py-2 text-sm"
          >
            Invite Bot
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-ink-900/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="space-y-1 px-4 py-4">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="grid grid-cols-2 gap-3 pt-3">
            <a
              href="https://github.com/slimhercules953/Aesthetic-king"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="btn-ghost !py-2.5 text-sm"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://discord.com/oauth2/authorize?client_id=0&scope=bot+applications.commands&permissions=8"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="btn-glow !py-2.5 text-sm"
            >
              Invite Bot
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
