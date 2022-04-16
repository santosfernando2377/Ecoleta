import axios from 'axios';
import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../img/eco.png'
export default function Componentlogin() {

  const History = useNavigate()
  const ref = useRef()

  const Login = {
    email: '',
    senha: ''
  }

  const [login, setLogin] = useState(Login)

  function onChange (event) {
    const {name, value} = event.target

    setLogin({... login, [name]: value})
    
  }

  function onSubmit (event) {
    event.preventDefault();
  }

  function onValidateUser () {
    
    if(login.email == '' && login.email == null) {
      return console.info('Não foi possível fazer login')
    } else if (login.senha == '' && login.senha == null) {
      return console.info('Não foi possível fazer login')
    }

    axios.get(`http://localhost:4001/user?email=${login.email}`)
    .then((response) => {

      let data = ref.current = login
      
      if(response.data.message == '' || response.data.message == null) {
        console.log('Não foi possível gravar os dados')
      } else if (data.email == response.data.message.email && data.senha == response.data.message.senha) {
        localStorage.setItem('emailEco',`${response.data.message.email}`)
        localStorage.setItem('senhaEco',`${response.data.message.senha}`)
        History('/dashboard')
      }
      
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  function anoAtual () {
    let Data = new Date().getFullYear();
    return Data;
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
        <div className="liveAlertPlaceholder"></div>
    
        <div className="form-floating my-3">
          <input type="email" className="form-control" name='email' onChange={onChange} id="floatingInput" placeholder="name@example.com" defaultValue={''}/>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating my-3">
          <input type="password" className="form-control" name='senha' onChange={onChange} id="floatingPassword" placeholder="Password" defaultValue={''}/>
          <label htmlFor="floatingPassword">Password</label>
        </div>
    
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-success my-2" onClick={onValidateUser} type="submit">Acessar</button>
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