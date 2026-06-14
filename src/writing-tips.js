/**
 * Writing Tips & Validation
 * Provides contextual writing guidance and content validation.
 * Includes section-level tips AND field-level advanced tips.
 */

/** Tips per section/field */
const TIPS = {
    about: {
        label: 'תקציר מקצועי',
        tips: [
            '2-4 משפטים ממוקדים. ציינו שנות ניסיון, תחום התמחות ומה מייחד אתכם.',
            'התחילו עם התפקיד או התחום, לא עם "אני...".',
            'הימנעו ממילות סרק כמו "דינמי", "מוטיבציה" — השתמשו בעובדות.'
        ]
    },
    experience: {
        label: 'ניסיון תעסוקתי',
        tips: [
            'התחילו כל נקודה בפועל פעיל: הובלתי, פיתחתי, שיפרתי, ניהלתי.',
            'הוסיפו מספרים: "שיפור ביצועים ב-35%", "ניהול צוות של 8 אנשים".',
            'התמקדו בהישגים, לא רק בתחומי אחריות.',
            'סדרו מהתפקיד האחרון לראשון (כרונולוגי הפוך).'
        ]
    },
    education: {
        label: 'השכלה',
        tips: [
            'ציינו תואר מלא, מוסד ותקופה.',
            'אם סיימתם בהצטיינות — ציינו.',
            'קורסים רלוונטיים שווים ציון רק אם הם ממוקדים לתפקיד.'
        ]
    },
    military: {
        label: 'שירות צבאי / לאומי',
        tips: [
            'התמקדו בתפקידי ניהול, אחריות או מומחיות רלוונטית.',
            'אם השירות לא רלוונטי לתפקיד — שורה אחת מספיקה.',
            'סמנו "מסווג" רק אם באמת צריך — אחרת תארו במונחים כלליים.'
        ]
    },
    volunteering: {
        label: 'התנדבות',
        tips: [
            'התנדבות רלוונטית מוכיחה מיומנויות רכות: מנהיגות, תקשורת, יוזמה.',
            'ציינו ארגון, תפקיד ותרומה מדידה אם אפשר.'
        ]
    },
    projects: {
        label: 'פרויקטים',
        tips: [
            'פרויקטים אישיים רלוונטיים מחזקים את הפרופיל — במיוחד למתחילים.',
            'ציינו טכנולוגיות, תוצאות, וקישור אם זמין.'
        ]
    },
    certifications: {
        label: 'הסמכות',
        tips: [
            'הסמכות מקצועיות מראות למעסיק השקעה מתמשכת בפיתוח.',
            'ציינו גוף מנפיק ותאריך — הסמכות ישנות פחות משכנעות.'
        ]
    },
    skills: {
        label: 'מיומנויות',
        tips: [
            'שלבו מיומנויות טכניות וכלליות.',
            'התאימו לדרישות המשרה — לא רשימה כללית.',
            '6-12 מיומנויות הן טווח טוב. מעל 15 מדלל את ההשפעה.'
        ]
    },
    languages: {
        label: 'שפות',
        tips: [
            'ציינו רמה כנה: שפת אם, שוטף, טוב, בסיסי.',
            'שפה נוספת ברמה טובה היא יתרון — אבל אל תנפחו רמות.'
        ]
    }
};

// ─────────────────────────────────────────────
// Advanced Field-Level Tips
// ─────────────────────────────────────────────

/**
 * FIELD_TIPS — contextual tips shown inline next to specific fields.
 * Structure: { sectionId: { fieldKey: { hint, good, bad } } }
 *   hint — short inline guidance (shown as placeholder or micro-tip)
 *   good — example of strong content
 *   bad  — example of weak content (to avoid)
 */
