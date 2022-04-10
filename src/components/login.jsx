import { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../img/eco.png'
export default function Componentlogin() {

  const Login = {
    email: '',
    senha: ''
  }

  const [login, setLogin] = useState(Login)
    
  function anoAtual () {
    let Data = new Date().getFullYear();
    return Data;
  }

  function onChange (event) {
    const {name, value} = event.target

    setLogin({... login, [name]: value})
  }

  function onSubmit (event) {
    event.preventDefault();
  }


  return (
        <div>
            <div className="container min-vh-100 w-100 d-flex flex-column text-center justify-content-center align-items-center">
    
    <main className="form-signin container">
      <form onSubmit={onSubmit} className="container">
        <Link to={'/'}>
        <img className="mb-4" src={logo} alt="logo eco" width={100}/>
        </Link>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
    
        <div className="form-floating my-3">
          <input type="email" className="form-control" name='email' onChange={onChange} id="floatingInput" placeholder="name@example.com"/>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating my-3">
          <input type="password" className="form-control" name='senha' onChange={onChange} id="floatingPassword" placeholder="Password"/>
          <label htmlFor="floatingPassword">Password</label>
        </div>
    
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-success my-2" type="submit">Acessar</button>
        <Link to={'/register'}>
          <button className="w-100 btn btn-lg btn-outline-success my-2">Criar Conta</button>
        </Link>
        <p className="mt-5 mb-3 text-muted">© {anoAtual()} Company, Inc</p>
      </form>
    </main>
    </div>
        </div>
    )
}