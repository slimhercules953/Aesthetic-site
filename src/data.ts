import {
  Sparkles,
  Palette,
  Paintbrush as ColorIcon,
  Dices,
  Lock,
  Compass,
  type LucideIcon,
} from 'lucide-react';

export type Stat = {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: string;
};

export const STATS: Stat[] = [
  { label: 'Curated Assets', value: 500, suffix: '+' },
  { label: 'Color Palettes', value: 150, suffix: '+' },
  { label: 'Uptime', value: 99.9, suffix: '%', decimals: '1' },
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
    icon: Sparkles,
    title: 'Aesthetic Bio Generation',
    description:
      'Utilizes advanced AI to craft fully customized, beautifully structured Discord bios tailoring to specific visual subcultures.',
    accent: 'from-accent-500/20 to-accent-500/5',
    span: 'lg:col-span-2',
    points: [
      'AI-generated originals',
      'Pastel, & Cyber presets',
      'Clean layout variations',
    ],
  },
  {
    icon: Palette,
    title: 'Theme Coordination',
    description:
      'Dynamically selects perfectly color-matched custom profile pictures and banners directly from Cloudflare R2 object storage bins.',
    accent: 'from-neon-magenta/20 to-neon-pink/5',
    points: [
      'Prefix bundle pairing',
      'Downloadable asset links',
      'Visual aesthetic recommendations',
    ],
  },
  {
    icon: Compass,
    title: 'Dynamic Previews',
    description:
      'Compiles a downloadable mockup of a Discord UI profile client via node-canvas, mapping color extraction details instantly.',
    accent: 'from-neon-blue/20 to-neon-cyan/5',
    points: [
      'Dominant color bars',
      'Nitro & custom badge mocks',
      'PNG profile downloads',
    ],
  },
  {
    icon: ColorIcon,
    title: 'Color Analytics',
    description:
      'Displays precise hex data layouts alongside closest named matches, expanding visual palettes for custom role setups.',
    accent: 'from-neon-green/20 to-accent-400/5',
    span: 'lg:col-span-2',
    points: [
      'Hex code breakdown',
      'Aesthetic variant naming',
      'Matching accent charts',
    ],
  },
  {
    icon: Palette, // Make sure 'Palette' is imported from 'lucide-react' at the top of the file
    title: 'Color Palette Extraction',
    description:
      'Instantly sample image uploads to extract primary and secondary hex color tracks, creating matching system profiles seamlessly.',
    accent: 'from-accent-400/20 to-accent-600/5',
    points: [
      'Image color sampling arrays',
      'Instant hex track matching',
      'Zero-latency canvas previews',
    ],
  },
  {
    icon: Lock,
    title: 'Privacy-First Architecture',
    description:
      'No user IDs or structural server configurations are saved long-term. Information is processed strictly in-memory during command loops.',
    accent: 'from-neon-cyan/20 to-neon-blue/5',
    points: [
      'No persistent analytics',
      'Volatile command loops',
      'Immediate RAM disposal',
    ],
  },
];

export type CommandCategory =
  | 'Core Features'
  | 'Aesthetic Assets'
  | 'Utility & Info';

export interface LayoutCanvasData {
  type: 'theme-canvas' | 'image-dispenser' | 'text-block' | 'fields-grid';
  primaryColor?: string;
  secondaryColor?: string;
  pfpUrl?: string;
  bannerUrl?: string;
  mainText?: string;
  fields?: { label: string; value: string }[];
}

export interface CommandPreview {
  executor: string;
  commandName: string;
  responseText: string;
  timestamp: string;
  canvas: LayoutCanvasData;
}

export type Command = {
  name: string;
  category: CommandCategory;
  description: string;
  usage: string;
  preview: CommandPreview;
};

export const COMMAND_CATEGORIES: CommandCategory[] = [
  'Core Features',
  'Aesthetic Assets',
  'Utility & Info',
];

