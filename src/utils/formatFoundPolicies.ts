export function formatPoliciesFound(n: number): string {
  if (n === 1) {
    return "1 policy found";
  }
  if (n > 1) {
    return `${n.toString()} policies found`;
  }

  return "No policies found";
}
