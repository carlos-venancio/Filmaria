import { Link } from "react-router-dom"

export default function CardGrande(props){
    return (
        <div className="container-image">
            <Link to={`${props.category}/${props.id}`}>
                <h2> {props.title} </h2>
            </Link>
            <p> {props.desc.substr(0,props.desc.indexOf(".",200) + 1)} </p>
        </div>
    )
}