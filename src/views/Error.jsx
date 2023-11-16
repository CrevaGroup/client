import { useNavigate } from "react-router-dom";

import { Button } from "@material-tailwind/react"

function Error(){
    const navigate = useNavigate();

    function navigateServices() {
        navigate("/");
    }

    return(
        <div className="bg-custom-gray">
            <div className="flex flex-col lg:flex-row items-center justify-center">
                <div className="lg:w-1/2 mt-8">
                    <h1 className="text-4xl flex justify-center">Oops! Algo ha fallado en la compra</h1>
                    <div className=" flex justify-center">
                        <Button onClick={navigateServices} className="mt-5 bg-dark-violet py-2 px-4">Inicio</Button>
                    </div>
                    <div className="mt-5 mx-5 flex items-center justify-center">
                        <div className="w-76 p-4 bg-violet-200 rounded-md text-center">
                            <p className="mb-4">Si necesitas ayuda para realizar tu compra, contáctanos.</p>
                            <p><a
                                href="https://api.whatsapp.com/send?phone=5491167867530&text=%C2%A1Hola%21+Quiero+conocer+m%C3%A1s+sobre+los+servicios+de+CreVa+Group."
                                target="_blank"
                                className="text-blue-500">
                                Nuestro WhatsApp
                            </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <img src={Error} alt="Error Image" style={{ width: `660px` }} />
                </div>
            </div>
        </div>
    )
}

export default Error;