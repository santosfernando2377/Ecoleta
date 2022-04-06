export default function Footer () {
    
    function anoAtual () {
        let Data = new Date().getFullYear();
        return Data;
    }

    return (
        <div className="container">
            <footer className="py-3">
                <p className="text-center text-muted">© {anoAtual()} Company, Inc</p>
            </footer>
        </div>
    )
}