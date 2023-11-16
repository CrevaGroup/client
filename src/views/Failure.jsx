import { useNavigate } from "react-router-dom";

import { Button } from "@material-tailwind/react"

import Error from "../assets/400-Error-Bad Request-pana.png"

function Failure() {
    const navigate = useNavigate();

    function navigateServices() {
        navigate("/Services");
    }

    return (
        <div className="bg-custom-gray">
            <div className="flex flex-col lg:flex-row items-center justify-center">
                <div className="lg:w-1/2 mt-8">
                    <h1 className="text-4xl flex justify-center">Oops! Algo ha fallado</h1>
                    <div className=" flex justify-center">
                        <Button onClick={navigateServices} className="mt-5 bg-dark-violet py-2 px-4">Nuestros Servicios</Button>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <img src={Error} alt="Error Image" style={{ width: `660px` }} />
                </div>
            </div>
        </div>
    )
}

export default Failure;