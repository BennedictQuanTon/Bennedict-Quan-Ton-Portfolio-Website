/**
 * Organiser logos sit in fixed-height chips. Square badges and heavy wordmarks look far
 * bigger than light wordmarks (Google, OpenAI) at the same height, so these are drawn
 * smaller to give every chip the same visual weight.
 */
const LOGO_HEIGHT: Record<string, string> = {
  bku_logo: 'h-[72%]',
  vysc_logo: 'h-[72%]',
  vinuni_logo: 'h-[78%]',
  amd_logo: 'h-[52%]',
};

export const logoHeightClass = (src: string): string => {
  const key = Object.keys(LOGO_HEIGHT).find((name) => src.includes(name));
  return key ? LOGO_HEIGHT[key] : 'h-full';
};
