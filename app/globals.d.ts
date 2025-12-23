// TypeScript declarations for Plausible Analytics

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, any> }) => void;
  }
}

export {};

