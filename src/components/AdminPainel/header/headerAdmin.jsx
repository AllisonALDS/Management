import { IoMdMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa";
export default function HeaderAdmin(){
    return (
        <>
            <div className="container-header-admin">
                <div className="title">
                    <IoMdMenu/>
                    <p>Dashboard</p>
                </div>
                <div className="user-perfil">
                    <FaUser />
                    <p>user-name</p>
                </div>
            </div>
        </>
    )
}