/**
 * Classic Template — Elegant single-column document with refined serif rhythm
 */
import {
    esc,
    colors,
    renderContactList,
    renderItemList,
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
    const lang = data.settings.cvLanguage || 'he';
    const isLTR = lang === 'en';
    const labels = getSectionLabels(lang);

    const contactItems = renderContactList(p, 'inline');
    const contactHtml = contactItems.length
        ? `<div class="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11.5px] text-slate-500 font-sans">${contactItems.join('<span class="text-slate-300">•</span>')}</div>`
        : '';

    let body = '';
    for (const sid of sections) {
        if (!sectionHasData(data, sid)) continue;
        const label = labels[sid] || sid;

        if (sid === 'about') {
            body += `<section class="mb-6">
                ${sectionHeading(label, data.settings.color, 'border')}
                <p class="text-[12.5px] text-slate-700 leading-6">${esc(p.about)}</p>
            </section>`;
        } else if (sid === 'skills') {
            body += `<section class="mb-6">
                ${sectionHeading(label, data.settings.color, 'border')}
                <p class="text-[12px] text-slate-700 leading-6 font-sans">${data.skills.map((s) => esc(s)).join('  •  ')}</p>
            </section>`;
        } else if (sid === 'languages') {
            body += `<section class="mb-6">
                ${sectionHeading(label, data.settings.color, 'border')}
                <ul class="space-y-1.5 text-[12px] font-sans">${renderLanguages(data.languages)}</ul>
            </section>`;
        } else {
            const items = data[sid] || [];
            body += `<section class="mb-6">
                ${sectionHeading(label, data.settings.color, 'border')}
                <div class="space-y-4">${renderItemList(items, c.hex, { compact: true })}</div>
            </section>`;
        }
    }

    return `<div class="px-12 pt-11 pb-10 h-full min-h-[297mm] bg-[#fffdfa] text-slate-900 font-serif" dir="${isLTR ? 'ltr' : 'rtl'}">
        <div class="text-center pb-6 mb-6 border-b" style="border-bottom-color:${c.hex}20">
            <div class="text-[10px] font-sans font-bold tracking-[0.18em] ${c.text} mb-2">${isLTR ? 'Curriculum Vitae' : 'מסמך קורות חיים'}</div>
            <h1 class="text-[37px] font-black leading-none mb-2.5 ${c.text}">${esc(p.name) || 'השם שלך'}</h1>
            <p class="text-[14px] text-slate-600 mb-3">${esc(p.title) || 'כותרת מקצועית'}</p>
            ${contactHtml}
        </div>
        <div class="max-w-[94%] mx-auto">
            ${body}
        </div>
    </div>
    ${renderWatermark(data.settings.watermark, lang)}`;
}
