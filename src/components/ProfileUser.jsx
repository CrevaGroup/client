import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserById, clearPopupComponent, updateUser } from "../Redux/Actions/actions";

import { Button } from "@material-tailwind/react";
import Close from "../assets/closeIcon.svg";

function ProfileUser() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const currentYear = new Date().getFullYear();
  const [nationality, setNationality] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [infoUser, setInfoUser] = useState({
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    age: user.age,
    nacionalidad: user.nacionalidad,
    photo: user.photo,
    curriculum: "",
  });

  const [meses, setMeses] = useState([
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ])

  const [countries, setCountries] = useState([
    "Argentina",
    "Brasil",
    "Chile",
    "Colombia",
    "México",
    "Uruguay",
    "Bolivia",
    "Perú",
    "Venezuela",
    "Estados Unidos",
  ]);

  const [birthdate, setBirthdate] = useState({
    day: "",
    month: "",
    year: currentYear,
  });

  function photoHandle(event) {
    setInfoUser({
      ...infoUser,
      photo: event.target.files[0],
    });
  }

  function curriculumHandle(event) {
    setInfoUser({
      ...infoUser,
      curriculum: event.target.files[0]
    });
  }

  function handleEditClick() {
    setIsEditing(true)
  }

  function handleSaveClick() {
    setIsEditing(false)
    dispatch(updateUser(infoUser, user))
  }

  function deleteUser() {
    dispatch(deleteUserById(user.id))
  }

  function closePopup() {
    dispatch(clearPopupComponent());
  }

  return (
    <div className="bg-white rounded-md p-4">
      <button onClick={closePopup}>
        <img src={Close} alt="Close Popup" className="ml-4 mt-4 w-6" />
      </button>
      <div className="text-center">
        <h1 className="text-4xl mb-5">Mi Perfil</h1>
      </div>
      <div className="flex flex-col items-center justify-center ml-5 mr-5 mt-8 mb-8 lg:flex-row">
        <div className="text-center mb-6 lg:mb-0">
          <div
            className="w-60 h-60 mx-auto rounded"
            style={{ backgroundColor: `#C2A3D1` }}
          >
            <div className="flex items-center justify-center w-full h-full">

              {isEditing ? (
                <div className="flex-col ml-16 items-center w-full" >
                  <div className="rounded-full overflow-hidden w-3/4 h-3/4">
                    <img src={user?.photo} alt="Imagen de Usuario" className="w-full h-full object-cover" />
                  </div>
                  <input type="file" accept="image/*" name="photo" onChange={photoHandle} className="mb-4" />
                </div>) :
                (<div className="rounded-full overflow-hidden w-3/4 h-3/4">
                  <img src={user?.photo} alt="Imagen de Usuario" className="w-full h-full object-cover" />
                </div>)}

            </div>
          </div>
        </div>
        <div className="flex-col justify-center items-center lg:ml-8">
          <h3 className="text-2xl mb-4">{user.fullName}</h3>
          {isEditing ? (<h3>Fecha de Nacimiento:

            <select name="" id="" onChange={(event) => setInfoUser({ ...infoUser, age: event.target.value })}>
              {Array.from({ length: 31 }, (_, i) => (
                <option value="" ></option>
              ))}
            </select>

            <select name="" id="">{meses.map((meses) => (
              <option key={meses} value={meses}>{meses}</option>))}</select>

            <select name="" id="" options={Array.from(
              { length: currentYear - 1923 + 1 },
              (_, i) => ({
                label: (currentYear - i).toString(),
                value: (currentYear - i).toString(),
              })
            )} /></h3>)

            : (<h3>Edad: {user?.age}</h3>)}

          {isEditing ? (<h3>Pais: <select onChange={(event) => setInfoUser({ ...infoUser, nacionalidad: event.target.value })}>{countries.map((country) => (
            <option key={country} value={country}>
              {country}</option>))}

          </select></h3>)

            : (<h3>Pais: {user?.nacionalidad}</h3>)}

          {isEditing ? (<h3>Email: <input type="text" value={infoUser.email} onChange={(event) => setInfoUser({ ...infoUser, email: event.target.value })} /></h3>
          ) : (<h3>Email: {user?.email}</h3>)}

          {isEditing ? (<h3>Curriculum: <input type="file" title=" asd" name="curriculum" onChange={curriculumHandle} className="mb-4 [appearance:button] ::-webkit-file-upload-button" /></h3>)
            : (<h3>Curriculum: {user.curriculum ? <a target="blank" href={user.curriculum}>Link</a> : null}</h3>)}

          <div className="mt-4 space-x-4">
            <Button className="bg-dark-violet" onClick={deleteUser}>Eliminar Perfil</Button>
            {isEditing ? (<Button className="bg-dark-violet mr-4" onClick={handleSaveClick}>Guardar</Button>) : (
              <Button className="bg-dark-violet" onClick={handleEditClick}>Editar</Button>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUser;
