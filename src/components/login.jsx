import { Link } from 'react-router-dom';
import logo from '../img/eco.png'
export default function Componentlogin() {
    
  function anoAtual () {
    let Data = new Date().getFullYear();
    return Data;
}

  return (
        <div>
            <div className="container min-vh-100 w-100 d-flex flex-column text-center justify-content-center align-items-center">
    
    <main className="form-signin container">
      <form className="container">
        <Link to={'/'}>
        <img className="mb-4" src={logo} alt="" width={100}/>
        </Link>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
    
        <div className="form-floating my-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating my-3">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
          <label htmlFor="floatingPassword">Password</label>
        </div>
    
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-success" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">© {anoAtual()}</p>
      </form>
    </main>
    </div>
        </div>
    )
}