import api from '@/app/api/api';
export default async function searchCep(valor:string) {
  
  const cep = valor.replace(/\D/g, ''); // Formatando para tirar todos oque não é numero
      if(cep.length != 8) {
        throw new Error('Cep Inválido!')
         }
    try {
      const response = await api.get(`${cep}/json`);
      return response.data;
    }catch {
      throw new Error('Falha ao buscar.')
    }
}