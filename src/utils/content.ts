export function getContentSlug(slug: string) {
  return slug.slice(slug.lastIndexOf('/') + 1);
}
