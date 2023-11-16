import { useNavigate } from "react-router-dom";
import SuccessShop from "../assets/Successful-purchase-cuate.png"
import { Button } from "@material-tailwind/react";

function Success() {
    const navigate = useNavigate()

    function navigateHome() {
        navigate("/")
    }

    return (
        <div className="bg-custom-gray">
            <div className="flex flex-col lg:flex-row items-center justify-center">
                <div className="lg:w-1/2 mt-8">
                    <h1 className="text-4xl flex justify-center ml-12">Tu compra ha sido realizada con éxito</h1>
                    <div className="mt-5 flex justify-center">
                        <Button className="bg-dark-violet" onClick={navigateHome}>Volver al inicio</Button>
                    </div>
                    <div className="mt-5 mx-5 flex items-center justify-center">
                        <div className="w-76 p-4 bg-violet-200 rounded-md text-center">
                            <p className="mb-4">Si aún no has recibido un correo de confirmación, por favor, contáctanos.</p>
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
                    <img src={SuccessShop} alt="Compra Exitosa" style={{ width: `660px` }} />
                </div>
            </div>
        </div>
    )
}

export default Success;