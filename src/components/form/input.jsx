export default function Input(props) {
    return (
        <div className="mb-3">
            <label htmlFor={props.id} className="form-label">{props.label}</label>
            <input type={props.type} className="form-control" name={props.id} id={props.id} defaultValue={props.defaultValue} placeholder={props.placeholder} onChange={props.onChange}/>
        </div>
    )
}