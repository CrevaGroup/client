import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { filtersService } from "../Redux/Actions/actions";

const Filters = () => {

    const dispatch = useDispatch()

    const [styles, setStyles] = useState({
        left: '',
        right: ''
    });
    const minRef = useRef()
    const maxRef = useRef()
    const typeRef = useRef()
    const orderRef = useRef()

    const [des, setDes] = useState(false);
    const min = 1;
    const max = 100;

    const priceGap = 10;
    
    const [filters, setFilters] = useState({
        min:min,
        max:max,
        order:'',
        filter:''
    })


    const handleInputChange = e => {
    setFilters(prevFilters => {
        let newMin = prevFilters.min;
        let newMax = prevFilters.max;
        
        if(e.target.name === 'min' || e.target.name === 'max'){
            if (e.target.name === 'min') {
            newMin = parseInt(e.target.value, 10);
            if (newMin < 1) {
                newMin = 1;
            }
            if (newMax - newMin <= priceGap) {
                newMax = newMin + priceGap;
                if (newMax > 100) {
                    newMax = 100;
                    newMin = 100 - priceGap;
                }
            }
        } else if (e.target.name === 'max') {
            newMax = parseInt(e.target.value, 10);
            if (newMax > 100) {
                newMax = 100;
            }
            if (newMax - newMin <= priceGap) {
                newMin = newMax - priceGap;
                if (newMin < 1) {
                    newMin = 1;
                    newMax = 1 + priceGap;
                }
            }
        }
        
        return {
            ...prevFilters,
            min: newMin,
            max: newMax
        };
        }
                return({
            ...filters,
            [e.target.name]: e.target.value,
        })

    });
    // dispatch(filtersService({
    //         ...filters,
    //         [e.target.name]: e.target.value,
    //     }))
};

    useEffect(()=>{
        // dispatch(filtersService(filters))
      }, [])

    function resetHandler(){
        setFilters({
            min:1,
            max:100,
            order:'',
            filter:''
        })
        // dispatch(filtersService({
        //     min:1,
        //     max:100,
        //     order:'',
        //     filter:''
        // }))
        minRef.current.value = 1;
        maxRef.current.value = 100;
        typeRef.current.value = "";
        orderRef.current.value = "ASC";
    }


    return(
        <div className=" grid grid-cols-1 lg:grid-cols-3 lg:w-1/2 my-4 cursor-default">
            
            <div
                className="flex flex-col "
            >
                <div
                    className="flex items-center justify-center"
                >
                <p>Rango de precio</p>
                </div>
                <div
                    className="flex items-center justify-center my-2 "
                >
                    <div
                    
                >
                    <span>Min</span>
                    <input
                        
                        name="min"
                        className=" field w-20 mx-2 "
                        type="number"
                        ref={minRef}
                        value={filters.min}
                        onSubmit={handleInputChange}
                    />
                </div>

                <div
                    className=" mx-4"
                >-</div>
                <div>
                    <span>Max</span>
                    <input
                    className=" w-20  mx-2"
                        name="max"
                        type="number"
                        value={filters.max}
                        onChange={handleInputChange}
                        ref={maxRef}
                    />
                </div>
                </div>
                
                {/*slider*/}
                <div
                    className="p-2"
                >
                    <div
                    className="h-[5px] bg-light-violet  rounded-xl relative  w-full"
                >
                    <div
                        style={{ left: styles.left}}
                        className={`h-[5px] bg-dark-violet  rounded-xl absolute w-full`}
                    >
                    </div>
                </div>
                {/* range min*/}
                    <div className="relative">
                        <input 
                            className={` absolute top-[-5px] h-[5px] w-full bg-transparent appearance-none pointer-events-none`}
                            type="range" min={min} max={max} name="min"
                            value={filters.min}
                            onChange={handleInputChange}
                    />
                        <input 
                            onChange={handleInputChange}
                            className="absolute top-[-5px] h-[5px] w-full bg-transparent appearance-none pointer-events-none"
                            type="range" min={min} max={max} name="max"
                            value={filters.max}
                            disabled={des}
                        />
                        <style>
                            {`
                               input[type="range"]::-webkit-slider-thumb {
                               height: 17px;
                               width: 17px;
                               border-radius: 50%;
                               background: hsl(224,30%,27%);
                               -webkit-appearance: none;
                               appearance: none;
                               pointer-events: auto;
                               box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
                           }

                           input[type="range"]::-moz-range-thumb {
                               height: 17px;
                               width: 17px;
                               border: none;
                               border-radius: 50%;
                               pointer-events: auto;
                               -moz-appearance: none;
                               box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
                           }
                       `}
                        </style>
                    </div>
                </div>
                


            </div>
            
            {/*filter*/}

            <div
                className="flex flex-col items-center my-4 lg:my-0"
            >
                <p>Servicios</p>
                <select
                    name="filter"
                    onChange={handleInputChange}
                    ref={typeRef}
                >
                    <option
                        value=""
                    >
                        Elegir servicio
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
                className="flex flex-col items-center my-4 lg:my-0"
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
    )
}

export default Filters;