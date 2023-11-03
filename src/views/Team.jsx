import Services from "../components/Services"
import Footer from "../components/Footer"

import About from "../assets/About-us-page-cuate.png"
import Search from "../assets/Social-Dashboard-bro.png"
import Logo from "../assets/logoUba.png"
import Sociales from "../assets/ubaSociales.png"
import User from "../assets/PhUser.svg"
import GitHub from "../assets/PhGithubLogo.svg"
import Linkedin from "../assets/MdiLinkedin.svg"
import Instagram from "../assets/MdiInstagram.svg"
import Behance from "../assets/PhBehanceLogo.svg"

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
        <img src={About} alt="About" className="mt-5 " style={{ width: `950px` }} />
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
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <h1 className="text-4xl mt-5 text-center lg:text-left">Equipo de desarrollo</h1>
      </div>
      <div className="flex justify-center">
        <div className="mx-4 mt-5">
          <div className="flex items-center p-3 w-72 h-28 bg-white rounded-md shadow-lg">
            <section className="flex justify-center items-center w-14 h-14 rounded-full shadow-md bg-gradient-to-r from-[#F9C97C] to-[#A2E9C1] hover:from-[#C9A9E9] hover:to-[#7EE7FC] hover:cursor-pointer hover:scale-110 duration-300">
              <img src={User} alt="User Image" className="w-7 fill-gray-700" />
            </section>
            <section className="block border-l border-gray-300 m-3">
              <div className="pl-3">
                <h3 className="text-gray-600 font-semibold text-sm">Alvaro Mauricio Lopez</h3>
                <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-md font-bold">Developer Full Stack</h3>
              </div>
              <div className="flex gap-3 pt-2 pl-3">
                <a href="https://github.com/lopezalvaro16" target="_blank">
                  <img src={GitHub} alt="GitHub Logo" className="w-4 hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2" />
                </a>
                <a href="https://www.linkedin.com/in/alvaro-mauricio-lopez/" target="_blank">
                  <img src={Linkedin} alt="Linkedin Logo" className="w-4 hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2" />
                </a>
                <a href="https://www.instagram.com/lopezalvaro16/" target="_blank">
                  <img src={Instagram} alt="Instagram Logo" className="w-4 hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2" />
                </a>
              </div>
            </section>
          </div>
        </div>
        <div className="mx-4 mt-5">
          <div className="flex items-center p-3 w-72 h-28 bg-white rounded-md shadow-lg">
            <section className="flex justify-center items-center w-14 h-14 rounded-full shadow-md bg-gradient-to-r from-[#F9C97C] to-[#A2E9C1] hover:from-[#C9A9E9] hover:to-[#7EE7FC] hover:cursor-pointer hover:scale-110 duration-300">
              <img src={User} alt="User Image" className="w-7 fill-gray-700" />
            </section>
            <section className="block border-l border-gray-300 m-3">
              <div className="pl-3">
                <h3 className="text-gray-600 font-semibold text-sm">Valentino Jerez</h3>
                <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-md font-bold">Developer Full Stack</h3>
              </div>
              <div className="flex gap-3 pt-2 pl-3">
                <a href="https://github.com/ValentinoJerez" target="_blank">
                  <img src={GitHub} alt="GitHub Logo" className="w-4 hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2" />
                </a>
                <a href="https://www.linkedin.com/in/valentino-jerez-567374281/" target="_blank">
                  <img src={Linkedin} alt="Linkedin Logo" className="w-4 hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2" />
                </a>
                <a href="https://www.instagram.com/valen_jerez03/" target="_blank">
                  <img src={Instagram} alt="Instagram Logo" className="w-4 hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2" />
                </a>
                <a href="https://www.behance.net/valentinojerez">
                  <img src={Behance} alt="Behance Logo" className="w-4 hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2"/>
                </a>
              </div>
            </section>
          </div>
        </div>
        <div className="mx-4 mt-5">
          <div className="flex items-center p-3 w-72 h-28 bg-white rounded-md shadow-lg">
            <section className="flex justify-center items-center w-14 h-14 rounded-full shadow-md bg-gradient-to-r from-[#F9C97C] to-[#A2E9C1] hover:from-[#C9A9E9] hover:to-[#7EE7FC] hover:cursor-pointer hover:scale-110 duration-300">
              <img src={User} alt="User Image" className="w-7 fill-gray-700" />
            </section>
            <section className="block border-l border-gray-300 m-3">
              <div className="pl-3">
                <h3 className="text-gray-600 font-semibold text-sm">Axel Choque</h3>
                <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-md font-bold">Developer Full Stack</h3>
              </div>
              <div className="flex gap-3 pt-2 pl-3">
                <a href="https://github.com/AxelNChoque" target="_blank">
                  <img src={GitHub} alt="GitHub Logo" className="w-4 hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2" />
                </a>
                <a href="https://www.linkedin.com/in/axel-nicolas-choque-urquiza-789235244/" target="_blank">
                  <img src={Linkedin} alt="Linkedin Logo" className="w-4 hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2" />
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mx-4 mt-5">
          <div className="flex items-center p-3 w-72 h-28 bg-white rounded-md shadow-lg">
            <section className="flex justify-center items-center w-14 h-14 rounded-full shadow-md bg-gradient-to-r from-[#F9C97C] to-[#A2E9C1] hover:from-[#C9A9E9] hover:to-[#7EE7FC] hover:cursor-pointer hover:scale-110 duration-300">
              <img src={User} alt="User Image" className="w-7 fill-gray-700" />
            </section>
            <section className="block border-l border-gray-300 m-3">
              <div className="pl-3">
                <h3 className="text-gray-600 font-semibold text-sm">Brian Aguirre</h3>
                <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-md font-bold">Developer Full Stack</h3>
              </div>
              <div className="flex gap-3 pt-2 pl-3">
                <a href="https://github.com/braiaguirre" target="_blank">
                  <img src={GitHub} alt="GitHub Logo" className="w-4 hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2" />
                </a>
                <a href="https://www.linkedin.com/in/brian-aguirre-1947a3281/" target="_blank">
                  <img src={Linkedin} alt="Linkedin Logo" className="w-4 hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2" />
                </a>
              </div>
            </section>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mx-4 mt-5">
            <div className="flex items-center p-3 w-72 h-28 bg-white rounded-md shadow-lg">
              <section className="flex justify-center items-center w-14 h-14 rounded-full shadow-md bg-gradient-to-r from-[#F9C97C] to-[#A2E9C1] hover:from-[#C9A9E9] hover:to-[#7EE7FC] hover:cursor-pointer hover:scale-110 duration-300">
                <img src={User} alt="User Image" className="w-7 fill-gray-700" />
              </section>
              <section className="block border-l border-gray-300 m-3">
                <div className="pl-3">
                  <h3 className="text-gray-600 font-semibold text-sm">Martin Garcia Hervas</h3>
                  <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-md font-bold">Developer Full Stack</h3>
                </div>
                <div className="flex gap-3 pt-2 pl-3">
                  <a href=" https://github.com/MartinGarciaHervas" target="_blank">
                    <img src={GitHub} alt="GitHub Logo" className="w-4 hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2" />
                  </a>
                  <a href="https://www.linkedin.com/in/martin-garcia-hervas-07846a281/" target="_blank">
                    <img src={Linkedin} alt="Linkedin Logo" className="w-4 hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2" />
                  </a>
                </div>
              </section>
            </div>
          </div>
          <div className="mx-4 mt-5">
            <div className="flex items-center p-3 w-72 h-28 bg-white rounded-md shadow-lg">
              <section className="flex justify-center items-center w-14 h-14 rounded-full shadow-md bg-gradient-to-r from-[#F9C97C] to-[#A2E9C1] hover:from-[#C9A9E9] hover:to-[#7EE7FC] hover:cursor-pointer hover:scale-110 duration-300">
                <img src={User} alt="User Image" className="w-7 fill-gray-700" />
              </section>
              <section className="block border-l border-gray-300 m-3">
                <div className="pl-3">
                  <h3 className="text-gray-600 font-semibold text-sm">Osvaldo Corneli Nassif</h3>
                  <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-md font-bold">Developer Full Stack</h3>
                </div>
                <div className="flex gap-3 pt-2 pl-3">
                  <a href="https://github.com/OsvaldoCorneli" target="_blank">
                    <img src={GitHub} alt="GitHub Logo" className="w-4 hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2" />
                  </a>
                  <a href="https://www.linkedin.com/in/osvaldo-corneli-nassif-822728268/" target="_blank">
                    <img src={Linkedin} alt="Linkedin Logo" className="w-4 hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
        <Services />
        <Footer />
    </div>
  );
}

export default Team;