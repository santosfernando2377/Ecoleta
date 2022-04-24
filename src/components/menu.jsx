import { Link } from 'react-router-dom'
import logo from '../img/eco.png'
import Card from './card'
export default function Menu() {
    return (
        <>
            <div className='d-flex flex-column justify-content-center align-items-center container '>
                <Link to={'/'}>
                    <p className='my-4 py-4'>
                        <img src={logo} width={100}/>
                    </p>
                </Link>
                <Card
                titulo="Meu perfil"
                subtitulo="Acesso os dados de cadastro"
                para="/dashboard/perfil"/>
                <Card
                titulo="Minhas solicitações"
                subtitulo="Acesso os dados de cadastro"
                para="/dashboard/solicitacao"/>
            </div>
        </>
    )
}