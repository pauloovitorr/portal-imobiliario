export  function slugify(text: string): string {
  if (!text) return '';

  return text
    .toString()                  // Garante que o dado é uma string (evita erro se vier número)
    .normalize('NFD')            // Decompõe letras com acento em dois caracteres (ex: "ã" vira "a" + "~")
    .replace(/[\u0300-\u036f]/g, '') // Remove os acentos que foram separados na linha de cima
    .toLowerCase()               // Passa tudo para letras minúsculas
    .trim()                      // Remove espaços em branco sobrando no início e no fim
    .replace(/[^a-z0-9 -]/g, '') // Apaga tudo que não for letra, número, espaço ou hífen
    .replace(/\s+/g, '-')        // Transforma todos os espaços (simples ou duplos) em um hífen
    .replace(/-+/g, '-');        // Junta hífens repetidos (ex: "---" vira "-") para o link ficar limpo
}


export function slugifyBairros(bairros: string[]): string {
  if (!bairros || bairros.length === 0) return '';

  return bairros.map(bairro => slugify(bairro)).join(',');
}
