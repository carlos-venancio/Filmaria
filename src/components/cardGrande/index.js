
export default function CardGrande(props){
    return (
        <div className="container-image">
            <h2> {props.title} </h2>
            <p> {props.desc.substr(0,props.desc.indexOf(".",200) + 1)} </p>
        </div>
    )
}