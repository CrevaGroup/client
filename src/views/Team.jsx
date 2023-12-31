import Footer from "../components/Footer"

import User from "../assets/PhUser.svg"
import GitHub from "../assets/PhGithubLogo.svg"
import Linkedin from "../assets/Linkedin.svg"
import Instagram from "../assets/Instagram.svg"
import Behance from "../assets/PhBehanceLogo.svg"
import Alvaro from "../assets/Alvaro.png"
import Martin from "../assets/Martin2.jpg"
import Osvaldo from "../assets/Osvaldo.png"
import Axel from "../assets/Axel.jpg"
import Brian from "../assets/Brian.jpg"
import Valentino from "../assets/perfil1SF.png"

function Team() {
  return (
    <div className="flex flex-col bg-custom-gray dark:bg-purple-900 dark:text-white min-h-screen">
      <div className="text-4xl flex justify-center">
        <h1 className="mt-7 mb-5">Equipo de Desarrollo</h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center justify-center flex-grow">
        <div className="mx-4 mt-5 mb-5">
          <div className="flex items-center p-3 lg:w-72 h-28 bg-white rounded-md shadow-lg">
            <a href="https://github.com/lopezalvaro16" target="_blank">
              <img src={Alvaro} alt="Alvaro Image" className="flex justify-center items-center w-16 h-16 rounded-full object-cover shadow-md hover:cursor-pointer hover:scale-110 duration-300" />
            </a>
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

        <div className="mx-4 mt-5 mb-5">
          <div className="flex items-center p-3 lg:w-72 h-28 bg-white rounded-md shadow-lg">
            <a href="https://github.com/ValentinoJerez" target="_blank">
              <img src={Valentino} className="flex justify-center items-center w-16 h-16 rounded-full object-cover shadow-md hover:cursor-pointer hover:scale-110 duration-300"/>
            </a>
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
                  <img src={Behance} alt="Behance Logo" className="w-4 hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2" />
                </a>
              </div>
            </section>
          </div>
        </div>

        <div className="mx-4 mt-5 mb-5">
          <div className="flex items-center p-3 lg:w-72 h-28 bg-white rounded-md shadow-lg">
            <a href="https://github.com/AxelNChoque" target="_blank">
              <img src={Axel} alt="Axel Image" className="flex justify-center items-center w-16 h-16 rounded-full shadow-md hover:cursor-pointer hover:scale-110 duration-300 object-cover" />
            </a>
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

      <div className="flex flex-col lg:flex-row lg:items-center justify-center">
        <div className="mx-4 mt-5 mb-5">
          <div className="flex items-center p-3 lg:w-72 h-28 bg-white rounded-md shadow-lg">
            <a href="https://github.com/braiaguirre" target="_blank">
              <img src={Brian} alt="Brian Image" className="flex justify-center items-center w-16 h-16 rounded-full object-cover shadow-md bg-gradient-to-r from-[#F9C97C] to-[#A2E9C1] hover:from-[#C9A9E9] hover:to-[#7EE7FC] hover:cursor-pointer hover:scale-110 duration-300" />
            </a>
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

        <div className="mx-4 mt-5 mb-5">
          <div className="flex items-center p-3 lg:w-72 h-28 bg-white rounded-md shadow-lg">
            <a href=" https://github.com/MartinGarciaHervas" target="_blank">
              <img src={Martin} alt="Martin Image" className="flex justify-center items-center w-16 h-16 rounded-full object-cover shadow-md hover:cursor-pointer hover:scale-110 duration-300" />
            </a>
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

        <div className="mx-4 mt-5 mb-5">
          <div className="flex items-center p-3 lg:w-72 h-28 bg-white rounded-md shadow-lg">
            <a href="https://github.com/OsvaldoCorneli" target="_blank">
              <img src={Osvaldo} alt="Osvaldo Image" className="flex justify-center items-center w-16 h-16 rounded-full object-cover shadow-md hover:cursor-pointer hover:scale-110 duration-300" />
            </a>
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
      <div className="flex flex-col flex-grow justify-end">
      <Footer />
      </div>
    </div>
  );
}

export default Team;