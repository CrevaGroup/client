import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { filtersService } from "../Redux/Actions/actions";


const Filters = () => {

    const dispatch = useDispatch()

    const minRef = useRef()
    const maxRef = useRef()
    const typeRef = useRef()
    const orderRef = useRef()

    const [filters, setFilters] = useState({
        min:1,
        max:100,
        order:'',
        filter:''
    })


    const handleInputChange = e => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        })
        dispatch(filtersService({
            ...filters,
            [e.target.name]: e.target.value,
        }))
    }

    useEffect(()=>{
        dispatch(filtersService(filters))
      }, [])

    function resetHandler(){
        setFilters({
            min:1,
            max:100,
            order:'',
            filter:''
        })
        dispatch(filtersService({
            min:1,
            max:100,
            order:'',
            filter:''
        }))
        minRef.current.value = 1;
        maxRef.current.value = 100;
        typeRef.current.value = "";
        orderRef.current.value = "ASC";
    }

    const changeHandler = () => {}

    return(
        <div style={{maxWidth: "100vw",marginTop:"50px" ,display:"flex", flexDirection:"column", alignItems:"center"}} className=" flex-col items-center">
                <div>
                <p>Rango de precio</p>
                </div>
            
            <div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                  <div>
                    <span>Min</span>
                    <input
                    className=" field"
                    type="text"
                    disabled
                    value={filters.min}
                    onChange={changeHandler}
                    />
                  </div>
                  <div>
                      <span>Max</span>
                      <input
                        style={{width:"30px"}}
                        type="text"
                        disabled
                        value={filters.max}
                        onChange={changeHandler}
                          />
                  </div>
                </div>
                {/*slider*/}
                <div
                    className="h-[5px] bg-slate-600  rounded-xl relative"
                >
                    <div
                        className="h-[5px] bg-dark-violet w-10 rounded-xl absolute left-1/4 right-1/4"
                    >
                    </div>
                </div>
                {/* range min*/}
                <div
                    className="relative"
                >
                    <input 
                        className="absolute top-[-5px] h-[5px] w-full bg-transparent appearance-none pointer-events-none"
                        type="range" min="0" max="100" name="min" ref={minRef}
                        defaultValue={filters.min}
                        onChange={handleInputChange}
                    />
                    <input 
                    
                        onChange={handleInputChange}
                        className="absolute top-[-5px] h-[5px] w-full bg-transparent appearance-none pointer-events-none"
                        type="range" min="0" max="100" name="max" ref={maxRef}
                        defaultValue={filters.max}
                    />
                     <style>
        {`
          input[type="range"]::-webkit-slider-thumb {
            height: 17px;
            width: 17px;
            border-radius: 50%;
            background: #17A2B8;
            -webkit-appearance: none;
            appearance: none;
            pointer-events: auto;
            -webkit-appearance: none;
            box-shadow: 0 0 6px rgba(0,0,0,0.05);
          }

          input[type="range"]::-moz-range-thumb{
            height: 17px;
            width: 17px;
            border: none;
            border-radius: 50%;
            background: #17A2B8;
            pointer-events: auto;
            -moz-appearance: none;
            box-shadow: 0 0 6px rgba(0,0,0,0.05);
          }
        `}
      </style>
                </div>
                


            </div>
            
            {/*filter*/}
        <div className="flex" >

            <div>
                <p>Servicios</p>
                <select
                    name="filter"
                    onChange={handleInputChange}
                    ref={typeRef}
                >
                    <option
                        value=""
                        >
Todos
                    </option>
                    <option
                        value="cv"
                        >
Currículum
                    </option>
                    <option
                        value="perfil"
                        >
Perfil Linkedin
                    </option>
                    <option
                        value="practica"
                        >
Capacitación
                    </option>
                    <option
                        value="busqueda"
                        >
Búsqueda
                    </option>
                </select>
            </div>

            {/*select*/}

            <div
                
                >
                <p>Precio</p>

                <select
                    name="order"
                    onChange={handleInputChange}
                    ref={orderRef}
                >
                <option
                    value="ASC"
                    >Asc</option>
                <option
                    value="DESC"
                    >Desc</option>
            </select>
            </div>
        </div>
            <button style={{backgroundColor:"#c2a2d0", width:"50px", borderRadius:"3px"}} onClick={resetHandler}>Reset</button>
        </div>
    )
}

export default Filters;