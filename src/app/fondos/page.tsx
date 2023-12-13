import Card from "@/components/views/intership/Card";
import { internships } from "@/lib/intership/intership";

export default function Funding() {
  return (
    <div className=" my-20 w-[70%] m-auto text-white">
      <h1 className=" text-2xl font-bold">
        Apoyo Económico Internacionales
      </h1>
      <h2 className=" my-3">
        Nos complace destacar la diversidad de oportunidades de apoyo económico ofrecidas por diversas empresas e instituciones a nivel internacional.
      </h2>
      <h2>
        Aquí encontraras información sobre sus programas de financiamiento, becas y subvenciones. Ya sea que estés buscando respaldo para proyectos académicos, emprendimientos empresariales o iniciativas sociales, nuestro objetivo es dar a conocer el acceso a recursos financieros significativos. Explora las opciones disponibles y descubre cómo estas empresas e instituciones están contribuyendo al crecimiento y desarrollo en diferentes campos, brindando oportunidades valiosas para aquellos que buscan apoyo económico y respaldo para alcanzar sus metas.
      </h2>

      <section className="mb-4 text-black">
        <div className=" mx-auto bg-white shadow-lg p-6 my-10">
          <div className="mb-4 sm:flex items-center justify-between">
            <div >
              <h2 className="text-xl font-bold">Escuela Politécnica Nacional</h2>
              <h3 className="my-4 text-lg font-semibold">La Escuela Politécnica Nacional, es una Institución de Educación Superior, universidad pública ubicada en Quito, Ecuador.</h3>
            </div>
            <img src="/images/funding/EPN.png" alt="EPN" className='w-24 sm:mr-10 m-auto' />
          </div>


          <div className="mb-4">
            <h3 className="text-lg font-bold text-[#489cb4]">Información</h3>

            <p> En el <a href='https://www.epn.edu.ec/descargas-categorias/?upf=dl&id=174733' className='underline'>Reglamento de Becas, Apoyo Económico y Descuentos de la Escuela Politécnica Nacional</a> (Última reforma: 08 de diciembre de 2022 – Resolución RCP-390-2022) en sus artículos 23 y 24 indican las condiciones para que un estudiante pueda recibir apoyo económico.
            </p>

          </div>
        </div>
      </section>


      <section className="mb-4 text-black">
        <div className=" mx-auto bg-white shadow-lg p-6 my-10">
          <div className="mb-4 sm:flex items-center justify-between">
            <div >
              <h2 className="text-xl font-bold">CEDIA</h2>
              <h3 className="my-4 text-lg font-semibold">La Corporación Ecuatoriana para el Desarrollo de la Investigación y la Academia, conocida como CEDIA, representa la Red Nacional de Investigación y Educación en Ecuador.</h3>
            </div>
            <img src="/images/funding/cedia.png" alt="cedia" className='w-24 sm:mr-10 m-auto' />
          </div>


          <div className="mb-4">
            <h3 className="text-lg font-bold text-[#489cb4]">Información</h3>

            <p> En la página de <a href='https://cedia.edu.ec/area/fondos-y-becas/' className='underline'>Fondos y Becas</a> de CEDIA indican las condiciones para recibir apoyo económico y/o becas.
            </p>

          </div>
        </div>
      </section>


      <section className="mb-4 text-black">
        <div className=" mx-auto bg-white shadow-lg p-6 my-10">
          <div className="mb-4 sm:flex items-center justify-between">
            <div >
              <h2 className="text-xl font-bold">FULBRIGHT Ecuador</h2>
              <h3 className="my-4 text-lg font-semibold">Fulbright Ecuador es la Comisión para el intercambio educativo entre Estados Unidos y Ecuador.</h3>
            </div>
            <img src="/images/funding/Fulbright.jpg" alt="FULBRIGHT Ecuador" className='w-24 sm:mr-10 m-auto' />
          </div>


          <div className="mb-4">
            <h3 className="text-lg font-bold text-[#489cb4]">Información</h3>

            <p> En la página de <a href='https://www.fulbright.org.ec/becas-personas-ecuatorianas/' className='underline'>Becas Fulbright</a> indican las becas disponibles actualmente y los requisitos necesarios para postular.
            </p>

          </div>
        </div>
      </section>


    </div>
  );
}
