import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filtersService } from "../Redux/Actions/actions";


const Filters = () => {

    const dispatch = useDispatch()

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
        // dispatch(filtersService(filters))
    }

    const changeHandler = () => {}

    return(
        <div className=" grid grid-cols-1 lg:grid-cols-3">
            
            <div>
                <div>
                <p>Rango de precio</p>
                </div>

                <div>
                    <span>Min</span>
                    <input
                    className=" field"
                        type="number"
                        value={filters.min}
                        onChange={changeHandler}
                    />
                </div>

                <div>-</div>
                <div>
                    <span>Max</span>
                    <input
                        type="number"
                        value={filters.max}
                        onChange={changeHandler}
                    />
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
                        type="range" min="0" max="50" name="min"
                        defaultValue={filters.min}
                        onChange={handleInputChange}
                    />
                    <input 
                    
                        onChange={handleInputChange}
                        className="absolute top-[-5px] h-[5px] w-full bg-transparent appearance-none pointer-events-none"
                        type="range" min="0" max="50" name="max"
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

            <div>
                <p>Servicios</p>
                <select
                    name="filter"
                    onChange={handleInputChange}
                >
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
    )
}

export default Filters;