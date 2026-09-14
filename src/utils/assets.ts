/**
 * Resolves static asset paths correctly across both local development
 * and GitHub Pages subpath deployments (e.g. /repo-name/).
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;

  // Avoid duplicate base prefix
  if (path.startsWith(cleanBase)) {
    return path;
  }

  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}
