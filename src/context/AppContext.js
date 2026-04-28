import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      products: "Products",
      contact: "Contact",
      getInTouch: "Get in Touch"
    },
    hero: {
      title: "Welcome to Vital Care Pharmaceuticals",
      subtitle: "We specialize in marketing high-quality pharmaceutical products across multiple categories including gynecology and antibiotics.",
      cta: "Explore Products"
    },
    about: {
      title: "About Vital Care",
      content: "Vital Care Pharmaceuticals is a trusted name in pharmaceutical marketing, delivering quality products and building strong relationships with healthcare professionals."
    },
    contact: {
      title: "Contact Us",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message"
    }
  },
  ur: {
    nav: {
      home: "ہوم",
      about: "ہمارے بارے میں",
      products: "پروڈکٹس",
      contact: "رابطہ",
      getInTouch: "رابطہ کریں"
    },
    hero: {
      title: "وائٹل کیئر فارماسیوٹیکلز میں خوش آمدید",
      subtitle: "ہم گائناکالوجی اور اینٹی بائیوٹکس سمیت متعدد زمروں میں اعلیٰ معیار کی فارماسیوٹیکل مصنوعات کی مارکیٹنگ میں مہارت رکھتے ہیں۔",
      cta: "مصنوعات دیکھیں"
    },
    about: {
      title: "ہمارے بارے میں",
      content: "وائٹل کیئر فارماسیوٹیکلز فارماسیوٹیکل مارکیٹنگ میں ایک قابل اعتماد نام ہے، جو معیاری مصنوعات فراہم کرتا ہے اور صحت کی دیکھ بھال کے پیشہ ور افراد کے ساتھ مضبوط تعلقات استوار کرتا ہے۔"
    },
    contact: {
      title: "رابطہ کریں",
      name: "آپ کا نام",
      email: "آپ کا ای میل",
      message: "آپ کا پیغام",
      send: "پیغام بھیجیں"
    }
  }
};

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = language === 'ur' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const t = translations[language];

  return (
    <AppContext.Provider value={{ theme, toggleTheme, language, setLanguage, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
