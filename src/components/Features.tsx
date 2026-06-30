import { useRef } from 'react';
import { FEATURES, type Feature } from '../data';
import { Check } from 'lucide-react';

function TiltCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * -8;
    const ry = (px - 0.5) * 10;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    el.style.setProperty('--mx', `${px * 100}%`);
    el.style.setProperty('--my', `${py * 100}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  };

  const Icon = feature.icon;

  return (
    <div
      className={`reveal reveal-delay-${(index % 4) + 1} perspective ${
        feature.span ?? ''
      }`}
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="group preserve-3d relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-[transform,border-color,box-shadow] duration-200 ease-out hover:border-accent-400/40 hover:shadow-glow sm:p-7"
      >
        {/* gradient wash */}
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        />
        {/* cursor spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(220px circle at var(--mx,50%) var(--my,50%), rgba(154,92,255,0.18), transparent 60%)',
          }}
        />

        <div className="relative preserve-3d">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 shadow-glow">
            <Icon className="h-6 w-6 text-white" strokeWidth={2} />
          </div>

          <h3 className="font-display text-xl font-bold text-white">{feature.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            {feature.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {feature.points.map((p) => (
              <li
                key={p}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
              >
                <Check className="h-3 w-3 text-neon-green" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto mb-14 max-w-2xl text-center">
          <span className="section-eyebrow">Everything you need</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            One bot, every module
          </h2>
          <p className="mt-4 text-base text-slate-300">
            A bento of powerful features, each crafted to make your server feel
            premium. Hover to explore.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <TiltCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
