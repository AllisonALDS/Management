import React, { useEffect, useState } from 'react';

// Função para carregar os dados dos serviços do localStorage
const fetchServicesFromLocalStorage = () => {
  const savedServices = localStorage.getItem('services');
  return savedServices ? JSON.parse(savedServices) : [];
};

const AdminPanel = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ name: '', description: '', price: '' });

  // Carregar os serviços ao montar o componente
  useEffect(() => {
    const loadedServices = fetchServicesFromLocalStorage();
    console.log(loadedServices)
    setServices(loadedServices);
  }, []);

  // Função para adicionar um novo serviço

  // Função para excluir um serviço
  const deleteService = (serviceId) => {
    const updatedServices = services.filter(service => service.id !== serviceId);
    setServices(updatedServices);

    // Atualizar o localStorage com a lista de serviços atualizada
    localStorage.setItem('services', JSON.stringify(updatedServices));
  };

  return (
    <div>
      <h1>Painel Administrativo</h1>
      <h2>Serviços Disponíveis</h2>
      
      {/* Formulário para adicionar um novo serviço */}
      <div>
      </div>

      {/* Lista de serviços com a opção de excluir */}
      <ul>
        {services.map(service => (
          <li key={service.id}>
            {service.name} - {service.description} - {service.price}
            <button onClick={() => deleteService(service.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
