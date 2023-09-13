import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Artigo(){

    const [artigo,setArtigo] = useState()
    const { category, title } = useParams()

    useEffect(() => {
        const artigos = JSON.parse(sessionStorage.getItem(`${category}`)) 

        artigos.map((item) => {
            if (item.title === title){
                setArtigo(item)
            }
        })
    }) 

    return (

    )
}