import { Button } from "@material-tailwind/react";

function ProfileUser() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl mb-5">Tu Perfil</h1>
      </div>
      <div className="flex flex-col items-center justify-center mt-8 mb-8 lg:flex-row lg:items-start lg:justify-center">
        <div className="text-center mb-6 lg:mb-0">
          <h3 className="text-2xl mb-4">Nombre, Apellido</h3>
          <div className="w-80 h-80 mx-auto rounded" style={{ backgroundColor: `#C2A3D1` }}>
            <div className="flex items-center justify-center w-full h-full">
              <div className="rounded-full overflow-hidden w-3/4 h-3/4">
                <img
                  src=""
                  alt="Imagen de Usuario"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-xl mt-20 lg:ml-8">
          <h3>Edad:</h3>
          <h3>Ciudad:</h3>
          <h3>Plan:</h3>
          <h3>Email:</h3>
          <div className="mt-12 ">
            <Button className="bg-dark-violet mr-4">Eliminar Perfil</Button>
            <Button className="bg-dark-violet">Editar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUser;
