export interface ChangelogSubsection {
  heading: string;
  paragraphs: string[];
  /** optional "Benefits" bullet list */
  benefits?: string[];
}

export interface ChangelogSection {
  /** emoji shown before the group title, e.g. "✨" */
  icon?: string;
  title: string;
  /** grouped subsections (each with its own heading + benefits) */
  subsections?: ChangelogSubsection[];
  /** or a flat bullet list (e.g. Bug Fixes) */
  bullets?: string[];
}

export interface ChangelogCallout {
  quote: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface ChangelogEntry {
  slug: string;
  date: string;
  version: string;
  title: string;
  /** category chips: New, Feature, Improvement, Fix, Security … */
  tags: string[];
  /** short summary shown on the changelog list */
  excerpt: string;
  cta: string;
  thumb: string;
  /** intro paragraphs shown under the title on the detail page */
  intro: string[];
  sections: ChangelogSection[];
  callout?: ChangelogCallout;
  outro?: { title: string; paragraphs: string[] };
}

export const entries: ChangelogEntry[] = [
  {
    slug: 'september-2024',
    date: 'Sep 10, 2024',
    version: 'v2025.20',
    title: 'New in Zylo: Faster Backup Navigation, Smarter Live Chat & Platform Reliability',
    tags: ['New', 'Improvement', 'Fix'],
    excerpt:
      'This release focuses on improving everyday usability and platform reliability across Zylo — pagination for large doc libraries, a smarter live chat experience, and a batch of stability fixes.',
    cta: 'Discover More',
    thumb: 'from-indigo-600 via-violet-600 to-sky-500',
    intro: [
      'This release focuses on improving everyday usability and platform reliability across Zylo.',
      "We've introduced pagination for the docs library to make managing large collections faster and smoother, improved the live chat experience, and shipped several fixes to publishing, search, and platform stability workflows.",
      "Let's take a look at what's new."
    ],
    sections: [
      {
        icon: '✨',
        title: 'Enhancements',
        subsections: [
          {
            heading: 'Pagination on the Docs Library',
            paragraphs: [
              'Managing workspaces with extensive doc histories just became much easier.',
              "We've added pagination to the docs library, allowing Zylo to load records more efficiently and helping you navigate large collections without performance slowdowns."
            ],
            benefits: [
              'Faster page loading',
              'Better performance on workspaces with many docs',
              'Smoother navigation across your library',
              'Improved overall content management experience'
            ]
          },
          {
            heading: 'Smarter Live Chat Button Placement',
            paragraphs: [
              "We've improved the placement and behavior of the live chat widget to create a cleaner workspace.",
              'The live chat button now appears in the bottom-right corner and automatically adjusts its visibility when the right-side drawer is opened.'
            ],
            benefits: [
              'Smoother user experience across the dashboard',
              'Less visual clutter',
              'Better workspace organization',
              'Improved accessibility when needed'
            ]
          }
        ]
      },
      {
        icon: '🛠️',
        title: 'Bug Fixes',
        bullets: [
          'Improved publish-failure handling for a more reliable publishing experience.',
          'Fixed the post-publish redirect toggle behavior.',
          'Enhanced backup operations with additional fixes and reliability improvements.',
          'Applied several platform-wide stability improvements and performance tweaks.'
        ]
      }
    ],
    callout: {
      quote: 'Still have questions? See Zylo in action!',
      body: 'Book a free 15-minute 1:1 demo with our specialist and see how easily you can write, publish, and scale your documentation — on your own domain or through Zylo-managed hosting.',
      ctaLabel: 'Book a Live Demo',
      ctaHref: '/contact'
    },
    outro: {
      title: 'Wrapping Up',
      paragraphs: [
        'This release is focused on making Zylo faster, cleaner, and more reliable for day-to-day documentation work.',
        'From easier library navigation and smarter interface behavior to publishing and backup reliability improvements, these updates are designed to improve your workflow without changing how you work.',
        'As always, thank you for building with Zylo. More improvements are already on the way.'
      ]
    }
  },
  {
    slug: 'october-2024',
    date: 'Oct 5, 2024',
    version: 'v2025.25',
    title: 'Zylo October Update: Security Enhancements',
    tags: ['Security', 'Improvement'],
    excerpt:
      "Hello Zylo Family! This October, we're prioritizing your security with robust enhancements — hardened SSO, audit logs, and a safer environment for every team.",
    cta: 'Read More',
    thumb: 'from-sky-500 via-indigo-500 to-fuchsia-500',
    intro: [
      'Hello Zylo Family! This October we focused on hardening the platform.',
      "Your data protection is our top priority, and these updates make Zylo safer for every team. Here's what shipped."
    ],
    sections: [
      {
        icon: '🔐',
        title: 'Enhancements',
        subsections: [
          {
            heading: 'Single Sign-On Across Subdomains',
            paragraphs: [
              'We hardened SSO sessions so team members stay signed in across all your workspace subdomains.',
              'Sessions now rotate securely without unexpected sign-outs, and admins get finer control over session lifetimes.'
            ],
            benefits: ['Fewer unexpected sign-outs', 'Configurable session lifetimes', 'Stronger session rotation']
          },
          {
            heading: 'Audit Logs for Every Workspace',
            paragraphs: [
              'Every workspace now records an audit trail of role changes, publishes, and setting updates.',
              'Export logs anytime for compliance, or filter by member to review recent activity at a glance.'
            ],
            benefits: ['Exportable compliance logs', 'Per-member activity filtering', 'Full visibility into changes']
          }
        ]
      },
      {
        icon: '🛠️',
        title: 'Bug Fixes',
        bullets: [
          'Resolved an edge case where invite links could expire early.',
          'Fixed inconsistent permission checks on shared folders.',
          'Improved reliability of the SSO callback flow.'
        ]
      }
    ],
    outro: {
      title: 'Wrapping Up',
      paragraphs: [
        'Security is never done — but this month Zylo got meaningfully safer for teams of every size.',
        'As always, thank you for building with Zylo. More improvements are on the way.'
      ]
    }
  },
  {
    slug: 'november-2024',
    date: 'Nov 12, 2024',
    version: 'v2025.30',
    title: 'Zylo November Update: User Feedback Implementation',
    tags: ['Improvement', 'Fix'],
    excerpt:
      "Dear Zylo Users! We've taken your feedback to heart this November, shipping the most-requested items from our feedback board — a faster pipeline and a pile of fixes.",
    cta: 'See Changes',
    thumb: 'from-fuchsia-500 via-indigo-600 to-indigo-800',
    intro: [
      'Dear Zylo Users! This November is all about you.',
      'We shipped the most-requested items from our feedback board — thank you for shaping the roadmap. Here are the highlights.'
    ],
    sections: [
      {
        icon: '✨',
        title: 'Enhancements',
        subsections: [
          {
            heading: 'Faster Publishing Pipeline',
            paragraphs: [
              'We rebuilt the publishing pipeline.',
              'Pages render faster, search indexes update instantly, and the editor stays responsive even on very large knowledge bases.'
            ],
            benefits: ['Instant search indexing', 'Faster page renders', 'Responsive editor at scale']
          }
        ]
      },
      {
        icon: '🛠️',
        title: 'Bug Fixes',
        bullets: [
          'Resolved a rare issue where draft revisions could overwrite published content.',
          'Improved mobile rendering for wide tables and code blocks.',
          'Squashed dozens of smaller bugs reported by the community.'
        ]
      }
    ],
    outro: {
      title: 'Wrapping Up',
      paragraphs: [
        'Your feedback shapes Zylo. Keep it coming — the feedback board is always open.',
        'As always, thank you for building with Zylo. More improvements are already on the way.'
      ]
    }
  }
];

// Badge classes per category chip (falls back to slate for unknown tags).
// NOTE: these literals are safelisted via `@source inline(...)` in global.css
// so Tailwind generates them even though they live in this .ts file.
export const tagStyles: Record<string, string> = {
  New: 'bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-600/20',
  Feature: 'bg-violet-50 text-violet-700 ring-1 ring-inset ring-violet-600/20',
  Improvement: 'bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-600/20',
  Fix: 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20',
  Security: 'bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20'
};
