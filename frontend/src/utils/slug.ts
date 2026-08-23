// utils/slug.ts

export function slugify(text: string): string {
  if (!text) return '';
  
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export interface FiltrosBuscaInput {
  finalidade?: string;
  cidade?: string;
  tipos?: string[];
  bairros?: string[];
}

export function gerarParametrosRota(filtros: FiltrosBuscaInput) {
  const finalidadeSlug = filtros.finalidade ? slugify(filtros.finalidade) : 'todas';
  const cidadeSlug = filtros.cidade ? slugify(filtros.cidade) : 'todas';

  const tiposSlug = filtros.tipos && filtros.tipos.length > 0
    ? filtros.tipos.map(slugify).join(',')
    : 'todos';

  const bairrosSlug = filtros.bairros && filtros.bairros.length > 0
    ? filtros.bairros.map(slugify).join(',')
    : '';

  return {
    finalidade: finalidadeSlug,
    cidade: cidadeSlug,
    tipos: tiposSlug,
    bairros: bairrosSlug
  };
}