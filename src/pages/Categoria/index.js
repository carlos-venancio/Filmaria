import { useEffect } from "react";
// o useHistory foi trocado por useNavigate na versão 6 do react-router-dom
import { useParams, useNavigate } from "react-router-dom";
import MontarCard from "../../components/montarCard";

export default function Categoria(){

    const { categoria } = useParams();
    const pagina = useNavigate();

    console.log(categoria)

    useEffect(() => {
        // verifica se a categoria existe
        if (sessionStorage.getItem(categoria) == null || sessionStorage.getItem(categoria) == undefined){
                pagina("/",{replace: true})
            return 
        }
    })

    return (
        <div className="categoria">
            <h1> {categoria} </h1>
            <MontarCard categoria={categoria} cartao={2}/>
        </div>
    )

}