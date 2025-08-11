import { Link } from "react-router-dom";
import { tecnologiasBack } from "../data/tecnologiasback";
import { tecnologiasBanco } from "../data/tecnologiasbanco";
import { tecnologiasDeploy } from "../data/tecnologiasDeploy";
import { tecnologiasFront } from "../data/tecnologiasfront";
import { tecnologiasLinguagem } from "../data/tecnologiaslinguagem";
import CardTech from "./CardTech";

function Tech() {
  const backend = tecnologiasBack;
  const frontend = tecnologiasFront;
  const banco = tecnologiasBanco;
  const deploy = tecnologiasDeploy;
  const linguagem = tecnologiasLinguagem;

  return (
    <>
      <div id="tech" className="bg-stone-100 pb-10">
        <h2 className="text-center p-10 text-red-900 text-5xl font-bold pb-10">
          TECNOLOGIAS PRINCIPAIS
        </h2>

        <div className="justify-center items-center text-center flex flex-col gap-10">
          <h3 className='px-10 pb-5 text-4xl font-semibold text-shadow-lg text-red-800 '>
            LINGUAGENS </h3>
          <div className="flex flex-wrap flex-row justify-center gap-12 ">
            {linguagem.map((tech) => (
              <CardTech key={tech.id} techs={tech} />
            ))}
          </div>

          <h3 className=' px-10 pb-5 text-4xl font-semibold  text-red-800 '>
            BACKEND</h3>
          <div className="flex flex-wrap flex-row justify-center gap-12 ">
            {backend.map((tech) => (
              <CardTech key={tech.id} techs={tech} />
            ))}
          </div>

          <h3 className=' px-10 pb-5 text-4xl font-semibold  text-red-800 '>
            FRONTEND</h3>
          <div className="flex flex-wrap flex-row justify-center gap-12 ">
            {frontend.map((tech) => (
              <CardTech key={tech.id} techs={tech} />
            ))}
          </div>

          <div className="flex">

            <div className="flex flex-col">
              <h3 className=' px-10 pb-5 text-4xl font-semibold  text-red-800 '>
                BANCO DE DADOS </h3>
              <div className="flex flex-wrap flex-row justify-center gap-12 ">
                {banco.map((tech) => (
                  <CardTech key={tech.id} techs={tech} />
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className=' px-10 pb-5 text-4xl font-semibold  text-red-800 '>
                DEPLOY </h3>
              <div className="flex flex-wrap flex-row justify-center gap-12 ">
                {deploy.map((tech) => (
                  <CardTech key={tech.id} techs={tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-900 p-2 items-center justify-center text-center">
        <button className='text-stone-100  border-1 p-2 rounded-4xl bg-black/15 hover:text-neutral-300 cursor-pointer'
        >
          <Link to='http://localhost:5173/' className=' font-semibold text-2xl 
                        '>CONHEÇA O SOFTWARE!</Link>
        </button>
      </div>
    </>
  )
}

export default Tech