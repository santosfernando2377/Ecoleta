import Logo from "../img/eco.png";

export default function Header () {
    return (
        <div id="inicio" className="container">
            <header className="d-flex justify-content-center py-3">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a href="#inicio" className="nav-link text-success lh-sm py-2 my-1" aria-current="page">
                            <span><img className="mx-3" src={Logo} width={35} height={35} alt="Logo Eco"/>Inicio</span>
                        </a>
                    </li>
                    <li className="nav-item"><a href="#sobre" className="nav-link text-success py-3">Sobre</a></li>
                    <li className="nav-item"><a href="#comofunciona" className="nav-link text-success py-3">Como Funciona</a></li>
                </ul>
            </header>
        </div>
    )
}