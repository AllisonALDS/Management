import InputComponent from '../../components/Inputs/inputComponent'
import './login.css'

export default function Login(){
    return (
        <>
            <div className="loginContainer">
                <form action="" className='loginForm' >
                    <InputComponent labelName="Email"  type="email"/>
                    <InputComponent labelName="Senha"  type="password"/>
                    <button>LOGIN</button>
                </form>
            </div>
        </>
    )
}