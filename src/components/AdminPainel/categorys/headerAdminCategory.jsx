
import { FaDatabase } from "react-icons/fa";

export default function HeaderAdminCategory(props) {


    return (
        <div className="header-admin-category">

            <div className="box">
                <div className="section">
                    <p>{props.qtd}</p>
                    <div className="title-service">
                        <p>Quantidades de Servicos</p>
                    </div>
                </div>
                <div className="icon">
                    <FaDatabase/>
                </div>
            </div>

            <div className="box">
                <p></p>
            </div>
        </div>
    )
}