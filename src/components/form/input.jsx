export default function Input(props) {
    return (
        <div className="mb-3">
            <label htmlFor={props.id} className="form-label">{props.label}</label>
            <input type={props.type} className="form-control" id={props.id} defaultValue={props.value} placeholder={props.placeholder} onChange={props.onChange}/>
        </div>
    )
}