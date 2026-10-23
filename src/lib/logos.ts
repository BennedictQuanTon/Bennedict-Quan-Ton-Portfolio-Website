/**
 * Organiser logos sit in fixed-height chips. Heavy wordmarks look far bigger than light
 * ones (Google, OpenAI) at the same height, so these are drawn smaller to give every chip
 * the same visual weight.
 */
const LOGO_HEIGHT: Record<string, string> = {
  amd_logo: 'h-[52%]',
};

export const logoHeightClass = (src: string): string => {
  const key = Object.keys(LOGO_HEIGHT).find((name) => src.includes(name));
  return key ? LOGO_HEIGHT[key] : 'h-full';
};
