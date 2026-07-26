/**
 * CV Data Schema & Defaults
 * Defines the data model for the resume builder.
 */

export const PERSONAL_DEFAULTS = {
    name: '', title: '', phone: '', email: '',
    location: '', linkedin: '', website: '', github: '', about: ''
};

export const EXPERIENCE_ITEM = { company: '', role: '', period: '', description: '' };
export const EDUCATION_ITEM = { institution: '', degree: '', period: '', description: '' };
export const MILITARY_ITEM = { unit: '', role: '', period: '', description: '' };
export const VOLUNTEERING_ITEM = { organization: '', role: '', period: '', description: '' };
export const PROJECT_ITEM = { name: '', description: '', technologies: '', link: '' };
export const CERTIFICATION_ITEM = { name: '', issuer: '', date: '', description: '' };
export const LANGUAGE_ITEM = { name: '', level: '' };

export const SETTINGS_DEFAULTS = {
    theme: 'modern',
    color: 'indigo',
    fontFamily: 'heebo_noto',
    fontSize: 'medium',
    profileDisplay: 'initials',
    cvLanguage: 'he',
    watermark: true,
    sectionOrder: ['about', 'experience', 'education', 'military', 'skills', 'languages'],
    visibleSections: ['about', 'experience', 'education', 'skills', 'languages']
};

export const COLOR_MAP = {
    indigo:  { text: 'text-indigo-700',  chipBg: 'bg-indigo-50',  chipText: 'text-indigo-700',  border: 'border-indigo-600',  grad: 'from-indigo-800 via-indigo-900 to-slate-900',   hex: '#4338ca', sidebarTint: '#eef0f8', sidebarBorder: '#d8ddf0' },
    teal:    { text: 'text-teal-700',    chipBg: 'bg-teal-50',    chipText: 'text-teal-700',    border: 'border-teal-600',    grad: 'from-teal-800 via-teal-900 to-slate-900',     hex: '#0f766e', sidebarTint: '#ecf5f2', sidebarBorder: '#d0e8e0' },
    rose:    { text: 'text-rose-700',    chipBg: 'bg-rose-50',    chipText: 'text-rose-700',    border: 'border-rose-600',    grad: 'from-rose-900 via-rose-950 to-slate-900',     hex: '#be123c', sidebarTint: '#f6eef0', sidebarBorder: '#ebd5da' },
    emerald: { text: 'text-emerald-700', chipBg: 'bg-emerald-50', chipText: 'text-emerald-700', border: 'border-emerald-600', grad: 'from-emerald-800 via-emerald-900 to-slate-900', hex: '#047857', sidebarTint: '#edf5f0', sidebarBorder: '#d2e8d8' },
    amber:   { text: 'text-amber-700',   chipBg: 'bg-amber-50',   chipText: 'text-amber-800',   border: 'border-amber-600',   grad: 'from-amber-800 via-amber-900 to-stone-900',   hex: '#b45309', sidebarTint: '#f5f1e8', sidebarBorder: '#e8dcc6' },
    slate:   { text: 'text-slate-800',   chipBg: 'bg-slate-100',  chipText: 'text-slate-700',   border: 'border-slate-500',   grad: 'from-slate-700 via-slate-800 to-slate-950',   hex: '#334155', sidebarTint: '#f0f0ee', sidebarBorder: '#d8d8d4' }
};

/** Feature tier definitions — free features work always, pro features require license */
export const FEATURE_TIERS = {
    // Free tier (all current features)
    templates_all: 'free',
    export_pdf: 'free',
    export_image: 'free',
    local_storage: 'free',
    font_selection: 'free',
    color_selection: 'free',
    profile_photo: 'free',
    font_size: 'free',

    // Pro tier (placeholder — will be defined separately)
    ai_suggestions: 'pro',
    cover_letter: 'pro',
    job_matching: 'pro',
    multiple_versions: 'pro',
    remove_watermark: 'pro',
    export_docx: 'pro'
};

