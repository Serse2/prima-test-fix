export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-GB").format(date);
}
