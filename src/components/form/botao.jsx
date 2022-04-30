export default function Botao(props) {
    return (
        <>
            <button type="submit" onClick={props.onClick} className="btn btn-success">{props.label}</button>
        </>
    )
}