import { create } from "zustand";
import { ShortLinkSlice, createShortLinkSlice } from './shortLinks';

export const useBoundStore = create<ShortLinkSlice>((...a) => ({
  ...createShortLinkSlice(...a)
}))