import { defineMiddleware } from 'astro:middleware';
import type { Language } from './i18n/utils';

export const onRequest = defineMiddleware((context, next) => {
  // 检查 URL 参数中的语言设置
  const urlLang = context.url.searchParams.get('lang');
  if (urlLang === 'zh' || urlLang === 'en') {
    context.cookies.set('lang', urlLang, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: 'lax'
    });
  }

  // 从 cookie 获取语言，如果没有则使用默认值
  const lang = context.cookies.get('lang')?.value || 'zh';

  // 将语言存储到 locals 中，供后续使用
  context.locals.lang = lang as Language;

  return next();
});
