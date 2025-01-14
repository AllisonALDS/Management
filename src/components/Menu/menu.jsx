import viteLogo from "../../assets/react.svg"

export default function Menu(){
    return (
        <>
            <div className="container-menu">
                <div className="user-perfil">
                    <img src={viteLogo} alt="" />
                    <p>The App</p>
                </div>
                <div className="options">
                    <div className="option1">
                        <p>Icon </p>
                        <p>nameFunction</p>
                    </div>
                    <div className="option1">
                        <p>Icon </p>
                        <p>nameFunction</p>
                    </div>
                    <div className="option1">
                        <p>Icon </p>
                        <p>nameFunction</p>
                    </div>
                    <div className="option1">
                        <p>Icon </p>
                        <p>nameFunction</p>
                    </div>
                    <div className="option1">
                        <p>Icon </p>
                        <p>nameFunction</p>
                    </div>
                    <div className="option1">
                        <p>Icon </p>
                        <p>nameFunction</p>
                    </div>
                
                </div>
                <div className="config">
                    <p>icon </p>
                    <p>Configurações</p>
                </div>

            </div>
        </>
    )    
}