export const lerp = (a, b, n) => (1 - n) * a + n * b;
export const clamp = (number, min, max) => Math.max(min, Math.min(number, max));
export const progress = (min, max, value) => value / (max - min) + min;
