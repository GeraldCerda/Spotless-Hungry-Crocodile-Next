import { createContext, useMemo, useContext, useState, useEffect } from 'react';
import { useLocale } from 'next-intl';

const DEFAULT_LOCALE = { name: 'English', short: 'en' };
const GlobalContext = createContext(null);

export const GlobalProvider = ({ initialLocales, children }) => {
  const localeValue = useLocale();
  const [locales, setLocales] = useState(
    Array.isArray(initialLocales) && initialLocales.length > 0
      ? initialLocales
      : [DEFAULT_LOCALE]
  );
  const [locale, setLocale] = useState(DEFAULT_LOCALE);

  // Update locale if detected value changes or locales update
  useEffect(() => {
    if (!Array.isArray(locales) || locales.length === 0) {
      setLocale(DEFAULT_LOCALE);
      return;
    }
    const found = locales.find((el) => el.short === localeValue);
    setLocale(found || locales[0] || DEFAULT_LOCALE);
  }, [locales, localeValue]);

  // Add a locale, ensuring no duplicates and valid structure
  const addLocale = (newLocale) => {
    if (
      newLocale &&
      typeof newLocale === 'object' &&
      newLocale.name &&
      newLocale.short &&
      !locales.some((l) => l.short === newLocale.short)
    ) {
      setLocales((prev) => [...prev, newLocale]);
    }
  };

  // Remove a locale by short code
  const removeLocale = (shortCode) => {
    setLocales((prev) => prev.filter((l) => l.short !== shortCode));
    if (locale.short === shortCode) {
      setLocale(locales[0] || DEFAULT_LOCALE);
    }
  };

  const value = useMemo(
    () => ({
      locales,
      locale,
      setLocales,
      setLocale,
      addLocale,
      removeLocale,
    }),
    [locales, locale]
  );

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === null) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

export default GlobalContext;
