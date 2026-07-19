export interface DocCategory {
  slug: string;
  name: string;
  description: string;
  articles: number;
  tileBg: string;
  icon: string;
  iconColor: string;
}

export const categories: DocCategory[] = [
  {
    slug: 'getting-started',
    name: 'Getting Started',
    description: 'Set up your workspace and build your first AI agent in minutes.',
    articles: 17,
    tileBg: '#f1f8ff',
    icon: 'lucide:rocket',
    iconColor: 'text-blue-500'
  },
  {
    slug: 'building-agents',
    name: 'Building Agents',
    description: 'Turn plain-language prompts into multi-step agents that reason and act.',
    articles: 29,
    tileBg: '#fef6ff',
    icon: 'lucide:bot',
    iconColor: 'text-fuchsia-500'
  },
  {
    slug: 'integrations',
    name: 'Integrations',
    description: 'Connect Slack, email, CRMs, and more with one-click connectors.',
    articles: 10,
    tileBg: '#fff3f3',
    icon: 'lucide:plug',
    iconColor: 'text-red-500'
  },
  {
    slug: 'workflows-triggers',
    name: 'Workflows & Triggers',
    description: 'Run agents on a schedule, a webhook, or any event in your stack.',
    articles: 34,
    tileBg: '#f8f2ff',
    icon: 'lucide:workflow',
    iconColor: 'text-violet-500'
  },
  {
    slug: 'models-keys',
    name: 'Models & Keys',
    description: 'Use GPT, Claude, or open models, and bring your own API key.',
    articles: 22,
    tileBg: '#fff9e3',
    icon: 'lucide:brain-circuit',
    iconColor: 'text-amber-500'
  },
  {
    slug: 'monitoring-logs',
    name: 'Monitoring & Logs',
    description: 'Trace every run, debug failures, and set alerts that keep agents healthy.',
    articles: 15,
    tileBg: '#f5f1ff',
    icon: 'lucide:activity',
    iconColor: 'text-indigo-500'
  }
];
