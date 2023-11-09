import React from "react";


const Comentario = ({ nombre, comentario, imagenPerfil, voto, service }) => {

  return (
    <div className="bg-white p-2 lg:p-6 m-2 rounded-lg shadow-md  w-full text-dark-gray-blue">
      <div className="flex p-2">
        {imagenPerfil && (
          <img
            src={imagenPerfil}
            alt="Imagen de perfil"
            className="w-10 h-10 rounded-full mr-4"
          />
        )}
        <div
          className="w-full"
        >
          <div className="flex flex-col lg:flex-row items-center  w-full mb-4">
            <h4 className="font-semibold">{nombre}</h4>
            {voto !== undefined && (
              <div className="ml-4">
                <div className="m-2  ">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={`cursor-default ${
                        voto > index ? "text-yellow-500" : "text-gray-400"
                      }`}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>

              </div>
            )}
            <div
              className="  lg:ml-auto "
            >
              {service}
            </div>
          </div>
          
          <div
            className="flex items-center justify-center "
          >
            <div
              className=" w-full lg:w-11/12 "
            >
              <p>{comentario}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comentario;
