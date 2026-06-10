/** Build a URL-safe path for files in `frontend/public`. */
export function publicAsset(relativePath: string): string {
  return `/${relativePath.split('/').map(encodeURIComponent).join('/')}`;
}
