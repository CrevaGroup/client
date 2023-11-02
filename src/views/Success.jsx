import { useNavigate } from "react-router-dom";
import SuccessShop from "../assets/Successful-purchase-cuate.png"
import { Button } from "@material-tailwind/react";

function Success() {
    const navigate = useNavigate()

    function navigateHome(){
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
                </div>
                <div className="lg:w-1/2">
                    <img src={SuccessShop} alt="Compra Exitosa" style={{width:`660px`}} />
                </div>
            </div>
        </div>
    )
}

export default Success;