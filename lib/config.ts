import { getSiteConfig } from './get-config-value';

export const rootNotionPageId = '0bb83e82a90c4ea3a2b5cca97405236c';

export const defaultPageIcon: string | null = getSiteConfig(
  'defaultPageIcon',
  null
);

export const defaultPageCover: string | null = getSiteConfig(
  'defaultPageCover',
  null
);

export const defaultPageCoverPosition: number = getSiteConfig(
  'defaultPageCoverPosition',
  0.5
);

export const isDev =
  process.env.NODE_ENV === 'development' || !process.env.NODE_ENV;
