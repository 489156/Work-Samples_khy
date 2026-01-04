/**
 * Theme constants for consistent styling across the application
 */

export const COLORS = {
  chart: ['#06b6d4', '#0891b2', '#0e7490', '#155e75'],
  primary: {
    cyan: {
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
    },
    slate: {
      50: '#f8fafc',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      900: '#0f172a',
      950: '#020617',
    },
  },
} as const;

export const ANIMATION_DELAYS = {
  short: 0.2,
  medium: 0.4,
  long: 0.6,
} as const;

export const ANIMATION_DURATIONS = {
  fast: 0.4,
  normal: 0.6,
  slow: 0.8,
} as const;
