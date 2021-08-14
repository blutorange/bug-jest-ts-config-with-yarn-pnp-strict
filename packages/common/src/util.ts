// eslint-disable-next-line no-null/no-null
export const Null = null;

export function notNullish<T>(value: T | null | undefined): value is T {
  return value !== undefined && value !== Null;
}
