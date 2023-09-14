import { useEffect, useState } from "react";
// o useHistory foi trocado por useNavigate na versão 6 do react-router-dom
import { useParams, useNavigate } from "react-router-dom";
import MontarCard from "../../components/montarCard";
import ConsultarArtigos from "../../components/consultaArtigos";

export default function Categoria(){

    const [loading,setLoading] = useState(true)
    const { categoria } = useParams();
    const pagina = useNavigate();
    const categorias = [ "business", "entertainment", "environment", "food", "politics", "sports", "science", "technology" ]

    useEffect(() => {

        
        // verifica se a categoria é uma possibilidade dentro do sistema
        const existeOpcao = categorias.some((category) => category === categoria)

        if(existeOpcao){
            // consulta os dados da categoria caso não tenha
            // renderiza quando tiver todos os dados
            if (sessionStorage.getItem(categoria) == null){
                ConsultarArtigos(categoria)
            }

        }else {
            pagina('/',{replace: true})
        }

        setTimeout(() => {
            setLoading(false)
        },2000)
    },[])

    if(loading){
        return (
            <div>
                <p>Carregando...</p>
            </div>
        )
    }

    return (
        <div className="categoria">
            <h1> {categoria} </h1>
            <MontarCard categoria={categoria} cartao={2}/>
        </div>
    )

}