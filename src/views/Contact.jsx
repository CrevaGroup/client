import Contacto from "../assets/Contact-us-amico.png";

function Contact() {
  return (
    <div className="bg-custom-gray">
      <h1 className="text-4xl  flex justify-center">Contactanos</h1>
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <img src={Contacto} alt="Contactanos" className="w-full" />
        </div>
        <div className="w-1/2">
          <h2>Ponte en contacto con nosotros</h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;