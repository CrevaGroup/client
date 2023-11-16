import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserById,
  clearPopupComponent,
  updateUser,
  logout
} from "../Redux/Actions/actions";

import { Button, input } from "@material-tailwind/react";
import Select from "react-select";
import Close from "../assets/closeIcon.svg";
import calculateAge from "../Utils/calculateAge";
import { useLocation } from "react-router-dom";

function ProfileUser() {

  const countryRef = userRef();
  const location = useLocation()
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const currentYear = new Date().getFullYear();
  const [isEditing, setIsEditing] = useState(false);
  const [infoUser, setInfoUser] = useState({
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    age: user.age?calculateAge(JSON.parse(user.age)):null,
    nacionalidad: user.nacionalidad,
    photo: "",
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
    "Cuba",
    "República Dominicana",
    "Puerto Rico",
    "Costa Rica",
    "Panamá",
    "Guatemala",
    "El Salvador",
    "Honduras",
    "Nicaragua",
    "Paraguay",
    "Ecuador",
  ]);

  const [birthdate, setBirthdate] = useState({
    day: JSON.parse(user?.age).day.label,
    dayValue: JSON.parse(user?.age).day.value,
    month: JSON.parse(user?.age).month.label,
    monthValue: JSON.parse(user?.age).month.value,
    year: JSON.parse(user?.age).year.label,
    yearValue: JSON.parse(user?.age).year.value,
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
      curriculum: event.target.files[0],
    });
  }

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleSaveClick() {
    setIsEditing(false);
    let birthdateOk = {
      day: birthdate.day,
      month: birthdate.month,
      year: birthdate.year
    }
    dispatch(updateUser(infoUser, user, birthdateOk));
    setInfoUser({...infoUser, age: calculateAge(birthdateOk)})
  }

  function deleteUser() {
    dispatch(deleteUserById(user.id));
    dispatch(logout());
    dispatch(clearPopupComponent());
  }

  function closePopup() {
    dispatch(clearPopupComponent());
  }

  useEffect(() => {
    countryRef.current.value = user?.nacionalidad;
  }, [])

  return (
    <div className="bg-white rounded-md p-4 overflow-y-auto max-h-screen dark:bg-purple-900 dark:text-white">
      {location.pathname !== "/dashboard/profile" && <button onClick={closePopup}>
        <img src={Close} alt="Close Popup" className="ml-4 mt-4 w-6" />
      </button>}
      <div className="text-center">
        <h1 className="text-4xl mb-2">Mi Perfil</h1>
      </div>
      <div className="flex flex-col items-center justify-center ml-5 mr-5 mt-5 mb-8 lg:flex-row">
        <div className="text-center mb-6 lg:mb-0">
          <div
            className="w-60 h-60 mx-auto rounded"
            style={{ backgroundColor: `#C2A3D1` }}
          >
            <div className="flex items-center justify-center w-full h-full">

              {isEditing ? (
                <div className="flex-col ml-16 items-center w-full" >
                  <div className="rounded-full overflow-hidden w-3/4 h-3/4">
                    <img
                      src={user?.photo}
                      alt="Imagen de Usuario"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <input type="file" accept="image/*" name="photo" onChange={photoHandle} className="mb-4 position-relative overflow-hidden w-[153px]" style={{color: infoUser.photo===""?"transparent":"black"}} />
                </div>) :
                (<div className="rounded-full overflow-hidden w-3/4 h-3/4">
                  <img src={user?.photo} alt="Imagen de Usuario" className="w-full h-full object-cover" />
                </div>)}

            </div>
          </div>
        </div>
        <div className="flex-col justify-center items-center lg:ml-8">
          <h3 className="text-2xl mb-4">{user.fullName}</h3>
            
            {isEditing ? (
              <div className="mb-2 lg:flex lg:items-center">
                <h3 className="lg:mr-4">Fecha de Nacimiento:</h3>
                <div className="flex flex-col lg:flex-row items-center">
                  <Select
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        width: "80px",
                      }),
                    }}
                    defaultValue={{ label: birthdate.day, value: birthdate.dayValue }}
                    options={Array.from({ length: 31 }, (_, i) => ({
                      label: (i + 1).toString(),
                      value: (i + 1).toString(),
                    }))}
                    placeholder="Día"
                    className="mb-2 lg:mb-0 lg:mr-2"
                    onChange={(selectedOption) =>
                      setBirthdate({
                        ...birthdate,
                        day: selectedOption,
                      })
                    }
                  />

                  <Select name="" id="" placeholder="Mes"
                    defaultValue={{ label: birthdate.month, value: birthdate.monthValue }}
                    options={meses.map((month, index) => ({
                      label: month,
                      value: (index + 1).toString(),
                    }))}
                    onChange={(selectedOption) =>
                      setBirthdate({
                        ...birthdate,
                        month: selectedOption,
                      })
                    }
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        width: "120px",
                      }),
                    }}
                    className="mb-2 lg:mb-0 lg:mr-2"
                  />

                  <Select
                    name="Año"
                    placeholder="Año"
                    defaultValue={{ label: birthdate.year, value: birthdate.yearValue }}
                    options={Array.from(
                      { length: currentYear - 1923 + 1 },
                      (_, i) => ({
                        label: (currentYear - i).toString(),
                        value: (currentYear - i).toString(),
                      })
                    )}
                    onChange={(selectedOption) =>
                      setBirthdate({
                        ...birthdate,
                        year: selectedOption,
                      })
                    }
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        width: "120px",
                      }),
                    }}
                  />
                </div>
              </div>
            ) : (
              <div>
                <h3 className="lg:inline-block">Edad:</h3>
                <span className="lg:inline-block ">{user?.age.length > 33 ? infoUser?.age : 'No completado'}</span>
              </div>
            )}

          {isEditing ? (<h3 className="mt-3">Pais: <select ref={countryRef} onChange={(event) => setInfoUser({ ...infoUser, nacionalidad: event.target.value })} options>{countries.map((country) => (
            <option key={country} value={country}>
              {country}</option>))}
          </select></h3>
          ) : (<h3>Pais: {user?.nacionalidad !== null ? user?.nacionalidad : 'No completado'}</h3>)}

          {isEditing ? (<h3>Email: <input type="text" value={infoUser.email} onChange={(event) => setInfoUser({ ...infoUser, email: event.target.value })} /></h3>
          ) : (<h3>Email: {user?.email}</h3>)}

          {isEditing ? (<h3>Curriculum: <input type="file" title=" asd" name="curriculum" onChange={curriculumHandle} className="mb-4 position-relative overflow-hidden w-[153px]" /></h3>)
            : (<h3>Curriculum: {user.curriculum ? <a target="blank" href={user.curriculum}>Link</a> : 'No completado'}</h3>)}

          <h3>Mis compras: {
            !user?.buys
            ? 'No tiene'
            : user?.buys?.map((buy, index)=> <p key={index}>{buy?.Services[0].name}</p>)
          }</h3>

          <div className="mt-4 space-x-4">
            <Button className="bg-dark-violet" onClick={deleteUser}>
              Eliminar Perfil
            </Button>
            {isEditing ? (
              <Button className="bg-dark-violet mr-4" onClick={handleSaveClick}>
                Guardar
              </Button>
            ) : (
              <Button className="bg-dark-violet" onClick={handleEditClick}>
                Editar
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUser;