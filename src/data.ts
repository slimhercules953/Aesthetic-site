import {
  Shield,
  Sparkles,
  Coins,
  Music,
  Wrench,
  Gamepad2,
  type LucideIcon,
} from 'lucide-react';

export type Stat = {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
};

export const STATS: Stat[] = [
  { label: 'Active Servers', value: 512, suffix: '+' },
  { label: 'Users Reached', value: 250, suffix: 'k+', prefix: '' },
  { label: 'Commands Run Daily', value: 1.4, suffix: 'M+', decimals: 1 },
  { label: 'Uptime', value: 99.9, suffix: '%', decimals: 1 },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
  span?: string;
  points: string[];
};

export const FEATURES: Feature[] = [
  {
    icon: Shield,
    title: 'Moderation',
    description:
      'Auto-mod, raid protection, warn systems, and detailed audit logs — keep your community safe without lifting a finger.',
    accent: 'from-accent-500/20 to-accent-500/5',
    span: 'lg:col-span-2',
    points: ['Auto-mod filters', 'Raid shield', 'Warn & mute system', 'Audit logs'],
  },
  {
    icon: Sparkles,
    title: 'Aesthetics & Profiles',
    description:
      'Custom profile cards, rank banners, and server welcome designs that make every member feel at home.',
    accent: 'from-neon-magenta/20 to-neon-pink/5',
    points: ['Profile cards', 'Rank banners', 'Welcome designs'],
  },
  {
    icon: Coins,
    title: 'Economy',
    description:
      'A full currency system with daily rewards, shops, gambling games, and leaderboards your members will obsess over.',
    accent: 'from-neon-blue/20 to-neon-cyan/5',
    points: ['Daily rewards', 'Shops', 'Leaderboards'],
  },
  {
    icon: Music,
    title: 'Music & Fun',
    description:
      'High-quality music streaming from multiple sources, plus games, memes, and interactive commands to keep chat alive.',
    accent: 'from-neon-green/20 to-accent-400/5',
    span: 'lg:col-span-2',
    points: ['HD music', 'Games', 'Memes & trivia'],
  },
  {
    icon: Wrench,
    title: 'Utility',
    description:
      'Tickets, reminders, polls, auto-roles, and a configurable dashboard for everything.',
    accent: 'from-accent-400/20 to-accent-600/5',
    points: ['Tickets', 'Reminders', 'Auto-roles'],
  },
  {
    icon: Gamepad2,
    title: 'Leveling',
    description:
      'XP, levels, role rewards, and a prestige system that turns engagement into a game.',
    accent: 'from-neon-cyan/20 to-neon-blue/5',
    points: ['XP & levels', 'Role rewards', 'Prestige'],
  },
];

export type CommandCategory = 'General' | 'Admin' | 'Economy' | 'Fun';

export type Command = {
  name: string;
  category: CommandCategory;
  description: string;
  usage: string;
  preview: {
    user: string;
    avatarColor: string;
    content: string;
    embed: {
      title: string;
      description: string;
      color: string;
      fields?: { name: string; value: string }[];
      footer?: string;
    };
  };
};

export const COMMAND_CATEGORIES: CommandCategory[] = ['General', 'Admin', 'Economy', 'Fun'];

