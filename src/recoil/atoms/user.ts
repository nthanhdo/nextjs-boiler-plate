'use client';

import { atom } from 'recoil';

export interface User {
  id: string;
  username: string;
  email?: string;
  role?: string;
}

export const userState = atom<User | null>({
  key: 'userState',
  default: null,
});
