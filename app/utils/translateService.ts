// app/utils/translateService.js
// বাস্তব translation service - Google Translate API ব্যবহার করে

const TRANSLATION_CACHE = new Map();
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

// Cache management functions
const getCachedTranslation = (text, targetLang) => {
  const cacheKey = `${text}-${targetLang}`;
  const cached = TRANSLATION_CACHE.get(cacheKey);
  
  if (cached && (Date.now() - cached.timestamp) < CACHE_DURATION) {
    return cached.translation;
  }
  
  return null;
};

const setCachedTranslation = (text, targetLang, translation) => {
  const cacheKey = `${text}-${targetLang}`;
  TRANSLATION_CACHE.set(cacheKey, {
    translation,
    timestamp: Date.now()
  });
};

// Google Translate API implementation
export const translateTextWithGoogle = async (text, sourceLang, targetLang) => {
  try {
    // Check cache first
    const cachedTranslation = getCachedTranslation(text, targetLang);
    if (cachedTranslation) {
      return cachedTranslation;
    }

    // If no API key is set, use mock translation as fallback
    if (!process.env.GOOGLE_TRANSLATE_API_KEY) {
      console.warn('Google Translate API key not set. Using mock translation.');
      return translateWithMock(text, sourceLang, targetLang);
    }

    const apiUrl = `https://translation.googleapis.com/language/translate/v2`;
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: text,
        source: sourceLang,
        target: targetLang,
        format: 'text',
        key: process.env.GOOGLE_TRANSLATE_API_KEY
      })
    });

    if (!response.ok) {
      throw new Error(`Google Translate API error: ${response.status}`);
    }

    const data = await response.json();
    const translatedText = data.data.translations[0].translatedText;
    
    // Cache the translation
    setCachedTranslation(text, targetLang, translatedText);
    
    return translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    // Fallback to mock translation
    return translateWithMock(text, sourceLang, targetLang);
  }
};

// Microsoft Azure Translator implementation
export const translateTextWithAzure = async (text, sourceLang, targetLang) => {
  try {
    // Check cache first
    const cachedTranslation = getCachedTranslation(text, targetLang);
    if (cachedTranslation) {
      return cachedTranslation;
    }

    if (!process.env.AZURE_TRANSLATOR_KEY || !process.env.AZURE_TRANSLATOR_REGION) {
      console.warn('Azure Translator credentials not set. Using mock translation.');
      return translateWithMock(text, sourceLang, targetLang);
    }

    const apiUrl = `https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=${sourceLang}&to=${targetLang}`;
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.AZURE_TRANSLATOR_KEY,
        'Ocp-Apim-Subscription-Region': process.env.AZURE_TRANSLATOR_REGION,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([{ Text: text }])
    });

    if (!response.ok) {
      throw new Error(`Azure Translator API error: ${response.status}`);
    }

    const data = await response.json();
    const translatedText = data[0].translations[0].text;
    
    // Cache the translation
    setCachedTranslation(text, targetLang, translatedText);
    
    return translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    // Fallback to mock translation
    return translateWithMock(text, sourceLang, targetLang);
  }
};

