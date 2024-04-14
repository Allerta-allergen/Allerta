import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      home: 'Home',
      profile: 'Profile',
      language: 'Language',
      estonian: 'Estonian',
      english: 'English',
      login: 'Login',
      credentials: 'Enter your credentials to continue',
      email: 'Email Address',
      username: 'Enter your email',
      pass:'Password',
      password: 'Enter your password ',
      confirm:'Confirm Password',
      sign: 'Sign up',
      convert: 'Convert Ingredient to Potential Allergen',
      ingredients: 'Upload a photo of a product label',
      enter: 'Enter ingredients',
      analyse: 'Analyze Ingredients',
      question1: 'Do you have any known food allergies?',
      question2: 'Do you have any related conditions?',
      questionnare: 'Food Allergy Questionnaire',
      allergic: 'I am allergic to...',
      have: 'I have...',
      submit: 'Submit',
      inal: 'Ingredients that you are not allergic',
      allto: 'You are allergic to',
      allmay: 'You may be allergic to',
      desc: 'description',
      no:'No ingredients data available',
      or:'Or',
      enter: 'Enter',
      search: 'Search',
      pr: 'Profile Settings',
      no_account:'Don\'t have an account',
      signup: 'Sign Up',
      discover: 'Discover Your Allergen Insights With Just A Photo',
      safe: 'Safeguarding Your Health'
    },
  },
  et: {
    translation: {
      home: 'Avaleht',
      profile: 'Profiil',
      language: 'Keel',
      estonian: 'Eesti',
      english: 'Inglise',
      login: 'Logi sisse',
      credentials: 'Jätkamiseks sisestage oma mandaadid',
      email: 'E-posti aadress',
      username: 'Sisesta oma e-posti aadress',
      pass:'parool',
      password: 'Sisesta oma parool ',
      confirm:'Kinnita salasõna',
      sign: 'Registreeri',
      convert: 'Teisendage koostisosa potentsiaalseks allergeeniks',
      ingredients:'Laadige üles foto tootesildist',
      enter: 'Sisesta koostisained',
      analyse:'Analüüsige koostisosi',
      question1: 'Kas teil on teadaolevaid toiduallergiaid?',
      question2: 'Kas teil on sellega seotud tingimusi?',
      questionnare: 'Toiduallergia küsimustik',
      allergic: 'Olen allergiline...',
      have: 'Mul on...',
      submit:'Esita',
      inal: "Koostisained, mille suhtes te ei ole allergiline",
      allto: "Te olete allergiline",
      allmay: "Võite olla allergiline",
      desc: 'description',
      no:'Koostisainete andmed puuduvad',
      or:'või',
      enter: 'Sisesta',
      search: 'otsing',
      pr: 'Profiili seaded',
      no_account:'Pole kontot',
      signup: 'Registreeri',
      discover: 'Avastage oma allergeenide kohta ainult foto',
      safe: 'Teie tervise kaitsmine'
      
    },

  },
};

i18n
  .use(LanguageDetector) // Detect user's preferred language
  .use(initReactI18next) // Initialize for React
  .init({
    resources,
    fallbackLng: 'en', // Default language
    interpolation: {
      escapeValue: false, // Prevent escaping special characters
    },
  });

export default i18n;
