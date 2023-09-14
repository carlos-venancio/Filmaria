import { useState, useEffect } from "react"
import MontarCard from "../../components/montarCard"
import Btn from "../../components/btn/index.js"
import ConsultarArtigos from "../../components/consultaArtigos/index.js"

export default function Home() {
    
    // faz um carregamento de página enquanto está pesquisando os dados
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        // carregar algumas categorias por padrão
        ConsultarArtigos('entertainment')
        ConsultarArtigos('politics')
        ConsultarArtigos('business')

        // espera 3s para evita que a página dê erro por ainda não ter retornado os dados
        setTimeout(() => {
            setLoading(false)
        },3000)

    },[])

    if (loading){
        return (
            <div className="home">
                <div className="icone-carregamento">Carregando...</div>
            </div>
        )
    } 

    return (
        <div className="home">
            <MontarCard qtd={1} categoria={'entertainment'} cartao={3} />
            <h1> Politica </h1>
            {/* coloca na tela as categorias selecionadas  */}
            {/* IMPLEMENTAR: pré-carregar todos os tópicos e coloca-los na página */}
            <MontarCard qtd={3} categoria={'politics'} cartao={1}/>
            <Btn categoria={'politics'}> Leia Mais </Btn>

            <h1> Negócios </h1>
            <MontarCard qtd={3} categoria={'business'} cartao={2} />
            
            <MontarCard qtd={3} categoria={'entertainment'} cartao={1} />
        </div>
    )
}