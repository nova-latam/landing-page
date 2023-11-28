import Card from "@/components/views/intership/Card"
import { internships } from '@/lib/intership/intership'




export default function Interships() {
  return <div className=" text-black my-20">
    {internships.map((item:any, index) => (
      <Card key={index} information={item}/>
    ))}
  </div>

}
