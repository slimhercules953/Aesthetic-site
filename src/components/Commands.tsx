import { useMemo, useState } from 'react';
import {
  COMMANDS,
  COMMAND_CATEGORIES,
  type Command,
  type CommandCategory,
} from '../data';
import { Crown, Hash, Terminal, ChevronRight, Sparkles } from 'lucide-react';

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
          active
            ? 'text-accent-300'
            : 'text-slate-500 group-hover:text-slate-300'
        }`}
      />
      <div className="min-w-0 flex-1">
        <p
          className={`font-mono text-sm font-medium ${
            active ? 'text-white' : 'text-slate-200'
          }`}
        >
          {command.name}
        </p>
        <p className="truncate text-xs text-slate-500">{command.description}</p>
      </div>
      <ChevronRight
        className={`h-4 w-4 shrink-0 transition-all ${
          active
            ? 'translate-x-0 text-accent-300'
            : '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
        }`}
      />
    </button>
  );
}

function ChatPreview({ command }: { command: Command }) {
  const { executor, commandName, responseText, timestamp, canvas } =
    command.preview;

  // Helper to safely display code tags or standard highlights
  const formatText = (text: string) => {
    return text.replace(
      /\/`([^`]+)`/g,
      '<code class="text-slate-400 font-mono bg-black/20 px-1 py-0.5 rounded text-[11px]">$1</code>'
    );
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#222226] shadow-card backdrop-blur-xl text-slate-300 font-sans">
      {/* Window bar matching layout styling */}
      <div className="flex items-center gap-2 border-b border-white/5 bg-[#1e1e22] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-4 flex items-center gap-1.5 text-xs font-semibold text-slate-400">
          <Hash className="h-3.5 w-3.5 text-slate-500" /> aesthetic-lounge
        </span>
        <span className="ml-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#3dffb0]">
          <span className="h-2 w-2 rounded-full bg-[#3dffb0]" /> LIVE PREVIEW
        </span>
      </div>

      {/* Chat body */}
      <div key={command.name} className="space-y-4 p-4 sm:p-5 animate-fade-in">
        {/* Apps-v2 Header execution track */}
        <div className="flex items-center gap-2 pl-[48px] text-xs text-slate-400 font-medium">
          <div className="h-4 w-4 rounded-full bg-purple-600 flex items-center justify-center text-[10px] text-white font-bold">
            P
          </div>
          <span className="text-white font-semibold">{executor}</span>
          <span className="text-slate-500">used</span>
          <span className="bg-[#5865f2]/15 text-[#949cf7] px-1.5 py-0.5 rounded text-[11px] font-mono">
            /{commandName}
          </span>
        </div>

        {/* Bot application reply layout block */}
        <div className="flex items-start gap-3">
          {/* Updated Royal Gradient Bot Icon with Sparkle */}
          <div className="relative h-10 w-10 shrink-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-[3px] shadow-lg">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#222226] text-xl">
              👑
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#222226] bg-[#3dffb0]" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-semibold text-white">
                Aesthetic King
              </span>
              <span className="rounded bg-indigo-600 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                APP
              </span>
              <span className="text-[10px] text-slate-500">{timestamp}</span>
            </div>
            {responseText && (
              <p className="text-sm text-slate-200 mt-0.5">{responseText}</p>
            )}

            {/* Embed container Wrapper */}
            <div className="mt-2.5 overflow-hidden rounded-xl border border-white/5 bg-[#2b2d31] p-4 max-w-md shadow-lg">
              {/* Separate Layout Rule 1: Custom Profile layout */}
              {commandName === 'profile' ? (
                <div className="space-y-4 text-sm">
                  {/* Recommended Profile Picture Section */}
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1">
                      <p className="font-bold text-white tracking-wide">
                        Your recommended Profile Picture
                      </p>
                      <p className="text-[#00a8fc] text-xs hover:underline cursor-pointer">
                        Download the Profile Picture
                      </p>
                    </div>
                    {/* Right Floating Thumbnail Profile Picture */}
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-[#1e1e22]">
                      <img
                        src={
                          canvas.pfpUrl ||
                          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150'
                        }
                        alt="Recommended Profile Picture"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Recommended Profile Banner Section */}
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <p className="font-bold text-white tracking-wide">
                        Your recommended Profile Banner
                      </p>
                      <p className="text-[#00a8fc] text-xs hover:underline cursor-pointer">
                        Download the Banner
                      </p>
                    </div>
                    {/* Large Full-Width Inline Banner Display */}
                    <div className="w-full overflow-hidden rounded-xl bg-[#1e1e22]">
                      <img
                        src={
                          canvas.bannerUrl ||
                          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600'
                        }
                        alt="Recommended Profile Banner"
                        className="w-full h-auto object-cover block"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Separate Layout Rule 2: Restored Theme Canvas UI Element block */}
                  {canvas.type === 'theme-canvas' && (
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        {/* Profile Thumbnail */}
                        <div className="h-[90px] w-[90px] shrink-0 overflow-hidden rounded-lg border border-white/10 bg-slate-800">
                          <img
                            src={canvas.pfpUrl}
                            alt="Profile Target"
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Right-Aligned Hex Badges */}
                        <div className="flex-1 space-y-2">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                              Primary Color
                            </span>
                            <div
                              className="w-full py-1.5 px-3 rounded text-xs font-mono text-white text-right font-medium relative shadow-inner border border-white/5"
                              style={{ backgroundColor: canvas.primaryColor }}
                            >
                              <span className="absolute left-3 opacity-50">
                                #
                              </span>
                              {canvas.primaryColor?.replace('#', '')}
                            </div>
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                              Secondary Color
                            </span>
                            <div
                              className="w-full py-1.5 px-3 rounded text-xs font-mono text-white text-right font-medium relative shadow-inner border border-white/5"
                              style={{ backgroundColor: canvas.secondaryColor }}
                            >
                              <span className="absolute left-3 opacity-50">
                                #
                              </span>
                              {canvas.secondaryColor?.replace('#', '')}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Raw Banner Strip */}
                      <div className="w-full h-12 rounded-lg overflow-hidden border border-white/5 bg-slate-800">
                        <img
                          src={canvas.bannerUrl}
                          alt="Extracted Banner"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Mock Client UI popout with avatar layout overlap */}
                      <div className="w-full rounded-xl overflow-hidden bg-[#111214] border border-white/5 relative">
                        <div className="w-full h-16 overflow-hidden">
                          <img
                            src={canvas.bannerUrl}
                            alt="Client View Banner"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="px-3.5 pb-3.5 relative flex items-end justify-between">
                          {/* Overlapping Avatar circular border layout */}
                          <div className="h-16 w-16 rounded-full border-[4px] border-[#111214] bg-[#232428] overflow-hidden -mt-8 relative shrink-0">
                            <img
                              src={canvas.pfpUrl}
                              alt="Client View Avatar"
                              className="w-full h-full object-cover"
                            />
                            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#111214] bg-[#3dffb0]" />
                          </div>
                          {/* Micro System Badges */}
                          <div className="flex gap-1 mb-1 opacity-50 scale-90 origin-right">
                            <span className="h-4 w-4 rounded bg-slate-800 flex items-center justify-center text-[9px]">
                              👑
                            </span>
                            <span className="h-4 w-4 rounded bg-slate-800 flex items-center justify-center text-[9px]">
                              ✨
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Variant B: The Image Dispenser element */}
                  {canvas.type === 'image-dispenser' && (
                    <div className="w-full overflow-hidden rounded-xl bg-[#1e1e22]">
                      <img
                        src={
                          canvas.imageUrl ||
                          canvas.url ||
                          'https://images.unsplash.com/photo-161800518237384-a83a8bd57fbe?w=600'
                        }
                        alt={canvas.mainText || 'Generated Asset'}
                        className="w-full h-auto object-cover block mx-auto"
                      />
                    </div>
                  )}

                  {/* Variant C: Text Block for Generated Profiles/Bios */}
                  {canvas.type === 'text-block' && (
                    <div className="space-y-3">
                      <p className="text-xs italic text-slate-200 leading-relaxed bg-black/20 p-2.5 rounded-lg border border-white/5">
                        {canvas.mainText}
                      </p>
                      {canvas.fields && (
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          {canvas.fields.map((f, i) => (
                            <div
                              key={i}
                              className="bg-white/[0.02] border border-white/5 rounded p-1.5 px-2"
                            >
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                                {f.label}
                              </span>
                              <span className="text-xs text-white font-medium">
                                {f.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Variant D: Utility metadata / grid fields config (Custom handling for ping) */}
                  {canvas.type === 'fields-grid' && (
                    <div className="space-y-3">
                      <span className="text-sm font-bold text-white block">
                        {commandName === 'ping' ? '🏓 Pong!' : canvas.mainText}
                      </span>

                      {/* Standard structural loops for fields, or a live simulated system latency grid if command is ping */}
                      {commandName === 'ping' ? (
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          <div className="bg-white/[0.02] border border-white/5 rounded p-2">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                              API Latency
                            </span>
                            <span className="text-xs text-emerald-400 font-mono font-medium">
                              24ms
                            </span>
                          </div>
                          <div className="bg-white/[0.02] border border-white/5 rounded p-2">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                              Gateway Heartbeat
                            </span>
                            <span className="text-xs text-emerald-400 font-mono font-medium">
                              18ms
                            </span>
                          </div>
                        </div>
                      ) : (
                        canvas.fields && (
                          <div className="space-y-2">
                            {canvas.fields.map((f, i) => (
                              <div
                                key={i}
                                className="text-xs border-b border-white/5 pb-2 last:border-0 last:pb-0"
                              >
                                <span className="font-bold text-slate-300 block mb-0.5">
                                  {f.label}
                                </span>
                                <p
                                  className="text-slate-400 leading-relaxed"
                                  dangerouslySetInnerHTML={{
                                    __html: formatText(f.value),
                                  }}
                                />
                              </div>
                            ))}
                          </div>
                        )
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Typing indicator block */}
        <div className="flex items-center gap-2 pl-13 text-xs text-slate-500 pt-1">
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-500 [animation-delay:-0.3s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-500 [animation-delay:-0.15s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-500" />
          </span>
          <span>Aesthetic King is typing…</span>
        </div>
      </div>
    </div>
  );
}

export default function Commands() {
  const [category, setCategory] = useState<CommandCategory>('Core Features');
  const [activeName, setActiveName] = useState<string>(COMMANDS[0].name);

  const filtered = useMemo(
    () => COMMANDS.filter((c) => c.category === category),
    [category]
  );

  const active = useMemo(
    () =>
      COMMANDS.find((c) => c.name === activeName) ?? filtered[0] ?? COMMANDS[0],
    [activeName, filtered]
  );

  const selectCategory = (cat: CommandCategory) => {
    setCategory(cat);
    const first = COMMANDS.find((c) => c.category === cat);
    if (first) setActiveName(first.name);
  };

  return (
    <section id="commands" className="relative py-20 sm:py-28">
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

        {/* Category tabs updated fallback initial matching category schema */}
        <div className="reveal reveal-delay-1 mb-8 flex flex-wrap justify-center gap-2">
          {COMMAND_CATEGORIES.map((cat) => {
            const isActive = cat === category;
            return (
              <button
                key={cat}
                onClick={() => selectCategory(cat)}
                className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-white'
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
              {filtered.length} commands in {category} • Click one to preview
              the response
            </p>
          </div>

          {/* Chat preview display */}
          <div className="reveal reveal-delay-3 lg:sticky lg:top-24 lg:self-start">
            <ChatPreview command={active} />
          </div>
        </div>
      </div>
    </section>
  );
}
