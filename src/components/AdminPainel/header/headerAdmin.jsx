import React, { useEffect, useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa";
export default function HeaderAdmin(props) {


    
    const [logins, setLogins] = useState([]);

    const fetchServicesFromLocalStorage = () => {
        const savedServices = localStorage.getItem('logins');
        return savedServices ? JSON.parse(savedServices) : [];
    };

    useEffect(() => {
        const loadedServices = fetchServicesFromLocalStorage();
        console.log(loadedServices);
        setLogins(loadedServices);
    }, []);




    return (
        <>
            <div className="container-header-admin">
                <div className="title">
                    <IoMdMenu />
                    <p>Dashboard</p>
                </div>
                <div className="user-perfil">
                    <FaUser />
                    <p>- { logins.id } </p>
                </div>
            </div>
        </>
    )
}