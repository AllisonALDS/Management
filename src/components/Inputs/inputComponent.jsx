
function inputComponent(props) {

    const labelName = props.labelName
    const type = props.type
    const on = props.on

    return (
        <>
            <div className="inputContainer">
                <label onChange={on} htmlFor="">{labelName}</label>
                <input type={type} onChange={on}></input>
            </div>
        </>
    )
}

export default inputComponent
