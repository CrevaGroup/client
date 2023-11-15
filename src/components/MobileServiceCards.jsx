import { Collapse } from "@material-tailwind/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import example from '../assets/example.png'
const MobileServiceCards = ({img, name, description, price, id, items, modalidad}) => {
    const [open,setOpen] = useState(false);

    const cardHandler = () => {
        setOpen(curr => !curr);
    }

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
        <div className={`lg:hidden   overflow-hidden   rounded-3xl transition-all duration-300`}>
            <div>
                <div className={`flex flex-col  items-center justify-center text-center  bg-gradient-to-b from-black/70 to-black/60`}>
                    <h1 className="flex text-2xl font-bold text-white lg:hidden h-16  text-center items-center">
                        {name}
                    </h1>
                    <button
                        className="  p-2 rounded-full text-lg   w-full text-light-gray "
                        onClick={()=>cardHandler()}
                    >{open ? 'Ver menos' : 'Ver más'}</button>
                </div>
                <Collapse open={open}>
                    <div>
                       <div className={`block group relative items-center justify-center overflow-hidden cursor-default  w-[352px] min-h-[530px]  rounded-br-3xl rounded-bl-3xl  transition-all duration-300`}>
                            <img
                                className="h-full w-full object-cover "
                                src={img}
                                alt="ex"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/50"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center ">
                                <div className="text-light-gray">
                                    <p>{description}</p>
                                </div>
                                <div className="italic text-light-gray my-4">
                                    <div className="italic text-light-gray my-6 space-y-2">
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

                                <div className="flex flex-row justify-center items-center space-x-4">
                                    {user.nacionalidad === 'Argentina'
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
                </Collapse>
            </div>
        </div>
    )
}

export default MobileServiceCards;

