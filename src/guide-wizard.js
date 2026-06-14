/**
 * Guide Wizard Module
 * Step-by-step guided wizard for first-time resume writers.
 * Each step focuses on one section with tips, examples, and contextual guidance.
 */

/** Wizard step definitions */
export const WIZARD_STEPS = [
    {
        id: 'welcome',
        title: 'ברוכים הבאים למדריך הכתיבה',
        subtitle: 'נלווה אתכם צעד אחר צעד ביצירת קורות חיים מקצועיים',
        icon: '📝',
        type: 'info',
        tips: [
            'המדריך יוביל אתכם דרך כל סקציה בקורות החיים.',
            'תוכלו לדלג על סקציות ולחזור אליהן אחר כך.',
            'כל מה שתכתבו יישמר ישירות בעורך הרגיל.',
            'בסוף המדריך תקבלו סיכום ותוכלו להמשיך לערוך בחופשיות.'
        ]
    },
    {
        id: 'personal',
        title: 'פרטים אישיים',
        subtitle: 'המידע הבסיסי שמעסיקים צריכים כדי ליצור קשר',
        icon: '👤',
        type: 'personal',
        fields: [
            { key: 'name', label: 'שם מלא', placeholder: 'ישראל ישראלי', required: true },
            { key: 'title', label: 'כותרת מקצועית', placeholder: 'מפתח/ת Full Stack' },
            { key: 'phone', label: 'טלפון', placeholder: '050-1234567', required: true },
            { key: 'email', label: 'אימייל', placeholder: 'name@email.com', required: true },
            { key: 'location', label: 'עיר / מיקום', placeholder: 'תל אביב' },
            { key: 'linkedin', label: 'לינקדאין', placeholder: 'linkedin.com/in/...' }
        ],
        tips: [
            'השם והכותרת המקצועית הם הדבר הראשון שמעסיק רואה.',
            'כותרת מקצועית טובה: "מהנדס תוכנה בכיר", "מנהלת שיווק דיגיטלי", "רואה חשבון".',
            'ודאו שהטלפון והאימייל תקינים — שגיאה אחת יכולה לעלות בראיון.',
            'לינקדאין מחזק את הפרופיל שלכם — שווה לצרף.'
        ],
        example: {
            name: 'דנה כהן',
            title: 'מנהלת שיווק דיגיטלי',
            phone: '054-9876543',
            email: 'dana.cohen@email.com',
            location: 'תל אביב',
            linkedin: 'linkedin.com/in/dana-cohen'
        }
    },
    {
        id: 'about',
        title: 'תקציר מקצועי',
        subtitle: 'פסקה קצרה שנותנת למעסיק סיבה לקרוא הלאה',
        icon: '💡',
        type: 'about',
        tips: [
            '2-4 משפטים ממוקדים — זה לא המקום לספר את כל סיפור החיים.',
            'התחילו עם התפקיד או התחום, לא עם "אני...".',
            'ציינו שנות ניסיון, תחום התמחות ומה מייחד אתכם.',
            'הימנעו ממילות סרק כמו "דינמי", "מוטיבציה" — השתמשו בעובדות.',
            'התאימו את התקציר לתפקיד הספציפי שאתם מתמודדים עליו.'
        ],
        example: 'מנהלת שיווק דיגיטלי עם 5 שנות ניסיון בהובלת קמפיינים בחברות B2B. מתמחה בשיווק תוכן, SEO וניהול מדיה חברתית. הובלתי צמיחה של 200% בתנועה אורגנית ושל 45% בלידים איכותיים. מחפשת תפקיד בכיר בחברת טכנולוגיה צומחת.',
        badExample: 'אני אדם דינמי ומוטיבציה עם תשוקה לשיווק. יש לי ניסיון רב ואני מחפש את ההזדמנות הבאה שלי. אני עובד קשה ואוהב אתגרים.'
    },
    {
        id: 'experience',
        title: 'ניסיון תעסוקתי',
        subtitle: 'הסקציה הכי חשובה — הראו מה השגתם, לא רק מה עשיתם',
        icon: '💼',
        type: 'list',
        sectionId: 'experience',
        tips: [
            'התחילו כל נקודה בפועל פעיל: הובלתי, פיתחתי, שיפרתי, ניהלתי.',
            'הוסיפו מספרים: "שיפור ביצועים ב-35%", "ניהול צוות של 8 אנשים".',
            'התמקדו בהישגים, לא רק בתחומי אחריות.',
            'סדרו מהתפקיד האחרון לראשון (כרונולוגי הפוך).',
            '3-5 נקודות לכל תפקיד זה הטווח האידיאלי.',
            'השתמשו בנוסחה: [פועל פעיל] + [מה עשיתי] + [תוצאה מדידה].'
        ],
        example: {
            company: 'חברת טק-אינוביט',
            role: 'מנהלת שיווק דיגיטלי',
            period: '2021 - היום',
            description: 'הובלת אסטרטגיית שיווק דיגיטלי לשוק ה-B2B\nהגדלת תנועה אורגנית ב-200% תוך שנה\nניהול תקציב שיווקי של 500K ש״ח בשנה\nגיוס וניהול צוות של 3 אנשי שיווק'
        },
        badExample: {
            company: 'חברה',
            role: 'שיווק',
            period: '2021',
            description: 'אחריות על שיווק\nעבודה עם לקוחות\nמשימות שונות'
        }
    },
    {
        id: 'education',
        title: 'השכלה',
        subtitle: 'תואר, מוסד ותקופה — ואם יש הצטיינות, ציינו',
        icon: '🎓',
        type: 'list',
        sectionId: 'education',
        tips: [
            'ציינו תואר מלא, מוסד לימודים ותקופה.',
            'אם סיימתם בהצטיינות — ציינו.',
            'קורסים רלוונטיים שווים ציון רק אם הם ממוקדים לתפקיד.',
            'בוגרים חדשים: ההשכלה יכולה לבוא לפני הניסיון.',
            'קורסים מקוונים מוכרים (Google, Coursera) שווים ציון.'
        ],
        example: {
            institution: 'אוניברסיטת תל אביב',
            degree: 'תואר ראשון (B.A.) בתקשורת ושיווק',
            period: '2016 - 2019',
            description: 'סיום בהצטיינות. התמחות בשיווק דיגיטלי.'
        }
    },
    {
        id: 'skills',
        title: 'מיומנויות',
        subtitle: 'שלבו מיומנויות טכניות ורכות — והתאימו למשרה',
        icon: '⚡',
        type: 'skills',
        tips: [
            'שלבו מיומנויות טכניות (כלים, שפות, תוכנות) וכלליות (ניהול, תקשורת).',
            'התאימו את הרשימה לדרישות המשרה הספציפית.',
            '6-12 מיומנויות הן טווח טוב. מעל 15 מדלל את ההשפעה.',
            'המנעו מלרשום "Office" או "אינטרנט" — הם מובנים מאליהם.',
            'מיומנויות ספציפיות עדיפות: "Google Analytics" ולא "ניתוח נתונים".'
        ],
        example: 'Google Analytics, Google Ads, Facebook Ads Manager, SEO, שיווק תוכן, ניהול קמפיינים, Mailchimp, HubSpot, Canva, ניתוח נתונים, ניהול צוות, עבודה מול לקוחות'
    },
    {
        id: 'languages',
        title: 'שפות',
        subtitle: 'שפה נוספת ברמה טובה היא יתרון אמיתי',
        icon: '🌍',
        type: 'languages',
        tips: [
            'ציינו רמה כנה: שפת אם, שוטף, טוב, בסיסי.',
            'אל תנפחו רמות — זה עלול להתברר בראיון.',
            'עברית ואנגלית הן חובה ברוב המשרות בישראל.',
            'שפה שלישית ברמה טובה היא יתרון משמעותי.'
        ],
        example: [
            { name: 'עברית', level: 'שפת אם' },
            { name: 'אנגלית', level: 'שוטף (C1)' },
            { name: 'ספרדית', level: 'בסיסי' }
        ]
    },
    {
        id: 'summary',
        title: 'סיכום ובדיקה',
        subtitle: 'בואו נוודא שהכל במקום לפני שמסיימים',
        icon: '✅',
        type: 'summary',
        tips: [
            'עברו על כל סקציה ובדקו שאין שגיאות כתיב.',
            'ודאו שמספרי הטלפון והאימייל תקינים.',
            'בקשו ממישהו לקרוא את קורות החיים לפני שליחה.',
            'שמרו גרסה אחת ממוקדת לכל סוג משרה.',
            'הורידו PDF ובדקו איך זה נראה בפועל.'
        ]
    }
];

