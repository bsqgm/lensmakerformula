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
    return null;
  }

  // 构建 Plausible 脚本 URL
  // 如果提供了 apiHost（自建实例），使用自定义域名
  // 否则使用默认的 plausible.io
  const scriptSrc = apiHost 
    ? `https://${apiHost}/js/script.js`
    : 'https://plausible.io/js/script.js';

  return (
    <>
      <Script
        strategy="afterInteractive"
        data-domain={domain}
        src={scriptSrc}
      />
    </>
  );
}

