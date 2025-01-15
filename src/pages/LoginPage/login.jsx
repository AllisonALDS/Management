import InputComponent from '../../components/Inputs/inputComponent'
import './login.css'
import React, { useEffect, useState } from 'react';


export default function Login() {

    const [usuarios, setusuarios] = useState([]);
    const [newLoginUser, setNewLoginUser] = useState({ user: "", senha: ""  });

    const addService = (event) => {
        event.preventDefault()

        const newLoginUserObj = {
            id: usuarios.length + 1,
            user: newLoginUser.user,
            senha: newLoginUser.senha
        };

        const existingLogin = localStorage.getItem('logins')
        ? JSON.parse(localStorage.getItem('logins'))
        : [];

        const updatedLogin = [...existingLogin, newLoginUserObj];

        // Salvar os serviços atualizados no localStorage
        localStorage.setItem('logins', JSON.stringify(updatedLogin));

        setusuarios(updatedLogin);

        setNewLoginUser({user: "", senha: ""});
        console.log(updatedLogin)
    
        window.location.href = '/Agendamento'
        
    };

    return (
        <>
            <div className="loginContainer">
                <form action="" className='loginForm' >
                    <input type="text" onChange={(e) => setNewLoginUser({ ...newLoginUser, user: e.target.value })} />
                    <input type="text" onChange={(e) => setNewLoginUser({ ...newLoginUser, senha: e.target.value })} />
                    <button onClick={addService} >LOGIN</button>
                </form>
            </div>
        </>
    )
}
