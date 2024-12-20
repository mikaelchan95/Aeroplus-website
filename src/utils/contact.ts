export const CONTACT_EMAIL = 'payments@aeroplusgroup.com';

export const createEmailLink = (subject?: string) => {
  const baseLink = `mailto:${CONTACT_EMAIL}`;
  return subject ? `${baseLink}?subject=${encodeURIComponent(subject)}` : baseLink;
};