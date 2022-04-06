import {Link} from 'react-router-dom'
import Image404 from '../img/page404.svg'
import style from './page404.css'

export default function page404() {
    return (
        <div className='container w-100 min-vh-100 d-flex flex-column justify-content-center align-items-center'>
            <div>
                <img src={Image404} alt="página inexistente" width={300} />
            </div>
            
            <h1 className={`my-4 letterSpace fontWeight`}>Error 404</h1>
            
            <Link to={'/'}>
                <button type="button" class="btn btn-success">Voltar</button>
            </Link>
        </div>
    )
}