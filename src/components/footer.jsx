export default function Footer () {
    
    function anoAtual () {
        let Data = new Date();
        let Ano = Data.getFullYear();
        return Ano;
    }

    return (
        <div className="container">
            <footer className="py-3">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#inicio" className="nav-link px-2 text-success">Inicio</a></li>
                    <li className="nav-item"><a href="#sobre" className="nav-link px-2 text-success">Sobre</a></li>
                    <li className="nav-item"><a href="#comofunciona" className="nav-link px-2 text-success">Como Funciona</a></li>
                </ul>
                <p className="text-center text-muted">© {anoAtual()} Company, Inc</p>
            </footer>
        </div>
    )
}