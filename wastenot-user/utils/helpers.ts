export function roundToDecimal(value: number, decimals: number = 0): number {
  const multiplier = Math.pow(10, decimals);
  return Math.round(value * multiplier) / multiplier;
}

export function getPercentage(numerator: number, divider: number) {
  const result = roundToDecimal((numerator / divider) * 100, 2);

  if (numerator >= divider) {
    return 100;
  }

  return result;
}

export function removeAllWhiteSpace(input: string): string {
  return input.replace(/\s+/g, "");
}
