import React, { useEffect, useState } from "react";
import SocialMedia from "../assets/Social media-amico.png";
import GroupChat from "../assets/Group Chat-bro.png";
import TestimonialCard from "./TestimonialCard";
import Comentario from "../components/Comentarios";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { createReview, getOneService, getReview, getServices, getUser,getOneUser, deleteReview } from "../Redux/Actions/actions";

const Community = () => {
  const [nuevoComentario, setNuevoComentario] = useState({
    description: '',
    serv: ''
  });
  const [votoComentario, setVotoComentario] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const reviews = useSelector(state => state.reviews);
  const services = useSelector(state => state.services);
  const filters = useSelector(state => state.filters);
  

  const handleComentarioChange = (e) => {
    const { name, value } = e.target;
    setNuevoComentario((prevComentario) => ({
      ...prevComentario,
      [name]: value
    }));
  };

  useEffect(() => {
    dispatch(getReview());
    dispatch(getServices(filters));
  }, [dispatch]);


  const delRev = async id => {
    await dispatch(deleteReview(id));
    await dispatch(getReview());
  }

  const handleComentarioSubmit = async () => {
    /**    if (nuevoComentario.trim() !== "") {
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
          
            const bdName = useSelector(state => state.oneUser);
  const bdService = useSelector(state => state.oneService);
  const dispatch = useDispatch();

  const fetchServicesAndUser = useCallback(() => {
    dispatch(getOneService(service));
    dispatch(getOneUser(nombre));
  }, [dispatch, nombre, service]);

  useEffect(() => {
    fetchServicesAndUser();
  }, [fetchServicesAndUser]);

  const test = () => {
    console.log(bdName);
    console.log(bdService);
  }

        } */
    if(nuevoComentario.description === '' || nuevoComentario.serv === '' || votoComentario === 0) {
      return(alert('Falta informacion'))
    }
    await dispatch(createReview(nuevoComentario, votoComentario, user.id))
    await dispatch(getReview());
    setVotoComentario(0);
    setNuevoComentario({
      description: '',
      serv: ''
    });
  };

  return (
    <div>
      <div className="bg-custom-gray min-h-screen p-4 text-dark-gray-blue cursor-default">
        <div className="text-center">
          <h1 className="text-3xl lg:text-5xl  my-4 whitespace-pre-line">
            Bienvenido a la comunidad Creva
          </h1>
          <p
            className="text-xl lg:text-3xl my-8 text-dark-violet/80 "
          >Diversas personas alrededor del mundo confían en <strong>CreVa</strong> para <strong>despegar su carrera profesional</strong></p>
          {/* <img
            src={SocialMedia}
            alt="Imagen de la comunidad"
            className="my-2 mx-auto w-2/3 md:w-1/3 h-auto"
          /> */}
        </div>
        <div className="my-4 text-center">
          <h2 className="text-3xl md:text-5xl text-dark-gray-blue/80 mt-20">Testimonios</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
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
        <div className="flex justify-center items-center my-14">
          <div className="text-center">
            <h2 className="text-2xl lg:text-3xl font-semibold">
              Cuéntanos tu experiencia
            </h2>
          </div>
          <div className="flex">
            <img
              
              src={GroupChat}
              alt="Imagen de la comunidad"
              className="h-auto w-[250px] lg:w-[400px]"
            />
          </div>
        </div>

        <div className="w-full md:w-2/4 p-4 mx-auto">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold">Deja tu comentario</h3>
            <textarea
              disabled={user?.fullName === undefined ? true : false}
              className="w-full mt-2 p-2 border rounded disabled:cursor-not-allowed"
              placeholder="Escribe tu comentario..."
              name="description"
              value={nuevoComentario.description}
              onChange={handleComentarioChange}
              maxLength={300}
            />
            <div
              className="lg:flex my-4 "
            >
              <div className="flex w-1/2 p-1 my-4">
                <p className="mr-4">Votar tu comentario:</p>
                {[1, 2, 3, 4, 5].map((valor) => (
                  <span
                    key={valor}
                    className={`cursor-pointer ${votoComentario >= valor
                      ? "text-yellow-500"
                      : "text-gray-400"
                      }`}
                    onClick={() => setVotoComentario(valor)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              <select
                className="ml-auto border border-light-violet rounded-lg p-1 my-4 "
                name="serv"
                onChange={handleComentarioChange}
              >
                <option
                  value={''}
                >Elegir servicio</option>
                {
                  services.map((service, index) =>
                  (<option
                    value={service.id}
                    key={index}
                  >{service.name}</option>)
                  )
                }
              </select>
            </div>
            <button
              disabled={user?.fullName === undefined ? true : false}
              className="bg-dark-violet text-white px-4 py-2 rounded mt-4 disabled:bg-dark-violet/70 disabled:cursor-not-allowed "
              onClick={handleComentarioSubmit}
            >
              Publicar
            </button>
          </div>
        </div>

        <div className="my-4">
          <h2 className="text-2xl md:text-3xl text-center font-semibold my-12">
            Comentarios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4 ">




            {
              reviews.length > 0 ? reviews.map((review, index) => {
                // dispatch(getOneService(review.serviceId));
                // dispatch(getOneUser(review.userId));

                // const bdName = useSelector(state => state.oneUser);
                // const bdService = useSelector(state => state.oneService);
                // console.log(bdName);
                // console.log(bdService)
                return (
                  <div
                    key={index}
                  >
                    <Comentario
                      nombre={review.user.fullName}
                      comentario={review.description}
                      imagenPerfil={review.user.photo}
                      voto={review.assessment}
                      service={review.service.name}
                      del={delRev}
                      id={review.id}
                    />
                  </div>
                )
              }) : ''
              /*{comentarios.map((comentario) => (
              <div key={comentario.id}>
                <Comentario
                  nombre={comentario.nombre}
                  comentario={comentario.comentario}
                  imagenPerfil={comentario.imagenPerfil}
                  voto={comentario.voto}
                />
              </div>
            ))}*/
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
