import React, { useState } from "react";


const Filters = ({filtrado}) => {
    const [filters, setFilters] = useState({
        min:1,
        max:100,
        order:'',
        filter:''
    })
    const handleInputChange = e => {
        console.log(e.target.value)
    }

    const orderHandler = e => {
        setFilters({
            ...filters,
            order:e.target.value
        })
        filtrado(filters)
    }
    
    const filterHandler = e => {
        setFilters({
            ...filters,
            filter:e.target.value
        })
        filtrado(filters)
    }

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
                        value="10"
                    />
                </div>

                <div>-</div>
                <div>
                    <span>Max</span>
                    <input
                        type="number"
                        value="40"
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
                        type="range" min="0" max="50"
                        defaultValue={filters.min}
                        onChange={handleInputChange}
                    />
                    <input 
                    
                        onChange={handleInputChange}
                        className="absolute top-[-5px] h-[5px] w-full bg-transparent appearance-none pointer-events-none"
                        type="range" min="0" max="50"
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
                <p>Palabras clave</p>
                <select
                    onChange={filterHandler}
                >
                    <option
                        value="cv"
                    >

                    </option>
                    <option
                        value="perfil"
                    >

                    </option>
                    <option
                        value="practica"
                    >

                    </option>
                    <option
                        value="busqueda"
                    >

                    </option>
                </select>
            </div>

            {/*select*/}

            <div
                
            >
                <p>Precio</p>

                <select
                    onChange={orderHandler}
                >
                <option
                    value="ASC"
                >A-Z</option>
                <option
                    value="DESC"
                >Z-A</option>
            </select>
            </div>
        </div>
    )
}

export default Filters;