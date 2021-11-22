import Form from "../img/Messenger-rafiki.svg";

function Feature () {
    return (
        <div id="comofunciona" className="container px-4 py-5">
                <h2 className="pb-2 border-bottom">Como funciona</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                    <img className="img-thumbnail" href={Form} width="70px" height="70px"/>
                    <h2>Featured title</h2>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <a href="#" className="icon-link">
                    Call to action
                        <i className="bi bi-app-indicator"></i>
                    </a>
                </div>
                <div className="feature col">
                    <div className="feature-icon bg-primary bg-gradient">
                        <i className="bi bi-app-indicator"></i>
                    </div>
                    <h2>Featured title</h2>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <a href="#" className="icon-link">
                    Call to action
                        <i className="bi bi-app-indicator"></i>
                    </a>
                </div>
                <div className="feature col">
                    <div className="feature-icon bg-primary bg-gradient">
                        <i className="bi bi-app-indicator"></i>
                    </div>
                    <h2>Featured title</h2>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <a href="#" className="icon-link">
                    Call to action
                        <i className="bi bi-app-indicator"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Feature;