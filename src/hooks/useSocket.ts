'use client';

import { atom } from 'recoil';

// Auth state (ví dụ: lưu token hoặc user info)
export const authState = atom<{
  isAuthenticated: boolean;
  token: string | null;
  user: { username: string } | null;
}>({
  key: 'authState',
  default: {
    isAuthenticated: false,
    token: null,
    user: null,
  },
});

// Language state (dùng cho i18n switcher)
export const languageState = atom<'vi' | 'en'>({
  key: 'languageState',
  default: 'vi',
});
