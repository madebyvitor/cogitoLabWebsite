export function withBasePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";
  if (!basePath) {
    return path;
  }

  if (path === "/") {
    return `${basePath}/`;
  }

  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
