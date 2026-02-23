import axios from 'axios';
// Aqui criamos a url base para que o axios use por padrão.
// Na nossa query seria a baseUrl + cep então '/ws/19802360' por exemplo.

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
});

export default api;