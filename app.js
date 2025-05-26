// Listas base para construir los dominios
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io'];

for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let ext of extensions) {
        // Comprobación de diferentes posibles dominios.
        if (n.endsWith(ext.replace('.', ''))) {
          console.log(p + a + n.slice(0, -ext.length + 1) + ext);
        } else {
          console.log(p + a + n + ext);
        }
      }
    }
  }
}

