function FormGroup(props) {
    return (
        <div className="from-group">
            <label htmlFor={props.htmlFor}> {props.label} </label>
            <div>
                {props.children}
            </div>
        </div>
    )
}
export default FormGroup;

// É assim que se cria uma props no funcional

// O props.label - o label é como se fosse o título