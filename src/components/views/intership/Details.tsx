import Image from 'next/image'
import Link from "next/link"


export default function ViewDetails({information}:any) {
    return (
        <div className="w-[70%] mx-auto bg-white rounded-xl  shadow-lg p-6 my-10">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">{information.title}</h2>
          <p className="text-xl font-semibold">{information.place}</p>
        </div>
  
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Compañía</h3>
          <p>{information.companyDescription}</p>
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
      </div>
    )

}