import Select from 'react-select';
import  { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterServices, resetFilters, getServices } from "../Redux/Actions/actions";

const Filters = () => {

    const minRef = useRef();
    const minSliderRef = useRef();
    const maxRef = useRef();
    const maxSliderRef = useRef();
    const typeRef = useRef();
    const orderRef = useRef();
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filters);
    const types = useSelector(state => state.types);
    const user = useSelector(state => state.user);
    const services = useSelector(state => state.services);
    const country = useSelector(state => state.config?.country)
    const config = useSelector(state => state.config);
    let maxVal = services.length ? Math.round(Math.max(...services.map(service => service.price)) * 1.3) : 100;
    if (user?.nacionalidad === 'Argentina' || country === 'AR') maxVal = Math.round(maxVal * config.dolarValue);

    const handleInputChange = e => {
        if (!e.target) {
            dispatch(getServices({
                ...filters,
                types: e.map(type => type.value)
            }));
            return;
        }
       
        if (e.target.name === "order")
            dispatch(getServices({
                ...filters,
                [e.target.name]: e.target.value
            }));

        if (e.target.name === "min") {
            dispatch(getServices({
                ...filters,
                min: user?.nacionalidad === 'Argentina' || country === 'AR' ? e.target.value / config.dolarValue : e.target.value
            }));
            console.log(e.target.value / config.dolarValue);
        }

        if (e.target.name === "max") {
            dispatch(getServices({
                ...filters,
                max: user?.nacionalidad === 'Argentina' || country === 'AR' ? e.target.value / config.dolarValue : e.target.value
            }));
        }
    };

    useEffect(() => {
        return () => dispatch(resetFilters());
    }, []);

    function resetHandler(){
        minRef.current.value = min;
        minSliderRef.current.value = min;
        maxRef.current.value = max;
        maxSliderRef.current.value = max;
        typeRef.current.setValue([]);
        orderRef.current.value = "ASC";
        percentCalc();
        dispatch(resetFilters());
    }


    return(
        <div
            className="flex flex-col w-full   items-center justify-center  dark:text-white"
        >
            <div className=" grid grid-cols-1 lg:grid-cols-3 lg:w-1/2 my-4 cursor-default">
            
            <div
                className="flex flex-col "
            >
                <div
                    className="flex items-center justify-center"
                >
                <p
                    className="font-bold text-dark-gray-blue  dark:text-white"
                >Rango de precio</p>
                </div>
                <div
                    className="flex items-center justify-center my-2 "
                >
                    <div className="flex  flex-col items-center justify-center ">
                        <input
                            name="min"
                            className=" flex text-center w-16 h-8 mx-2 justify- [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            type="number"
                            ref={minRef}
                            placeholder={1}
                            onChange={handleInputChange}
                        />
                    </div>

                <div
                    className=" mx-4"
                >-</div>
                <div
                    className="flex  flex-col items-center justify-center"
                >
                    <input
                        className=" flex text-center w-16 h-8 mx-2 justify- [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        name="max"
                        type="number"
                        placeholder={maxVal}
                        onChange={handleInputChange}
                        ref={maxRef}
                    />
                </div>
                </div>
                
            </div>
            
            {/*filter*/}

            <div
                className="flex flex-col items-center my-4 lg:my-0"
            >
                <p className="font-bold mb-2 text-dark-gray-blue  dark:text-white">Incluye</p>
                 <Select
                    className='w-60'
                    defaultValue={[]}
                    isMulti
                    name="filter"
                    onChange={handleInputChange}
                    ref={typeRef}
                    options={[
                        ...types.map(type => { 
                            return { value: type.name, label: type.name }
                        })
                    ]}
                />
            </div>

            {/*select*/}

            <div
                className="flex flex-col items-center my-4 lg:my-0"
            >
                <p
                    className="font-bold mb-2 text-dark-gray-blue  dark:text-white"
                >Ordenar por precio</p>
                
                <select
                    name="order"
                    onChange={handleInputChange}
                    ref={orderRef}
                    className="peer rounded-lg border border-light-violet  bg-transparent outline outline-0 transition-all   focus:border-1 focus:border-dark-violet p-1"
                    >
                
                <option
                    value="ASC"
                >Ascendente</option>
                <option
                    value="DESC"
                >Descendente</option>
            </select>
            </div>
        </div>
        <div
            className="border-2 border-light-violet rounded-3xl transition duration-200 ease-in-out hover:bg-light-violet hover:duration-200"
        >
            <button
                onClick={resetHandler}
                className="m-2"
            >Reiniciar filtros</button>
        </div>
        </div>
    )
}

export default Filters;