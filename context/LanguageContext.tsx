'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/lib/translations';

export type Language = 'en' | 'hi';

interface LanguageContextType {
  lang: Language;
  isHi: boolean;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string, fallback?: string) => string;
  tr: <T>(en: T, hi: T) => T;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  isHi: false,
  setLang: () => {},
  toggleLang: () => {},
  t: (key: string, fallback?: string) => fallback ?? key,
  tr: <T,>(en: T, _hi: T) => en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('kentplus_lang') as Language;
      if (saved === 'en' || saved === 'hi') {
        setLangState(saved);
      }
    } catch {
      // fallback
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('kentplus_lang', newLang);
    } catch {
      // fallback
    }
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'hi' : 'en');
  };

  const t = (key: string, fallback?: string): string => {
    const langDict = translations[lang] as Record<string, string> | undefined;
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    const enDict = translations['en'] as Record<string, string>;
    if (enDict && enDict[key]) {
      return enDict[key];
    }
    return fallback !== undefined ? fallback : key;
  };

  const tr = <T,>(en: T, hi: T): T => {
    return lang === 'hi' ? hi : en;
  };

  const isHi = lang === 'hi';

  return (
    <LanguageContext.Provider value={{ lang, isHi, setLang, toggleLang, t, tr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
