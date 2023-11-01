import React, { useState } from "react";
import SocialMedia from "../assets/Social media-amico.png";
import GroupChat from "../assets/Group Chat-bro.png";
import TestimonialCard from "./TestimonialCard";
import Comentario from "../components/Comentarios";
import { comentarios as initialComentarios } from "../components/comentariosData";
import Footer from "../components/Footer";

const Community = () => {
  const [comentarios, setComentarios] = useState(initialComentarios);
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [votoComentario, setVotoComentario] = useState(0);

  const handleComentarioChange = (e) => {
    setNuevoComentario(e.target.value);
  };

  const handleComentarioSubmit = () => {
    if (nuevoComentario.trim() !== "") {
      const nuevoId = comentarios.length + 1;
      const nuevoComentarioObj = {
        id: nuevoId,
        nombre: "Tu Nombre",
        comentario: nuevoComentario,
        imagenPerfil: "URL de tu imagen de perfil",
        voto: votoComentario,
      };

      setComentarios([...comentarios, nuevoComentarioObj]);
      setNuevoComentario("");
      setVotoComentario(0);
    }
  };

  return (
    <div>
      <div className="bg-custom-gray flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-5xl font-semibold mt-8">Nuestra Comunidad</h1>
          <img
            src={SocialMedia}
            alt="Imagen de la comunidad"
            className="my-4 mx-auto w-1/3 h-auto"
          />
        </div>
        <div className="my-8 text-center">
          <h2 className="text-5xl font-semibold">Testimonios</h2>
        </div>
        <div className="flex flex-wrap justify-center my-4">
          {/* Testimonio 1 */}
          <div className="max-w-md m-4 rounded-lg shadow-lg">
            <TestimonialCard />
          </div>

          {/* Testimonio 2 */}
          <div className="max-w-md m-4 rounded-lg shadow-lg">
            <TestimonialCard />
          </div>

          {/* Testimonio 3 */}
          <div className="max-w-md m-4 rounded-lg shadow-lg">
            <TestimonialCard />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">
              Pasa a dejar tu comentario
            </h2>
          </div>
          <div className="flex">
            <img
              style={{ width: "800px" }}
              src={GroupChat}
              alt="Imagen de la comunidad"
              className="h-auto"
            />
          </div>
        </div>

        <div className="w-2/4 p-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold">Deja tu comentario</h3>
            <textarea
              className="w-full mt-2 p-2 border rounded"
              placeholder="Escribe tu comentario..."
              value={nuevoComentario}
              onChange={handleComentarioChange}
            />
            <div className="flex items-center mt-4">
              <p className="mr-4">Votar tu comentario:</p>
              {[1, 2, 3, 4, 5].map((valor) => (
                <span
                  key={valor}
                  className={`cursor-pointer ${
                    votoComentario >= valor
                      ? "text-yellow-500"
                      : "text-gray-400"
                  }`}
                  onClick={() => setVotoComentario(valor)}
                >
                  &#9733;
                </span>
              ))}
            </div>
            <button
              className="bg-dark-violet text-white px-4 py-2 rounded mt-4"
              onClick={handleComentarioSubmit}
            >
              Publicar
            </button>
          </div>
        </div>
        <div className="my-10">
          <h2 className="text-2xl text-center font-semibold">Comentarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-8">
            {comentarios.map((comentario) => (
              <div key={comentario.id}>
                <Comentario
                  nombre={comentario.nombre}
                  comentario={comentario.comentario}
                  imagenPerfil={comentario.imagenPerfil}
                  voto={comentario.voto}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;