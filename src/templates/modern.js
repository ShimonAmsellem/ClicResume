/**
 * Modern Template — Editorial two-column layout with warm paper sidebar
 */
import {
    esc,
    colors,
    initials,
    renderContactList,
    renderItemList,
    renderSkillChips,
    renderLanguages,
    sectionHeading,
    renderWatermark,
    getOrderedSections,
    sectionHasData,
    CV_SECTION_LABELS,
    getSectionLabels
} from './base.js';

export function render(data) {
    const c = colors(data.settings.color);
    const sections = getOrderedSections(data);
    const p = data.personal;
    const profileDisplay = data.settings.profileDisplay || 'initials';
    const lang = data.settings.cvLanguage || 'he';
    const isLTR = lang === 'en';
    const labels = getSectionLabels(lang);

    const sidebarSections = ['skills', 'languages'];
    const mainSections = sections.filter((sid) => !sidebarSections.includes(sid) && sid !== 'about');

    const contactItems = renderContactList(p, 'sidebar').map((li) =>
        li.replace('flex items-center gap-2.5', 'flex items-start gap-2.5 leading-relaxed text-slate-700')
    );
    const contactHtml = contactItems.length
        ? `<div class="mb-8">
            <div class="text-[10px] font-bold tracking-[0.24em] uppercase text-slate-500 mb-3">${isLTR ? 'Contact' : 'פרטי קשר'}</div>
            <ul class="space-y-2.5 text-[12px]">${contactItems.join('')}</ul>
        </div>`
        : '';

    let sidebarBody = '';
    if (contactHtml) sidebarBody += contactHtml;

    if (data.skills.length > 0 && sections.includes('skills')) {
        sidebarBody += `<div class="mb-8">
            <div class="text-[10px] font-bold tracking-[0.24em] uppercase text-slate-500 mb-3">${isLTR ? 'Skills' : 'מיומנויות'}</div>
            <div class="flex flex-wrap gap-1.5">${renderSkillChips(data.skills, data.settings.color, 'colored')}</div>
        </div>`;
    }

    if (data.languages.length > 0 && sections.includes('languages')) {
        sidebarBody += `<div class="mb-8">
            <div class="text-[10px] font-bold tracking-[0.24em] uppercase text-slate-500 mb-3">${isLTR ? 'Languages' : 'שפות'}</div>
            <ul class="space-y-2.5 text-[12px]">${renderLanguages(data.languages)}</ul>
        </div>`;
    }

    let mainBody = '';

    if (sectionHasData(data, 'about') && sections.includes('about')) {
        mainBody += `<div class="mb-8 rounded-[22px] border border-slate-200/80 bg-white/80 px-6 py-5">
            <div class="text-[10px] font-bold tracking-[0.24em] uppercase ${c.text} mb-3">${isLTR ? 'Professional Summary' : 'תקציר מקצועי'}</div>
            <p class="text-[13px] text-slate-700 leading-7">${esc(p.about)}</p>
        </div>`;
    }

    for (const sid of mainSections) {
        if (!sectionHasData(data, sid)) continue;
        const label = labels[sid] || sid;
        const items = data[sid] || [];

        if (sid === 'experience') {
            mainBody += `<div class="mb-8">
                ${sectionHeading(label, data.settings.color, 'line')}
                <div class="space-y-6 ${isLTR ? 'border-l pl-5' : 'border-r pr-5'}" style="border-color:${c.hex}26">
                    ${renderItemList(items, c.hex, { showTimeline: true, dir: isLTR ? 'ltr' : 'rtl' })}
                </div>
            </div>`;
        } else {
            mainBody += `<div class="mb-8">
                ${sectionHeading(label, data.settings.color, 'line')}
                <div class="space-y-4">${renderItemList(items, c.hex)}</div>
            </div>`;
        }
    }

    return `<div class="h-full min-h-[297mm] bg-[#fffdf9] text-slate-900" dir="${isLTR ? 'ltr' : 'rtl'}">
        <div class="flex min-h-[297mm]">
            <aside class="w-[31%] px-7 pt-10 pb-8 ${isLTR ? 'border-r' : 'border-l'}" style="background:${c.sidebarTint};${isLTR ? 'border-right-color' : 'border-left-color'}:${c.sidebarBorder}">
                ${profileDisplay === 'none'
    ? ''
    : `<div class="mb-8 flex items-center gap-4">
                    ${profileDisplay === 'photo' && data.settings.profilePhoto
        ? `<img src="${data.settings.profilePhoto}" class="w-16 h-16 rounded-[22px] object-cover shrink-0" alt="">`
        : `<div class="w-16 h-16 rounded-[22px] text-white grid place-items-center font-display font-black text-2xl shrink-0" style="background:${c.hex}">${esc(initials(p.name))}</div>`}
                    <div class="min-w-0">
                        <p class="text-[13px] font-semibold text-slate-700 leading-5">${esc(p.title) || 'כותרת מקצועית'}</p>
                    </div>
                </div>`}
                ${sidebarBody}
            </aside>
            <main class="w-[69%] px-9 pt-10 pb-10">
                <div class="pb-7 mb-8 border-b border-slate-200/90">
                    <div class="text-[10px] font-bold tracking-[0.18em] ${c.text} mb-2">${isLTR ? 'Curriculum Vitae' : 'קורות חיים'}</div>
                    <h1 class="font-display text-[36px] leading-none text-slate-900 mb-2">${esc(p.name) || 'השם שלך'}</h1>
                    <p class="text-[13px] text-slate-600 leading-6 max-w-xl">${esc(p.title) || 'כותרת מקצועית'}</p>
                </div>
                ${mainBody}
            </main>
        </div>
    </div>
    ${renderWatermark(data.settings.watermark, lang)}`;
}
