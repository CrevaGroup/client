import React, { useState } from "react";
import example from '../assets/example.png'
import { useDispatch, useSelector } from "react-redux";
import { getTransactionLink } from "../Redux/Actions/actions";



const ServiceCards = ({img, name, description, items, modalidad, price, id}) => {


    const dispatch = useDispatch()

    const user = useSelector(state => state.user)
    const usd = useSelector(state => state.config?.dolarValue);
    const country = useSelector(state => state.config?.country)

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
        <div className="hidden lg:block group relative items-center justify-center overflow-hidden cursor-default hover:shadow-xl hover:shadow-black/10 transition-shadow w-[416px] h-[544px] rounded-3xl">
            <div className="h-[544px] w-[448px]">
                <img
                    className="h-full w-full object-cover  group-hover:scale-105 transition-transform duration-500"
                    src={img}
                    alt="ex"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40">
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center ">
                    <div className="text-light-gray translate-y-[250%] group-hover:translate-y-0 transition-all duration-500">
                        <h1 className="text-2xl font-bold text-white ">{name}</h1>
                        
                    </div>
                    <div className="italic text-light-gray my-4">
                        <div className="italic text-light-gray my-6 space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <p>{description}</p>
                            <h3 className="font-bold">Contenido:</h3>
                            <ul>
                                {items.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                            <h3 className="font-bold">Modalidad:</h3>
                            <ol>
                                {modalidad.map((item, index) => <li key={index}>{item}</li>)}
                            </ol>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center space-x-4 translate-y-[-200%] group-hover:translate-y-0 transition-all duration-500">
                        {user.nacionalidad === 'Argentina' || country === 'AR'
                        ? <p className="text-white font-bold text-2xl ">{`$ ${Math.round(price * usd)}`} ARS</p>
                        : <p className="text-white font-bold text-2xl ">{`$ ${price} USD`}</p>
                        }
                        <button
                            onClick={clickHandler}
                            className="rounded-full shadow shadow-black/60 bg-dark-violet py-2 px-3.5  capitalize text-white  font-bold text-xl hover:text-semidark-gray duration-500"
                        >Comprar</button>
                    </div>
                </div>
            </div>
        </div>


        // <div className="hidden lg:block group relative items-center justify-center overflow-hidden cursor-default hover:shadow-xl hover:shadow-black/30 transition-shadow w-[352px] h-[448px] lg:w-[416px] lg:h-[544px] rounded-3xl">
        //     <div className="w-[352px] h-[448px] lg:h-[544px] lg:w-[448px]">
        //         <img
        //             className="h-full w-full object-cover  group-hover:scale-105 transition-transform duration-500"
        //             src={img}
        //             alt="ex"
        //         />
        //         <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
        //         </div>
        //         <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[75%] group-hover:translate-y-0 transition-all duration-500">
        //             <h1 className="text-2xl font-bold text-custom-violet">{name}</h1>
        //             <div className="text-lg italic text-light-gray mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-start ">
        //                 <p className="my-2 text-center text-xl">{description}</p>
        //             </div>
        //             <div className=" w-2/3 flex items-center  ml-auto">
        //                 <button
        //                     onClick={clickHandler}
        //                     className="rounded-full shadow shadow-black/60 bg-dark-violet py-2 px-3.5  capitalize text-white  font-bold text-xl hover:text-semidark-gray duration-500"
        //                 >Comprar</button>

        //                 <div className=" ml-2">
        //                     {user.nacionalidad === 'Argentina'
        //                     ? <p className="text-white font-bold text-2xl ">{`$${price * usd}`}</p>
        //                     : <p className="text-white font-bold text-2xl ">{`$${price}`}</p>
        //                     }
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default ServiceCards;

