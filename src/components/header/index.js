import { Link } from "react-router-dom";
import './header.css';

function Header(){
     
    return(
        <div>
            <div className="header">
                <div>
                    <img className='icon' src='icon.png' alt='logo'/>
                </div>
                <div className='pesq'>

                </div>
            </div>
            <div className="catalogo">
                <Link className="link-home"   to="/business">Negócios</Link>
                <Link className="link-home"   to="/politics">Política</Link>
                <Link className="link-home"   to="/sports">Esporte</Link>
                <Link className="link-home"   to="/technology">Tecnologia</Link>
                <Link className="link-home"   to="/food">Comida</Link>
                <Link className="link-home"   to="/entertainment">Entretenimento</Link>
                <Link className="link-home"   to="/science">Ciência</Link>
                <Link className="link-home"   to="/environment">Ambiente</Link>
            </div>
         </div>   
     )
 }

 export default Header;