'use client';

import Script from 'next/script';

interface PlausibleScriptProps {
  domain?: string;
  apiHost?: string;
}

export default function PlausibleScript({ 
  domain, 
  apiHost 
}: PlausibleScriptProps) {
  // 如果没有配置域名，不加载脚本
  if (!domain) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[Plausible] Domain not configured. Set NEXT_PUBLIC_PLAUSIBLE_DOMAIN environment variable.');
    }
    return null;
  }

  // 构建 Plausible 脚本 URL
  // 如果提供了 apiHost（自建实例），使用自定义域名
  // 否则使用默认的 plausible.io
  // 包含扩展功能：file-downloads, hash, outbound-links, pageview-props, revenue, tagged-events
  const scriptSrc = apiHost 
    ? `https://${apiHost}/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js`
    : 'https://plausible.io/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js';

  if (process.env.NODE_ENV === 'development') {
    console.log('[Plausible] Loading script:', {
      domain,
      apiHost: apiHost || 'plausible.io (official)',
      scriptSrc,
    });
  }

  return (
    <Script
      strategy="afterInteractive"
      data-domain={domain}
      src={scriptSrc}
      onLoad={() => {
        if (process.env.NODE_ENV === 'development') {
          console.log('[Plausible] Script loaded successfully');
        }
      }}
      onError={(e) => {
        console.error('[Plausible] Script failed to load:', e);
      }}
    />
  );
}

