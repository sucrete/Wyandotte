// Sanity editors can type a bare domain (e.g. "google.com") into a Link URL
// field without the scheme. Browsers treat an href without a scheme as a
// relative path though, so this prepends https:// whenever one isn't already
// present (any scheme — http:, mailto:, tel:, etc. — is left untouched).
export const withProtocol = (url?: string | null): string => {
  if (!url) return '';
  return /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(url) ? url : `https://${url}`;
};
