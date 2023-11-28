import Card from "@/components/views/intership/Card"
import ViewDetails from "@/components/views/intership/Details"
import { internships } from '@/lib/intership/intership'


export default function Details({ params }: any) {
  const { id } = params
  const item = internships.find((item:any) => item.id == id)


  return <div className=" text-black my-20">
      <ViewDetails  information={item}/>
  </div>

}
