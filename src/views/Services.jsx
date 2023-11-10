import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import AllServiceCards from "../components/AllServiceCards";
import Filters from "../components/Filters";
import EditDocument from "../assets/EditDocument.svg";
import NewServices from "../components/NewServices";
import { useDispatch, useSelector } from "react-redux";
import Servicio_no_encontrado from "../assets/Servicio_no_encontrado.png"
import { getServices, getTypes, filterServices } from "../Redux/Actions/actions";

const Services = () => {

  const dispatch = useDispatch();

  const [create, setCreate] = useState(false)
  const services = useSelector(state => state.services)
  const filters = useSelector(state => state.filters)

  function disableHandler(){
    setCreate(create ? false : true)
  }

  useEffect(() => {
    dispatch(getServices(filters));
    dispatch(getTypes());
}, []);

  return (
      <div className=" bg-custom-gray  ">



      <div
        className="pt-4 lg:pt-8"
      >
                
        <div className="flex flex-col items-center justify-center text-dark-gray-blue cursor-default">
          
        <div className="flex items-center mb-2">
          
          <p className="text-3xl lg:text-5xl  mr-2">
            Nuestros Servicios
          </p>
          <button onClick={disableHandler}>
            <img
              src={EditDocument}
              alt="EditDocument"
              style={{ width: `30px` }}
              />
          </button>
        </div>
        <p className="text-xl">Potenciá tu carrera</p>
          <div className=" w-full"

          >
            {create &&
              <div className=" ">

                <NewServices
                  dis={disableHandler}
                />
              </div>
            }
          </div>
      </div>
              

      <div
        className="flex items-center justify-center my-4"
      >
        <Filters />
      </div>

      <div className="flex lg:min-h-screen items-center justify-center  lg:my-2">
        {services.length>0?<div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10  gap-x-64 min-w-screen my-8 justify-center items-center">
          {services?.map((service, index)=>
            <AllServiceCards 
            key={index}
            img={service.photo}
            name={service.name}
            description={service.description}
            price={service.price}
            id={service.id}
             />
          )}
        </div>:
          <div className="flex-col items-center" >
            <img 
              className=" h-60"
              src={Servicio_no_encontrado} 
            />
          </div>}
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
