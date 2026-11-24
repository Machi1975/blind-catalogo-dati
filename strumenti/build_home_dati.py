# Ricava home.json (dati leggeri per la home dello store) da catalogo.json.
# Uso: python -I claude_build_home_dati.py <catalogo.json> <cartella di uscita>
# Scrive due file nella cartella: home.json (si carica all'apertura) e home-ricerca.json
# (si carica solo quando si usa la ricerca). Pensato per girare anche nell'automazione GitHub
# subito dopo l'aggiornamento di catalogo.json.
#
# home.json = {"v": data catalogo,
#              "n": [articoli, disponibili, aree, marchi],
#              "a": [[nome area, disponibili, articoli], ...]   (stesso ordine/indice di catalogo.json: /catalogo#area=K)
#              "b": [marchi piu frequenti, max 40],
#              "s": [righe in sconto per il carosello, max 14]}
# home-ricerca.json = {"v": data catalogo, "b": come sopra, "r": [disponibili + in sconto con scheda]}
# riga = [codice, nome, prezzo, barrato, sconto%, area, slug, disponibile, indice marca in "b" o -1]
import collections, json, os, re, sys

src, dst = sys.argv[1], sys.argv[2]
d = json.load(open(src, encoding="utf-8"))
A, R = d["a"], d["r"]   # r: [codice, nome, prezzo, barrato, sconto, area, categoria, slug, disponibile]


def brand_of(name):
    m = re.search(r"\]\s*([^\[\]]+)$", name)
    if not m:
        return ""
    b = m.group(1).strip()
    if 2 <= len(b) <= 24 and b[0].isupper() and not re.search(r"\d|/|tubo|mm|V/|\(", b):
        return b
    return ""


def deal(r):
    return bool(r[4]) and 15 <= r[4] <= 75 and bool(r[3]) and r[3] > r[2] and bool(r[7])


tot_area = collections.Counter(r[5] for r in R)
av_area = collections.Counter(r[5] for r in R if r[8])
n_av = sum(av_area.values())

freq = collections.Counter()
for r in R:
    b = brand_of(r[1])
    if b:
        freq[b] += 1
brands = [b for b, _ in freq.most_common(40)]
bidx = {b: i for i, b in enumerate(brands)}


def row(r):
    return [r[0], r[1], round(float(r[2] or 0), 2), round(float(r[3] or 0), 2), int(r[4] or 0),
            r[5], r[7] or "", 1 if r[8] else 0, bidx.get(brand_of(r[1]), -1)]


seen, rows = set(), []
for r in R:
    if (r[8] or deal(r)) and r[0] not in seen and r[2]:
        seen.add(r[0]); rows.append(row(r))

# carosello: sconti piu alti, prima i disponibili, al massimo 2 per area per dare varieta
cand = sorted((r for r in R if deal(r) and r[2]), key=lambda r: (-(1 if r[8] else 0), -r[4]))
per_area, deals = collections.Counter(), []
for r in cand:
    if per_area[r[5]] >= 2:
        continue
    per_area[r[5]] += 1; deals.append(row(r))
    if len(deals) >= 14:
        break

n_brands = sum(1 for b, c in freq.items() if c >= 5)   # marchi con almeno 5 articoli
home = {"v": d["v"], "n": [len(R), n_av, len(A), n_brands],
        "a": [[A[i], av_area.get(i, 0), tot_area.get(i, 0)] for i in range(len(A))],
        "b": brands, "s": deals}
ric = {"v": d["v"], "b": brands, "r": rows}
sizes = []
for name, obj in (("home.json", home), ("home-ricerca.json", ric)):
    s = json.dumps(obj, ensure_ascii=False, separators=(",", ":"))
    open(os.path.join(dst, name), "w", encoding="utf-8").write(s)
    sizes.append("%s=%d byte" % (name, len(s.encode("utf-8"))))
print("v=%s articoli=%d disponibili=%d marchi=%d righe ricerca=%d offerte=%d %s"
      % (d["v"], len(R), n_av, n_brands, len(rows), len(deals), " ".join(sizes)))
