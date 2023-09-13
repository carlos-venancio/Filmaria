import { Link } from "react-router-dom";

export default function CardCompleto(props){
    return (
        <div className="container-card">
            <div>
                <img src={props.image} alt={props.title} />
            </div>
            <div>
                <h2> {props.title} </h2>
                {/* exibe uma parte da descrição - até o próximo ponto depois de 300 palavras */}
                <p> {props.desc.substr(0,props.desc.indexOf('.',300) + 1)}</p>
                {/* pega apenas o ano,mês e dia da data */}
                <p> {new Date(props.date).toLocaleDateString()} </p>
            </div>
            <div>
                <p> {props.font} </p>
            </div>
        </div>
    )
}