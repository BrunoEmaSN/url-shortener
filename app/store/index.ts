import { create } from "zustand";
import { ShortLinkSlice, createShortLinkSlice } from './shortLinks';
import { AuthSlice, createAuthSlice } from './auth';

export const useBoundStore = create<ShortLinkSlice & AuthSlice>((...a) => ({
  ...createShortLinkSlice(...a),
  ...createAuthSlice(...a)
}))