import React, { useEffect, useState } from 'react';
import './AdminPanel.css';
import Menu from '../../components/Menu/menu';
import HeaderAdmin from '../../components/AdminPainel/header/headerAdmin';
import HeaderAdminCategory from '../../components/AdminPainel/categorys/headerAdminCategory';


const fetchServicesFromLocalStorage = () => {
  const savedServices = localStorage.getItem('services');
  return savedServices ? JSON.parse(savedServices) : [];
};

const AdminPanel = (props) => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ name: '', description: '', price: '', data: '' });

  useEffect(() => {
    const loadedServices = fetchServicesFromLocalStorage();
    console.log(loadedServices)
    setServices(loadedServices);
  }, []);

  const deleteService = (serviceId) => {
    console.log(serviceId)
    const updatedServices = services.filter(service => service.id !== serviceId);
    setServices(updatedServices);

    localStorage.setItem('services', JSON.stringify(updatedServices));
  };

  function contar() {
    const qtd = fetchServicesFromLocalStorage()
    let cont = qtd.length
    return cont
  }

  return (
    <div className='container-painel-admin' >
      <div>
        <Menu />
      </div>

      {/* Funções Aparecer Servições */}
      <div className='container-right'>

        <HeaderAdmin  />
        <HeaderAdminCategory qtd={contar()} />

        <div className="container-services">
          <div className="container-services-titles">
            <p>Horario</p>
            <p>DATA</p>
            <p>SERVIÇO</p>
            <p>Observação</p>
          </div>
          <ul>
            {services.map(service => (


              <li key={service.id}>

                <div className="options1">
                  {service.name}
                </div>

                <div className="options1">
                  {service.description}
                </div>

                <div className="options1">
                  {service.price}
                </div>

                <div className="options1">
                  {service.data}
                </div>

                <div className="options2">
                  <button onClick={() => deleteService(service.id)}>Excluir</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default AdminPanel;
