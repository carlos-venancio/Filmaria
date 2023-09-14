import { useEffect,useState } from "react";
import { useParams, useNavigate } from "react-router";

export default function Artigo(){
    
    // armazena os dados do artigo para pegar os valores do artigo mais facilmente
    const [artigo,setArtigo] = useState({})
    const pagina = useNavigate()
    const [loading,setLoading] = useState(true)
    const { categoria, id } = useParams()

    useEffect(() => {
        JSON.parse(sessionStorage.getItem(categoria)).forEach((item) => {
            console.log(item.article_id)
            
            if(item.article_id === id){
                setArtigo(item)
            }
        },[])

        if (artigo === {}){
            pagina('/',{replace: true})
        }

        setLoading(false)
    },[])

    if(loading){
        return (
            <div>
                <p>Carregando...</p>
            </div>
        )
    }

    return(
        <div className="container-artigo">

            <p> Home &gt; {categoria}</p>

            <h1> {artigo.title} </h1>
            <div>
                <p>Fonte: {artigo.source_id}{artigo.creator}</p>
                <p>{artigo.pub_date}</p>
            </div>
            <img src={artigo.image_url}/>
            <p>{artigo.description}</p>

            <a href={artigo.link} target="_blank"> Leia mais</a>
        </div>
    )
}