import { useState } from "react";
import { useDispatch } from "react-redux";
import { createServices } from "../Redux/Actions/actions";
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
    }/*
<div
            className="w-full h-full "
        >
            <form
                className="w-full h-full flex flex-col justify-center items-center "
                onSubmit={submit}
            >
                <div
                    className="flex flex-col  w-full lg:w-3/5 h-full items-center justify-center bg-light-violet rounded-b-xl text-xl"
                >
                    <div
                        className="text-3xl"
                    >
                        <h1>Publicar articulo</h1>
                    </div>
                    <div
                        className=" w-3/4 my-4"
                    >
                        <p
                            className="my-1"
                        >Titulo</p>

                        <input
                            className="w-full p-1 rounded-lg outline-none"
                            name="title"
                            onChange={change}
                            placeholder="Ingresar titulo..."
                        ></input>
                    </div>

                    <div
                        className="w-3/4 my-4"
                    >
                        <p
                            className="my-1"
                        >Contenido</p>

                        <textarea name="text" rows="3"
                            onChange={change}
                            className="p-1 w-full text-gray-900 rounded-lg outline-none "
                            placeholder="Ingresar comentario..." ></textarea>
                    </div>

                        <button
                            type="submit"
                            className="px-2 text-lgp py-2 my-8 border-2 border-custom-gray rounded-2xl transition duration-200 ease-in-out hover:bg-dark-violet hover:text-custom-gray hover:border-dark-violet hover:duration-200"
                        >Postear</button>

                </div>

            </form>
        </div>
    */

  return (
    <div className="flex  justify-center items-center  w-full h-ful " >


  <div className="p-8 rounded-lg mt-5 mb-5 bg-light-violet lg:w-3/5  items-center justify-center text-xl text-black">


    <form onSubmit={submitHandler} className="text-center">
              

      <h1 className="text-3xl my-4 text-black">Crear un nuevo servicio</h1>
      <h2 className="">Nombre</h2>
      <input type="text" name="name" onChange={handleChange} value={servicesInfo.name} className=" mb-4"/>
      <h2>Descripción</h2>
      <input type="text" name="description" onChange={handleChange} value={servicesInfo.description} className="mb-4"/>
      <h2>Precio</h2>
      <input type="number" name="price" onChange={handleChange} value={servicesInfo.price} className="mb-4"/>
      <h2>Imágen</h2>
      <input type="file" accept="image/*" name="photo" onChange={photoHandle} className="mb-4"/>
      <h2>Incluye</h2>
      <select name="types" onChange={selectedChange} value={servicesInfo.types.join(',')} className="mb-4">
        <option value=""> Elegir servicio</option>
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