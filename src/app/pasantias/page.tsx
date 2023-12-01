import Card from "@/components/views/intership/Card"
import { internships } from '@/lib/intership/intership'




export default function Interships() {
  return <div className=" text-black my-20 w-[70%] m-auto">

    <div className=" text-white">
      <h1 className=" text-2xl font-bold">Oportunidades de Pasantías Disponibles</h1>
      <h2 className=" my-3">¡Nos llena de entusiasmo presentar increíbles oportunidades para pasantes apasionados y comprometidos que deseen formar parte de empresas líderes. Esta es tu puerta de entrada para adquirir experiencia práctica y potenciar tu crecimiento tanto a nivel personal como profesional.</h2>
      <h2>Si te encuentras preparado para sumergirte en el mundo laboral y contribuir a proyectos de impacto, te extendemos una cordial invitación para que apliques. ¡Tu viaje hacia el éxito profesional comienza aquí!</h2>
    </div>
    {internships.map((item: any, index) => (
      <Card key={index} information={item} />
    ))}
  </div>

}
