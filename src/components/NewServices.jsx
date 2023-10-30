import { useState } from "react";
import { useDispatch } from "react-redux";
import { createServices } from "../Redux/Actions/actions";

import close from '../assets/close.svg'
import { Button } from "@material-tailwind/react";

function NewServices({dis}) {
    const dispatch = useDispatch()
    const [servicesInfo, setServicesInfo] = useState({
        name: "",
        description: "",
        price: "",
        photo: "",
        types: []
    })

    function handleChange(event) {
        setServicesInfo({
          ...servicesInfo,
          [event.target.name]: event.target.value,
        });
    }

    function selectedChange(event){
        if(!servicesInfo.types.includes(event.target.value)){
            setServicesInfo({
              ...servicesInfo,
              types: [...servicesInfo.types, event.target.value]
            })
        }
      }

    function photoHandle(event){
        setServicesInfo({
            ...servicesInfo,
            photo: event.target.files[0]
        })
    }

    function submitHandler(e){
      e.preventDefault()
      setServicesInfo({
        name: "",
        description: "",
        price: "",
        photo: "",
        types: []
      })
        dispatch(createServices(servicesInfo))
    }

  return (
    <div className="flex justify-center items-center absolute z-10 bg-transparent/60 w-full h-[800px] lg:h-[1100px]" >

      
          <div
              className="flex top-0  lg:top-32   w-full lg:w-4/5   absolute z-10  "
              >
          <div
            className="ml-auto bg-dark-violet/30 h-12 lg:h-16 rounded-full mt-8"
          >
            <img 
            className=" h-12  lg:h-16 "
            onClick={dis}
            src={close}/>
          </div>
        </div>

  <div className="p-8 rounded-lg mt-5 mb-5 bg-light-violet lg:w-1/3  items-center justify-center">


    <form onSubmit={submitHandler} className="text-center">
              

      <h1 className="text-3xl mt-2">Crear un nuevo servicio</h1>
      <h2 className="mt-4">Nombre:</h2>
      <input type="text" name="name" onChange={handleChange} value={servicesInfo.name} className=" mb-4"/>
      <h2>Descripción:</h2>
      <input type="text" name="description" onChange={handleChange} value={servicesInfo.description} className="mb-4"/>
      <h2>Precio:</h2>
      <input type="number" name="price" onChange={handleChange} value={servicesInfo.price} className="mb-4"/>
      <h2>Imágen</h2>
      <input type="file" accept="image/*" name="photo" onChange={photoHandle} className="mb-4"/>
      <h2>Incluye:</h2>
      <select name="types" onChange={selectedChange} value={servicesInfo.types} className="mb-4">
        <option value="cv">Curriculum Vitae</option>
        <option value="perfil">Perfil de Linkedin</option>
        <option value="busqueda">Búsqueda Laboral</option>
        <option value="practica">Capacitación</option>
      </select>
      <div className="flex justify-center items-center mt-2 mb-2">
        <Button type="submit" className="bg-dark-violet">Crear</Button>
      </div>
    </form>
  </div>
</div>
  );
}

export default NewServices;