export const COMMANDS: Command[] = [
  /* ==================== CORE FEATURES ==================== */
  {
    name: '/theme',
    category: 'Core Features',
    description: 'Creates a profile layout from a pfp and banner.',
    usage: '/theme',
    preview: {
      executor: 'P4rz1val',
      commandName: 'theme',
      responseText: 'Here is your generated design!',
      timestamp: '8:03 PM',
      canvas: {
        type: 'theme-canvas',
        primaryColor: '#373b5d',
        secondaryColor: '#48456aff',
        pfpUrl: '/46 pfp.jpg',
        bannerUrl: '/46 banner.jpg',
      },
    },
  },
  {
    name: '/bio',
    category: 'Core Features',
    description: 'Sends an AI generated bio.',
    usage: '/bio',
    preview: {
      executor: 'P4rz1val',
      commandName: 'bio',
      responseText: 'Here is your new custom profile biography recommendation:',
      timestamp: '8:04 PM',
      canvas: {
        type: 'text-block',
        mainText:
          '"lost in the neon clouds ☁️✨ chasing pastel dreams and quiet frequencies."',
        fields: [
          { label: 'Vibe Match', value: 'Pastel / Cyber' },
          { label: 'Length', value: '84 chars' },
        ],
      },
    },
  },
  {
    name: '/profile',
    category: 'Core Features',
    description: 'Sends a randomly selected profile for you.',
    usage: '/profile',
    preview: {
      executor: 'P4rz1val',
      commandName: 'profile',
      responseText: 'Here is your randomly selected profile setup!',
      timestamp: '8:05 PM',
      canvas: {
        type: 'image-dispenser',
        pfpUrl: '/46 pfp.jpg',
        bannerUrl: '/46 banner.jpg',
        mainText: 'Cloudflare R2 Asset Pair #0046',
      },
    },
  },
  {
    name: '/random',
    category: 'Core Features',
    description: 'Sends a random suggestion to be run as a command.',
    usage: '/random',
    preview: {
      executor: 'P4rz1val',
      commandName: 'random',
      responseText:
        'Looking for inspiration? Try invoking this random configuration route:',
      timestamp: '8:06 PM',
      canvas: {
        type: 'fields-grid',
        mainText: '🎲 Suggestion Router',
        fields: [{ label: 'Recommended Next Command', value: '`/cyberpunk`' }],
      },
    },
  },

  /* ==================== AESTHETIC ASSETS ==================== */
  {
    name: '/pastel',
    category: 'Aesthetic Assets',
    description: 'Send a pastel aesthetic image.',
    usage: '/pastel',
    preview: {
      executor: 'P4rz1val',
      commandName: 'pastel',
      responseText: 'Here is your curated asset query response:',
      timestamp: '8:07 PM',
      canvas: {
        type: 'image-dispenser',
        bannerUrl: '/assets/pastel-banner.jpg',
        mainText: 'Collection: pastel-landscape',
      },
    },
  },
  {
    name: '/cyberpunk',
    category: 'Aesthetic Assets',
    description: 'Send a cyberpunk aesthetic image.',
    usage: '/cyberpunk',
    preview: {
      executor: 'P4rz1val',
      commandName: 'cyberpunk',
      responseText: 'Here is your curated asset query response:',
      timestamp: '8:08 PM',
      canvas: {
        type: 'image-dispenser',
        bannerUrl: '/assets/cyberpunk-street.jpg',
        mainText: 'Collection: cyberpunk-city',
      },
    },
  },
  {
    name: '/minimalist',
    category: 'Aesthetic Assets',
    description: 'Send a minimalist aesthetic image.',
    usage: '/minimalist',
    preview: {
      executor: 'P4rz1val',
      commandName: 'minimalist',
      responseText: 'Here is your curated asset query response:',
      timestamp: '8:09 PM',
      canvas: {
        type: 'image-dispenser',
        bannerUrl: '/assets/minimalist-lines.jpg',
        mainText: 'Collection: mono-minimalist',
      },
    },
  },
  {
    name: '/neon',
    category: 'Aesthetic Assets',
    description: 'Sends a neon aesthetic image.',
    usage: '/neon',
    preview: {
      executor: 'P4rz1val',
      commandName: 'neon',
      responseText: 'Here is your curated asset query response:',
      timestamp: '8:10 PM',
      canvas: {
        type: 'image-dispenser',
        bannerUrl: '/assets/neon-glow.jpg',
        mainText: 'Collection: neon-lights',
      },
    },
  },

  /* ==================== UTILITY & INFO ==================== */
  {
    name: '/help',
    category: 'Utility & Info',
    description: 'Sends a help command that displays the current commands.',
    usage: '/help',
    preview: {
      executor: 'P4rz1val',
      commandName: 'help',
      responseText:
        'Explore our complete active inventory of modular slash commands:',
      timestamp: '8:12 PM',
      canvas: {
        type: 'fields-grid',
        mainText: '✨ Aesthetic King — Help Menu',
        fields: [
          {
            label: '🎨 UI Design',
            value: '`/bio`, `/profile`, `/theme`, `/random`',
          },
          { label: '📸 Asset Channels', value: '18 specific visual hooks' },
          {
            label: '⚙️ Integration',
            value: '`/help`, `/ping`, `/uptime`, `/vote`',
          },
        ],
      },
    },
  },
  {
    name: '/ping',
    category: 'Utility & Info',
    description: 'Go away.',
    usage: '/ping',
    preview: {
      executor: 'P4rz1val',
      commandName: 'ping',
      responseText: '',
      timestamp: '8:13 PM',
      canvas: {
        type: 'fields-grid',
        mainText: '🏓 Latency Echo',
        fields: [{ label: 'Gateway Connection', value: '24ms' }],
      },
    },
  },
  {
    name: '/uptime',
    category: 'Utility & Info',
    description: "Let's you know how long the bot has been on.",
    usage: '/uptime',
    preview: {
      executor: 'P4rz1val',
      commandName: 'uptime',
      responseText: 'Requesting host infrastructure metrics...',
      timestamp: '8:14 PM',
      canvas: {
        type: 'fields-grid',
        mainText: '⏳ Operational Execution Uptime',
        fields: [
          { label: 'Active State', value: '3 days, 14 hours' },
          { label: 'Environment State', value: 'Ephemeral' },
        ],
      },
    },
  },
  {
    name: '/vote',
    category: 'Utility & Info',
    description: 'Vote for Aesthetic King on Top.gg.',
    usage: '/vote',
    preview: {
      executor: 'P4rz1val',
      commandName: 'vote',
      responseText:
        'Thank you for supporting our server development workflows!',
      timestamp: '8:15 PM',
      canvas: {
        type: 'fields-grid',
        mainText: '💖 Support Authentic Aesthetics Development',
        fields: [
          { label: 'Top.gg Route', value: 'Click here to drop a daily vote' },
        ],
      },
    },
  },
];
