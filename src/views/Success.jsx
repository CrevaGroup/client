import { useNavigate } from "react-router-dom";
import SuccessShop from "../assets/Successful-purchase-cuate.png";
import { Button } from "@material-tailwind/react";

function Success() {
  const navigate = useNavigate();

  function navigateHome() {
    navigate("/");
  }

  return (
    <div className="bg-custom-gray dark:bg-purple-900 dark:text-white h-screen">
      <div className="flex flex-col lg:flex-row items-center justify-center h-full">
        <div className="lg:w-1/2 mt-8 flex flex-col justify-center items-center">
          <h1 className="text-4xl text-center lg:text-left">
            Tu compra ha sido realizada con éxito
          </h1>
          <div className="mt-5 flex justify-center align-center">
            <Button className="bg-dark-violet" onClick={navigateHome}>
              Volver al inicio
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
          <img
            src={SuccessShop}
            alt="Compra Exitosa"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Success;