// Mock translation fallback
const translateWithMock = async (text, sourceLang, targetLang) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  // Mock translations for demonstration
  const mockTranslations = {
    'bn': {
      'My E-commerce Store': 'আমার ই-কমার্স স্টোর',
      'Search products...': 'পণ্য খুঁজুন...',
      'Categories': 'ক্যাটাগরিসমূহ',
      'Login': 'লগইন',
      'Register': 'নিবন্ধন',
      'Cart': 'কার্ট',
      'Wishlist': 'পছন্দের তালিকা',
      'Welcome to Our Store': 'আমাদের দোকানে স্বাগতম',
      'Discover amazing products at great prices': 'দুর্দান্ত দামে আশ্চর্যজনক পণ্য আবিষ্কার করুন',
      'Shop Now': 'এখনই কিনুন',
      'Featured Products': 'বৈশিষ্ট্যযুক্ত পণ্য',
      'View All Products': 'সমস্ত পণ্য দেখুন',
      'About Us': 'আমাদের সম্পর্কে',
      'Contact': 'যোগাযোগ',
      'Privacy Policy': 'গোপনীয়তা নীতি',
      'Terms of Service': 'সেবার শর্তাবলী',
      'All rights reserved': 'সমস্ত অধিকার সংরক্ষিত',
      'Add to Cart': 'কার্টে যোগ করুন',
      'Price': 'দাম',
      'Description': 'বর্ণনা',
      'Specifications': 'নির্দিষ্টকরণ',
      'Reviews': 'রিভিউ',
      'Rating': 'রেটিং',
      'Out of Stock': 'স্টক নেই',
      'In Stock': 'স্টকে আছে',
      'Quantity': 'পরিমাণ'
    },
    'es': {
      'My E-commerce Store': 'Mi Tienda de Comercio Electrónico',
      'Search products...': 'Buscar productos...',
      'Categories': 'Categorías',
      'Login': 'Iniciar sesión',
      'Register': 'Registrarse',
      'Cart': 'Carrito',
      'Wishlist': 'Lista de deseos',
      'Welcome to Our Store': 'Bienvenido a Nuestra Tienda',
      'Discover amazing products at great prices': 'Descubre productos increíbles a precios excelentes',
      'Shop Now': 'Comprar ahora',
      'Featured Products': 'Productos destacados',
      'View All Products': 'Ver todos los productos',
      'About Us': 'Sobre nosotros',
      'Contact': 'Contacto',
      'Privacy Policy': 'Política de privacidad',
      'Terms of Service': 'Términos de servicio',
      'All rights reserved': 'Todos los derechos reservados',
      'Add to Cart': 'Añadir al carrito',
      'Price': 'Precio',
      'Description': 'Descripción',
      'Specifications': 'Especificaciones',
      'Reviews': 'Reseñas',
      'Rating': 'Calificación',
      'Out of Stock': 'Agotado',
      'In Stock': 'En stock',
      'Quantity': 'Cantidad'
    },
    'fr': {
      'My E-commerce Store': 'Mon Magasin E-commerce',
      'Search products...': 'Rechercher des produits...',
      'Categories': 'Catégories',
      'Login': 'Connexion',
      'Register': 'S\'inscrire',
      'Cart': 'Panier',
      'Wishlist': 'Liste de souhaits',
      'Welcome to Our Store': 'Bienvenue dans Notre Magasin',
      'Discover amazing products at great prices': 'Découvrez des produits incroyables à des prix exceptionnels',
      'Shop Now': 'Acheter maintenant',
      'Featured Products': 'Produits en vedette',
      'View All Products': 'Voir tous les produits',
      'About Us': 'À propos de nous',
      'Contact': 'Contact',
      'Privacy Policy': 'Politique de confidentialité',
      'Terms of Service': 'Conditions d\'utilisation',
      'All rights reserved': 'Tous droits réservés',
      'Add to Cart': 'Ajouter au panier',
      'Price': 'Prix',
      'Description': 'Description',
      'Specifications': 'Spécifications',
      'Reviews': 'Avis',
      'Rating': 'Note',
      'Out of Stock': 'En rupture de stock',
      'In Stock': 'En stock',
      'Quantity': 'Quantité'
    },
    'ar': {
      'My E-commerce Store': 'متجري الإلكتروني',
      'Search products...': 'ابحث عن المنتجات...',
      'Categories': 'الفئات',
      'Login': 'تسجيل الدخول',
      'Register': 'تسجيل',
      'Cart': 'عربة التسوق',
      'Wishlist': 'قائمة الرغبات',
      'Welcome to Our Store': 'مرحبًا بك في متجرنا',
      'Discover amazing products at great prices': 'اكتشف منتجات مذهلة بأسعار رائعة',
      'Shop Now': 'تسوق الآن',
      'Featured Products': 'منتجات مميزة',
      'View All Products': 'عرض جميع المنتجات',
      'About Us': 'معلومات عنا',
      'Contact': 'اتصل بنا',
      'Privacy Policy': 'سياسة الخصوصية',
      'Terms of Service': 'شروط الخدمة',
      'All rights reserved': 'كل الحقوق محفوظة',
      'Add to Cart': 'أضف إلى السلة',
      'Price': 'السعر',
      'Description': 'الوصف',
      'Specifications': 'المواصفات',
      'Reviews': 'التقييمات',
      'Rating': 'التقييم',
      'Out of Stock': 'غير متوفر',
      'In Stock': 'متوفر',
      'Quantity': 'الكمية'
    }
  };

  // Return mock translation if available, otherwise return original text
  return mockTranslations[targetLang]?.[text] || text;
};

// Main translation function - uses Google Translate by default
export const translateText = async (text, sourceLang, targetLang) => {
  if (sourceLang === targetLang) {
    return text;
  }

  try {
    // Try Google Translate first, fallback to Azure, then mock
    return await translateTextWithGoogle(text, sourceLang, targetLang);
  } catch (error) {
    console.error('Google translation failed, trying Azure...');
    try {
      return await translateTextWithAzure(text, sourceLang, targetLang);
    } catch (azureError) {
      console.error('Azure translation failed, using mock...');
      return await translateWithMock(text, sourceLang, targetLang);
    }
  }
};

// Batch translation for multiple texts
export const translateMultipleTexts = async (texts, sourceLang, targetLang) => {
  if (sourceLang === targetLang) {
    return texts;
  }

  const translations = [];
  
  for (const text of texts) {
    const translation = await translateText(text, sourceLang, targetLang);
    translations.push(translation);
  }
  
  return translations;
};

// Clear translation cache
export const clearTranslationCache = () => {
  TRANSLATION_CACHE.clear();
};

// Get cache statistics
export const getCacheStats = () => {
  return {
    size: TRANSLATION_CACHE.size,
    keys: Array.from(TRANSLATION_CACHE.keys())
  };
};