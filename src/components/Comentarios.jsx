import React from "react";

const Comentario = ({ nombre, comentario, imagenPerfil, voto }) => {
  return (
    <div className="bg-white p-6 m-2 rounded-lg shadow-md">
      <div className="flex items-center">
        {imagenPerfil && (
          <img
            src={imagenPerfil}
            alt="Imagen de perfil"
            className="w-10 h-10 rounded-full mr-4"
          />
        )}
        <div>
          <div className="flex items-center">
            <h4 className="font-semibold">{nombre}</h4>
            {voto !== undefined && (
              <div className="ml-4 ">
                <div className="m-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={`cursor-pointer ${
                        voto > index ? "text-yellow-500" : "text-gray-400"
                      }`}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          <p>{comentario}</p>
        </div>
      </div>
    </div>
  );
};

export default Comentario;
