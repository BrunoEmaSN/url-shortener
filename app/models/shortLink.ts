export type ShortLink = {
  id: number | undefined;
  originalUrl: string;
  shortUrl: string;
  description: string;
  userEmail: string;
}

export type ShortLinkServer = {
  _id: number | undefined;
  originalUrl: string;
  shortUrl: string;
  description: string;
  userEmail: string;
}