import { useState } from "react"
import MainForm from "./formManagement"

export default function mainManagement() {

    const [info, setInfo] = useState('')
    const [info2, setInfo2] = useState('')
    const [botao, setbotao] = useState('')
    let mostrar = true

    function getInfoHandler(event) {
        event.preventDefault();

        const selectElement = document.getElementById('select1')
        setInfo(selectElement.value)
        const selectElement2 = document.getElementById('select2')
        setInfo2(selectElement2.value)
        const botao = document.getElementById('butao')
        botao.innerHTML = "CONFIRME NOVAMENTE"

        if (info2 == "" || info == "") {
            console.log('vazio')
            function changeStyle(){
                const div = document.getElementById("container-form")
                div.style.display = "none"
            }
            changeStyle()

        } else {
            botao.innerHTML = "CONFIRME"
            function changeStyle(){
                const div = document.getElementById("container-form")
                div.style.display = "block"
            }
            changeStyle()
        }
    }

    return (
        <>
            <div className="containerMain">
                <div className="services">
                    <div className="service1">
                        <p>Agendar um Serviço</p>
                        <div className="">
                            <label htmlFor="">Escolha</label>
                            <select name="" id="select1">
                                <option value=""></option>
                                <option value="Servico 2">Servico 2</option>
                                <option value="Servico 3">Servico 3</option>
                                <option value="Servico 4">Servico 4</option>
                                <option value="Servico 5">Servico 5</option>
                                <option value="Servico 6">Servico 6</option>
                            </select>
                        </div>
                    </div>
                    <div className="service2">
                        <p>Escolha um Horário</p>
                        <div className="">
                            <select name="" id="select2">
                                <option value=""></option>
                                <option value="12:50" >12:50</option>
                                <option value="12:50">12:50</option>
                                <option value="12:50">12:50</option>
                                <option value="12:50">12:50</option>
                                <option value="12:50">12:50</option>
                            </select>
                            <button onClick={getInfoHandler} id="butao" >VERIFICIAR</button>
                        </div>
                    </div>
                </div>
                
                <MainForm />

            </div>
        </>
    )
}