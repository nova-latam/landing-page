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
            <p> En el <a href='https://www.epn.edu.ec/descargas-categorias/?upf=dl&id=174733' className='underline'>Reglamento de Becas, Apoyo Económico y Descuentos de la Escuela Politécnica Nacional</a> (Última reforma: 08 de diciembre de 2022 – Resolución RCP-390-2022) en sus artículos 23 y 24 indican las condiciones para que un estudiante pueda recibir apoyo económico.</p>
            <p><br/>Citando los artículos:</p>
            <p>(...)Artículo 23.- Los estudiantes de carreras de grado, de tecnología superior o de programas de posgrado de la Escuela Politécnica Nacional podrán acceder al apoyo económico para el financiamiento de las siguientes actividades y eventos:
              1. Eventos académicos, prácticas preprofesionales o profesionales, pasantías, congresos, seminarios; <br/>
              2. Programas de intercambio estudiantil;<br/>
              3. Representación estudiantil institucional;<br/>
              4. Cursos;
              5. Proyectos interuniversitarios;<br/>
              6. Estadías de investigación;<br/>
              7. Entrenamiento en laboratorios, industrias o centros especializados en las áreas de interés institucional, tanto nacionales como internacionales;<br/>
              8. Publicación de artículos en revistas de alto impacto científico, previa recomendación de la Dirección de Investigación; y,<br/>
              9. Envío y análisis de muestras para actividades de investigación relacionados con la Unidad de Integración Curricular, Unidad de Titulación y Tesis Doctorales.<br/>
              <br/>
              El monto del apoyo económico para cada una de las actividades o eventos determinados en el presente artículo no podrá exceder el máximo establecido en función de la localización geográfica del lugar donde se lleve a cabo o realice la actividad o evento, conforme el siguiente detalle:<br/>

              - Asia, África, Australia y Antártica, hasta USD 5000.<br/>
              - Europa, hasta USD 4000.<br/>
              - Estados Unidos de Norteamérica y Canadá, hasta USD 3000.<br/>
              - América Latina, hasta USD 2000.<br/>
              - Dentro de Ecuador hasta USD 1000.<br/>

              Los montos máximos señalados constituyen un apoyo al beneficiario para solventar los gastos a sufragarse en la adquisición de pasajes, seguro, inscripción, publicaciones, alojamiento, alimentación, análisis de laboratorio y envío de muestras. Tal apoyo tendrá el carácter de no reembolsable, dependerá de la disponibilidad presupuestaria y se otorgará de manera prioritaria a aquellos estudiantes que no hayan sido beneficiarios de este en ocasiones anteriores.<br/>

              Los apoyos económicos para los estudiantes de carreras de tecnología superior y de grado serán aprobados por el Vicerrector de Docencia. Los apoyos económicos para los estudiantes de programas de posgrado serán aprobados por el Vicerrector de Investigación, Innovación y Vinculación.<br/>

              Artículo 24.- Los requisitos para el apoyo descrito en el artículo anterior, excepto para la representación estudiantil institucional, son:<br/>

              1. Ser estudiante de una de las carreras de grado, tecnologías superior o programas de posgrado que ofrece la institución;<br/>
              2. No tener registrada ninguna sanción disciplinaria por parte del Consejo Politécnico;<br/>
              3. Para el caso de los estudiantes de carreras de grado y tecnología superior, no contabilizar más de una repetición de asignaturas durante los dos últimos periodos académicos de carrera, inmediatos anteriores a la solicitud;<br/>
              4. Para el caso de los estudiantes de programas de posgrado que contemplen una fase curricular, no registrar ninguna repetición en las asignaturas de la malla curricular del programa;<br/>
              5. Haber sido aceptado o invitado para participar en eventos o actividades académicas nacionales o internacionales, según lo establecido en el artículo precedente, en los casos que corresponda.<br/>
              6. Tener un promedio de calificaciones superior al promedio estudiantil de la carrera o programa de maestría o contar con el informe favorable del Director de la Tesis Doctoral, en el caso de los estudiantes de doctorado al que pertenece, o contar con el informe favorable de la Dirección de Bienestar Politécnico, en el caso de los estudiantes con discapacidad;<br/>
              7. Haber aprobado al menos el 50% de créditos u horas académicas de la carrera o programa de posgrado, según corresponda, con la excepción de los programas de doctorado, para quienes no se exige un número mínimo de créditos aprobados; y,<br/>
              8. No tener obligaciones vencidas con la Institución. (...)</p>
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