/** Check if a feature is available (always true in current free version) */
export function isFeatureAvailable(featureKey) {
    const tier = FEATURE_TIERS[featureKey];
    if (!tier || tier === 'free') return true;
    // Pro check — will be wired to license validation later
    return false;
}

/** Get the tier label for a feature */
export function getFeatureTier(featureKey) {
    return FEATURE_TIERS[featureKey] || 'free';
}

/** Create a fresh empty CV data object */
export function createEmptyCV() {
    return {
        personal: { ...PERSONAL_DEFAULTS },
        experience: [],
        education: [],
        military: [],
        volunteering: [],
        projects: [],
        certifications: [],
        skills: [],
        skillsInput: '',
        languages: [],
        settings: { ...SETTINGS_DEFAULTS, sectionOrder: [...SETTINGS_DEFAULTS.sectionOrder], visibleSections: [...SETTINGS_DEFAULTS.visibleSections] }
    };
}

/** Take a deep snapshot of CV data for storage */
export function snapshot(data) {
    return {
        settings: { ...data.settings, sectionOrder: [...data.settings.sectionOrder], visibleSections: [...data.settings.visibleSections] },
        personal: { ...data.personal },
        experience: data.experience.map(e => ({ ...e })),
        education: data.education.map(e => ({ ...e })),
        military: data.military.map(e => ({ ...e })),
        volunteering: data.volunteering.map(e => ({ ...e })),
        projects: data.projects.map(e => ({ ...e })),
        certifications: data.certifications.map(e => ({ ...e })),
        skills: [...data.skills],
        skillsInput: data.skillsInput,
        languages: data.languages.map(l => ({ ...l }))
    };
}

/** Restore snapshot into the app, filling missing fields with defaults */
export function restoreSnapshot(target, data) {
    if (!data || typeof data !== 'object') return false;

    target.settings = {
        ...SETTINGS_DEFAULTS,
        ...(data.settings || {}),
        sectionOrder: Array.isArray(data.settings?.sectionOrder) ? [...data.settings.sectionOrder] : [...SETTINGS_DEFAULTS.sectionOrder],
        visibleSections: Array.isArray(data.settings?.visibleSections) ? [...data.settings.visibleSections] : [...SETTINGS_DEFAULTS.visibleSections]
    };
    target.personal = { ...PERSONAL_DEFAULTS, ...(data.personal || {}) };
    target.experience = Array.isArray(data.experience) ? data.experience.map(e => ({ ...EXPERIENCE_ITEM, ...e })) : [];
    target.education = Array.isArray(data.education) ? data.education.map(e => ({ ...EDUCATION_ITEM, ...e })) : [];
    target.military = Array.isArray(data.military) ? data.military.map(e => ({ ...MILITARY_ITEM, ...e })) : [];
    target.volunteering = Array.isArray(data.volunteering) ? data.volunteering.map(e => ({ ...VOLUNTEERING_ITEM, ...e })) : [];
    target.projects = Array.isArray(data.projects) ? data.projects.map(e => ({ ...PROJECT_ITEM, ...e })) : [];
    target.certifications = Array.isArray(data.certifications) ? data.certifications.map(e => ({ ...CERTIFICATION_ITEM, ...e })) : [];
    target.skills = Array.isArray(data.skills) ? [...data.skills] : [];
    target.skillsInput = typeof data.skillsInput === 'string' ? data.skillsInput : target.skills.join(', ');
    target.languages = Array.isArray(data.languages) ? data.languages.map(l => ({ ...LANGUAGE_ITEM, ...l })) : [];
    return true;
}

/** Check if the CV has any meaningful content */
export function hasCvContent(data) {
    return Boolean(
        data.personal.name || data.personal.title || data.personal.email ||
        data.personal.phone || data.personal.about ||
        data.experience.length || data.education.length ||
        data.military.length || data.volunteering.length ||
        data.projects.length || data.certifications.length ||
        data.skills.length || data.languages.length
    );
}
