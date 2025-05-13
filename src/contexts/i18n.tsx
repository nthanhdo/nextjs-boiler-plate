'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { loadTranslation } from '@/locales/i18n';

interface I18nContextType {
  translations: {
    common: { [key: string]: string };
    header: { [key: string]: string };
    footer: { [key: string]: string };
  };
  locale: string;
  setLocale: (locale: string) => void;
}

const I18n = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<string>('vi');  // Mặc định là tiếng Anh
  const translations = loadTranslation(locale);

  return (
    <I18n.Provider value={{ translations, locale, setLocale }}>
      {children}
    </I18n.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18n);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
};
