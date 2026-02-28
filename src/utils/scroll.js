/**
 * Scroll to a section by id without adding or keeping a hash in the URL.
 */
export function scrollToSection(sectionId) {
  if (typeof document === 'undefined') return;
  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Replace the current URL with the root path (no hash, no path). Keeps displayed URL as domain only.
 */
export function clearUrlHash() {
  if (typeof window === 'undefined') return;
  window.history.replaceState(null, '', window.location.pathname || '/');
}
