import { slugify } from './slug'

export const cidadesBuscasPopulares = [
    { nome: 'São Paulo', uf: 'SP', preposicao: 'em' },
    { nome: 'Salvador', uf: 'BA', preposicao: 'em' },
    { nome: 'Florianópolis', uf: 'SC', preposicao: 'em' },
    { nome: 'Rio de Janeiro', uf: 'RJ', preposicao: 'no' },
    { nome: 'Santo André', uf: 'SP', preposicao: 'em' },
    { nome: 'Presidente Prudente', uf: 'SP', preposicao: 'em' },
    { nome: 'Campinas', uf: 'SP', preposicao: 'em' },
    { nome: 'Curitiba', uf: 'PR', preposicao: 'em' },
].map(cidade => ({ ...cidade, slug: slugify(cidade.nome) }))
