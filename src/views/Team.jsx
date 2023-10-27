import Services from "../components/Services"
import Footer from "../components/Footer"

import About from "../assets/About-us-page-cuate.png"
import Search from "../assets/Social-Dashboard-bro.png"
import Logo from "../assets/logoUba.png"
import Sociales from "../assets/ubaSociales.png"

function Team() {
  return (
    <div className="bg-custom-gray">
      <div className="text-4xl flex justify-center">
        <h1>Equipo</h1>
      </div>
      <div className="text-2xl mt-5" style={{ textAlign: 'center' }}>
            <h3>Gracias a nuestra formación académica y laboral, nos dedicamos plenamente a </h3>
            <h3>proporcionar a nuestra comunidad herramientas excepcionales para impulsar su </h3>
            <h3>crecimiento y desarrollo en el ámbito profesional.</h3>
      </div>
      <div className="flex justify-center items-center ">
        <img src={About} alt="About" className="mt-5 " style={{ width: `950px`}}/>
      </div>
        <div className="text-2xl mt-5" style={{ textAlign: 'center' }}>
        <h2>Contarás con el apoyo de profesionales en el área de recursos humanos, </h2>
        <h2>graduados de la licenciatura en Relaciones del trabajo de la Universidad de Buenos Aires </h2>
        <h2> y con amplia experiencia en el entorno laboral de empresas multinacionales.</h2>
        </div>
        <div className="mt-5 flex flex-col items-center justify-center lg:flex-row">
            <img src={Logo} alt="Logo UBA" className="w-64 mb-5 lg:mb-0 lg:mr-5" />
            <img src={Sociales} alt="UBA Sociales" className="w-64 mb-5 ml-5" />
        </div>
        <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="text-4xl mt-5 text-center lg:text-left">
                <h3>Optimiza tu</h3>
                <h3>busqueda</h3>
                <h3>laboral con</h3>
                <h3>nuestra ayuda</h3>
            </div>
            <img src={Search} alt="Search" style={{ width: `750px` }} />
        </div>
        <Services />
        <Footer />
    </div>
  );
}

export default Team;