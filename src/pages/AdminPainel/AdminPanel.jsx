import React, { useEffect, useState } from 'react';

const fetchServicesFromLocalStorage = () => {
  const savedServices = localStorage.getItem('services');
  return savedServices ? JSON.parse(savedServices) : [];
};

const AdminPanel = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ name: '', description: '', price: '', data: '' });

  useEffect(() => {
    const loadedServices = fetchServicesFromLocalStorage();
    console.log(loadedServices)
    setServices(loadedServices);
  }, []);

  const deleteService = (serviceId) => {
    const updatedServices = services.filter(service => service.id !== serviceId);
    setServices(updatedServices);

    localStorage.setItem('services', JSON.stringify(updatedServices));
  };

  return (
    <div>
      <h1>Painel Administrativo</h1>
      <h2>Serviços Disponíveis</h2>

      <ul>
        {services.map(service => (
          <li key={service.id}>
            Serviço: {service.name} - Descrição {service.description} - Hora: {service.price} - Data: {service.data}
            <button onClick={() => deleteService(service.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
