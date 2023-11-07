import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserById, setPopup, updateUser } from "../Redux/Actions/actions";

import { Button } from "@material-tailwind/react";
import Close from "../assets/closeIcon.svg";

function ProfileUser() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);
  const [infoUser, setInfoUser] = useState({
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    age: user.age,
    nacionalidad: user.nacionalidad,
    photo: user.photo,
    curriculum: "",
    password:""
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
    dispatch(setPopup(""));
  }

  return (
    <div className="w-108 h-108 bg-white rounded-md">
      <button onClick={closePopup}>
        <img src={Close} alt="Close Popup" className="w-8" />
      </button>
      <div className="text-center">
        <h1 className="text-4xl mb-5">Tu Perfil</h1>
      </div>
      <div className="flex flex-col items-center justify-center ml-5 mr-5 mt-8 mb-8 lg:flex-row lg:items-start lg:justify-center">
        <div className="text-center mb-6 lg:mb-0">
          <h3 className="text-2xl mb-4">{user.fullName}</h3>
          <div
            className="w-80 h-80 mx-auto rounded"
            style={{ backgroundColor: `#C2A3D1` }}
          >
            <div className="flex items-center justify-center w-full h-full">
              <div className="rounded-full overflow-hidden w-3/4 h-3/4">
                {isEditing ? (<input type="file" accept="image/*" name="photo" onChange={photoHandle} className="mb-4" />) :
                  (<img src={user?.photo} alt="Imagen de Usuario" className="w-full h-full object-cover" />)}
              </div>
            </div>
          </div>
        </div>
        <div className="text-xl mt-20 lg:ml-8">
          {/* {isEditing ? (<h3>Edad: <input type="text" value={infoUser.age} onChange={(event) => setInfoUser({ ...infoUser, age: event.target.value })} /></h3>
          ) : (<h3>Edad: {user?.age}</h3>)} */}
          {isEditing ? (<h3>Pais: <input type="text" value={infoUser.nacionalidad} onChange={(event) => setInfoUser({ ...infoUser, nacionalidad: event.target.value })} /></h3>
          ) : (<h3>Pais: {user?.nacionalidad}</h3>)}
          {isEditing ? (<h3>Email: <input type="text" value={infoUser.email} onChange={(event) => setInfoUser({ ...infoUser, email: event.target.value })} /></h3>
          ) : (<h3>Email: {user?.email}</h3>)}
          {isEditing ? (<h3>Curriculum: <input type="file" name="curriculum" onChange={curriculumHandle} className="mb-4" /></h3>)
            : (<h3>Curriculum: {user.curriculum}</h3>)}
          <div className="mt-12 ">
            <Button className="bg-dark-violet mr-4" onClick={deleteUser}>Eliminar Perfil</Button>
            {isEditing ? (<Button className="bg-dark-violet mr-4" onClick={handleSaveClick}>Guardar</Button>) : (
              <Button className="bg-dark-violet" onClick={handleEditClick}>Editar</Button>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUser;
