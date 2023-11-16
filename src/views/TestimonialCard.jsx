import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import argFlag from '../assets/argFlag.png'
import mexFlag from '../assets/mexFlag.png'
import colFlag from '../assets/colFlag.png'

const TestimonialCard = () => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-3 cursor-default"
    >
      <div className="w-full max-w-[28rem] mx-auto ">
        <Card
          color="transparent"
          shadow={true}
          className="bg-white flex dark:bg-[#C3A3D0] w-full"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-4 sm:mx-8 md:mx-10 flex items-center flex-col sm:flex-row gap-4 pt-4 pb-2"
          >
            <div
              className=" w-full flex items-center justify-center"

            >
            <Avatar
              style={{ borderRadius: "100%", width: "100px", marginTop: "0" }}
              size="lg"
              variant="circular"
              src={argFlag}
              alt="tania andrew"
            />
            </div>
          </CardHeader>
          <CardBody className="mb-4 sm:mb-6 p-4 sm:p-10 dark:text-gray-100">
            <p
              className=" whitespace-pre-line"
            >
              {`Chicos son lo más!!! Gracias por el CV quedó muy bueno, ya le pase el dato a mis conocidos jaja les cuento como me va en la entrevista el lunes, GRACIAS ❤`}
            </p>
          </CardBody>
        </Card>
      </div>


      <div className="w-full max-w-[28rem] mx-auto ">
        <Card
          color="transparent"
          shadow={true}
          className="bg-white flex dark:bg-[#C3A3D0] w-full"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-4 sm:mx-8 md:mx-10 flex items-center flex-col sm:flex-row gap-4 pt-4 pb-2"
          >
            <div
              className=" w-full flex items-center justify-center"

            >
            <Avatar
              style={{ borderRadius: "100%", width: "100px", marginTop: "0" }}
              size="lg"
              variant="circular"
              src={mexFlag}
              alt="tania andrew"
            />
            </div>
          </CardHeader>
          <CardBody className="mb-4 sm:mb-6 p-4 sm:p-10 dark:text-gray-100">
            <p
              className=" whitespace-pre-line"
            >
              {`Hoy me han confirmado que he sido seleccionado para la vacante de ###. 
              Estoy muy contento y agradecido por su ayuda en mi búsqueda y con el currículum`}
            </p>
          </CardBody>
        </Card>
      </div>


      <div className="w-full max-w-[28rem] mx-auto ">
        <Card
          color="transparent"
          shadow={true}
          className="bg-white flex dark:bg-[#C3A3D0] w-full"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-4 sm:mx-8 md:mx-10 flex items-center flex-col sm:flex-row gap-4 pt-4 pb-2"
          >
            <div
              className=" w-full flex items-center justify-center"

            >
              <Avatar
                style={{ borderRadius: "100%", width: "100px", marginTop: "0" }}
                size="lg"
                variant="circular"
                src={colFlag}
                alt="tania andrew"
              />
            </div>
            
          </CardHeader>
          <CardBody className="mb-4 sm:mb-6 p-4 sm:p-10 dark:text-gray-100">

              <p
              className="whitespace-pre-line"
            >{`Hola chicos. Buenas tardes.

              Se me fue el mensaje anterior por equivocación. Quedaron geniales las fotos.
              Muchas gracias por ayudarme a corregir el CV 💜 ahora si hay mas posibilidades que me llamen en alguna oferta laboral jaja

                Les mando un abrazo. Que tengas un lindo dia`}</p>

          </CardBody>
        </Card>
      </div>


    </div>
    
  );
};

export default TestimonialCard;
