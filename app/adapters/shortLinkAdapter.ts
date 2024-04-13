import { ShortLink, ShortLinkServer } from '../models/shortLink';

export const createAddaptedShortLink = (shortLinkServer: ShortLinkServer) => {
  const data: ShortLink = {
    id: shortLinkServer._id,
    originalUrl: shortLinkServer.originalUrl,
    shortUrl: shortLinkServer.shortUrl,
    description: shortLinkServer.description,
    userEmail: shortLinkServer.userEmail
  }

  return data
}