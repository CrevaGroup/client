import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createServices } from "../Redux/Actions/actions";

function NewServices({dis}) {
    const dispatch = useDispatch();
    const types = useSelector(state => state.types);
    const maxItems = 5;
    const maxModality = 3;
    const [itemsQ, setItemsQ] = useState(1);
    const [modalityQ, setModalityQ] = useState(1);
    const [servicesInfo, setServicesInfo] = useState({
      name: "",
      description: "",
      price: "",
      photo: "",
      items: [''],
      modalidad: [''],
      types: []
    })

  const handleChange = event => {
    const { name, value } = event.target;
    const [type, index] = name.split("-");

    if (type === "items" || type === "modalidad") {
      const updatedArray = [...servicesInfo[type]];
      updatedArray[index] = value;

      setServicesInfo((prevInfo) => ({
        ...prevInfo,
        [type]: updatedArray,
      }));
    } else {
      setServicesInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
    }
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
        items: [''],
        modalidad: [''],
        types: []
      });
      setItemsQ(1);
      setModalityQ(1);
        // dispatch(createServices(servicesInfo))
      console.log(servicesInfo)
    }
    
    const modalityHandler = e => {
      e.preventDefault();
      if(e.target.value === '1' && modalityQ < maxModality) {
        setModalityQ(prevValue => {
          let newValue = prevValue+1;
          return newValue;
        })
      } else if(e.target.value === '0' && modalityQ > 1){
        setModalityQ(prevValue => {
          let newValue = prevValue-1;
          return newValue;
        })
      }
    }

  const itemsHandler = e => {
    e.preventDefault();
    if (e.target.value === '1' && itemsQ < maxItems) {
      setItemsQ(prevValue => {
        let newValue = prevValue + 1;
        return newValue;
      })
    } else if (e.target.value === '0' && itemsQ > 1) {
      setItemsQ(prevValue => {
        let newValue = prevValue - 1;
        return newValue;
      })
    }
  }

    
    /*
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


    <form onSubmit={submitHandler} className="flex flex-col w-full items-center">
              

      <h1 className="text-3xl my-4 text-black">Crear un nuevo servicio</h1>
      <div
            className="flex flex-col items-center justify-center w-3/4 "
      >
      <div
        className="w-full"
      >
              <h2 >Nombre</h2>
              <input placeholder="Ingresar nombre..." type="text" name="name" onChange={handleChange} value={servicesInfo.name} className=" mb-4 w-full rounded-lg outline-none p-1" />
      </div>
        <div
          className=" lg:w-full"
        >
          <h2 >Items</h2>
          <div
            className='lg:flex '
          >
            <div
              className='w-full'
            >
                  {
                    Array.from({ length: itemsQ }, (_, index) => (
                      <input key={index} placeholder="Ingresar items..." type="text" name={`items-${index}`} onChange={handleChange} value={servicesInfo.items[index]} className=" mr-4 mb-4 w-full rounded-lg outline-none p-1" />
                    ))
                  }
            </div>
                
            <div
                  className='flex font-bold'
            >
                  <button
                    value={1}
                    onClick={itemsHandler}
                    className='bg-white rounded-full w-8 h-8 mx-4'
                  >+</button>
                  <button
                    value={0}
                    onClick={itemsHandler}
                    className='bg-white rounded-full w-8 h-8 mx-4'
                  >-</button>
            </div>
          </div>
        </div>
        <div
          className="w-full"
        >
          <h2 >Modalidades</h2>
          <div
            className='lg:flex w-full'
          >
                <div
                  className='w-full'
                >
                  {
                    Array.from({ length: modalityQ }, (_, index) => (
                      <input key={index} placeholder="Ingresar modalidades..." type="text" name={`modalidad-${index}`} onChange={handleChange} value={servicesInfo.modalidad[index]} className=" mr-4 mb-4 w-full rounded-lg outline-none p-1" />
                    ))
                  }
                </div>
                <div
                  className='flex font-bold'
                >


                  <button
                    value={1}
                    onClick={modalityHandler}
                    className='bg-white rounded-full w-8 h-8 mx-4'
                  >+</button>
                  <button
                    value={0}
                    onClick={modalityHandler}
                    className='bg-white rounded-full w-8 h-8 mx-4'
                  >-</button>
                </div>
          </div>
        </div>
      <div
              className="lg:w-full"
      >
              <h2
                className=""
              >Descripción</h2>
              <textarea name="description" rows="3"
                value={servicesInfo.description}
                onChange={handleChange}
                className="mb-4 w-full rounded-lg outline-none p-1"
                placeholder="Ingresar descripcion..." ></textarea>
      </div>
      
     <div
      className="w-full flex flex-col items-center justify-center"
     >
              <h2>Precio</h2>
              <input placeholder="##" type="number" name="price" onChange={handleChange} value={servicesInfo.price} className="mb-4 w-full lg:w-16 rounded-lg outline-none p-2" />
     </div>
      <h2>Imágen</h2>
      <input type="file" accept="image/*" name="photo" onChange={photoHandle} className="mb-4 cursor-pointer"/>
      <h2>Incluye</h2>
      <select name="types" onChange={selectedChange} value={servicesInfo.types.join(',')} className="mb-4 outline-none p-1 rounded-lg">
        <option value=""> Elegir servicio</option>
        <option value="cv">Curriculum Vitae</option>
        <option value="perfil">Perfil de Linkedin</option>
        <option value="busqueda">Búsqueda Laboral</option>
        <option value="practica">Capacitación</option>
      </select>
          </div>
      <div className="flex justify-center items-center mt-2 mb-2">
        
            <button
              type="submit"
              className="px-2 text-lgp py-2 my-8 border-2 border-custom-gray rounded-2xl transition duration-200 ease-in-out hover:bg-dark-violet hover:text-custom-gray hover:border-dark-violet hover:duration-200"
            >Crear</button>
      </div>
    </form>
  </div>
</div>
  );
}

export default NewServices;