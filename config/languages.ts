import { en } from './languages/en';
import { fr } from './languages/fr';
import { sp } from './languages/sp';
import { gr } from './languages/gr';
import { ch } from './languages/ch';

export enum LanguageKey {
  en = "en",
  fr = "fr",
  sp = "sp",
  gr = "gr",
  ch = "ch"
}

export interface AppLanguage {
  searchPlacerHolder: string,
  messagePlacerHolder: string,
  namePlaceholder: string,
  usernamePlacerHolder: string,
  emailPlacerHolder: string,
  passwordPlacerHolder: string,
  signupCheck: string;
  loginButton: string;
  logoutButton: string;
  signupButton: string;
  chatTitle: string,
  appName: string,
  blockButton: string,
  reportButton: string,
  deleteButton: string,
  defaultLanguage: string,
  defaultTheme: string,
  loginValidation: loginValidation,
  signupValidation: signupValidation,
  newChat: string,
  newGroup: string,
  selectUser: string,
  addParty: string,
  groupName: string,
}

export interface LanguagesMap {
  [key: string]: AppLanguage;
}

export interface loginValidation {
  username: string,
  password: string,
  passwordLength: string,
}

export interface signupValidation {
  name: string,
  username: string,
  email: string,
  validEmail: string,
  password: string,
  passwordLength: string,
}

export const languages: LanguagesMap = {
  [LanguageKey.en]: en,
  [LanguageKey.fr]: fr,
  [LanguageKey.sp]: sp,
  [LanguageKey.gr]: gr,
  [LanguageKey.ch]: ch,
}
