import { Button } from "@material-tailwind/react";

function ProfileUser() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl">Tu Perfil</h1>
      </div>
      <div className="flex items-center justify-center ml-8 mt-8">
        <div className="text-center mx-20">
          <h3 className="text-2xl mb-4">Nombre, Apellido</h3>
          <div className="w-64 h-64 mx-auto rounded" style={{backgroundColor:`#C2A3D1`}}>
            <div className="rounded-full overflow-hidden w-full h-full">
              <img src="" alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="text-xl ml-8 mt-12">
          <h3>Edad:</h3>
          <h3>Ciudad:</h3>
          <h3>Plan:</h3>
          <h3>Email:</h3>
          <div className="mt-8">
            <Button className="bg-dark-violet mr-4">Eliminar Perfil</Button>
            <Button className="bg-dark-violet">Editar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUser;
