import React, { useState } from "react";
import example from '../assets/example.png'
import { useDispatch, useSelector } from "react-redux";
import { getTransactionLink } from "../Redux/Actions/actions";


const ServiceCards = ({img, name, description, price, id, items, modalidad}) => {

    const dispatch = useDispatch()

    const user = useSelector(state => state.user)
    const usd = useSelector(state => state.config?.dolarValue);

    const [transactionInfo, setTransactionInfo] = useState({
        userId: user.id,
        items: [{
            id: id,
            title: name,
            photo: img,
            description: description,
            price: price
        }]
    })

    function clickHandler(){
        dispatch(getTransactionLink(transactionInfo, user.nacionalidad))
    }

    return(
        <div
            className="hidden lg:block group relative items-center justify-center overflow-hidden cursor-default hover:shadow-xl hover:shadow-black/30 transition-shadow w-[416px] h-[576px] rounded-3xl"
        >
            <div
                className="h-[544px] w-[464px]"
            >
                <img
                    className="h-full w-full object-cover  group-hover:scale-105 transition-transform duration-500"
                    src={img}
                    alt="ex"
                >
                </img>
                <div
                    className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"
                >
                </div>
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[75%] group-hover:translate-y-0 transition-all duration-500"
                >
                    <h1
                        className="text-2xl font-bold text-custom-violet"
                    >
                        {name}
                    </h1>
                    <div
                        className="text-lg italic text-light-gray mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-start "
                    >
                        <p
                            className="my-2 text-center text-xl"
                        >
                                {description}

                        </p>
                        <p
                            className="my-2 text-xl text-white"
                        >Contenido:</p>
                         <ul
                            className="my-2 ml-8 hidden lg:block"
                        >
                            
                            {
                                items.map((item, index) => 
                                    <li
                                        key={index}
                                    >
                                        {item}
                                    </li>)
                            }
                        </ul>
                        <p
                            className="my-2 text-xl text-white"
                        >
                            Modalidad:                            
                        </p>
                        <ul
                            className="my-2 ml-8 hidden lg:block"
                        >
                            {
                                modalidad.map((mod,index) => 
                                    <li
                                        key={index}
                                    >
                                        {mod}
                                    </li>)
                            }
                        </ul> 
                        </div>


                        <div className=" w-2/3 flex items-center  ml-auto">
                            <button
                                onClick={clickHandler}
                                className="rounded-full shadow shadow-black/60 bg-dark-violet py-2 px-3.5  capitalize text-white  font-bold text-xl hover:text-semidark-gray duration-500"
                            >
                                Comprar
                            </button>
                            <div className=" ml-2">
                                {user.nacionalidad === 'Argentina'
                                    ? <p className="text-white font-bold text-2xl ">{`$${price * usd}`}</p>
                                    : <p className="text-white font-bold text-2xl ">{`$${price}`}</p>
                                }
                            </div>
                        </div>

                </div>

            </div>
        </div>
    )
}

export default ServiceCards;

