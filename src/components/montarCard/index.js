import CardCompleto from "../cardCompleto"
import CardSimples from "../cardSimples"
import CardGrande from "../cardGrande"

// receber a quantidade deseja, nome da categoria e tipo do cartão
// uma função que monta o cartão dependendo do modelo escolhido
export default function MontarCard({qtd,categoria,cartao}){

    const recorteCategoria = JSON.parse(sessionStorage.getItem(categoria))

    // evita que a quantidade seja undefined
    qtd = qtd == undefined ?  recorteCategoria.length : qtd 

    // cartão simples é o modelo 1
    if (cartao === 1){

        return (
            recorteCategoria.slice(0,qtd).map((item) => {
                    return (
                        <CardSimples key={item.article_id} 
                                     id={item.article_id}
                                     image={item.image_url} 
                                     title={item.title}
                                     category={categoria}
                            />
                    )
            })
        )
    }

    else if (cartao === 2){
        
        return (
            recorteCategoria.slice(0,qtd).map((item) => {
                return (
                    <CardCompleto 
                            key={item.article_id}
                            font={item.source_id}
                            id={item.article_id}
                            title={item.title}
                            image={item.image_url}
                            desc={item.description}
                            date={item.pubDate}
                            category={categoria}

                    />
                )
            })
        )        
    }

    else if (cartao === 3){
        return (
            recorteCategoria.slice(0,qtd).map((item) => {
                return (
                    <CardGrande 
                            title={item.title}
                            id={item.article_id}
                            image={item.image_url}
                            desc={item.description}
                            category={categoria}

                    />
                )
            })
        )
    }
    
}