export const COMMANDS: Command[] = [
  {
    name: '/help',
    category: 'General',
    description: 'Browse all commands and modules with an interactive menu.',
    usage: '/help [module]',
    preview: {
      user: 'Aesthetic King',
      avatarColor: 'from-accent-500 to-neon-magenta',
      content: '',
      embed: {
        title: '✨ Aesthetic King — Help Menu',
        description: 'Select a module below to explore its commands.',
        color: '#7c2dff',
        fields: [
          { name: '🛡️ Moderation', value: '12 commands' },
          { name: '🎨 Aesthetics', value: '8 commands' },
          { name: '💰 Economy', value: '15 commands' },
          { name: '🎵 Music & Fun', value: '20 commands' },
        ],
        footer: 'Use the buttons below to navigate • Page 1/4',
      },
    },
  },
  {
    name: '/profile',
    category: 'General',
    description: 'View your beautifully rendered aesthetic profile card.',
    usage: '/profile [@user]',
    preview: {
      user: 'Aesthetic King',
      avatarColor: 'from-accent-500 to-neon-magenta',
      content: '',
      embed: {
        title: '👑 Profile — @luna',
        description: 'A custom-designed profile card with badges, rank, and balance.',
        color: '#ff3df0',
        fields: [
          { name: 'Level', value: '42  (12,840 XP)' },
          { name: 'Balance', value: '◈ 8,420 coins' },
          { name: 'Badges', value: '💎 🏆 ⭐ 🎨' },
        ],
        footer: 'Earn XP by chatting • Prestige II',
      },
    },
  },
  {
    name: '/rank',
    category: 'General',
    description: 'Check your server rank and progress to the next level.',
    usage: '/rank [@user]',
    preview: {
      user: 'Aesthetic King',
      avatarColor: 'from-accent-500 to-neon-magenta',
      content: '',
      embed: {
        title: '📈 Rank — @luna',
        description: 'You are **#3** in this server. Keep chatting to climb!',
        color: '#2de2ff',
        fields: [
          { name: 'Current Level', value: '42' },
          { name: 'Progress', value: '████████░░ 82% to Level 43' },
        ],
        footer: 'Next role reward at Level 45 → @Veteran',
      },
    },
  },
  {
    name: '/ban',
    category: 'Admin',
    description: 'Ban a member with an optional reason and audit-log entry.',
    usage: '/ban @user [reason]',
    preview: {
      user: 'Aesthetic King',
      avatarColor: 'from-accent-500 to-neon-magenta',
      content: '',
      embed: {
        title: '🔨 Ban Executed',
        description: 'Member **@spammer** has been banned from the server.',
        color: '#ff3df0',
        fields: [
          { name: 'Moderator', value: '@admin' },
          { name: 'Reason', value: 'Spamming channels' },
          { name: 'Case ID', value: '#0042' },
        ],
        footer: 'Logged to #audit • Undo with /unban 0042',
      },
    },
  },
  {
    name: '/automod',
    category: 'Admin',
    description: 'Configure auto-mod filters for spam, links, and profanity.',
    usage: '/automod set <filter> <action>',
    preview: {
      user: 'Aesthetic King',
      avatarColor: 'from-accent-500 to-neon-magenta',
      content: '',
      embed: {
        title: '🛡️ Auto-Mod Configuration',
        description: 'Updated filter settings for this server.',
        color: '#7c2dff',
        fields: [
          { name: 'Spam Filter', value: '✅ Enabled → Delete + Warn' },
          { name: 'Link Filter', value: '✅ Enabled → Delete' },
          { name: 'Profanity', value: '⬜ Disabled' },
        ],
        footer: 'Changes apply instantly across all channels',
      },
    },
  },
  {
    name: '/purge',
    category: 'Admin',
    description: 'Bulk-delete messages with optional user or content filters.',
    usage: '/purge <amount> [@user]',
    preview: {
      user: 'Aesthetic King',
      avatarColor: 'from-accent-500 to-neon-magenta',
      content: '',
      embed: {
        title: '🧹 Purge Complete',
        description: 'Successfully deleted **50** messages from #general.',
        color: '#2de2ff',
        fields: [{ name: 'Duration', value: '1.2s' }],
        footer: 'Audit entry created • Case #0043',
      },
    },
  },
  {
    name: '/balance',
    category: 'Economy',
    description: 'Check your coin balance and net worth.',
    usage: '/balance [@user]',
    preview: {
      user: 'Aesthetic King',
      avatarColor: 'from-accent-500 to-neon-magenta',
      content: '',
      embed: {
        title: '💰 Balance — @luna',
        description: 'Your wallet and bank holdings.',
        color: '#3dffb0',
        fields: [
          { name: '◈ Wallet', value: '8,420 coins' },
          { name: '🏦 Bank', value: '24,100 coins' },
          { name: 'Net Worth', value: '32,520 coins' },
        ],
        footer: 'Deposit with /deposit to keep your coins safe',
      },
    },
  },
  {
    name: '/daily',
    category: 'Economy',
    description: 'Claim your daily reward and build a streak for bonuses.',
    usage: '/daily',
    preview: {
      user: 'Aesthetic King',
      avatarColor: 'from-accent-500 to-neon-magenta',
      content: '',
      embed: {
        title: '🎁 Daily Reward Claimed',
        description: 'You received **500 coins**! Come back tomorrow for a bigger reward.',
        color: '#3dffb0',
        fields: [
          { name: 'Streak', value: '🔥 7 days' },
          { name: 'Bonus', value: '+20% streak multiplier' },
        ],
        footer: 'Next reward: 600 coins • Streak resets in 24h',
      },
    },
  },
  {
    name: '/shop',
    category: 'Economy',
    description: 'Browse and buy items, roles, and cosmetics with your coins.',
    usage: '/shop [page]',
    preview: {
      user: 'Aesthetic King',
      avatarColor: 'from-accent-500 to-neon-magenta',
      content: '',
      embed: {
        title: '🛒 Server Shop',
        description: 'Spend your coins on roles and cosmetics.',
        color: '#7c2dff',
        fields: [
          { name: '🎨 Custom Color', value: '1,500 coins' },
          { name: '⭐ Star Badge', value: '3,000 coins' },
          { name: '👑 VIP Role', value: '10,000 coins' },
        ],
        footer: 'Buy with /buy <item> • Restocks daily',
      },
    },
  },
  {
    name: '/play',
    category: 'Fun',
    description: 'Play high-quality music from YouTube, Spotify, and more.',
    usage: '/play <song or url>',
    preview: {
      user: 'Aesthetic King',
      avatarColor: 'from-accent-500 to-neon-magenta',
      content: '',
      embed: {
        title: '🎵 Now Playing',
        description: '**Midnight City** — M83',
        color: '#2de2ff',
        fields: [
          { name: 'Duration', value: '4:03' },
          { name: 'Queued by', value: '@luna' },
          { name: 'Source', value: 'YouTube' },
        ],
        footer: 'Controls: /skip /pause /queue • Filters: /bassboost',
      },
    },
  },
  {
    name: '/trivia',
    category: 'Fun',
    description: 'Start a multiplayer trivia game with leaderboard scoring.',
    usage: '/trivia [category]',
    preview: {
      user: 'Aesthetic King',
      avatarColor: 'from-accent-500 to-neon-magenta',
      content: '',
      embed: {
        title: '🧠 Trivia Started',
        description: 'First to 5 points wins! React to answer.',
        color: '#ff3df0',
        fields: [
          { name: 'Category', value: 'Science & Tech' },
          { name: 'Players', value: '4 joined' },
        ],
        footer: 'Round 1 of 5 • 15s per question',
      },
    },
  },
  {
    name: '/meme',
    category: 'Fun',
    description: 'Fetch a fresh meme from your favorite subreddit.',
    usage: '/meme [subreddit]',
    preview: {
      user: 'Aesthetic King',
      avatarColor: 'from-accent-500 to-neon-magenta',
      content: '',
      embed: {
        title: '😂 Fresh Meme',
        description: 'Pulled from r/ProgrammerHumor',
        color: '#3dffb0',
        fields: [{ name: 'Upvotes', value: '12.4k ↑' }],
        footer: 'Refresh with /meme again • /meme dankmemes',
      },
    },
  },
];
