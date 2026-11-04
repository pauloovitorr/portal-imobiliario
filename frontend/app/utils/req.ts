export function getTestApiUrl(): string {
    const config = useRuntimeConfig();
    const baseUrl = config.public.apiBase;
    return baseUrl;
}

export async function getTestBackendUrl() {
    const baseUrl = getTestApiUrl();

    try {
        // O $fetch do Nuxt aceita a propriedade "query" nativamente!
        const data = await $fetch(`${baseUrl}/teste`, {
            method: 'GET',
            query: {
                idade: 30,
                nome: 'Paulo'
            }
        });

        console.log('Resposta da API:', data);
        return data;

    } catch (error) {
        console.error('Erro ao chamar a API:', error);
    }
}