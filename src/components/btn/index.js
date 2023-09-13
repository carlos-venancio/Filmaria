import { Link } from "react-router-dom"

export default function Btn(props){
    return (
        <div className="container-btn">
            <Link to={`/${props.categoria}`}>{props.children}</Link>
        </div>
    )
}