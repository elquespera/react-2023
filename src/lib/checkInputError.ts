export default function checkInputError(
  ref: React.RefObject<HTMLInputElement | HTMLSelectElement>,
  pattern?: RegExp | ((value: string) => boolean)
): boolean {
  const input = ref.current;
  if (!input) return false;
  const value = input.value;
  if (pattern === undefined) return value === '';
  if (typeof pattern === 'function') return pattern(value);
  return pattern.test(input.value.trim()) === false;
}
