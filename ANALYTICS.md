# Analytics

קורות חיים בקליק כולל שכבת analytics אנונימית. איסוף סטטיסטיקות שימוש מתחיל מיד עם הכניסה לאתר — ללא צורך בהסכמה מפורשת. האתר מציג הודעה אינפורמטיבית חד-פעמית על השימוש ב-cookies.

## ספקים נתמכים

| ספק | קובץ/SDK | פעיל מיד? | סטטוס |
|-----|----------|-----------|-------|
| Google Analytics 4 | gtag.js | כן | פעיל (G-F4XC4GMQLH) |
| Vercel Web Analytics | `/_vercel/insights/script.js` | כן | מוכן — צריך להפעיל ב-Vercel |
| Vercel Speed Insights | `/_vercel/speed-insights/script.js` | כן (נתוני ביצועים בלבד) | מוכן |
| Custom endpoint | fetch / sendBeacon | כן | תשתית מוכנה |

## הודעת cookies

1. בביקור ראשון — מופיעה הודעה אינפורמטיבית בתחתית המסך: "האתר משתמש ב-cookies — סטטיסטיקות שימוש אנונימיות בלבד".
2. המשתמש לוחץ "הבנתי" → ההודעה נסגרת ולא מופיעה שוב (`clicresume_cookie_notice_seen` ב-localStorage).
3. האנליטיקס פעיל בכל מקרה — ההודעה היא אינפורמטיבית בלבד.
4. אין איסוף מידע אישי או תוכן קורות חיים בשום שלב.

## אירועים

| אירוע | מתי | פרטים נוספים |
|-------|------|-------------|
| `page_view` | כניסה לדף הבונה | — |
| `cv_started` | משתמש התחיל למלא תוכן | theme, color |
| `cv_created` | ייצוא ראשון בסשן | theme, color |
| `cv_exported` | כל ייצוא (PDF/PNG/JPEG) | format, theme, color |
| `demo_loaded` | טעינת דוגמה מקצועית | demo (שם הדוגמה) |
| `draft_saved` | שמירה ידנית | — |
| `draft_cleared` | איפוס הטופס | — |
| `json_exported` | ייצוא JSON | — |
| `json_imported` | ייבוא JSON | — |

## מה לא נשלח — לעולם

- שם, אימייל, טלפון, כתובת
- ניסיון תעסוקתי, השכלה, מיומנויות
- תוכן קורות החיים בכל צורה שהיא
- כתובת IP מזהה (GA4 מוגדר עם `anonymize_ip: true`)

## קבצים רלוונטיים

| קובץ | תפקיד |
|------|--------|
| `src/analytics.js` | מודול מרכזי — consent, GA4, Vercel, tracking, autoInit |
| `index.html` | הודעת cookies + סקריפט dismiss (inline, לא module) |
| `builder.html` | הודעת cookies + חיבור ל-analytics.js דרך ES module |
| `privacy.html` | דף מדיניות פרטיות מלא |

## הפעלה

### Google Analytics 4

1. יוצרים property ב-[analytics.google.com](https://analytics.google.com)
2. מקבלים Measurement ID (למשל `G-ABC123XYZ`)
3. ב-`src/analytics.js`, מעדכנים בפונקציית `autoInit()`:
   ```js
   configure({ gaMeasurementId: 'G-ABC123XYZ', vercelAnalytics: true });
   ```
4. ב-`index.html`, מעדכנים את `loadAnalyticsScripts()` — מסירים את ה-comment ומזינים את ה-ID.

### Vercel Web Analytics

1. מפעילים Analytics בהגדרות הפרויקט ב-Vercel Dashboard
2. ב-`analytics.js` → `configure({ vercelAnalytics: true })`
3. הסקריפט `/_vercel/insights/script.js` ייטען אוטומטית אחרי הסכמה

### Vercel Speed Insights

1. מפעילים Speed Insights ב-Vercel Dashboard
2. ב-`analytics.js` → `autoInit()` כבר טוען את הסקריפט (לא דורש הסכמה)
3. מסירים את ה-comment ב-`index.html` בתחתית סקריפט ה-consent

## דשבורד

כרגע הדשבורד מוסתר (לא ציבורי). אפשרויות לעתיד:
- דשבורד פנימי עם GA4 Dashboard
- דשבורד ציבורי עם Umami / Plausible (self-hosted)
- דף סטטיסטיקות ציבורי באתר (כמה קורות חיים נוצרו, תבניות פופולריות)

## מבנה אירוע (custom endpoint)

```json
{
  "event": "cv_exported",
  "siteId": "clicresume",
  "path": "/builder.html",
  "language": "he",
  "timestamp": "2026-06-12T10:00:00.000Z",
  "details": {
    "format": "pdf",
    "theme": "modern",
    "color": "indigo"
  }
}
```
