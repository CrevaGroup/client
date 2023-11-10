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

    const min = 1;
    const max = 100;
    const [styles, setStyles] = useState({
        left:`${min}%`,
        right: `${max}%`
    });
    const [des, setDes] = useState(false);
    const priceGap = 10;
    
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

        let newMin = filters.min;
        let newMax = filters.max;

        if (e.target.name === "min" || e.target.name === "max") {

            if (e.target.name === 'min') {
                newMin = parseInt(e.target.value, 10);
                if (newMin < 1) newMin = 1;
                if (newMax - newMin <= priceGap) {
                    newMax = newMin + priceGap;
                    if (newMax > 100) {
                        newMax = 100;
                        newMin = 100 - priceGap;
            }}} else {
                newMax = parseInt(e.target.value, 10);
                if (newMax > 100) newMax = 100;
                if (newMax - newMin <= priceGap) {
                    newMin = newMax - priceGap;
                    if (newMin < 1) {
                        newMin = 1;
                        newMax = 1 + priceGap;
            }}}
            const leftPercent = ((newMin - min) / (max - min)) * 100;
            const rightPercent = 100 - ((newMax - min) / (max - min)) * 100;

            setStyles({
                left: `${leftPercent}%`,
                right: `${rightPercent}%`
            });

            dispatch(getServices({
                ...filters,
                min: Number(newMin),
                max: Number(newMax)
            }));
        }

    };

    useEffect(() => {
        percentCalc();
    }, []);

    const percentCalc = () => {
        const leftPercent = ((filters.min - min) / (max - min)) * 100;
        const rightPercent = 100 - ((filters.max - min) / (max - min)) * 100;

        setStyles({
            left: `${leftPercent}%`,
            right: `${rightPercent}%`
        });
    }

    function resetHandler(){
        minRef.current.value = min;
        minSliderRef.current.value = min;
        maxRef.current.value = max;
        maxSliderRef.current.value = max;
        typeRef.current.setValue([]);
        orderRef.current.value = "ASC";
        percentCalc();
        // dispatch(resetFilters());
    }


    return(
        <div
            className="flex flex-col w-full   items-center justify-center"
        >
            <div className=" grid grid-cols-1 lg:grid-cols-3 lg:w-1/2 my-4 cursor-default">
            
            <div
                className="flex flex-col "
            >
                <div
                    className="flex items-center justify-center"
                >
                <p
                    className=" text-lg text-dark-gray-blue "
                >Rango de precio</p>
                </div>
                <div
                    className="flex items-center justify-center my-2 "
                >
                    <div
                    className="flex  flex-col items-center justify-center "
                >
                    <span
                        className="font-bold"
                    >Min</span>
                    <input
                        
                        name="min"
                        className=" field w-8 mx-2 flex text-center"
                        type="text"
                        ref={minRef}
                        value={filters.min}
                        onChange={handleInputChange}
                        disabled={true}
                    />
                </div>

                <div
                    className=" mx-4"
                >-</div>
                <div
                    className="flex  flex-col items-center justify-center"
                >
                    <span
                        className="font-bold"
                    >Max</span>
                    <input
                    className=" flex text-center w-8  mx-2 justify-"
                        name="max"
                        type="text"
                        value={filters.max}
                        onChange={handleInputChange}
                        ref={maxRef}
                        disabled={true}
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
                        style={{ left: styles.left,right:styles.right}}
                        className={`h-[5px] bg-dark-violet  rounded-xl absolute`}
                    >
                    </div>
                </div>
                {/* range min*/}
                    <div className="relative">
                        <input 
                            className={` absolute top-[-5px] h-[5px] w-full bg-transparent appearance-none pointer-events-none`}
                            type="range" min={min} max={max} name="min"
                            value={filters.min}
                            ref={minSliderRef}
                            onChange={handleInputChange}
                    />
                        <input 
                            onChange={handleInputChange}
                            className="absolute top-[-5px] h-[5px] w-full bg-transparent appearance-none pointer-events-none"
                            type="range" min={min} max={max} name="max"
                            value={filters.max}
                            ref={maxSliderRef}
                            disabled={des}
                        />
                        <style>
                            {`
                               input[type="range"]::-webkit-slider-thumb {
                               background: hsl(224,30%,27%);
                               -webkit-appearance: none;
                               appearance: none;
                               pointer-events: auto;
                           }

                           input[type="range"]::-moz-range-thumb {
                               border: none;
                               border-radius: 50%;
                               pointer-events: auto;
                               -moz-appearance: none;
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
                <p className="text-lg mb-2 text-dark-gray-blue">Incluye</p>
                 <Select
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
                    className=" text-lg mb-2 text-dark-gray-blue"
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
                className="m-2 text-lg"
            >Reiniciar filtros</button>
        </div>
        </div>
    )
}

export default Filters;