/**
 * Get step index by step id.
 * @param {string} stepId
 * @returns {number}
 */
export function getStepIndex(stepId) {
    return WIZARD_STEPS.findIndex(s => s.id === stepId);
}

/**
 * Get completion status for each section based on CV data.
 * @param {object} data - CV data object
 * @returns {object} Map of sectionId → { filled: boolean, details: string }
 */
export function getCompletionStatus(data) {
    const status = {};

    // Personal
    const pFields = ['name', 'title', 'phone', 'email'];
    const pFilled = pFields.filter(f => data.personal[f]?.trim()).length;
    status.personal = {
        filled: pFilled >= 3,
        details: `${pFilled}/${pFields.length} שדות חובה`
    };

    // About
    const aboutLen = (data.personal.about || '').trim().length;
    status.about = {
        filled: aboutLen >= 40,
        details: aboutLen === 0 ? 'ריק' : aboutLen < 40 ? 'קצר מדי' : 'מעולה'
    };

    // Experience
    status.experience = {
        filled: data.experience.length > 0 && data.experience.some(e => e.role || e.company),
        details: data.experience.length === 0 ? 'לא הוזן' : `${data.experience.length} משרות`
    };

    // Education
    status.education = {
        filled: data.education.length > 0 && data.education.some(e => e.institution || e.degree),
        details: data.education.length === 0 ? 'לא הוזן' : `${data.education.length} רשומות`
    };

    // Skills
    status.skills = {
        filled: data.skills.length >= 3,
        details: data.skills.length === 0 ? 'לא הוזנו' : `${data.skills.length} מיומנויות`
    };

    // Languages
    status.languages = {
        filled: data.languages.length > 0 && data.languages.some(l => l.name),
        details: data.languages.length === 0 ? 'לא הוזנו' : `${data.languages.length} שפות`
    };

    return status;
}

/**
 * Calculate overall completion percentage.
 * @param {object} status - from getCompletionStatus
 * @returns {number} 0-100
 */
export function getCompletionPercent(status) {
    const sections = Object.values(status);
    const filled = sections.filter(s => s.filled).length;
    return Math.round((filled / sections.length) * 100);
}
