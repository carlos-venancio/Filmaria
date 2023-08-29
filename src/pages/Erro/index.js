import { Link } from 'react-router-dom'
import './Erro.css'

export default function Erro(){


    return (
        <div className='container'>
            <div className='container-erro'>
                <h1> 404 </h1>
                <h3> Página não encontrada </h3>

                <Link to='/' className='btn-back'> Voltar </Link>
            </div>
        </div>
    )
}