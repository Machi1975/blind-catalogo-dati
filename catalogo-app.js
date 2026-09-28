/* BLIND - catalogo store.blindgroup.net - v1.0
   Caricato da una pagina GHL con:
   <div id="blind-catalogo"></div><script src="https://cdn.jsdelivr.net/gh/Machi1975/blind-catalogo-dati@main/catalogo-app.js"></script> */
(function(){
  "use strict";
  if (window.__blindCatalogo) return; window.__blindCatalogo = '1.0';
  var CUR = document.currentScript;
  var CSS = ":host{display:block;all:initial}\n.bc-app button,.bc-app input,.bc-app select,.bc-app textarea{font:inherit}\n\n:host{\n  --bg:#FAFAF7; --surface:#FFFFFF; --surface-2:#F3F3EF;\n  --ink:#1D1D1C; --ink-2:#3C3C3B; --muted:#6B6B73;\n  --border:#E6E6EC; --border-strong:#D3D3DB;\n  --y:#FFCC00; --green:#007A44; --green-bg:#E6F4EC;\n  --orange:#FF9900; --red:#CC2200; --red-bg:#FBE9E5;\n  --focus:#3C3C3B;\n  --r:10px;\n  --mono:\"Fira Code\",\"SFMono-Regular\",Consolas,\"Liberation Mono\",monospace;\n  --sans:\"Instrument Sans\",\"Helvetica Neue\",Arial,sans-serif;\n}\n\n\n*{box-sizing:border-box}\n.bc-app{background:var(--bg);color:var(--ink);font-family:var(--sans);\n  -webkit-font-smoothing:antialiased;line-height:1.45}\n.wrap{max-width:1180px;margin:0 auto;padding-inline:16px}\n\n/* ---------- testata ---------- */\n.top{position:sticky;top:env(safe-area-inset-top,0px);z-index:20;\n  background:var(--bg);border-bottom:1px solid var(--border)}\n.top .wrap{padding-block:12px}\n.brand{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin-bottom:10px}\n.brand .mark{font-weight:700;letter-spacing:.14em;font-size:13px;text-transform:uppercase;\n  background:var(--y);color:#1D1D1C;padding:3px 8px;border-radius:4px}\n.brand .sub{font-size:12.5px;color:var(--muted)}\n.brand .proto{font-family:var(--mono);font-size:11px;color:var(--muted);\n  border:1px solid var(--border-strong);border-radius:4px;padding:1px 6px}\n\n.searchrow{display:flex;gap:8px;align-items:stretch}\n.searchbox{position:relative;flex:1 1 auto;min-width:0}\n.searchbox svg{position:absolute;left:12px;top:50%;transform:translateY(-50%);\n  width:17px;height:17px;stroke:var(--muted);fill:none;stroke-width:2}\n#q{width:100%;font-family:var(--sans);font-size:16px;color:var(--ink);\n  background:var(--surface);border:1px solid var(--border-strong);border-radius:var(--r);\n  padding:11px 12px 11px 37px;outline:none}\n#q::placeholder{color:var(--muted)}\n#q:focus{border-color:var(--focus);box-shadow:0 0 0 3px color-mix(in srgb,var(--y) 45%,transparent)}\n.clearbtn{border:1px solid var(--border-strong);background:var(--surface);color:var(--muted);\n  border-radius:var(--r);padding:0 13px;font-size:13px;font-family:var(--sans);cursor:pointer}\n.clearbtn:hover{color:var(--ink);border-color:var(--focus)}\n\n.status{display:flex;gap:6px 14px;align-items:baseline;flex-wrap:wrap;\n  margin-top:9px;font-size:13px;color:var(--muted)}\n.status b{color:var(--ink);font-weight:600;font-variant-numeric:tabular-nums}\n.pill{font-family:var(--mono);font-size:11px;padding:2px 7px;border-radius:99px;\n  border:1px solid var(--border-strong);color:var(--muted)}\n.pill.ok{color:var(--green);border-color:color-mix(in srgb,var(--green) 40%,transparent);\n  background:var(--green-bg)}\n\n/* ---------- filtri ---------- */\n.filters{border-bottom:1px solid var(--border);background:var(--surface-2)}\n.filters .wrap{padding-block:10px;display:flex;gap:8px;flex-wrap:wrap;align-items:center}\n.fld{display:flex;align-items:center;gap:6px}\n.fld label{font-size:11px;letter-spacing:.07em;text-transform:uppercase;color:var(--muted);font-weight:600}\nselect{font-family:var(--sans);font-size:13px;color:var(--ink);background:var(--surface);\n  border:1px solid var(--border-strong);border-radius:7px;padding:6px 8px;max-width:230px;outline:none}\nselect:focus{border-color:var(--focus)}\n.chk{display:flex;align-items:center;gap:6px;font-size:13px;color:var(--ink-2);cursor:pointer;\n  border:1px solid var(--border-strong);background:var(--surface);border-radius:7px;padding:6px 10px}\n.chk input{accent-color:var(--green);margin:0}\n.reset{margin-left:auto;background:none;border:none;color:var(--muted);font-size:12.5px;\n  font-family:var(--sans);cursor:pointer;text-decoration:underline;text-underline-offset:3px}\n.reset:hover{color:var(--ink)}\n\n/* ---------- griglia ---------- */\nmain{padding-block:18px 40px}\n.grid{display:grid;gap:11px;grid-template-columns:repeat(auto-fill,minmax(258px,1fr))}\n.card{display:flex;flex-direction:column;gap:7px;min-width:0;\n  background:var(--surface);border:1px solid var(--border);border-radius:var(--r);\n  padding:13px 13px 12px;text-decoration:none;color:inherit;\n  transition:border-color .12s,transform .12s}\n.card:hover{border-color:var(--border-strong);transform:translateY(-1px)}\n.card:focus-visible{outline:2px solid var(--focus);outline-offset:2px}\n.chead{display:flex;justify-content:space-between;align-items:center;gap:8px}\n.sku{font-family:var(--mono);font-size:12px;font-weight:500;color:var(--ink-2);letter-spacing:.01em}\n.stock{font-family:var(--mono);font-size:10.5px;color:var(--green);background:var(--green-bg);\n  border-radius:99px;padding:2px 7px;white-space:nowrap}\n.cat{font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);\n  font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.name{font-size:13.5px;line-height:1.35;color:var(--ink);\n  display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}\n.prices{margin-top:auto;padding-top:8px;border-top:1px solid var(--border);\n  display:flex;align-items:baseline;gap:8px;flex-wrap:wrap;font-variant-numeric:tabular-nums}\n.pnow{font-size:16px;font-weight:700;letter-spacing:-.01em}\n.pwas{font-size:12px;color:var(--muted);text-decoration:line-through}\n.disc{margin-left:auto;font-family:var(--mono);font-size:11px;font-weight:500;\n  color:var(--red);background:var(--red-bg);border-radius:4px;padding:2px 6px}\n.narr{font-size:11.5px;color:var(--muted)}\n\n.more{display:block;width:100%;margin-top:18px;padding:12px;border-radius:var(--r);\n  border:1px dashed var(--border-strong);background:transparent;color:var(--ink-2);\n  font-family:var(--sans);font-size:13.5px;cursor:pointer}\n.more:hover{border-color:var(--focus);background:var(--surface)}\n.empty{border:1px solid var(--border);border-radius:var(--r);background:var(--surface);\n  padding:28px 20px;text-align:center}\n.empty h2{margin:0 0 6px;font-size:16px}\n.empty p{margin:0;color:var(--muted);font-size:13.5px}\n.note{margin-top:26px;padding-top:14px;border-top:1px solid var(--border);\n  font-size:12px;color:var(--muted);max-width:62ch}\n.note code{font-family:var(--mono);font-size:11.5px}\n@media (max-width:520px){\n  .grid{grid-template-columns:repeat(auto-fill,minmax(100%,1fr))}\n  .filters .wrap{display:grid;grid-template-columns:1fr 1fr;gap:8px}\n  .fld{flex-direction:column;align-items:stretch;gap:3px;min-width:0}\n  select{max-width:none;width:100%}\n  .chk{justify-content:center;font-size:12px}\n  .reset{grid-column:span 2;margin:0;justify-self:end}\n}\n@media (prefers-reduced-motion:reduce){*{transition:none!important}}\n\n/* v2: chip dei filtri attivi + evidenziazione termine */\n.chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:9px}\n.chips:empty{display:none}\n.chip{font-family:var(--sans);font-size:12px;color:var(--ink-2);background:var(--surface);\n  border:1px solid var(--border-strong);border-radius:99px;padding:3px 9px;cursor:pointer;\n  display:inline-flex;align-items:center;gap:6px}\n.chip span{color:var(--muted);font-size:13px;line-height:1}\n.chip:hover{border-color:var(--focus);color:var(--ink)}\nmark{background:color-mix(in srgb,var(--y) 55%,transparent);color:inherit;border-radius:2px;padding:0 1px}\n.sku mark{background:color-mix(in srgb,var(--y) 70%,transparent)}\n\n/* ===== v3: carrello / richiesta d'ordine ===== */\n.brand{justify-content:space-between}\n.brand .left{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}\n.cartbtn{display:inline-flex;align-items:center;gap:8px;font-family:var(--sans);font-size:13px;font-weight:600;\n  color:#1D1D1C;background:var(--y);border:none;border-radius:8px;padding:7px 12px;cursor:pointer}\n.cartbtn:focus-visible{outline:2px solid var(--focus);outline-offset:2px}\n.cartbtn .n{font-family:var(--mono);font-size:11px;background:#1D1D1C;color:var(--y);\n  border-radius:99px;padding:1px 7px;min-width:20px;text-align:center}\n.card{cursor:default}\n.card:hover{transform:none}\n.card .nlink{color:inherit;text-decoration:none}\n.card .nlink:hover .name{text-decoration:underline;text-underline-offset:3px}\n.card .nlink:focus-visible{outline:2px solid var(--focus);outline-offset:2px;border-radius:4px}\n.cfoot{display:flex;align-items:center;gap:8px;margin-top:2px}\n.addbtn{flex:1;font-family:var(--sans);font-size:12.5px;font-weight:600;color:var(--ink);\n  background:var(--surface-2);border:1px solid var(--border-strong);border-radius:7px;padding:7px 8px;cursor:pointer}\n.addbtn:hover{border-color:var(--focus)}\n.addbtn.in{background:var(--green-bg);color:var(--green);border-color:color-mix(in srgb,var(--green) 40%,transparent)}\n.golink{font-size:12px;color:var(--muted);text-decoration:none;white-space:nowrap}\n.golink:hover{color:var(--ink);text-decoration:underline}\n.bulkbar{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;\n  background:var(--surface);border:1px solid var(--border-strong);border-left:4px solid var(--y);\n  border-radius:var(--r);padding:11px 14px;margin-bottom:14px;font-size:13.5px}\n.bulkbar[hidden]{display:none}\n.bulkbar .missing{color:var(--red);font-family:var(--mono);font-size:12px}\n.primary{font-family:var(--sans);font-size:13px;font-weight:700;color:#1D1D1C;background:var(--y);\n  border:none;border-radius:8px;padding:9px 14px;cursor:pointer}\n.primary:disabled{opacity:.45;cursor:not-allowed}\n.ghost{font-family:var(--sans);font-size:13px;color:var(--ink-2);background:transparent;\n  border:1px solid var(--border-strong);border-radius:8px;padding:8px 12px;cursor:pointer}\n.overlay{position:fixed;inset:0;background:rgba(10,10,12,.45);z-index:2147482000}\n.drawer{position:fixed;top:0;right:0;bottom:0;width:min(460px,100%);z-index:2147482001;background:var(--bg);\n  border-left:1px solid var(--border);display:flex;flex-direction:column;\n  padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}\n.dhead{display:flex;justify-content:space-between;align-items:center;padding:14px 16px;border-bottom:1px solid var(--border)}\n.dhead h2{margin:0;font-size:15px}\n.dbody{flex:1;overflow:auto;padding:12px 16px}\n.dfoot{border-top:1px solid var(--border);padding:12px 16px;display:flex;flex-direction:column;gap:10px;background:var(--surface-2)}\n.line{display:grid;grid-template-columns:1fr auto;gap:4px 10px;padding:10px 0;border-bottom:1px solid var(--border)}\n.line .l1{font-family:var(--mono);font-size:11.5px;color:var(--ink-2)}\n.line .l2{font-size:13px;line-height:1.3;grid-column:1/-1}\n.line .l3{display:flex;align-items:center;gap:8px;grid-column:1/-1;font-variant-numeric:tabular-nums;font-size:12.5px}\n.qty{width:62px;font-family:var(--mono);font-size:13px;padding:4px 6px;border:1px solid var(--border-strong);\n  border-radius:6px;background:var(--surface);color:var(--ink)}\n.rm{margin-left:auto;background:none;border:none;color:var(--muted);font-size:12px;cursor:pointer;text-decoration:underline}\n.tot{display:flex;justify-content:space-between;font-size:14px;font-variant-numeric:tabular-nums}\n.tot b{font-size:17px}\n.fine{font-size:11.5px;color:var(--muted)}\n.form{display:grid;gap:9px}\n.form label{display:grid;gap:3px;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);font-weight:600}\n.form input,.form textarea{font-family:var(--sans);font-size:14px;text-transform:none;letter-spacing:0;color:var(--ink);\n  background:var(--surface);border:1px solid var(--border-strong);border-radius:7px;padding:8px 9px}\n.form textarea{min-height:64px;resize:vertical}\n.form .err{color:var(--red);font-size:12px;text-transform:none;letter-spacing:0;font-weight:500}\n.sim{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:12px;font-size:13px}\n.sim pre{font-family:var(--mono);font-size:11px;white-space:pre-wrap;word-break:break-word;max-height:260px;overflow:auto;\n  background:var(--surface-2);border-radius:6px;padding:8px;margin:8px 0 0}\n\n[hidden]{display:none!important}\n.bc-app{display:block;font-size:14px;text-align:left}\n::slotted(#blind-ts-box){display:block;margin:8px 0}\n";
  var HTML = "<header class=\"top\">\n  <div class=\"wrap\">\n    <div class=\"brand\">\n      <div class=\"left\">\n        <span class=\"mark\">BLIND</span>\n        <span class=\"sub\">Catalogo tecnico &mdash; ricerca su tutto l'assortimento</span>\n        \n      </div>\n      <button class=\"cartbtn\" id=\"cartbtn\" type=\"button\" aria-label=\"Apri la richiesta d'ordine\">\n        Richiesta d'ordine <span class=\"n\" id=\"cartn\">0</span></button>\n    </div>\n    <div class=\"searchrow\">\n      <div class=\"searchbox\">\n        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"11\" cy=\"11\" r=\"7\"></circle><path d=\"M20 20l-3.5-3.5\"></path></svg>\n        <input id=\"q\" type=\"search\" autocomplete=\"off\" spellcheck=\"false\" aria-label=\"Cerca nel catalogo\"\n               placeholder=\"Codice, marca o descrizione &mdash; oppure incolla un elenco di codici\">\n      </div>\n      <button class=\"clearbtn\" id=\"clear\" type=\"button\">Azzera</button>\n    </div>\n    <div class=\"status\">\n      <span id=\"count\"><b>&mdash;</b></span>\n      <span id=\"scope\" class=\"pill\">caricamento&hellip;</span>\n      <span id=\"stockinfo\" class=\"pill\"></span>\n    </div>\n    <div id=\"chips\" class=\"chips\"></div>\n  </div>\n</header>\n\n<div class=\"filters\">\n  <div class=\"wrap\">\n    <div class=\"fld\"><label for=\"area\">Area</label>\n      <select id=\"area\"><option value=\"\">Tutte</option></select></div>\n    <div class=\"fld\"><label for=\"cat\">Categoria</label>\n      <select id=\"cat\"><option value=\"\">Tutte</option></select></div>\n    <div class=\"fld\"><label for=\"sort\">Ordina</label>\n      <select id=\"sort\">\n        <option value=\"rel\">Rilevanza</option>\n        <option value=\"disc\">Sconto pi&ugrave; alto</option>\n        <option value=\"pasc\">Prezzo crescente</option>\n        <option value=\"pdesc\">Prezzo decrescente</option>\n        <option value=\"name\">Nome A&ndash;Z</option>\n      </select></div>\n    <div class=\"fld\"><label for=\"disc\">Sconto</label>\n      <select id=\"disc\"><option value=\"0\">Qualsiasi</option><option value=\"10\">&ge; 10%</option>\n        <option value=\"20\">&ge; 20%</option><option value=\"30\">&ge; 30%</option><option value=\"50\">&ge; 50%</option></select></div>\n    <div class=\"fld\"><label for=\"price\">Prezzo max</label>\n      <select id=\"price\"><option value=\"0\">Nessuno</option><option value=\"50\">50 &euro;</option>\n        <option value=\"200\">200 &euro;</option><option value=\"1000\">1.000 &euro;</option><option value=\"5000\">5.000 &euro;</option></select></div>\n    <div class=\"fld\"><label for=\"avail\">Disponibilit&agrave;</label>\n      <select id=\"avail\"><option value=\"\">Tutti</option><option value=\"stock\">A magazzino</option>\n        <option value=\"order\">Su ordinazione</option></select></div>\n    <label class=\"chk\"><input type=\"checkbox\" id=\"haspr\"> Solo con prezzo</label>\n    <button class=\"reset\" id=\"reset\" type=\"button\">Reimposta</button>\n  </div>\n</div>\n\n<main class=\"wrap\">\n  <div id=\"bulkbar\" class=\"bulkbar\" hidden></div>\n  <div id=\"grid\" class=\"grid\"></div>\n  <div id=\"emptybox\"></div>\n  <button id=\"more\" class=\"more\" hidden type=\"button\">Mostra altri risultati</button>\n  <p class=\"note\" id=\"note\">Prezzi IVA esclusa. L'invio &egrave; una <b>richiesta d'ordine</b>: nessun pagamento online, BLIND S.r.l. ti ricontatta con la conferma. Ogni scheda apre la pagina prodotto dello store.<br><br>Scorciatoie: <b>/</b> per cercare &middot; incolla pi&ugrave; codici articolo insieme per avere tutte le righe &middot; l'indirizzo della pagina conserva la ricerca, quindi &egrave; condivisibile.</p>\n</main>\n\n<div id=\"overlay\" class=\"overlay\" hidden></div>\n<aside id=\"drawer\" class=\"drawer\" hidden aria-label=\"Richiesta d'ordine\">\n  <div class=\"dhead\"><h2 id=\"dtitle\">Richiesta d'ordine</h2>\n    <button class=\"ghost\" id=\"dclose\" type=\"button\">Chiudi</button></div>\n  <div class=\"dbody\" id=\"dbody\"></div>\n  <div class=\"dfoot\" id=\"dfoot\"></div>\n</aside>\n";
  function blindApp(ROOT, HOST){
  "use strict";
  var PAGE = 60, TOT = 0;
  /* invio richieste: portiere Cloudflare + captcha Turnstile (se WORKER_URL \u00e8 vuoto la pagina resta in modalit\u00e0 prototipo) */
  var DATA_URL = 'https://cdn.jsdelivr.net/gh/Machi1975/blind-catalogo-dati@main/catalogo.json';
  var WORKER_URL = 'https://blind-richieste.massimiliano-borgno.workers.dev';                               /* es. https://blind-richieste.<account>.workers.dev */
  var TURNSTILE_SITEKEY = '0x4AAAAAAFEOc-y1TquuSK46'; /* chiave pubblica del widget "Catalogo Blind" */
  var TS_ID = null, TS_TOKEN = '';
  function loadTurnstile(cb){
    if(window.turnstile){ cb(); return; }
    var sc = document.createElement('script');
    sc.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    sc.async = true; sc.onload = cb; document.head.appendChild(sc);
  }
  function mountTurnstile(){
    if(!WORKER_URL) return;
    TS_TOKEN = ''; TS_ID = null;
    loadTurnstile(function(){
      if(!window.turnstile) return;
      var old = HOST.querySelector('#blind-ts-box'); if(old) old.parentNode.removeChild(old);
      var box = document.createElement('div'); box.id = 'blind-ts-box'; box.setAttribute('slot','ts'); HOST.appendChild(box);
      TS_ID = window.turnstile.render(box, {
        sitekey: TURNSTILE_SITEKEY, action: 'richiesta', language: 'it', theme: 'light',
        callback: function(t){ TS_TOKEN = t; var e=ROOT.getElementById('ts-box-e'); if(e) e.textContent=''; },
        'expired-callback': function(){ TS_TOKEN = ''; },
        'error-callback': function(){ TS_TOKEN = ''; }
      });
    });
  }
  var A = [], C = [], R = [], HAY = null, SC = null, ready = false;
  var res = [], shown = 0, curToks = [];

  var $ = function(id){ return ROOT.getElementById(id); };
  var grid=$('grid'), emptybox=$('emptybox'), moreBtn=$('more'), chips=$('chips');
  var qEl=$('q'), areaEl=$('area'), catEl=$('cat'), sortEl=$('sort'), discEl=$('disc'),
      priceEl=$('price'), availEl=$('avail'), hasprEl=$('haspr');

  var eur = new Intl.NumberFormat('it-IT',{style:'currency',currency:'EUR',minimumFractionDigits:2});
  var num = new Intl.NumberFormat('it-IT');
  function esc(s){ return String(s).replace(/[&<>"]/g,function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  function norm(s){ return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,''); }
  function slugify(n){
    n = norm(n).replace(/[^a-z0-9]+/g,'-').replace(/-+/g,'-').replace(/^-|-$/g,'');
    return n;
  }
  function href(r){
    var sl = r[7] || (slugify(r[1]) + '-' + r[0].toLowerCase());
    return 'https://store.blindgroup.net/product-details/product/' + sl;
  }
  function anomalo(p,d){ return p<=0 || d>=95; }

  /* evidenziazione del termine cercato */
  function mark(text){
    if(!curToks.length) return esc(text);
    var out = esc(text), n = norm(out);
    var hits = [];
    for(var i=0;i<curToks.length;i++){
      var t = curToks[i], from = 0, p;
      while((p = n.indexOf(t, from)) >= 0){ hits.push([p, p+t.length]); from = p + t.length; }
    }
    if(!hits.length) return out;
    hits.sort(function(a,b){ return a[0]-b[0]; });
    var merged = [hits[0]];
    for(var j=1;j<hits.length;j++){
      var last = merged[merged.length-1];
      if(hits[j][0] <= last[1]) last[1] = Math.max(last[1], hits[j][1]);
      else merged.push(hits[j]);
    }
    var r = '', pos = 0;
    for(var k=0;k<merged.length;k++){
      r += out.slice(pos, merged[k][0]) + '<mark>' + out.slice(merged[k][0], merged[k][1]) + '</mark>';
      pos = merged[k][1];
    }
    return r + out.slice(pos);
  }

  function cardHTML(r, idx){
    var sku=r[0], name=r[1], price=r[2], cmp=r[3], disc=r[4], ci=r[6], qty=r[8];
    var u = esc(href(r)), inCart = !!CART[sku];
    var h = '<div class="card">';
    h += '<div class="chead"><span class="sku">'+mark(sku)+'</span>';
    h += qty>0 ? '<span class="stock">Disponibile a magazzino</span>' : '';
    h += '</div>';
    var cat = ci>=0 ? C[ci] : '';
    h += '<div class="cat" title="'+esc(cat)+'">'+esc(cat||'\u2014')+'</div>';
    h += '<a class="nlink" href="'+u+'" target="_blank" rel="noopener"><div class="name">'+mark(name)+'</div></a>';
    h += '<div class="prices">';
    if(price>0){
      h += '<span class="pnow">'+eur.format(price)+'</span>';
      if(cmp>price && disc<95) h += '<span class="pwas">'+eur.format(cmp)+'</span>';
      if(disc>0 && disc<95)    h += '<span class="disc">\u2212'+disc+'%</span>';
    } else {
      h += '<span class="narr">prezzo su richiesta</span>';
    }
    h += '</div>';
    h += '<div class="cfoot"><button type="button" class="addbtn'+(inCart?' in':'')+'" data-i="'+idx+'">'+
         (inCart ? '\u2713 In richiesta ('+CART[sku].q+')' : '+ Aggiungi alla richiesta')+'</button>'+
         '<a class="golink" href="'+u+'" target="_blank" rel="noopener">Scheda \u203a</a></div>';
    h += '</div>';
    return h;
  }

  /* ---------- stato leggibile nell'indirizzo ---------- */
  function readHash(){
    var p = new URLSearchParams(location.hash.replace(/^#/,''));
    if(p.get('q'))     qEl.value = p.get('q');
    if(p.get('area'))  areaEl.value = p.get('area');
    if(p.get('cat'))   catEl.value = p.get('cat');
    if(p.get('sort'))  sortEl.value = p.get('sort');
    if(p.get('disc'))  discEl.value = p.get('disc');
    if(p.get('price')) priceEl.value = p.get('price');
    if(p.get('avail')) availEl.value = p.get('avail');
    if(p.get('pr'))    hasprEl.checked = true;
  }
  function writeHash(f){
    var p = new URLSearchParams();
    if(f.q) p.set('q', f.q);
    if(areaEl.value) p.set('area', areaEl.value);
    if(catEl.value) p.set('cat', catEl.value);
    if(sortEl.value!=='rel') p.set('sort', sortEl.value);
    if(f.disc) p.set('disc', f.disc);
    if(f.price) p.set('price', f.price);
    if(f.avail) p.set('avail', f.avail);
    if(f.haspr) p.set('pr','1');
    var s = p.toString();
    history.replaceState(null,'', s ? location.pathname+location.search+'#'+s : location.pathname+location.search);
  }

  function filters(){
    return { q: qEl.value.trim(),
      area: areaEl.value==='' ? -1 : parseInt(areaEl.value,10),
      cat:  catEl.value==='' ? -1 : parseInt(catEl.value,10),
      disc: parseInt(discEl.value,10)||0,
      price: parseFloat(priceEl.value)||0,
      avail: availEl.value, haspr: hasprEl.checked, sort: sortEl.value };
  }

  /* ricerca multi-codice: due o piu codici articolo separati da spazi, virgole o a capo */
  var SKURX = /^[a-z]\d{6,9}$/;
  function codeList(q){
    var parts = q.split(/[\s,;\n\r\t]+/).filter(Boolean).map(function(s){return s.toLowerCase();});
    if(parts.length < 2) return null;
    var ok = parts.filter(function(s){ return SKURX.test(s); });
    return ok.length >= 2 && ok.length === parts.length ? ok : null;
  }

  function buildHay(){
    HAY = new Array(R.length); SC = new Int32Array(R.length);
    for(var i=0;i<R.length;i++) HAY[i] = norm(R[i][0]+' '+R[i][1]);
  }
  function eff(i){ var r=R[i]; return anomalo(r[2],r[4]) ? -1 : r[4]; }
  function pos(i){ var r=R[i]; return r[2]>0 ? r[2] : Infinity; }
  function vet(i){
    var r=R[i], s=0;
    if(anomalo(r[2],r[4])) return -1000;
    s += Math.min(r[4],70)*3;
    if(r[8]>0) s+=120;
    if(r[2]>=20) s+=40;
    return s;
  }

  function compute(){
    var f = filters(), out = [];
    var codes = f.q ? codeList(f.q) : null;
    var toks = (!codes && f.q) ? norm(f.q).split(/\s+/).filter(Boolean) : [];
    curToks = codes ? codes.slice() : toks.slice();
    var nq = norm(f.q), codeSet = codes ? Object.create(null) : null;
    if(codes) for(var c=0;c<codes.length;c++) codeSet[codes[c]] = 1;

    for(var i=0;i<R.length;i++){
      var r = R[i];
      if(f.area>=0 && r[5]!==f.area) continue;
      if(f.cat>=0 && r[6]!==f.cat) continue;
      if(f.avail==='stock' && !(r[8]>0)) continue;
      if(f.avail==='order' && r[8]>0) continue;
      if(f.haspr && anomalo(r[2],r[4])) continue;
      if(f.disc && r[4]<f.disc) continue;
      if(f.price && r[2]>f.price) continue;
      if(codes){
        if(!codeSet[r[0].toLowerCase()]) continue;
        SC[i] = 1000;
      } else if(toks.length){
        var h = HAY[i], ok = true, s = 0;
        for(var t=0;t<toks.length;t++){
          var p = h.indexOf(toks[t]);
          if(p<0){ ok=false; break; }
          s += p===0 ? 220 : (p<30 ? 70 : 15);
        }
        if(!ok) continue;
        if(h.indexOf(nq)===0) s += 400;
        if(norm(r[0])===nq) s += 5000;
        SC[i] = s;
      }
      out.push(i);
    }
    var sort = f.sort;
    if(sort==='rel' && !toks.length && !codes) sort = 'vetrina';
    if(sort==='rel')          out.sort(function(a,b){ return (SC[b]-SC[a]) || (eff(b)-eff(a)); });
    else if(sort==='vetrina') out.sort(function(a,b){ return vet(b)-vet(a); });
    else if(sort==='disc')    out.sort(function(a,b){ return (eff(b)-eff(a)) || (R[b][2]-R[a][2]); });
    else if(sort==='pasc')    out.sort(function(a,b){ return pos(a)-pos(b); });
    else if(sort==='pdesc')   out.sort(function(a,b){ return R[b][2]-R[a][2]; });
    else if(sort==='name')    out.sort(function(a,b){ return R[a][1] < R[b][1] ? -1 : 1; });

    res = out; shown = 0;
    paint(true);
    label(f, out.length, codes);
    bulkBar(codes, out);
    drawChips(f);
    writeHash(f);
  }

  function paint(reset){
    var end = Math.min(shown+PAGE, res.length), h='';
    for(var i=shown;i<end;i++) h += cardHTML(R[res[i]], res[i]);
    if(reset) grid.innerHTML = h; else grid.insertAdjacentHTML('beforeend', h);
    shown = end;
    moreBtn.hidden = shown >= res.length;
    moreBtn.textContent = 'Mostra altri ' + Math.min(PAGE, res.length-shown) +
      ' (visualizzati ' + num.format(shown) + ' di ' + num.format(res.length) + ')';
    emptybox.innerHTML = res.length ? '' :
      '<div class="empty"><h2>Nessun articolo corrisponde</h2><p>La ricerca ha esaminato tutti i ' +
      num.format(TOT) + ' articoli in vetrina: non c\'&egrave; nulla nascosto in pagine successive. ' +
      'Prova con il solo codice articolo o con la marca.</p></div>';
  }

  function repaint(){
    var keep = Math.max(shown, Math.min(PAGE, res.length)), h='';
    for(var i=0;i<keep;i++) h += cardHTML(R[res[i]], res[i]);
    grid.innerHTML = h; shown = keep;
    moreBtn.hidden = shown >= res.length;
  }

  function label(f,n,codes){
    var s = '<b>'+num.format(n)+'</b> '+(n===1?'risultato':'risultati');
    if(codes) s += ' su ' + codes.length + ' codici incollati';
    else if(f.q) s += ' per &laquo;'+esc(f.q)+'&raquo;';
    $('count').innerHTML = s;
  }

  function drawChips(f){
    var out = [];
    function chip(lab,key){ out.push('<button class="chip" data-k="'+key+'">'+esc(lab)+' <span>\u00d7</span></button>'); }
    if(f.q) chip('\u00ab'+f.q+'\u00bb','q');
    if(f.area>=0) chip(A[f.area],'area');
    if(f.cat>=0) chip(C[f.cat],'cat');
    if(f.disc) chip('sconto \u2265 '+f.disc+'%','disc');
    if(f.price) chip('max '+f.price+' \u20ac','price');
    if(f.avail==='stock') chip('a magazzino','avail');
    if(f.avail==='order') chip('su ordinazione','avail');
    if(f.haspr) chip('solo con prezzo','haspr');
    chips.innerHTML = out.join('');
  }
  chips.addEventListener('click', function(e){
    var b = e.target.closest('.chip'); if(!b) return;
    var k = b.getAttribute('data-k');
    if(k==='q') qEl.value='';
    else if(k==='area'){ areaEl.value=''; fillCats(); }
    else if(k==='cat') catEl.value='';
    else if(k==='disc') discEl.value='0';
    else if(k==='price') priceEl.value='0';
    else if(k==='avail') availEl.value='';
    else if(k==='haspr') hasprEl.checked=false;
    compute();
  });

  /* categorie dipendenti dall'area */
  var catCount = null;
  function fillCats(){
    var a = areaEl.value==='' ? -1 : parseInt(areaEl.value,10);
    var keep = catEl.value;
    var list = [];
    for(var ci=0; ci<C.length; ci++){
      var n = catCount[a<0 ? 'all' : a] ? (catCount[a<0?'all':a][ci]||0) : 0;
      if(n>0) list.push([ci,n]);
    }
    list.sort(function(x,y){ return y[1]-x[1]; });
    var h = '<option value="">Tutte</option>';
    for(var i=0;i<list.length;i++) h += '<option value="'+list[i][0]+'">'+esc(C[list[i][0]])+' ('+num.format(list[i][1])+')</option>';
    catEl.innerHTML = h;
    if(keep && catEl.querySelector('option[value="'+keep+'"]')) catEl.value = keep;
  }


  /* ================= RICHIESTA D'ORDINE (carrello) ================= */
  var CART = {}, CKEY = 'blind-richiesta-v1';
  try { var saved = localStorage.getItem(CKEY); if(saved) CART = JSON.parse(saved) || {}; } catch(e){ CART = {}; }
  function saveCart(){ try{ localStorage.setItem(CKEY, JSON.stringify(CART)); }catch(e){} }
  function cartCount(){ return Object.keys(CART).length; }
  function addRow(i, q){
    var r = R[i]; if(!r) return;
    var k = r[0];
    if(CART[k]) CART[k].q += (q||1);
    else CART[k] = { q:(q||1), n:r[1], p:r[2], u:href(r) };
  }
  function refreshBadge(){ $('cartn').textContent = cartCount(); }

  var lastCodes = null, lastFound = [];
  function bulkBar(codes, out){
    var bb = $('bulkbar');
    if(!codes){ bb.hidden = true; bb.innerHTML=''; lastCodes=null; return; }
    lastCodes = codes; lastFound = out.slice();
    var found = {}; for(var j=0;j<out.length;j++) found[R[out[j]][0].toLowerCase()] = 1;
    var miss = codes.filter(function(c){ return !found[c]; });
    var h = '<span><b>'+out.length+'</b> codici trovati su '+codes.length;
    if(miss.length) h += ' \u00b7 non in vetrina: <span class="missing">'+esc(miss.map(function(x){return x.toUpperCase();}).join(', '))+'</span>';
    h += '</span>';
    if(out.length) h += '<button type="button" class="primary" id="addall">Aggiungi tutti alla richiesta</button>';
    bb.innerHTML = h; bb.hidden = false;
  }
  $('bulkbar').addEventListener('click', function(e){
    if(e.target && e.target.id==='addall'){
      for(var j=0;j<lastFound.length;j++) addRow(lastFound[j], 1);
      saveCart(); refreshBadge(); repaint(); openDrawer('cart');
    }
  });
  grid.addEventListener('click', function(e){
    var b = e.target.closest('.addbtn'); if(!b) return;
    addRow(parseInt(b.getAttribute('data-i'),10), 1);
    saveCart(); refreshBadge();
    var r = R[parseInt(b.getAttribute('data-i'),10)];
    b.classList.add('in'); b.textContent = '\u2713 In richiesta ('+CART[r[0]].q+')';
  });

  var drawer=$('drawer'), overlay=$('overlay'), dbody=$('dbody'), dfoot=$('dfoot'), lastFocus=null;
  function openDrawer(view){
    lastFocus = ROOT.activeElement;
    drawer.hidden = false; overlay.hidden = false;
    render(view||'cart');
    $('dclose').focus();
  }
  function closeDrawer(){
    drawer.hidden = true; overlay.hidden = true;
    repaint();
    if(lastFocus && lastFocus.focus) lastFocus.focus();
  }
  $('cartbtn').addEventListener('click', function(){ openDrawer('cart'); });
  $('dclose').addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', function(e){ if(e.key==='Escape' && !drawer.hidden) closeDrawer(); });

  function totals(){
    var t=0, nop=0, pcs=0;
    for(var k in CART){ var l=CART[k]; pcs+=l.q; if(l.p>0) t+=l.p*l.q; else nop++; }
    return {t:Math.round(t*100)/100, nop:nop, pcs:pcs};
  }

  function render(view){
    var keys = Object.keys(CART);
    if(view==='cart'){
      $('dtitle').textContent = "Richiesta d'ordine";
      if(!keys.length){
        dbody.innerHTML = '<div class="empty"><h2>Nessun articolo</h2><p>Aggiungi articoli dalle schede, oppure incolla un elenco di codici nella ricerca e usa \u00abAggiungi tutti\u00bb.</p></div>';
        dfoot.innerHTML = ''; return;
      }
      var h='';
      keys.forEach(function(k){
        var l=CART[k];
        h += '<div class="line" data-k="'+esc(k)+'"><span class="l1">'+esc(k)+'</span>'+
             '<span class="l1">'+(l.p>0?eur.format(l.p)+' cad.':'su richiesta')+'</span>'+
             '<span class="l2">'+esc(l.n)+'</span>'+
             '<span class="l3"><label>Q.t\u00e0 <input class="qty" type="number" min="1" step="1" value="'+l.q+'" aria-label="Quantit\u00e0 '+esc(k)+'"></label>'+
             '<b>'+(l.p>0?eur.format(l.p*l.q):'\u2014')+'</b>'+
             '<button type="button" class="rm">Rimuovi</button></span></div>';
      });
      dbody.innerHTML = h;
      var T = totals();
      dfoot.innerHTML = '<div class="tot"><span>'+keys.length+(keys.length===1?' riga':' righe')+' \u00b7 '+T.pcs+(T.pcs===1?' pezzo':' pezzi')+'</span><b>'+eur.format(T.t)+'</b></div>'+
        '<div class="fine">Importi IVA esclusa.'+(T.nop? ' '+T.nop+' righe senza prezzo pubblicato: il prezzo verr\u00e0 comunicato da BLIND.':'')+'</div>'+
        '<button type="button" class="primary" id="gocheck">Procedi: dati per la richiesta</button>'+
        '<button type="button" class="ghost" id="empty">Svuota</button>';
      return;
    }
    if(view==='form'){
      $('dtitle').textContent = 'Dati per la richiesta';
      var d = {}; try{ d = JSON.parse(localStorage.getItem('blind-cliente-v1')||'{}'); }catch(e){}
      function f(id,lab,type,req,val){
        return '<label for="'+id+'">'+lab+(req?' *':'')+
          (type==='area' ? '<textarea id="'+id+'">'+esc(val||'')+'</textarea>'
                         : '<input id="'+id+'" type="'+type+'" value="'+esc(val||'')+'" autocomplete="on">')+
          '<span class="err" id="'+id+'-e"></span></label>';
      }
      dbody.innerHTML = '<div class="form">'+
        f('f-rs','Ragione sociale / Studio','text',1,d.company)+
        f('f-iva','Partita IVA o codice fiscale','text',1,d.vat)+
        f('f-em','Email','email',1,d.email)+
        f('f-tel','Telefono','tel',0,d.phone)+
        f('f-ind','Indirizzo di consegna','area',0,d.address)+
        f('f-note','Note per BLIND','area',0,'')+
        /* campo trappola anti-bot: invisibile alle persone, i bot lo compilano */
        '<div aria-hidden="true" style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden">'+
        '<label for="f-web">Sito web</label><input id="f-web" type="text" tabindex="-1" autocomplete="off" value=""></div>'+
        (WORKER_URL ? '<slot name="ts"></slot><span class="err" id="ts-box-e"></span>' : '')+
        '<p class="fine">I campi con * sono obbligatori. Useremo l\'email per inviarti la conferma della richiesta.</p></div>';
      FORM_T0 = Date.now();
      mountTurnstile();
      dfoot.innerHTML = '<button type="button" class="primary" id="send">Invia richiesta d\'ordine</button>'+
        '<button type="button" class="ghost" id="back">\u2039 Torna alle righe</button>';
      return;
    }
  }

  dbody.addEventListener('change', function(e){
    if(!e.target.classList.contains('qty')) return;
    var k = e.target.closest('.line').getAttribute('data-k');
    var q = Math.max(1, parseInt(e.target.value,10)||1);
    CART[k].q = q; saveCart(); refreshBadge(); render('cart');
  });
  dbody.addEventListener('click', function(e){
    if(!e.target.classList.contains('rm')) return;
    var k = e.target.closest('.line').getAttribute('data-k');
    delete CART[k]; saveCart(); refreshBadge(); render('cart');
  });
  dfoot.addEventListener('click', function(e){
    var id = e.target && e.target.id;
    if(id==='gocheck') render('form');
    else if(id==='back') render('cart');
    else if(id==='empty'){ CART={}; saveCart(); refreshBadge(); render('cart'); }
    else if(id==='send') submitOrder();
    else if(id==='done'){ CART={}; saveCart(); refreshBadge(); closeDrawer(); }
  });

  var FORM_T0 = 0;
  function submitOrder(){
    function v(id){ return (ROOT.getElementById(id).value||'').trim(); }
    var ok = true;
    function need(id, test, msg){
      var e = ROOT.getElementById(id+'-e');
      if(!test){ e.textContent = msg; ok = false; } else e.textContent = '';
    }
    need('f-rs', v('f-rs').length>1, 'Indica la ragione sociale.');
    need('f-iva', v('f-iva').replace(/\s/g,'').length>=8, 'Indica partita IVA o codice fiscale.');
    need('f-em', /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v('f-em')), 'Indica un indirizzo email valido.');
    if(!ok) return;
    /* anti-bot: campo trappola compilato o modulo inviato in meno di 3 secondi \u2192 non si invia nulla */
    var isBot = v('f-web')!=='' || (Date.now()-FORM_T0) < 3000;
    if(isBot){  /* al bot si mostra un finto esito positivo, senza inviare nulla */
      $('dtitle').textContent = 'Richiesta inviata';
      dbody.innerHTML = '<div class="sim">Grazie, la richiesta \u00e8 stata ricevuta.</div>';
      dfoot.innerHTML = '<button type="button" class="primary" id="done">Chiudi</button>';
      return;
    }
    var cli = {company:v('f-rs'), vat:v('f-iva'), email:v('f-em'), phone:v('f-tel'), address:v('f-ind')};
    try{ localStorage.setItem('blind-cliente-v1', JSON.stringify(cli)); }catch(e){}
    var lines = Object.keys(CART).map(function(k){
      var l = CART[k];
      return {sku:k, name:l.n, qty:l.q, unit_price:l.p>0?l.p:null,
              line_total:l.p>0?Math.round(l.p*l.q*100)/100:null, url:l.u};
    });
    var T = totals();
    var text = lines.map(function(l){
      return l.sku+' \u00d7 '+l.qty+' \u2014 '+l.name+' \u2014 '+(l.unit_price? l.unit_price.toFixed(2).replace('.',',')+' \u20ac cad.':'prezzo su richiesta');
    }).join('\n');
    var now = new Date(), pad=function(n){return (n<10?'0':'')+n;};
    var reqId = 'WEB-'+now.getUTCFullYear()+pad(now.getUTCMonth()+1)+pad(now.getUTCDate())+'-'+
      pad(now.getUTCHours())+pad(now.getUTCMinutes())+pad(now.getUTCSeconds())+'-'+
      Math.random().toString(36).slice(2,6).toUpperCase();
    var clean = function(x){ return String(x==null?'':x).replace(/[|;*=\n\r]/g,' ').trim(); };
    /* riga macchina per il ponte BC: testo piatto, NON JSON (GHL scompone i JSON in sottocampi) */
    var datiBc = 'BC1|REQ='+reqId+'|PIVA='+clean(cli.vat)+'|EMAIL='+clean(cli.email)+'|TOT='+T.t+
      '|RIGHE='+lines.map(function(l){ return clean(l.sku)+'*'+l.qty+'*'+(l.unit_price==null?'':l.unit_price); }).join(';');
    var payload = {
      source:'catalogo-blind-web', request_id:reqId, submitted_at:now.toISOString(),
      company:cli.company, vat:cli.vat, email:cli.email, phone:cli.phone, address:cli.address,
      notes:v('f-note'), lines_count:lines.length, pieces:T.pcs,
      total_ex_vat:T.t, lines_without_price:T.nop, currency:'EUR',
      lines_text:text, lines_html:text.split('\n').map(esc).join('<br>'), dati_bc:datiBc, lines:lines
    };
    if(WORKER_URL){
      if(!TS_TOKEN){ var te=ROOT.getElementById('ts-box-e'); if(te) te.textContent='Completa la verifica anti-bot qui sopra.'; return; }
      payload.turnstile_token = TS_TOKEN;
      var btn = ROOT.getElementById('send'); if(btn){ btn.disabled = true; btn.textContent = 'Invio in corso\u2026'; }
      fetch(WORKER_URL, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
        .then(function(r){ return r.json().catch(function(){ return {ok:false,error:'risposta non valida'}; }); })
        .then(function(j){
          if(j && j.ok){
            $('dtitle').textContent = 'Richiesta inviata';
            dbody.innerHTML = '<div class="sim"><b>Grazie, la richiesta \u00e8 stata ricevuta.</b><br>Riferimento: <b>'+esc(reqId)+
              '</b>. BLIND la verifica e ti invia l\'offerta con prezzi e disponibilit\u00e0 definitivi.</div>';
            dfoot.innerHTML = '<button type="button" class="primary" id="done">Chiudi e svuota la richiesta</button>';
          } else { throw new Error((j && j.error) || 'invio non riuscito'); }
        })
        .catch(function(err){
          TS_TOKEN = ''; try{ if(window.turnstile && TS_ID!==null) window.turnstile.reset(TS_ID); }catch(e){}
          var te=ROOT.getElementById('ts-box-e');
          if(te) te.textContent = 'Invio non riuscito ('+err.message+'). Riprova; se persiste scrivi a info@blindgroup.com.';
          if(btn){ btn.disabled = false; btn.textContent = 'Invia richiesta d\'ordine'; }
        });
      return;
    }
    $('dtitle').textContent = 'Richiesta pronta';
    dbody.innerHTML = '<div class="sim"><b>Prototipo: la richiesta non viene inviata.</b> '+
      'In produzione questo contenuto viene spedito al webhook di GoHighLevel, che crea o aggiorna il cliente '+
      'e apre la richiesta nella pipeline ordini. Ecco esattamente cosa riceverebbe:'+
      '<pre>'+esc(JSON.stringify(payload,null,2))+'</pre></div>';
    dfoot.innerHTML = '<button type="button" class="primary" id="done">Chiudi e svuota la richiesta</button>'+
      '<button type="button" class="ghost" id="back">\u2039 Torna alle righe</button>';
  }

  var timer=null;
  function schedule(){ if(!ready) return; clearTimeout(timer); timer=setTimeout(compute,110); }
  qEl.addEventListener('input', schedule);
  areaEl.addEventListener('change', function(){ if(!ready) return; catEl.value=''; fillCats(); compute(); });
  [catEl,sortEl,discEl,priceEl,availEl,hasprEl].forEach(function(el){
    el.addEventListener('change', function(){ if(ready) compute(); });
  });
  moreBtn.addEventListener('click', function(){ paint(false); });
  $('clear').addEventListener('click', function(){ qEl.value=''; qEl.focus(); if(ready) compute(); });
  $('reset').addEventListener('click', function(){
    qEl.value=''; areaEl.value=''; sortEl.value='rel'; discEl.value='0';
    priceEl.value='0'; availEl.value=''; hasprEl.checked=false;
    fillCats(); catEl.value=''; if(ready) compute();
  });
  document.addEventListener('keydown', function(e){
    var t0 = (e.composedPath && e.composedPath()[0]) || e.target, tg = (t0 && t0.tagName) || '';
    if(e.key==='/' && !/^(INPUT|TEXTAREA|SELECT)$/.test(tg) && !(t0 && t0.isContentEditable)){ e.preventDefault(); qEl.focus(); }
  });

  function fatal(msg){
    var sc=$('scope'); if(sc){ sc.className='pill'; sc.textContent=msg; }
    grid.innerHTML='';
    emptybox.innerHTML='<div class="empty"><h2>Catalogo non caricato</h2><p>'+esc(msg)+'</p></div>';
  }
  function boot(){
    var el=ROOT.getElementById('catdata');
    var txt=el ? el.textContent.trim() : '';
    if(txt && txt.charAt(0)==='{'){
      var d0; try{ d0=JSON.parse(txt); }catch(e){ return fatal('dati illeggibili: '+e.message); }
      return start(d0);
    }
    if(!DATA_URL) return fatal('dati assenti nella pagina');
    var sc=$('scope'); if(sc){ sc.className='pill'; sc.textContent='Caricamento catalogo\u2026'; }
    fetch(DATA_URL,{cache:'default'}).then(function(res){
      if(!res.ok) throw new Error('HTTP '+res.status);
      return res.json();
    }).then(function(d){ try{ start(d); }catch(e){ fatal('errore di avvio: '+e.message); } }).catch(function(e){
      fatal('impossibile scaricare il catalogo ('+e.message+'). Riprova tra poco o scrivi a info@blindgroup.com');
    });
  }
  function start(d){
    if(!d||!d.r||!d.r.length) return fatal('indice vuoto');
    A=d.a; C=d.c; R=d.r; TOT=R.length;

    catCount={all:{}};
    for(var i=0;i<R.length;i++){
      var ai=R[i][5], ci=R[i][6];
      if(ci<0) continue;
      catCount.all[ci]=(catCount.all[ci]||0)+1;
      if(ai>=0){ (catCount[ai]=catCount[ai]||{}); catCount[ai][ci]=(catCount[ai][ci]||0)+1; }
    }
    var acount={};
    for(var j=0;j<R.length;j++) if(R[j][5]>=0) acount[R[j][5]]=(acount[R[j][5]]||0)+1;
    var ah='<option value="">Tutte le aree</option>';
    for(var k=0;k<A.length;k++) if(acount[k]) ah+='<option value="'+k+'">'+esc(A[k])+' ('+num.format(acount[k])+')</option>';
    areaEl.innerHTML=ah;

    var withStock=0, withPrice=0;
    for(var m=0;m<R.length;m++){ if(R[m][8]>0) withStock++; if(R[m][2]>0) withPrice++; }
    $('scope').className='pill ok';
    $('scope').textContent='ricerca su '+num.format(TOT)+' articoli in vetrina';
    $('stockinfo').textContent=num.format(withStock)+' disponibili a magazzino';

    buildHay();
    readHash(); fillCats(); readHash();
    refreshBadge();
    ready=true; compute();
  }
  try{ boot(); }catch(e){ fatal('errore di avvio: '+e.message); }
}
  function fonts(){
    if (document.getElementById('blind-cat-fonts')) return;
    var l = document.createElement('link'); l.id = 'blind-cat-fonts'; l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap';
    document.head.appendChild(l);
  }
  function mount(){
    var host = document.getElementById('blind-catalogo');
    if (!host) { host = document.createElement('div'); host.id = 'blind-catalogo';
      var s = CUR; (s && s.parentNode ? s.parentNode : document.body).insertBefore(host, s ? s.nextSibling : null); }
    if (host.shadowRoot) return;
    fonts();
    var root = host.attachShadow({mode:'open'});
    root.innerHTML = '<style>' + CSS + '</style><div class="bc-app">' + HTML + '</div>';
    try { blindApp(root, host); }
    catch(e){ root.innerHTML += '<p style="font-family:sans-serif;padding:16px">Catalogo non disponibile ('+String(e.message).replace(/</g,'&lt;')+'). Scrivi a info@blindgroup.com</p>'; }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();
})();
