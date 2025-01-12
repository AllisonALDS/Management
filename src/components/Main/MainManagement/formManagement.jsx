import React, { useEffect, useState } from 'react';

export default function FormManagement(props) {

    const valueHour = props.valueHour
    const service = props.service
    
    const [services, setServices] = useState([]);
    const [newService, setNewService] = useState({ name: '', description: '', price: '' });

    function Alert(){
        alert("Agendamento confirmado!")

        function changeStyle(){
            const div = document.getElementById("container-form")
            div.style.display = "none"
        }
        changeStyle()

        const addService = () => {
            const newServiceObj = {
              id: services.length + 1,
              name: newService.name, 
              description: newService.description,
              price: newService.price // Novo campo preço
            };

            const existingServices = localStorage.getItem('services')
            ? JSON.parse(localStorage.getItem('services'))
            : [];
        
            const updatedServices = [...existingServices, newServiceObj];
        
            // Salvar os serviços atualizados no localStorage
            localStorage.setItem('services', JSON.stringify(updatedServices));

            setServices(updatedServices);
            
            setNewService({ name: '', description: '', price: '' });
        };
        addService()
    }



    return (
        <>
            <div className="container-form-services" id="container-form" >
                <form action="" className="form">
                    <div className="form-inputs">
                        <label htmlFor="horario">HORARIO</label>
                        <input type="text" id="horario" onChange={(e) => setNewService({ ...newService, price: e.target.value })} required />
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="date">DATA</label>
                        <input type="date" id="date" required/>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="service" >SERVIÇO</label>
                        <input type="text" id="service" onChange={(e) => setNewService({ ...newService, name: e.target.value })} required  />
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="observacao">Observação:</label>
                        <input type="text" id="observacao"  onChange={(e) => setNewService({ ...newService, description: e.target.value })} required/>
                    </div>
                    <div className="form-inputs">
                        <button onClick={Alert} >CONFIRMAR AGENDAMENTO</button>
                    </div>
                </form>
            </div>
        </>
    )
}