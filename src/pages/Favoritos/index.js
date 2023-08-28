import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import './favoritos.css'

export default function Favoritos() {

    const [filmes,setFilmes] = useState();

    useEffect(() => {
        const lista = localStorage.getItem('filmes')
        setFilmes(JSON.parse(lista))


    },[])

    function deleteFilme(id){
        // faça uma nova lista só que sem o valor
        // remove da lista filme todos os valores iguais à id
        let filmesFiltrados = filmes.filter((item) => {
            return (item.id != id)
        })

        toast.success("Filme deletado com sucesso");
        setFilmes(filmesFiltrados)
        localStorage.setItem('filmes',JSON.stringify(filmesFiltrados))
    }

    return (
        <div className='container'>
            <div className='filmes-favoritos'>
                <h2> Favoritos </h2>

                {/* && - funciona com um if de uma linha */}
                {filmes.length === 0 && <span> Você não tem filme favoritado. </span>}

                <ul>
                    {filmes.map((item) => {
                            return (
                                <li key={item.id}>
                                    <span>{item.nome}</span>

                                    <div>
                                        <Link to={`/filmes/${item.id}`}>Ver detalher</Link>
                                        <button onClick={deleteFilme(item.id)}> Salvar </button>
                                    </div>
                                </li>            
                            )
                        }
                    )}
                </ul>
            </div>
        </div>
    )
}