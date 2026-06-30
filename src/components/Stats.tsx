import { STATS, type Stat } from '../data';
import { useCountUp } from '../hooks';

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const { ref, formatted } = useCountUp(stat.value, 2000, stat.decimals ?? 0);

  return (
    <div
      className={`reveal reveal-delay-${index + 1} group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl transition-all duration-300 hover:border-accent-400/40 hover:bg-white/[0.05]`}
    >
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute -bottom-8 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full bg-accent-500/20 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

      <p className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        <span ref={ref}>
          {stat.prefix}
          {formatted}
          {stat.suffix}
        </span>
      </p>
      <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-400 sm:text-sm">
        {stat.label}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-10 text-center">
          <span className="section-eyebrow">By the numbers</span>
          <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
            Trusted by communities worldwide
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
