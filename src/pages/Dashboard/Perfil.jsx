import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Input from '../../components/form/input'
import logo from '../../img/eco.png'

export default function Perfil () {

    let nome = localStorage.getItem('nomeEco')
    let email = localStorage.getItem('emailEco')

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

    console.log(user)

    return (
        <div className="d-flex flex-row w-100 min-vh-100 bg-color-primary">
            <div className="d-flex flex-column justify-content-center align-items-center container">
                <Link to={'/'}>
                    <p className='my-4 py-4'>
                        <img src={logo} width={100}/>
                    </p>
                </Link>
                <h1 className="h3 mb-3 fw-normal">Olá <span className='text-success text-decoration-underline fw-bold'>{nome}</span></h1>
                <h1 className='h3 mb-3 fw-normal'>Dados do Perfil</h1>
                <div className='container'>
                    <Input id='nome'
                    type='text'
                    label='Nome Completo'
                    placeholder='Nome Completo'
                    value={user.nome}/>
                    
                    <Input id='endereco'
                    type='text'
                    label='Endereço'
                    placeholder='Endereço'
                    value={user.endereco}/>
                    
                    <Input id='telefone'
                    type='phone'
                    label='Celular'
                    placeholder='Celular'
                    value={user.telefone}/>

                    <Input id='email'
                    type='email'
                    label='Email'
                    placeholder='Email'
                    value={user.email}/>
                </div>
            </div>
        </div>
    )
}