import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import api from '../../services/api'
import './style.css'

export default function Filme(){

    // pega um valor digitado no redirecionamento da rota, nesse caso o "id" 
    const { id } = useParams();
    // link usado pelo desenvolvedor que não precisa de evento do cliente para acionar
    const history = useHistory();
    // vai guardar as informações do filme
    const [filme,setFilme] = useState([]);
    // faz com que a página fique RECARREGANDO enquanto o valor não for alterado para falso
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        // função para buscar os filmes no banco de dados pela api
        async function loadFilme(){
            const resposta = await api.get(`r-api/?api=filmes/${id}`)

            // caso não retorne dados do filme mande para a home
            if (resposta.data.length === 0){
                // troca a rota para "/", nesse caso a home do site
                history.replace("/")
            }

            // caso retorna coloque na variavel filme e para de recarregar a pagina
            setFilme(resposta.data)
            setLoading(false);
        };

        loadFilme()

        return

    }, [history,id]);

    // função para adicionar o filme no localstorage
    function salvarFilme(){
        const armazenamentoLocal  = localStorage.getItem('filmes');
        // conversão para json do conteudo do armazenamento local
        let filmesSalvos = JSON.parse(armazenamentoLocal) || []; // ?
        console.log(filmesSalvos)

        // Valida se já eiste o filme no local storage
        let hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id);
        if (hasFilme){
            toast.error("Você já salvou esse filme")
            return 
        }

        // adiciona o filme para poder converter para JSON
        filmesSalvos.push(filme);
        // adiciona o filme ao armazenamenro local
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso');

    }

    if(loading){
        return (
            <div className="container">
                <article>
                    <h2>Carregando a página...</h2>
                </article>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="info-filme">
                <article key={filme.id}>
                    <h2> {filme.nome} </h2>
                    <img src={filme.foto} alt={filme.nome}/>

                    <h3> Sinopse </h3>
                    <p> {filme.sinopse} </p>

                    <div className="container-btn">
                        {/* porque buga */}
                        <button onClick={salvarFilme}>Salvar</button>
                        <button>
                            <a target="_blank" href={`https://www.youtube.com/results?search_query=${filme.nome} trailer`}> Trailer </a>
                        </button>
                    </div>
                </article>
            </div>
        </div>
    )
}