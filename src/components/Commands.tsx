import { useMemo, useState } from 'react';
import { COMMANDS, COMMAND_CATEGORIES, type Command, type CommandCategory } from '../data';
import { Crown, Hash, Terminal, ChevronRight } from 'lucide-react';

function CommandRow({
  command,
  active,
  onClick,
}: {
  command: Command;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 ${
        active
          ? 'border-accent-400/50 bg-accent-500/10 shadow-glow'
          : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]'
      }`}
    >
      <Terminal
        className={`h-4 w-4 shrink-0 transition-colors ${
          active ? 'text-accent-300' : 'text-slate-500 group-hover:text-slate-300'
        }`}
      />
      <div className="min-w-0 flex-1">
        <p className={`font-mono text-sm font-medium ${active ? 'text-white' : 'text-slate-200'}`}>
          {command.name}
        </p>
        <p className="truncate text-xs text-slate-500">{command.description}</p>
      </div>
      <ChevronRight
        className={`h-4 w-4 shrink-0 transition-all ${
          active ? 'translate-x-0 text-accent-300' : '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
        }`}
      />
    </button>
  );
}

function ChatPreview({ command }: { command: Command }) {
  const { user, avatarColor, content, embed } = command.preview;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-800/80 shadow-card backdrop-blur-xl">
      {/* Window bar */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-ink-900/80 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 flex items-center gap-1.5 text-xs font-medium text-slate-400">
          <Hash className="h-3.5 w-3.5" /> general
        </span>
        <span className="ml-auto flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-neon-green">
          <span className="h-1.5 w-1.5 rounded-full bg-neon-green shadow-[0_0_6px_#3dffb0]" />
          live preview
        </span>
      </div>

      {/* Chat body — keyed for re-mount animation */}
      <div key={command.name} className="space-y-4 p-4 sm:p-5 animate-fade-in">
        {/* User invoking the command */}
        <div className="flex items-start gap-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-neon-blue to-accent-500 text-xs font-bold text-white">
            U
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-semibold text-white">you</span>
              <span className="text-[10px] text-slate-500">just now</span>
            </div>
            <p className="font-mono text-sm text-accent-200">{command.usage}</p>
          </div>
        </div>

        {/* Bot response */}
        <div className="flex items-start gap-3">
          <div className={`relative grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br ${avatarColor}`}>
            <Crown className="h-4 w-4 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-ink-800 bg-neon-green" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-semibold text-white">{user}</span>
              <span className="rounded bg-accent-500/20 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent-200">
                Bot
              </span>
              <span className="text-[10px] text-slate-500">just now</span>
            </div>

            {content && <p className="mt-1 text-sm text-slate-300">{content}</p>}

            {/* Embed */}
            <div
              className="mt-1.5 overflow-hidden rounded-lg border-l-4 bg-ink-700/60 p-3.5"
              style={{ borderColor: embed.color }}
            >
              <p className="text-sm font-bold text-white">{embed.title}</p>
              <p
                className="mt-1 text-xs leading-relaxed text-slate-300"
                dangerouslySetInnerHTML={{ __html: embed.description.replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>') }}
              />
              {embed.fields && (
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {embed.fields.map((f) => (
                    <div key={f.name} className="rounded-md bg-white/5 px-2.5 py-1.5">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                        {f.name}
                      </p>
                      <p
                        className="text-xs text-slate-200"
                        dangerouslySetInnerHTML={{ __html: f.value.replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>') }}
                      />
                    </div>
                  ))}
                </div>
              )}
              {embed.footer && (
                <p className="mt-2.5 text-[10px] text-slate-500">{embed.footer}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Commands() {
  const [category, setCategory] = useState<CommandCategory>('General');
  const [activeName, setActiveName] = useState<string>(COMMANDS[0].name);

  const filtered = useMemo(
    () => COMMANDS.filter((c) => c.category === category),
    [category],
  );

  const active = useMemo(
    () => COMMANDS.find((c) => c.name === activeName) ?? filtered[0] ?? COMMANDS[0],
    [activeName, filtered],
  );

  const selectCategory = (cat: CommandCategory) => {
    setCategory(cat);
    const first = COMMANDS.find((c) => c.category === cat);
    if (first) setActiveName(first.name);
  };

  return (
    <section id="commands" className="relative py-20 sm:py-28">
      {/* ambient glow */}
      <div className="absolute left-1/2 top-1/3 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto mb-12 max-w-2xl text-center">
          <span className="section-eyebrow">Try it live</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Interactive command showcase
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Filter by category, then click any command to see exactly how
            Aesthetic King responds in Discord.
          </p>
        </div>

        {/* Category tabs */}
        <div className="reveal reveal-delay-1 mb-8 flex flex-wrap justify-center gap-2">
          {COMMAND_CATEGORIES.map((cat) => {
            const isActive = cat === category;
            return (
              <button
                key={cat}
                onClick={() => selectCategory(cat)}
                className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-500 to-neon-magenta shadow-glow" />
                )}
                {!isActive && (
                  <span className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.03] transition-colors hover:border-white/20" />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Two-column layout */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Command list */}
          <div className="reveal reveal-delay-2">
            <div className="space-y-2.5">
              {filtered.map((cmd) => (
                <CommandRow
                  key={cmd.name}
                  command={cmd}
                  active={cmd.name === active.name}
                  onClick={() => setActiveName(cmd.name)}
                />
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-slate-500">
              {filtered.length} commands in {category} • Click one to preview the response
            </p>
          </div>

          {/* Chat preview */}
          <div className="reveal reveal-delay-3 lg:sticky lg:top-24 lg:self-start">
            <ChatPreview command={active} />
          </div>
        </div>
      </div>
    </section>
  );
}
