import logo from '../img/eco.png'
import Card from './card'
export default function Menu() {
    return (
        <>
            <div className='d-flex flex-column justify-content-center align-items-center container '>
                <p className='my-4 py-4'>
                    <img src={logo} width={100}/>
                </p>
                <Card
                titulo="Meu perfil"
                subtitulo="Acesso os dados de cadastro"/>
                <Card
                titulo="Meu perfil"
                subtitulo="Acesso os dados de cadastro"/>
                <Card
                titulo="Meu perfil"
                subtitulo="Acesso os dados de cadastro"/>
            </div>
        </>
    )
}