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
    slug: 'storegrowth',
    name: 'StoreGrowth',
    description: 'StoreGrowth simplifies sales and customer integration.',
    articles: 17,
    tileBg: '#f1f8ff',
    icon: 'lucide:trending-up',
    iconColor: 'text-blue-500'
  },
  {
    slug: 'cartpulse',
    name: 'CartPulse',
    description: 'CartPulse recovers lost sales with personalized email campaigns.',
    articles: 29,
    tileBg: '#fef6ff',
    icon: 'lucide:mail',
    iconColor: 'text-fuchsia-500'
  },
  {
    slug: 'texty',
    name: 'Texty',
    description: 'Texty delivers real-time SMS alerts for orders and updates.',
    articles: 10,
    tileBg: '#fff3f3',
    icon: 'lucide:message-square',
    iconColor: 'text-red-500'
  },
  {
    slug: 'wc-conversion-tracking',
    name: 'WC Conversion Tracking',
    description: 'Recover abandoned carts with automated email campaigns.',
    articles: 34,
    tileBg: '#f8f2ff',
    icon: 'lucide:bar-chart-3',
    iconColor: 'text-violet-500'
  },
  {
    slug: 'tryaura',
    name: 'TryAura',
    description: 'TryAura enhances images and adds virtual try-on features.',
    articles: 22,
    tileBg: '#fff9e3',
    icon: 'lucide:image',
    iconColor: 'text-amber-500'
  },
  {
    slug: 'cart-pilot',
    name: 'Cart Pilot',
    description: 'Salicio AI assistant helps customers find and buy products.',
    articles: 15,
    tileBg: '#f5f1ff',
    icon: 'lucide:shopping-cart',
    iconColor: 'text-indigo-500'
  }
];
