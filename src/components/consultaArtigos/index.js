import api from '../../services/api.js'

async function ConsultarArtigos(categoria){

    if (sessionStorage.getItem(categoria) === null){
        // funciona como promise, pois garante que está fazendo a requisição
        sessionStorage.setItem(categoria,{})
        
        // pegar os artigos na api
        const resposta = await api.get(`api/1/news?apikey=pub_291299d118ab7284974c4d4015ef2dcea8f92&country=br&image=1&full_content=1&category=${categoria}`)
            
        if (resposta.data.length != 0) {
            // é necessario converter em json para armazenar na sessão
            const resposta_json = JSON.stringify(resposta.data.results)
            
            // armazena os artigos de determinado tópico em uma sessão local
            sessionStorage.setItem(categoria,resposta_json)
        }
    }
}

export default ConsultarArtigos