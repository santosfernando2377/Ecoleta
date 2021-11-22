import Form from "../img/messenger.svg";
import Logistic from "../img/logistic.svg";
import Print from "../img/print.svg";

function Feature () {

    function coleta () {
        let mensagem = "Nosso sistema de coleta é prático e rápido. O agente se descoloca até o ponto de coleta e recolhe o material conforme o horário marcado.";
        return mensagem;
    }
    
    function analise () {
        let mensagem = "Em nossa unidade de tratamento é selecionado o componentes que são reutilizáveis e aqueles que não são destinados e descarte de forma mais apropriada.";
        return mensagem;
    }

    function transporte () {
        let mensagem = "Após o tratamento dos matériais é realizado o processo de transporte do material.";
        return mensagem;
    }


    return (
        <div id="comofunciona" className="container px-4 py-5">
                <h2 className="pb-2 border-bottom">Como Funciona</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                
                <div className="px-4 py-5 text-center">
                    <img className="my-4 mx-4" src={Form} width={250} height={250} alt="logo"/>
                    <h2>Coleta</h2>
                    <p>{coleta()}</p>
                </div>
                
                <div className="px-4 py-5 text-center">
                    <img className="my-4 mx-4" src={Print} width={250} height={250} alt="logo"/>
                    <h2>Análise</h2>
                    <p>{analise()}</p>
                </div>
                
                <div className="px-4 py-5 text-center">
                    <img className="my-4 mx-4" src={Logistic} width={250} height={250} alt="logo"/>
                    <h2>Transporte</h2>
                    <p>{transporte()}</p>
                </div>

            </div>
        </div>
    )
}

export default Feature;