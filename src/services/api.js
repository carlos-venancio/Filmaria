import axios from "axios";

// recebe os dados do banco de dados
const api = axios.create({
    // URL da api 
    baseURL: 'https://sujeitoprogramador.com/'
})

// importa os valores recebidos atraves da api
export default api;