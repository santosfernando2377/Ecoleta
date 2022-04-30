import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Input from '../../components/form/input'
import Botao from '../../components/form/botao'
import logo from '../../img/eco.png'

export default function Perfil () {

    let nome = localStorage.getItem('nomeEco')
    let email = localStorage.getItem('emailEco')
    let idUser = localStorage.getItem('idEco')

    const User = {
        'nome':'',
        'endereco':'',
        'telefone':'',
        'email':'',
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
        const {name, value} = event.target.value
        setUser({... user, [name]: value})
    }

    function onSubmit(event) {
        event.preventDefault()
    }

    function onRegister() {
        /*axios.put(`http://localhost:4001/user?email=${email}`, user)
        .then((response) => {
            console.log(response.data.message)
        })
        .catch((response) => {
            console.log(response)
        })*/
    }

    console.log(user)

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
                        <Input id='nome'
                        type='text'
                        label='Nome Completo'
                        placeholder='Nome Completo'
                        value={user.nome}
                        onChange={onChange}/>
                
                        <Input id='endereco'
                        type='text'
                        label='Endereço'
                        placeholder='Endereço'
                        value={user.endereco}
                        onChange={onChange}/>
                
                        <Input id='telefone'
                        type='phone'
                        label='Celular'
                        placeholder='Celular'
                        value={user.telefone}
                        onChange={onChange}/>

                        <Input id='email'
                        type='email'
                        label='Email'
                        placeholder='Email'
                        value={user.email}
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