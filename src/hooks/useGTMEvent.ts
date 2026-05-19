declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

interface GTMEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: unknown;
}

export const useGTMEvent = () => {
  const trackEvent = (eventName: string, params?: GTMEventParams) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...params,
      });
    }
  };

  const trackWhatsAppClick = (location: string) => {
    trackEvent('gtm_click_whatsapp', {
      event_category: 'engagement',
      event_label: location,
    });
  };

  const trackCTAClick = (ctaName: string) => {
    trackEvent('gtm_click_cta', {
      event_category: 'conversion',
      event_label: ctaName,
    });
  };

  const trackPageView = (pagePath: string) => {
    trackEvent('gtm_page_view', {
      event_category: 'navigation',
      page_path: pagePath,
    });
  };

  return {
    trackEvent,
    trackWhatsAppClick,
    trackCTAClick,
    trackPageView,
  };
};