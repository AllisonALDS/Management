
function inputComponent(props) {

    const labelName = props.labelName
    const type = props.type

    return (
        <>
            <div className="inputContainer">
                <label htmlFor="">{labelName}</label>
                <input type={type}></input>
            </div>
        </>
    )
}

export default inputComponent
