import { ServicePillar, Testimonial } from './types';

export const COLORS = {
  ochre: '#B25B32',
  terracotta: '#9B4A2C',
  beige: '#F5F5DC',
  dark: '#3D2B1F',
  sand: '#FDFBF7'
};

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'retreats',
    title: 'Karevia Retreats',
    subtitle: 'Soulful Restoration',
    description: 'We curate silence. Beyond traditional wellness, we design deep immersions into Kenya’s most resonant landscapes to facilitate internal clarity and spiritual reconnection.',
    image: 'https://images.unsplash.com/photo-1544161515-4af6b1d8b159?auto=format&fit=crop&q=80&w=1600',
    outcome: 'Profound mental clarity and a returned sense of center.'
  },
  {
    id: 'medical',
    title: 'Karevia Medical',
    subtitle: 'Healing Concierge',
    description: 'Discreet support for your aesthetic and restorative journeys. We provide the invisible hand for high-end medical travel, from clinic coordination to private recovery retreats.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600',
    outcome: 'A seamless, stress-free environment for physical healing.'
  },
  {
    id: 'homes',
    title: 'Karevia Homes',
    subtitle: 'Safe Sanctuaries',
    description: 'We don’t book hotels; we secure peace of mind. Vetted private residences that prioritize your safety, absolute privacy, and emotional wellbeing.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1600',
    outcome: 'A true sense of home in a foreign landscape.'
  },
  {
    id: 'roots',
    title: 'Karevia Roots',
    subtitle: 'Identity Reconnection',
    description: 'For the diaspora and the truth-seeker. A bridge back to the continent that focuses on ancestral connection, lineage exploration, and contemporary cultural depth.',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&q=80&w=1600',
    outcome: 'A foundational reconnection with your heritage.'
  },
  {
    id: 'language',
    title: 'Karevia Language',
    subtitle: 'Cultural Mastery',
    description: 'Language as a key to connection. Immersive English and cultural nuance coaching designed for global leaders, expatriates, and visionaries transitioning to Kenya.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1600',
    outcome: 'Confident, nuanced navigation of a multicultural world.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "I arrived seeking a vacation and left with a renewed vision for my life. Karevia held space for me in a way I didn't know was possible.",
    author: "Elena Richardson",
    context: "Executive Wellness Journey"
  },
  {
    id: '2',
    quote: "The discretion was absolute. As a public figure, finding a team that prioritizes privacy as much as safety is rare. Kenya felt like mine again.",
    author: "Anonymous Client",
    context: "Private Medical Concierge"
  }
];