const FIELD_TIPS = {
    personal: {
        name: {
            hint: 'השם כפי שיופיע בראש קורות החיים',
        },
        title: {
            hint: 'כותרת ממוקדת, לא כללית',
            good: 'מהנדס תוכנה בכיר | Full Stack',
            bad: 'עובד מחשבים'
        },
        phone: {
            hint: 'ודאו שהמספר תקין — שגיאה אחת = ראיון שאבד',
        },
        email: {
            hint: 'כתובת מקצועית. הימנעו מ-coolguy99@',
            good: 'dana.cohen@gmail.com',
            bad: 'princess2003@hotmail.com'
        },
        linkedin: {
            hint: 'כתובת מותאמת אישית עדיפה',
            good: 'linkedin.com/in/dana-cohen',
            bad: 'linkedin.com/in/user-38271649283'
        }
    },
    about: {
        about: {
            hint: 'נוסחה: [תפקיד] + [שנות ניסיון] + [התמחות] + [הישג בולט] + [מה מחפש/ת]',
            good: 'מנהלת שיווק דיגיטלי עם 5 שנות ניסיון בחברות B2B. מתמחה בשיווק תוכן ו-SEO. הובלתי צמיחה של 200% בתנועה אורגנית. מחפשת תפקיד בכיר בחברת טכנולוגיה.',
            bad: 'אני אדם דינמי עם מוטיבציה גבוהה ותשוקה לשיווק. מחפש הזדמנויות חדשות ואתגרים מקצועיים.'
        }
    },
    experience: {
        company: {
            hint: 'שם מלא של החברה. אם לא מוכרת — הוסיפו תיאור קצר בסוגריים',
            good: 'טק-אינוביט (סטארטאפ פינטק, 50 עובדים)',
        },
        role: {
            hint: 'שם התפקיד הרשמי. אם כללי מדי — הוסיפו התמחות',
            good: 'מפתח Backend בכיר',
            bad: 'מתכנת'
        },
        period: {
            hint: 'שנה-שנה. "היום" אם נוכחי',
            good: '2021 - היום',
            bad: 'כ-3 שנים'
        },
        description: {
            hint: 'כל שורה = נקודה. התחילו בפועל פעיל + הישג מדיד',
            good: 'הובלתי צוות של 5 מפתחים בפיתוח מערכת תשלומים\nשיפרתי זמני תגובה ב-40% באמצעות אופטימיזציית DB\nהטמעתי CI/CD שקיצר deploy מ-2 שעות ל-15 דקות',
            bad: 'אחראי על פיתוח\nעבודה בצוות\nמשימות שונות'
        }
    },
    education: {
        institution: {
            hint: 'שם מלא של המוסד',
        },
        degree: {
            hint: 'תואר + תחום. אם בוגר/ת טריים — הוסיפו ממוצע / הצטיינות',
            good: 'B.Sc. מדעי המחשב, בהצטיינות יתרה (93)',
            bad: 'תואר ראשון'
        },
        period: {
            hint: 'שנת התחלה - שנת סיום',
        },
        description: {
            hint: 'אופציונלי: הצטיינות, פרויקט גמר, קורסים רלוונטיים',
            good: 'פרויקט גמר: מערכת המלצות מבוססת ML. קורסים: ראייה ממוחשבת, עיבוד שפה טבעית.',
        }
    },
    military: {
        unit: {
            hint: 'אם מסווג, כתבו "יחידה טכנולוגית" או תיאור כללי',
        },
        role: {
            hint: 'תפקיד + דרגה אם רלוונטי',
            good: 'קצינת תקשוב, סגנית',
            bad: 'חיילת'
        },
        description: {
            hint: 'הישגים ואחריות ניהולית. אל תחשפו מידע מסווג',
            good: 'ניהלתי צוות של 12 חיילים באחזקת מערכות תקשורת\nהובלתי פרויקט שדרוג תשתית שחסך 30% בזמני תקלה',
        }
    },
    volunteering: {
        organization: { hint: 'שם הארגון' },
        role: {
            hint: 'תפקיד בהתנדבות — הראו יוזמה וניהול',
            good: 'מנטורית טכנולוגיה לנוער',
        },
        description: {
            hint: 'תרומה מדידה עדיפה: כמה אנשים, שעות, תוצאות',
            good: 'ליוויתי 8 תלמידים בפיתוח אפליקציה ראשונה. 6 מתוכם התקבלו ליחידות טכנולוגיות.',
        }
    },
    projects: {
        name: { hint: 'שם הפרויקט — קצר ותיאורי' },
        technologies: {
            hint: 'טכנולוגיות עיקריות בלבד',
            good: 'React, Node.js, PostgreSQL, AWS',
            bad: 'HTML, CSS, JavaScript, React, Redux, Node.js, Express, MongoDB, PostgreSQL, Docker, AWS, Git'
        },
        description: {
            hint: 'מה הפרויקט עושה + למה הוא מעניין. שורה-שתיים מספיקות',
            good: 'אפליקציית ניהול תקציב אישי עם התראות חכמות. 2,000 משתמשים פעילים.',
        }
    },
    certifications: {
        name: {
            hint: 'שם ההסמכה המדויק',
            good: 'AWS Solutions Architect Associate',
        },
        issuer: {
            hint: 'הגוף המנפיק — ככל שמוכר יותר, כך עדיף',
        },
        date: {
            hint: 'שנה. הסמכות ישנות מ-5+ שנים פחות רלוונטיות',
        }
    },
    skills: {
        skills: {
            hint: 'שלבו 3 קטגוריות: טכני (כלים/שפות), מקצועי (מתודולוגיות), ורך (תקשורת/ניהול)',
            good: 'Python, SQL, Tableau, ניתוח נתונים, A/B Testing, ניהול פרויקטים, עבודת צוות',
            bad: 'מחשב, אינטרנט, Office, עבודה קשה, למידה עצמית, תקשורת בינאישית'
        }
    },
    languages: {
        name: { hint: 'שם השפה' },
        level: {
            hint: 'רמות מקובלות: שפת אם, שוטף, טוב מאוד, טוב, בסיסי',
            good: 'שוטף (C1)',
            bad: 'ברמה גבוהה'
        }
    }
};

