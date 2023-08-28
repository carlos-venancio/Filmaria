import api from '../../services/api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Home(){

    // é usado principalmente para segurança
    // cria um objeto com uma atributo e uma função que altera o conteudo da atributo 
    const [filmes,setFilmes] = useState([])

    // o useEffect é executado na hora da leitura da pagina
    useEffect(() => {
        // ler os filmes
        async function lerFilmes(){
            const resposta = await api.get('r-api/?api=filmes')
            console.log(resposta)
            setFilmes(resposta.data)
        }

        lerFilmes()
    },[])

    return (
        <div className='container'>
        {/* Cria varias estruturas com informações diferentes vindas da api */}
            <div className='lista-filmes'>
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong> {filme.nome} </strong>
                            <p> {filme.sinopse} </p>
                            <img src={filme.foto} alt={filme.nome} />
                            {/* link com o id do filme no banco de dados  */}
                            <Link to={`/filme/${filme.id}`} className="link">Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}