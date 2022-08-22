import { useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import Input from '../../components/form/input.jsx'
import Botao from '../../components/form/botao.jsx'
import logo from '../../img/eco.png'

export default function Perfil () {

    let nome = localStorage.getItem('nomeEco')
    let email = localStorage.getItem('emailEco')
    let idUser = localStorage.getItem('idEco')

    const History = useNavigate()

    const User = {
        'nome':'',
        'endereco':'',
        'telefone':''
    }

    const [user, setUser] = useState(User)

    useEffect(() => {
        axios.get(`http://localhost:4001/user?email=${email}`)
        .then((response) => {
            setUser(response.data.message)
        })
        .catch((response) => {
            console.log(response)
        })
    }, [])

    function onChange(event) {
        const {name, value} = event.target
       
        setUser({... user, [name]: value})
    }

    function onSubmit(event) {
        event.preventDefault()
    }

    function onRegister() {
        axios.put(`http://localhost:4001/user?email=${email}`, user)
        .then((response) => {
            console.log(response.data.message)
            History('/dashboard/perfil')
        })
        .catch((response) => {
            console.log(response)
        })
    }

    return (
        <div className="d-flex flex-row w-100 min-vh-100 bg-color-primary">
            <div className="d-flex flex-column justify-content-center align-items-center container">
                <Link to={'/dashboard'}>
                    <p className='my-4 py-4'>
                        <img src={logo} width={100}/>
                    </p>
                </Link>
                <h1 className="h3 mb-3 fw-normal">Olá <span className='text-success text-decoration-underline fw-bold'>{nome}</span></h1>
                <h1 className='h3 mb-3 fw-normal'>Dados do Perfil</h1>
                <div className='container'>
                    <form onSubmit={onSubmit}>
                    <Input
                    id='nome'
                    label='nome'
                    type='text'
                    defaultValue={user.nome}
                    placeholder='nome'
                    onChange={onChange}/>
                    <Input
                    id='endereco'
                    label='endereco'
                    type='text'
                    defaultValue={user.endereco}
                    placeholder='endereco'
                    onChange={onChange}/>
                    <Input
                    id='telefone'
                    label='telefone'
                    type='text'
                    defaultValue={user.telefone}
                    placeholder='telefone'
                    onChange={onChange}/>
                        <div className='d-flex w-100 flex-row py-3'>
                            <Botao onClick={onRegister} label='Atualizar'/>
                        </div>
                    </form>
                </div>
                <div>
                    <p className='h5 my-2 fw-normal'>ID:{idUser}</p>
                </div>
            </div>
        </div>
    )
}