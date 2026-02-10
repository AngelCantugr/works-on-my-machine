/**
 * Joins base URL with a path, handling trailing/leading slashes properly
 * @param base - The base URL (e.g., '/' or '/subpath')
 * @param path - The path to append (should start with '/')
 * @returns Combined path without double slashes
 */
export function joinPath(base: string, path: string): string {
  // If base is just '/', return the path as-is
  if (base === '/' || base === '') {
    return path;
  }
  // Remove trailing slash from base and leading slash is already in path
  return base.replace(/\/$/, '') + path;
}

/**
 * Gets a clean base path for asset references
 * @param base - The base URL from import.meta.env.BASE_URL
 * @returns Empty string if base is '/', otherwise the base with no trailing slash
 */
export function assetBase(base: string): string {
  if (base === '/' || base === '') {
    return '';
  }
  return base.replace(/\/$/, '');
}
