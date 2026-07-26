function sigApp() {
    return {
        name: '', title: '', company: '', phone: '', email: '', website: '',
        photo: '',
        social: { linkedin:'', twitter:'', instagram:'', facebook:'', tiktok:'', youtube:'', whatsapp:'' },
        showSocial: false,
        color: '#4338ca',
        template: 'card',
        dir: 'rtl',
        copied: false,

        colors: ['#4338ca','#0f766e','#be123c','#047857','#b45309','#334155','#7c3aed','#0369a1'],

        templates: [
            { id:'card', he:'כרטיס', en:'Card' },
            { id:'professional', he:'מקצועי', en:'Professional' },
            { id:'minimal', he:'מינימלי', en:'Minimal' },
            { id:'banner', he:'באנר', en:'Banner' }
        ],

        socialFields: [
            { key:'linkedin', label:'LinkedIn', placeholder:'https://linkedin.com/in/...' },
            { key:'twitter', label:'Twitter / X', placeholder:'https://x.com/...' },
            { key:'instagram', label:'Instagram', placeholder:'https://instagram.com/...' },
            { key:'facebook', label:'Facebook', placeholder:'https://facebook.com/...' },
            { key:'tiktok', label:'TikTok', placeholder:'https://tiktok.com/@...' },
            { key:'youtube', label:'YouTube', placeholder:'https://youtube.com/@...' },
            { key:'whatsapp', label:'WhatsApp', placeholder:'https://wa.me/...' }
        ],

        demos: [
            { name:'Sarah Chen', title:'Product Manager', company:'TechFlow', phone:'+1-415-555-0142', email:'sarah@techflow.io', website:'https://techflow.io', dir:'ltr', template:'card', color:'#4338ca', social:{ linkedin:'https://linkedin.com/in/sarachen', twitter:'https://x.com/sarachen' } },
            { name:'Alex Rivera', title:'UX Designer', company:'PixelCraft Studio', phone:'+1-310-555-0198', email:'alex@pixelcraft.co', website:'https://pixelcraft.co', dir:'ltr', template:'professional', color:'#0f766e', social:{ linkedin:'https://linkedin.com/in/alexrivera', instagram:'https://instagram.com/alexdesigns' } },
            { name:'James Park', title:'Software Engineer', company:'CloudBase', phone:'+1-650-555-0167', email:'james@cloudbase.dev', website:'https://cloudbase.dev', dir:'ltr', template:'minimal', color:'#334155', social:{ linkedin:'https://linkedin.com/in/jamespark', twitter:'https://x.com/jpark_dev' } },
            { name:'Emma Watson', title:'Marketing Director', company:'BrandSpark', phone:'+44-20-5555-0123', email:'emma@brandspark.co.uk', website:'https://brandspark.co.uk', dir:'ltr', template:'banner', color:'#be123c', social:{ linkedin:'https://linkedin.com/in/emmawatson', facebook:'https://facebook.com/brandspark', instagram:'https://instagram.com/brandspark' } },
            { name:'David Kim', title:'Data Scientist', company:'NeuralPath AI', phone:'+1-206-555-0189', email:'david@neuralpath.ai', website:'https://neuralpath.ai', dir:'ltr', template:'card', color:'#7c3aed', social:{ linkedin:'https://linkedin.com/in/davidkim', twitter:'https://x.com/dkim_ai' } },
            { name:'Lisa Thompson', title:'Sales Executive', company:'GrowthEngine', phone:'+1-212-555-0156', email:'lisa@growthengine.com', website:'https://growthengine.com', dir:'ltr', template:'professional', color:'#047857', social:{ linkedin:'https://linkedin.com/in/lisathompson', whatsapp:'https://wa.me/12125550156' } },
            { name:'Michael Torres', title:'Architect', company:'UrbanForm Studio', phone:'+1-312-555-0134', email:'michael@urbanform.com', website:'https://urbanform.com', dir:'ltr', template:'banner', color:'#b45309', social:{ linkedin:'https://linkedin.com/in/michaeltorres', instagram:'https://instagram.com/urbanform' } },
            { name:'Nina Patel', title:'Content Creator', company:'StoryWave Media', phone:'+1-323-555-0178', email:'nina@storywave.io', website:'https://storywave.io', dir:'ltr', template:'card', color:'#0369a1', social:{ youtube:'https://youtube.com/@ninapatel', tiktok:'https://tiktok.com/@ninapatel', instagram:'https://instagram.com/ninapatel' } },
            { name:'רונית כהן', title:'מנהלת מוצר', company:'טכנולוגיות אלפא', phone:'054-555-1234', email:'ronit@alpha-tech.co.il', website:'https://alpha-tech.co.il', dir:'rtl', template:'card', color:'#4338ca', social:{ linkedin:'https://linkedin.com/in/ronitcohen' } },
            { name:'אבי לוי', title:'עורך דין', company:'לוי ושות׳ עורכי דין', phone:'03-555-6789', email:'avi@levy-law.co.il', website:'https://levy-law.co.il', dir:'rtl', template:'professional', color:'#334155', social:{ linkedin:'https://linkedin.com/in/avilevy', facebook:'https://facebook.com/levylaw' } },
            { name:'מיכל ברק', title:'יועצת שיווק', company:'דיגיטל פלוס', phone:'052-555-4567', email:'michal@digitalplus.co.il', website:'https://digitalplus.co.il', dir:'rtl', template:'banner', color:'#be123c', social:{ linkedin:'https://linkedin.com/in/michalb', instagram:'https://instagram.com/digitalplus' } },
            { name:'דן שפירא', title:'מהנדס תוכנה', company:'קוד מאסטרס', phone:'050-555-8901', email:'dan@codemasters.co.il', website:'https://codemasters.co.il', dir:'rtl', template:'minimal', color:'#0f766e', social:{ linkedin:'https://linkedin.com/in/danshapira', twitter:'https://x.com/danshap' } }
        ],

        init() {
            const fields = ['name','title','company','phone','email','website','photo','color','template','dir',
                'social.linkedin','social.twitter','social.instagram','social.facebook','social.tiktok','social.youtube','social.whatsapp'];
            fields.forEach(f => this.$watch(f, () => this.updatePreview()));
            this.$nextTick(() => {
                this.loadDemo('רונית כהן');
            });
        },

        _font() {
            return this.dir === 'rtl' ? "'Heebo', Arial, sans-serif" : "'Inter', Arial, sans-serif";
        },

        _icon(type, color, size) {
            size = size || 12;
            const icons = {
                phone: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.66.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.66 1 1 0 01-.24 1.01l-2.23 2.12z"/></svg>`,
                email: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
                web: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1a2 2 0 002 2v1.93zm6.9-2.54A2 2 0 0016 16h-1v-3a1 1 0 00-1-1H8v-2h2a1 1 0 001-1V7h2a2 2 0 002-2v-.41a8.002 8.002 0 013.9 12.8z"/></svg>`,
                linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
                twitter: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
                instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>`,
                facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
                tiktok: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
                youtube: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
                whatsapp: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>`
            };
            return icons[type] || '';
        },

        _hasSocials() { return Object.values(this.social).some(v => v && v.trim()); },
        _socialList() { return Object.entries(this.social).filter(([k,v]) => v && v.trim()); },
        _contactItems() {
            const items = [];
            if (this.phone) items.push({ type:'phone', value:this.phone, href:'tel:'+this.phone.replace(/\s/g,'') });
            if (this.email) items.push({ type:'email', value:this.email, href:'mailto:'+this.email });
            if (this.website) items.push({ type:'web', value:this.website.replace(/^https?:\/\//,''), href:this.website });
            return items;
        },
        _borderSide() { return this.dir === 'rtl' ? 'border-right' : 'border-left'; },
        _gradDir() { return this.dir === 'rtl' ? 'to left' : 'to right'; },
        _textAlign() { return this.dir === 'rtl' ? 'right' : 'left'; },

        _photoCell(size, border) {
            if (!this.photo) return '';
            const borderStyle = border ? `border:2px solid ${border};` : '';
            const pad = this.dir === 'rtl' ? 'padding-left:14px;' : 'padding-right:14px;';
            return `<td style="vertical-align:top;${pad}width:${size+4}px;"><img src="${this.photo}" width="${size}" height="${size}" style="width:${size}px;height:${size}px;border-radius:50%;object-fit:cover;display:block;${borderStyle}" alt=""></td>`;
        },

        _socialRow(iconSize, color) {
            if (!this._hasSocials()) return '';
            iconSize = iconSize || 18;
            color = color || this.color;
            let cells = '';
            this._socialList().forEach(([key, url]) => {
                cells += `<td style="padding:0 4px;"><a href="${url}" target="_blank" style="text-decoration:none;display:inline-block;line-height:0;">${this._icon(key, color, iconSize)}</a></td>`;
            });
            return `<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;"><tr>${cells}</tr></table>`;
        },

        renderCard() {
            const c = this.color, items = this._contactItems(), font = this._font(), align = this._textAlign();
            let contactCells = '';
            items.forEach((item, i) => {
                if (i > 0) contactCells += `<td style="padding:0 6px;color:#ccc;font-size:11px;line-height:1;">&middot;</td>`;
                contactCells += `<td style="padding:0;white-space:nowrap;"><a href="${item.href}" style="color:#555;text-decoration:none;font-size:12px;font-family:${font};line-height:1.4;"><span style="display:inline-block;vertical-align:middle;margin-${this.dir==='rtl'?'left':'right'}:4px;">${this._icon(item.type, c, 12)}</span><span style="vertical-align:middle;">${item.value}</span></a></td>`;
            });
            const photoTd = this._photoCell(56);
            return `<table cellpadding="0" cellspacing="0" border="0" dir="${this.dir}" style="border-collapse:collapse;font-family:${font};max-width:500px;background:linear-gradient(135deg,rgba(${this._hexToRgb(c)},0.063),rgba(${this._hexToRgb(c)},0.025));${this._borderSide()}:3px solid ${c};border-radius:12px;padding:16px 20px;"><tr>${photoTd}<td style="vertical-align:top;text-align:${align};"><div style="font-size:18px;font-weight:bold;color:${c};font-family:${font};line-height:1.3;">${this.name || '&nbsp;'}</div>${this.title ? `<div style="font-size:14px;color:${c};opacity:0.8;font-family:${font};line-height:1.4;">${this.title}</div>` : ''}${this.company ? `<div style="font-size:13px;color:#888;font-family:${font};line-height:1.4;">${this.company}</div>` : ''}</td></tr>${items.length ? `<tr><td colspan="2" style="padding-top:10px;padding-bottom:10px;"><div style="height:1px;background:linear-gradient(${this._gradDir()},${c},transparent);"></div></td></tr><tr><td colspan="2" style="text-align:${align};"><table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;"><tr>${contactCells}</tr></table></td></tr>` : ''}${this._hasSocials() ? `<tr><td colspan="2" style="padding-top:10px;text-align:${align};">${this._socialRow(18, c)}</td></tr>` : ''}</table>`;
        },

        renderProfessional() {
            const c = this.color, items = this._contactItems(), font = this._font(), align = this._textAlign();
            let contactRows = '';
            items.forEach(item => {
                contactRows += `<tr><td style="padding:2px 0;white-space:nowrap;"><a href="${item.href}" style="color:#555;text-decoration:none;font-size:13px;font-family:${font};line-height:1.6;"><span style="display:inline-block;vertical-align:middle;margin-${this.dir==='rtl'?'left':'right'}:6px;">${this._icon(item.type, '#888', 13)}</span><span style="vertical-align:middle;">${item.value}</span></a></td></tr>`;
            });
            const photoTd = this._photoCell(50);
            return `<table cellpadding="0" cellspacing="0" border="0" dir="${this.dir}" style="border-collapse:collapse;font-family:${font};max-width:480px;${this._borderSide()}:3px solid ${c};padding:12px 18px;"><tr>${photoTd}<td style="vertical-align:top;text-align:${align};"><div style="font-size:16px;font-weight:bold;color:#1f2933;font-family:${font};line-height:1.3;">${this.name || '&nbsp;'}</div>${this.title ? `<div style="font-size:13px;font-weight:600;color:${c};font-family:${font};line-height:1.4;">${this.title}</div>` : ''}${this.company ? `<div style="font-size:12px;color:#6b7280;font-family:${font};line-height:1.4;">${this.company}</div>` : ''}</td></tr>${items.length ? `<tr><td colspan="2" style="padding-top:10px;text-align:${align};"><table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">${contactRows}</table></td></tr>` : ''}${this._hasSocials() ? `<tr><td colspan="2" style="padding-top:10px;text-align:${align};">${this._socialRow(16, c)}</td></tr>` : ''}</table>`;
        },

        renderMinimal() {
            const c = this.color, items = this._contactItems(), font = this._font(), align = this._textAlign();
            let contactLine = items.map(item => `<a href="${item.href}" style="color:#555;text-decoration:none;font-size:12px;font-family:${font};">${item.value}</a>`).join(`<span style="color:#ccc;padding:0 6px;">|</span>`);
            const titleCompany = [this.title, this.company].filter(Boolean).join(' &middot; ');
            return `<table cellpadding="0" cellspacing="0" border="0" dir="${this.dir}" style="border-collapse:collapse;font-family:${font};max-width:460px;"><tr><td style="text-align:${align};"><div style="font-size:15px;font-weight:bold;color:#1f2933;font-family:${font};line-height:1.3;">${this.name || '&nbsp;'}</div>${titleCompany ? `<div style="font-size:13px;color:${c};font-family:${font};line-height:1.5;">${titleCompany}</div>` : ''}</td></tr><tr><td style="padding:8px 0;"><div style="width:40px;height:2px;background:${c};"></div></td></tr>${contactLine ? `<tr><td style="text-align:${align};line-height:1.6;">${contactLine}</td></tr>` : ''}${this._hasSocials() ? `<tr><td style="padding-top:8px;text-align:${align};">${this._socialRow(16, c)}</td></tr>` : ''}</table>`;
        },

        renderBanner() {
            const c = this.color, items = this._contactItems(), font = this._font(), align = this._textAlign();
            const titleCompany = [this.title, this.company].filter(Boolean).join(' &middot; ');
            let contactCells = '';
            items.forEach((item, i) => {
                if (i > 0) contactCells += `<td style="padding:0 6px;color:#ccc;font-size:11px;">&middot;</td>`;
                contactCells += `<td style="padding:0;white-space:nowrap;"><a href="${item.href}" style="color:#555;text-decoration:none;font-size:12px;font-family:${font};line-height:1.4;"><span style="display:inline-block;vertical-align:middle;margin-${this.dir==='rtl'?'left':'right'}:4px;">${this._icon(item.type, '#888', 12)}</span><span style="vertical-align:middle;">${item.value}</span></a></td>`;
            });
            const photoHtml = this.photo ? `<td style="vertical-align:middle;${this.dir==='rtl'?'padding-left':'padding-right'}:14px;width:48px;"><img src="${this.photo}" width="44" height="44" style="width:44px;height:44px;border-radius:50%;object-fit:cover;display:block;border:2px solid rgba(255,255,255,0.7);" alt=""></td>` : '';
            return `<table cellpadding="0" cellspacing="0" border="0" dir="${this.dir}" style="border-collapse:collapse;font-family:${font};max-width:500px;border-radius:10px;overflow:hidden;"><tr><td style="background:${c};padding:14px 18px;border-radius:10px 10px 0 0;"><table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;width:100%;"><tr>${photoHtml}<td style="vertical-align:middle;text-align:${align};"><div style="font-size:16px;font-weight:bold;color:#ffffff;font-family:${font};line-height:1.3;">${this.name || '&nbsp;'}</div>${titleCompany ? `<div style="font-size:13px;color:rgba(255,255,255,0.85);font-family:${font};line-height:1.4;">${titleCompany}</div>` : ''}</td></tr></table></td></tr>${items.length ? `<tr><td style="background:#f9fafb;padding:10px 18px;border:1px solid #e5e7eb;border-top:none;"><table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;"><tr>${contactCells}</tr></table></td></tr>` : ''}${this._hasSocials() ? `<tr><td style="background:#f9fafb;padding:8px 18px 10px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 10px 10px;text-align:${align};">${this._socialRow(16, c)}</td></tr>` : ''}</table>`;
        },

        renderSignature() {
            switch (this.template) {
                case 'professional': return this.renderProfessional();
                case 'minimal': return this.renderMinimal();
                case 'banner': return this.renderBanner();
                default: return this.renderCard();
            }
        },

        updatePreview() {
            const iframe = document.getElementById('sig-iframe');
            if (!iframe) return;
            const doc = iframe.contentDocument || iframe.contentWindow.document;
            const html = this.renderSignature();
            doc.open();
            doc.write(`<!DOCTYPE html><html dir="${this.dir}"><head><meta charset="UTF-8"><style>body { margin: 0; padding: 8px; font-family: ${this._font()}; background: #fff; } * { box-sizing: border-box; }</style></head><body>${html}</body></html>`);
            doc.close();
            this.$nextTick(() => {
                try { iframe.style.height = (doc.body.scrollHeight + 10) + 'px'; } catch(e) {}
            });
        },

        handlePhoto(e) {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (ev) => { this.photo = ev.target.result; };
            reader.readAsDataURL(file);
        },

        loadDemo(demoName) {
            const d = this.demos.find(x => x.name === demoName);
            if (!d) return;
            this.name = d.name;
            this.title = d.title;
            this.company = d.company;
            this.phone = d.phone;
            this.email = d.email;
            this.website = d.website;
            this.dir = d.dir;
            this.template = d.template;
            this.color = d.color;
            this.photo = '';
            Object.keys(this.social).forEach(k => this.social[k] = '');
            if (d.social) Object.entries(d.social).forEach(([k,v]) => { this.social[k] = v; });
            this.$nextTick(() => this.updatePreview());
        },

        async copySignature() {
            const html = this.renderSignature();
            try {
                await navigator.clipboard.write([
                    new ClipboardItem({
                        'text/html': new Blob([html], { type: 'text/html' }),
                        'text/plain': new Blob([this.name + ' - ' + this.title], { type: 'text/plain' })
                    })
                ]);
            } catch(e) {
                const div = document.createElement('div');
                div.innerHTML = html;
                div.style.position = 'fixed';
                div.style.left = '-9999px';
                document.body.appendChild(div);
                const range = document.createRange();
                range.selectNodeContents(div);
                const sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
                document.execCommand('copy');
                document.body.removeChild(div);
            }
            this.copied = true;
            setTimeout(() => { this.copied = false; }, 2000);
        },

        downloadSignature() {
            const html = this.renderSignature();
            const fullDoc = `<!DOCTYPE html><html dir="${this.dir}"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Email Signature</title></head><body style="margin:0;padding:20px;font-family:${this._font()};background:#fff;">${html}</body></html>`;
            const blob = new Blob([fullDoc], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'email-signature.html';
            a.click();
            URL.revokeObjectURL(url);
        },

        _hexToRgb(hex) {
            hex = hex.replace('#', '');
            const r = parseInt(hex.substring(0, 2), 16);
            const g = parseInt(hex.substring(2, 4), 16);
            const b = parseInt(hex.substring(4, 6), 16);
            return `${r},${g},${b}`;
        }
    };
}
