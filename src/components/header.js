function Header () {
    return (
        <div id="inicio" className="container">
            <header className="d-flex justify-content-center py-3">
                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="#inicio" className="nav-link text-success" aria-current="page">Inicio</a></li>
                    <li className="nav-item"><a href="#sobre" className="nav-link text-success">Sobre</a></li>
                    <li className="nav-item"><a href="#comofunciona" className="nav-link text-success">Como Funciona</a></li>
                </ul>
            </header>
        </div>
    )
}

export default Header;