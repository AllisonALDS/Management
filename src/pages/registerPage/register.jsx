import '../LoginPage/login.css'
import InputComponent from '../../components/Inputs/inputComponent'

export default function Register() {
    return (
        <>
            <div className="loginContainer">
                <form action="" className='loginForm' >
                    <InputComponent labelName="Email" type="email" />
                    <InputComponent labelName="Senha" type="password" />
                    <InputComponent labelName="Confirmar Senha" type="password" />
                    <button>LOGIN</button>
                </form>
            </div>
        </>
    )
}