/**
 * ACTION_VERBS — categorized Hebrew action verbs for experience descriptions.
 * Used to help users start bullet points with strong verbs.
 */
const ACTION_VERBS = {
    ניהול: ['הובלתי', 'ניהלתי', 'ריכזתי', 'תיאמתי', 'הנחיתי', 'פיקחתי', 'הקמתי'],
    פיתוח: ['פיתחתי', 'תכננתי', 'עיצבתי', 'בניתי', 'יצרתי', 'הטמעתי', 'שדרגתי'],
    שיפור: ['שיפרתי', 'ייעלתי', 'אופטמתי', 'צמצמתי', 'הגדלתי', 'האצתי', 'חיזקתי'],
    תקשורת: ['הצגתי', 'הדרכתי', 'ייעצתי', 'ליוויתי', 'ייצגתי', 'תיווכתי'],
    מחקר: ['חקרתי', 'ניתחתי', 'בדקתי', 'מיפיתי', 'הערכתי', 'זיהיתי', 'אבחנתי'],
    מכירות: ['הגדלתי', 'מכרתי', 'גייסתי', 'השגתי', 'סגרתי', 'הרחבתי']
};

/**
 * ACHIEVEMENT_FORMULAS — templates for writing strong bullet points.
 */
const ACHIEVEMENT_FORMULAS = [
    { formula: '[פועל פעיל] + [מה] + [תוצאה מדידה]', example: 'שיפרתי את מהירות האתר ב-60% באמצעות אופטימיזציית קוד' },
    { formula: '[פועל פעיל] + [כמות/היקף] + [תוצאה]', example: 'ניהלתי צוות של 12 עובדים שהגדיל מכירות ב-25%' },
    { formula: '[פועל פעיל] + [בעיה] + [פתרון] + [השפעה]', example: 'זיהיתי צוואר בקבוק בתהליך ייצור, הטמעתי אוטומציה שחסכה 200 שעות עבודה בשנה' },
    { formula: '[פועל פעיל] + [פרויקט] + [תוצאה עסקית]', example: 'הובלתי פרויקט מיגרציה לענן שהפחית עלויות תשתית ב-40%' }
];

/**
 * WEAK_WORDS — words to avoid in CVs, with suggested replacements.
 */
const WEAK_WORDS = [
    { word: 'אחראי על', replace: 'הובלתי / ניהלתי / ביצעתי' },
    { word: 'עזרתי', replace: 'תמכתי / ליוויתי / הנחיתי' },
    { word: 'עבדתי על', replace: 'פיתחתי / הטמעתי / הובלתי' },
    { word: 'דינמי', replace: 'ציינו הישג ספציפי במקום' },
    { word: 'מוטיבציה גבוהה', replace: 'הראו מוטיבציה דרך הישגים' },
    { word: 'שחקן צוות', replace: 'הובלתי שיתוף פעולה בין X צוותים' },
    { word: 'עובד קשה', replace: 'הצגתי תוצאות: הגדלתי / שיפרתי / ייעלתי...' },
    { word: 'למידה מהירה', replace: 'למדתי [טכנולוגיה] תוך [זמן] והטמעתי ב-[פרויקט]' },
    { word: 'יצירתי', replace: 'יזמתי / פיתחתי פתרון חדשני ל-...' },
    { word: 'ביצעתי משימות שונות', replace: 'פרטו 2-3 משימות קונקרטיות עם תוצאות' }
];

// ─────────────────────────────────────────────
// Content validation checks
// ─────────────────────────────────────────────

