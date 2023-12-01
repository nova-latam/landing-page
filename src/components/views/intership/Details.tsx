import Image from 'next/image'
import Link from "next/link"


export default function ViewDetails({ information }: any) {
  return (
    <div className="text-white p-6 my-10">

<div className="mb-4 sm:flex items-center justify-between">
        <div >
          <h2 className="text-xl font-bold">{information.title}</h2>
          <p className="text-xl font-semibold">{information.place}</p>
          <h3 className="my-4 text-lg font-bold">{information.company}</h3>
        </div>
        <img src={information.logo} alt={information.company} className='w-24 sm:mr-10 m-auto' />
      </div>
      

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Descripción del trabajo</h3>
        <p>{information.jobDescription}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Calificaciones</h3>
        <p>{information.qualifications}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Información Adicional</h3>
        <p>{information.additionalInformation}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Fechas de Llegada Posibles</h3>
        <p>{information.possibleArrivalDates}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Documentación Requerida</h3>
        <p>{information.requiredDocumentation}</p>
      </div>


      <h3 className="text-lg font-semibold">Información obtenida de  <span className='text-[#489cb4]'><a href={information.linkOfficial}>{information.company}</a></span></h3>

      <div className='w-64 justify-center m-auto mt-10'>
        <Link href={information.linkOfficial}  >
          <p className='text-center rounded-md bg-[#489cb4] text-white text-lg py-1 px-5 hover:bg-[#296474]'>Estoy Interesado</p>
        </Link>
      </div>
    </div>
  )

}