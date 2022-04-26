import { Link } from 'react-router-dom'

export default function Card(props) {
    return (
        <Link to={props.para} className="card w-75 my-2 text-decoration-none text-muted shadow-sm">
            <div>
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.subtitulo}</h6>
                    <p className="card-text">{props.descricao}</p>
                </div>
            </div>
        </Link>
    )
}