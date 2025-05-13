'use client';

import { selector } from 'recoil';
import { userState } from '@/recoil/atoms/user';

export const isLoggedInSelector = selector({
  key: 'isLoggedInSelector',
  get: ({ get }) => {
    const user = get(userState);
    return user !== null;
  },
});

export const isAdminSelector = selector({
  key: 'isAdminSelector',
  get: ({ get }) => {
    const user = get(userState);
    return user?.role === 'admin';
  },
});
