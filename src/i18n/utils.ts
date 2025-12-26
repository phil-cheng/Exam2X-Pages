// 多语言工具函数
import { translations } from './translations';
import type { Language } from './translations';

// 从 cookie 获取当前语言
export function getLanguageFromCookie(request: Request): Language {
  const cookies = request.headers.get('cookie') || '';
  const langMatch = cookies.match(/lang=([^;]+)/);
  if (langMatch && (langMatch[1] === 'zh' || langMatch[1] === 'en')) {
    return langMatch[1] as Language;
  }
  return 'zh';
}

// 从 Astro.cookies 获取语言（推荐方式）
export function getLanguageFromCookies(cookies: AstroCookies): Language {
  const langCookie = cookies.get('lang');
  if (langCookie?.value && (langCookie.value === 'zh' || langCookie.value === 'en')) {
    return langCookie.value as Language;
  }
  return 'zh';
}

// 获取翻译文本
export function t(lang: Language, key: string): string {
  const keys = key.split('.');
  let result: any = translations[lang];

  for (const k of keys) {
    result = result[k];
    if (result === undefined) return key;
  }

  return result;
}

// 类型定义
export type TranslationKey = keyof typeof translations.zh;

