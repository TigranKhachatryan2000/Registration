const Ui = (props) => {
    return <>
        <div className='inputContainer' key={props.name}>
            <label htmlFor={props.htmlFor}>  </label>
                <input type={props.type} name={props.name} className="input" placeholder={props.placeholder} value={props.states.fields[props.name]} onChange={props.onChange}/>
        </div>
        <em className='em'>  {props.states.errors[props.error]} </em>
    </>
}
export default Ui;