import { Link } from 'react-router-dom'
import logo from '../img/eco.png'
import Card from './card'
export default function Menu() {
    
    let nome = localStorage.getItem('nomeEco')
    
    return (
        <>
            <div className='d-flex flex-column justify-content-center align-items-center container '>
                <Link to={'/'}>
                    <p className='my-4 py-4'>
                        <img src={logo} width={100}/>
                    </p>
                </Link>
                <h1 className="h3 mb-3 fw-normal">Olá <span className='text-success text-decoration-underline fw-bold'>{nome}</span></h1>
                <h1 className='h3 mb-3 fw-normal'>Tenha uma boa Coleta</h1>
                <Card
                titulo="Meu perfil"
                subtitulo="Acessar dados de perfil."
                para="/dashboard/perfil"/>
                <Card
                titulo="Solicitar Coleta"
                subtitulo="Cadastrar um coleta."
                para="/dashboard/solicitacao"/>
                <Card
                titulo="Minhas Coletas"
                subtitulo="Visualizar todas as suas coletas."
                para="/dashboard/coletas"/>
            </div>
        </>
    )
}