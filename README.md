# blind-catalogo-dati
Dati pubblici del catalogo store.blindgroup.net

- `catalogo.json`: catalogo completo, aggiornato ogni lunedi dallo script sul PC (letto dal catalogo rapido).
- `catalogo-app.js`: codice del catalogo rapido.
- `home.json` e `home-ricerca.json`: dati leggeri per la home dello store, generati da `strumenti/build_home_dati.py`
  dall'automazione `aggiorna-home.yml` ogni volta che cambia `catalogo.json` (dal 24/11/2026).
