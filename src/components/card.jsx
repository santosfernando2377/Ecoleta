export default function Card(props) {
    return (
        <div className="card w-50 my-2">
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.subtitulo}</h6>
                <p className="card-text">{props.descricao}</p>
            </div>
        </div>
    )
}