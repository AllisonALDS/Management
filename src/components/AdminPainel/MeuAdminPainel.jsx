import React, { useEffect, useState } from 'react';

export default function MeuAdminPainel() {

    // Função para carregar os dados dos serviços do localStorage
    const fetchServicesFromLocalStorage = () => {
        const savedServices = localStorage.getItem('services');
        console.log("savedServices")
        return savedServices ? JSON.parse(savedServices) : [];

    };

    useEffect(() => {
        const loadedServices = fetchServicesFromLocalStorage();
        console.log(loadedServices)
        setServices(loadedServices);
    }, []);


    const deleteService = (serviceId) => {
        const updatedServices = services.filter(service => service.id !== serviceId);
        setServices(updatedServices);

        // Atualizar o localStorage com a lista de serviços atualizada
        localStorage.setItem('services', JSON.stringify(updatedServices));
    };


    return (
        <ul>
            {services.map(service => (
                <li key={service.id}>
                    {service.name} - {service.description} - Preço: {service.price}
                    <button onClick={() => deleteService(service.id)}>Excluir</button>
                </li>
            ))}
        </ul>
    )
}