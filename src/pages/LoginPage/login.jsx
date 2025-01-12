import InputComponent from '../../components/Inputs/inputComponent'
import './login.css'


export default function Login(){

    function redirectPage(event){
        event.preventDefault();
        window.location.href = "/Agendamento"
    }

    return (
        <>
            <div className="loginContainer">
                <form action="" className='loginForm' >
                    <InputComponent labelName="Email"  type="email"/>
                    <InputComponent labelName="Senha"  type="password"/>
                    <button onClick={redirectPage} >LOGIN</button>
                </form>
            </div>
        </>
    )
}