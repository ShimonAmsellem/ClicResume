/**
 * Minimal Template — Crisp asymmetric grid with restrained editorial structure
 */
import {
    esc,
    colors,
    renderContactList,
    renderSkillChips,
    renderLanguages,
    renderWatermark,
    getOrderedSections,
    sectionHasData,
    CV_SECTION_LABELS,
    getSectionLabels,
    hasBullets,
    descLines
} from './base.js';

function renderGridItems(items, colorHex, dir = 'rtl') {
    return items.map((item) => {
        const title = item.role || item.degree || item.name || '';
        const subtitle = item.company || item.institution || item.unit || item.organization || item.issuer || '';
        const period = item.period || item.date || '';
        const desc = item.description || '';
        const techLine = item.technologies ? `<p class="text-[11px] text-slate-500 mb-1.5">${esc(item.technologies)}</p>` : '';
        const linkLine = item.link ? `<p class="text-[10.5px] text-slate-400 ltr mt-1">${esc(item.link)}</p>` : '';

        let descHtml = '';
        if (desc && hasBullets(desc)) {
            descHtml = `<ul class="space-y-1.5">${descLines(desc).map((line) =>
                `<li class="flex gap-2 text-[12px] text-slate-600 leading-6"><span style="color:${colorHex}">—</span><span>${esc(line)}</span></li>`
            ).join('')}</ul>`;
        } else if (desc) {
            descHtml = `<p class="text-[12px] text-slate-600 leading-6">${esc(desc)}</p>`;
        }

        return `<div class="grid grid-cols-[96px_1fr] gap-5 py-3 border-b border-slate-100 last:border-b-0">
            <div class="text-[11px] uppercase tracking-[0.18em] text-slate-400 ltr ${dir === 'ltr' ? 'text-left' : 'text-right'} pt-0.5">${esc(period)}</div>
            <div>
                <h4 class="text-[13px] font-bold text-slate-900 mb-1">${esc(title)}</h4>
                ${subtitle ? `<p class="text-[12px] font-medium mb-1.5" style="color:${colorHex}; opacity: 0.85; font-weight: 600">${esc(subtitle)}</p>` : ''}
                ${techLine}${descHtml}${linkLine}
            </div>
        </div>`;
    }).join('');
}

export function render(data) {
    const c = colors(data.settings.color);
    const sections = getOrderedSections(data);
    const p = data.personal;
    const lang = data.settings.cvLanguage || 'he';
    const isLTR = lang === 'en';
    const labels = getSectionLabels(lang);

    const contactItems = renderContactList(p, 'stack');
    const contactHtml = contactItems.length
        ? `<div class="text-[11.5px] text-slate-500 space-y-1 ${isLTR ? 'text-right' : 'text-left'} shrink-0">${contactItems.join('')}</div>`
        : '';

    let body = '';
    for (const sid of sections) {
        if (!sectionHasData(data, sid)) continue;
        const label = labels[sid] || sid;

        if (sid === 'about') {
            body += `<section class="mb-8 max-w-2xl">
                <p class="text-[12.5px] text-slate-700 leading-6">${esc(p.about)}</p>
            </section>`;
        } else if (sid === 'skills') {
            body += `<section class="mb-8 grid grid-cols-[126px_1fr] gap-5 items-start">
                <div class="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400 pt-1">${esc(label)}</div>
                <div class="flex flex-wrap gap-1.5">${renderSkillChips(data.skills, data.settings.color, 'colored')}</div>
            </section>`;
        } else if (sid === 'languages') {
            body += `<section class="mb-8 grid grid-cols-[126px_1fr] gap-5 items-start">
                <div class="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400 pt-1">${esc(label)}</div>
                <ul class="space-y-1.5 text-[12px]">${renderLanguages(data.languages)}</ul>
            </section>`;
        } else {
            body += `<section class="mb-8 grid grid-cols-[126px_1fr] gap-5 items-start">
                <div class="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400 pt-1">${esc(label)}</div>
                <div>${renderGridItems(data[sid] || [], c.hex, isLTR ? 'ltr' : 'rtl')}</div>
            </section>`;
        }
    }

    return `<div class="px-11 pt-12 pb-11 h-full min-h-[297mm] bg-white text-slate-900" dir="${isLTR ? 'ltr' : 'rtl'}">
        <div class="flex justify-between items-start gap-6 mb-9">
            <div class="max-w-[70%]">
                <div class="text-[10px] font-bold tracking-[0.18em] ${c.text} mb-2">${isLTR ? 'Clean & focused' : 'מבנה נקי וממוקד'}</div>
                <h1 class="text-[36px] font-display font-black leading-none tracking-tight text-slate-900">${esc(p.name) || 'השם שלך'}</h1>
                <p class="text-[12px] font-semibold tracking-[0.06em] mt-2 ${c.text}">${esc(p.title) || 'כותרת מקצועית'}</p>
            </div>
            ${contactHtml}
        </div>
        ${body}
    </div>
    ${renderWatermark(data.settings.watermark, lang)}`;
}
