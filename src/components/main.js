import Eco from "../img/Eco2.svg";

function Main () {

    function sobre() {
        let mensagem = "A Ecoleta é uma plataforma de coleta de lixo eletrônico. A nossa proposta é destinar o lixo eletrônico corretamente e a educação ambiental.";
        return mensagem;
    }

    return (
        <div id="sobre" className="px-4 py-5 my-5 text-center">
            <img className="d-block mx-auto mb-4" src={Eco} alt="" width={350} height={350}/>
            <h1 className="display-5 fw-bold">Ecoleta</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">{sobre()}</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                   <a href="https://treinamento.altu.com.br/widgets/preview/bd3de5d9a10bd2d07516f1fb717a8d65" target="_blank" rel="noreferrer"><button type="button" className="btn btn-success btn-lg px-4 gap-3">Nosso Chat</button></a>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4" disabled>Nosso Blog</button>
                </div>
            </div>
        </div>
    )
}

export default Main;