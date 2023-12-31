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

  const countryRef = useRef();
  const dayRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();
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
    photo: user.photo,
    curriculum: user.curriculum,
  });
  
  const birthdateOk = JSON.parse(user?.age);
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
    year: "",
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
    dispatch(updateUser(infoUser, user, birthdate));
    setInfoUser({...infoUser, age: calculateAge(birthdate)})
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
    if (isEditing) {
      countryRef.current.value = user?.nacionalidad;

      if (birthdateOk) {
        dayRef.current.setValue([{ ...birthdateOk.day }]);
        monthRef.current.setValue([{ ...birthdateOk.month }]);
        yearRef.current.setValue([{ ...birthdateOk.year }]);
    
        setBirthdate({
          day: birthdateOk.day,
          month: birthdateOk.month,
          year: birthdateOk.year
        })
      }
    }
  }, [isEditing])

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
                <div className="flex-col justify-center items-center" >
                  <div className="rounded-full overflow-hidden w-full mb-4 w-3/4 h-3/4">
                    <img
                      src={user?.photo}
                      alt="Imagen de Usuario"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <label for="dropzone-file" class="flex flex-col border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div class="flex flex-col pt-2 pl-2 pr-2">
                          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click </span>para subir</p>
                      </div>
                      <input id="dropzone-file" type="file" accept="image/*" name="photo" onChange={photoHandle} class="hidden" />
                  </label>
                  {/* <input  className="mb-4 position-relative overflow-hidden w-[153px]" style={{color: infoUser.photo===""?"transparent":"black"}} /> */}
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
                    ref={dayRef}
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
                    ref={monthRef}
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
                    ref={yearRef}
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
                <span className="lg:inline-block">{user?.age?.length > 33 ? infoUser?.age : 'No completado'}</span>
              </div>
            )}
            
          {isEditing ? (<h3 className="mt-3">Pais: <select onChange={(event) => setInfoUser({ ...infoUser, nacionalidad: event.target.value })} ref={countryRef} options>{countries.map((country) => (
            <option key={country} value={country}>
              {country}</option>))}
          </select></h3>
          
          ) : (<h3>Pais: {user?.nacionalidad !== null ? user?.nacionalidad : 'No completado'}</h3>)}

          {isEditing ? (<h3>Email: <input type="text" value={infoUser.email} onChange={(event) => setInfoUser({ ...infoUser, email: event.target.value })} /></h3>
          ) : (<h3>Email: {user?.email}</h3>)}

          {isEditing ? (<h3>Curriculum: 
            <div class="flex w-full">
                <label for="dropzone-file2" class="flex flex-col border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col pt-2 pl-2 pr-2">
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click </span>para subir<span class="font-semibold"></span></p>
                    </div>
                    <input id="dropzone-file2" title=" asd" name="curriculum" onChange={curriculumHandle} type="file" accept="application/pdf" class="hidden" />
                </label>
            </div> 
            </h3>)
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