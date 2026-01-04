/**
 * Analytics and tracking utilities
 * Add your analytics integration here (Google Analytics, Mixpanel, etc.)
 */

export const trackPageView = (pageName: string) => {
  // Add your analytics tracking code here
  if (process.env.NODE_ENV === 'development') {
    console.log(`Page view: ${pageName}`);
  }
};

export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  // Add your event tracking code here
  if (process.env.NODE_ENV === 'development') {
    console.log(`Event: ${eventName}`, properties);
  }
};
