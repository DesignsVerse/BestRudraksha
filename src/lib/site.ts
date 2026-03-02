export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    'https://www.bestrudraksha.com';

  // Trim whitespace + trailing slashes
  let url = String(raw).trim().replace(/\/+$/, '');

  // If someone set just "bestrudraksha.com", force https://
  if (!/^https?:\/\//i.test(url)) {
    url = `https://${url}`;
  }

  // Force https in production-like setups (safe default)
  url = url.replace(/^http:\/\//i, 'https://');

  return url;
}

