import { useNavigate } from "react-router-dom";

import { Button } from "@material-tailwind/react"

import Error404 from "../assets/404-error.svg"

function Error(){
    const navigate = useNavigate();

    function navigateServices() {
        navigate("/");
    }

    return(
        <div className="bg-custom-gray">
            <div className="flex flex-col lg:flex-row items-center justify-center">
                <div className="lg:w-1/2 mt-8">
                    <h1 className="text-3xl flex justify-center">Oops! La página que estás buscando no existe</h1>
                    <div className=" flex justify-center">
                        <Button onClick={navigateServices} className="mt-5 bg-dark-violet py-2 px-4">Inicio</Button>
                    </div>
                    <div className="mt-5 mx-5 flex items-center justify-center">
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <img src={Error404} alt="Error Image" style={{ width: `660px` }} />
                </div>
            </div>
        </div>
    )
}

export default Error;