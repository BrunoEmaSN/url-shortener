import { StateCreator } from 'zustand'
import { ShortLink } from '../models/shortLink';
import { createShortLink, findAllByEmail } from '../services/shortLinkService';

export interface ShortLinkSlice {
  shortLinks: ShortLink[];
  currentPage: number;
  elements: number;
  getLinks: (email: string) => Promise<void>;
  getMoreLinks: (email: string, currentPage:number, elements: number) => Promise<void>;
  addLink: (newShortLink: ShortLink) => Promise<void>;
  editLink: (id: number, shortLink: ShortLink) => Promise<void>;
  removeLink: (id: number) => Promise<void>;
}

export const createShortLinkSlice: StateCreator<ShortLinkSlice> = (set) => ({
  shortLinks: [] as ShortLink[],
  currentPage: 1,
  elements: 10,
  getLinks: async (email: string) => {
    const result = await findAllByEmail(email);

    if(result) {
      set((state) => ({
        ...state,
        shortLinks: result,
      }));
    }
  },

  getMoreLinks: async (email: string, currentPage: number, elements: number) => {
    const result = await findAllByEmail(email, currentPage, elements);

    if(result) {
      set((state) => ({
        ...state,
        shortLinks: result,
        currentPage
      }));
    }
  },

  addLink: async (newShortLink) => {
    const result = await createShortLink(newShortLink);
    
    if(result) {
      set((state) => ({
        ...state,
        shortLinks: [
          ...state.shortLinks,
          result
        ]
      }));
    }
  },

  editLink: async (id, shortLink) => {
    set((state) => {
      const filterShortLinks = state.shortLinks.filter((s) => s.id! !== id);
      const newShortLinks = [
        ...filterShortLinks,
        shortLink
      ];

      return {
        ...state,
        shortLinks: newShortLinks.sort((a, b) => a.id! = b.id!)
      }
    });
  },

  removeLink: async (id) => {
    set((state) => ({
      ...state,
      shortLinks: state.shortLinks.filter((s) => s.id! !== id)
    }));
  }
})