const VALIDATIONS = {
    emailFormat: (email) => {
        if (!email) return null;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'כתובת האימייל לא תקינה.';
        return null;
    },
    phoneFormat: (phone) => {
        if (!phone) return null;
        const digits = phone.replace(/[\s\-\(\)\.+]/g, '');
        if (digits.length < 9 || digits.length > 15) return 'מספר הטלפון נראה לא תקין.';
        return null;
    },
    aboutLength: (about) => {
        if (!about) return 'תקציר מקצועי ריק — כדאי לכתוב 2-4 משפטים ממוקדים.';
        if (about.length < 40) return 'התקציר קצר מאוד. נסו להוסיף עוד משפט או שניים.';
        if (about.length > 600) return 'התקציר ארוך מדי. נסו לקצר ל-3-4 משפטים.';
        return null;
    },
    experienceDescription: (items) => {
        const issues = [];
        items.forEach((item, i) => {
            if (item.role && !item.description) {
                issues.push(`משרה "${item.role}" — חסר תיאור והישגים.`);
            }
        });
        return issues.length ? issues : null;
    },
    missingName: (name) => {
        if (!name) return 'שם מלא הוא שדה חובה.';
        return null;
    },
    weakWords: (text) => {
        if (!text) return null;
        const found = WEAK_WORDS.filter(w => text.includes(w.word));
        return found.length ? found : null;
    }
};

// ─────────────────────────────────────────────
// Public API
// ─────────────────────────────────────────────

/**
 * Get writing tips for a section.
 * @param {string} sectionId
 * @returns {{ label: string, tips: string[] } | null}
 */
export function getTips(sectionId) {
    return TIPS[sectionId] || null;
}

/**
 * Get field-level tip for a specific field in a section.
 * @param {string} sectionId
 * @param {string} fieldKey
 * @returns {{ hint: string, good?: string, bad?: string } | null}
 */
export function getFieldTip(sectionId, fieldKey) {
    return FIELD_TIPS[sectionId]?.[fieldKey] || null;
}

/**
 * Get all field tips for a section.
 * @param {string} sectionId
 * @returns {object | null}
 */
export function getFieldTips(sectionId) {
    return FIELD_TIPS[sectionId] || null;
}

/**
 * Get action verbs by category.
 * @param {string} [category] - Optional category filter
 * @returns {object | string[]}
 */
export function getActionVerbs(category) {
    if (category) return ACTION_VERBS[category] || [];
    return ACTION_VERBS;
}

/**
 * Get achievement writing formulas with examples.
 * @returns {{ formula: string, example: string }[]}
 */
export function getAchievementFormulas() {
    return ACHIEVEMENT_FORMULAS;
}

/**
 * Get weak words list with replacements.
 * @returns {{ word: string, replace: string }[]}
 */
export function getWeakWords() {
    return WEAK_WORDS;
}

/**
 * Check text for weak words and return suggestions.
 * @param {string} text
 * @returns {{ word: string, replace: string }[] | null}
 */
export function checkWeakWords(text) {
    return VALIDATIONS.weakWords(text);
}

/**
 * Run all validations and return issues.
 * @param {object} data - CV data
 * @returns {{ field: string, message: string }[]}
 */
export function validate(data) {
    const issues = [];

    const nameIssue = VALIDATIONS.missingName(data.personal.name);
    if (nameIssue) issues.push({ field: 'name', message: nameIssue });

    const emailIssue = VALIDATIONS.emailFormat(data.personal.email);
    if (emailIssue) issues.push({ field: 'email', message: emailIssue });

    const phoneIssue = VALIDATIONS.phoneFormat(data.personal.phone);
    if (phoneIssue) issues.push({ field: 'phone', message: phoneIssue });

    const aboutIssue = VALIDATIONS.aboutLength(data.personal.about);
    if (aboutIssue) issues.push({ field: 'about', message: aboutIssue });

    const expIssues = VALIDATIONS.experienceDescription(data.experience);
    if (expIssues) expIssues.forEach(msg => issues.push({ field: 'experience', message: msg }));

    // Check about for weak words
    const aboutWeak = VALIDATIONS.weakWords(data.personal.about);
    if (aboutWeak) {
        aboutWeak.forEach(w => issues.push({
            field: 'about',
            message: `הימנעו מ-"${w.word}" — נסו: ${w.replace}`
        }));
    }

    // Check experience descriptions for weak words
    (data.experience || []).forEach(item => {
        const weak = VALIDATIONS.weakWords(item.description);
        if (weak) {
            weak.forEach(w => issues.push({
                field: 'experience',
                message: `${item.role ? `"${item.role}": ` : ''}הימנעו מ-"${w.word}" — נסו: ${w.replace}`
            }));
        }
    });

    if (!data.experience.length && !data.education.length && !data.military.length) {
        issues.push({ field: 'general', message: 'כדאי להוסיף לפחות סקציה אחת של ניסיון, השכלה או שירות.' });
    }

    return issues;
}

/**
 * Get a random tip for a section.
 * @param {string} sectionId
 * @returns {string}
 */
export function getRandomTip(sectionId) {
    const section = TIPS[sectionId];
    if (!section || !section.tips.length) return '';
    return section.tips[Math.floor(Math.random() * section.tips.length)];
}
