import InputComponent from '../../components/inputComponent'

export default function Login(){
    return (
        <>
            <div className="">
                <form action="">
                    <InputComponent labelName="Email"  type="email"/>
                    <InputComponent labelName="Senha"  type="password"/>
                    <button>LOGIN</button>
                </form>
            </div>
        </>
    )
}