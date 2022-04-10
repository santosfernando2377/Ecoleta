import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/eco.png'

export default function Register () {

    const Register = {
        nome: "",
        endereco: "",
        telefone: "",
        eamil:""
    }

    const [register, setRegister] = useState(Register)

    function onChange (event) {
        const {name, value} = event.target
        setRegister({... register, [name]:value})
        console.log(register)
    }

    function onSumit (event) {
        event.preventDefault()
    }

    return (
        <>
        <div className='container d-flex flex-column justify-content-center align-items-center my-4'>
            <Link to={'/'}>
                <img className="mb-4" src={logo} alt="logo eco" width={100}/>
            </Link>
        </div>
        <div className="container my-3">
            <h3 className="h3 mb-3 fw-normal">Crie seu cadastro <span>Eco</span></h3>
        </div>
        <div className="container my-3">
            <form onSubmit={onSumit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Nome Completo</label>
                        <input type="text" className="form-control" name='nome' onChange={onChange} id="formGroupExampleInput" placeholder="Example input placeholder"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Endereço</label>
                        <input type="text" className="form-control" name='endereco' onChange={onChange} id="formGroupExampleInput2" placeholder="Another input placeholder"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput3" className="form-label">Telefone</label>
                        <input type="text" className="form-control" name='telefone' onChange={onChange} id="formGroupExampleInput3" placeholder="Another input placeholder"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput4" className="form-label">E-mail</label>
                        <input type="text" className="form-control" name='email' onChange={onChange} id="formGroupExampleInput4" placeholder="Another input placeholder"/>
                </div>
                <button className="w-100 btn btn-lg btn-success my-2" type="submit">Cadastrar</button>
            </form>
        </div>
        </>
    )
}