import viteLogo from "../../assets/react.svg"
import { IoMdCreate } from "react-icons/io";
import { GrConfigure } from "react-icons/gr";
import { FaNetworkWired } from "react-icons/fa";

export default function Menu() {
    return (
        <>
            <div className="container-menu">
                <div className="user-perfil">
                    <img src={viteLogo} alt="" />
                    <p>The App</p>
                </div>
                <div className="options">
                    <div className="option1">
                        <IoMdCreate />
                        <a href="/Agendamento"><p>Criar Novo Serviço</p></a>
                    </div>
                    <div className="option1">
                        <FaNetworkWired />
                        <a href="/Agendamento2"><p>Gerenciar Serviços</p></a>
                    </div>

                </div>
                <div className="config">
                    <GrConfigure />
                    <p>Configurações</p>
                </div>

            </div>
        </>
    )
}