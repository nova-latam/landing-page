import Image from 'next/image'
import Link from "next/link"


export default function Card({ information }: any) {
  return (
    <div className=" mx-auto bg-white shadow-lg p-6 my-10">

      <div className="mb-4 sm:flex items-center justify-between">
        <div >
          <h2 className="text-xl font-bold">{information.title}</h2>
          <h3 className="my-4 text-lg font-bold">{information.company}</h3>
        </div>
        <img src={information.logo} alt={information.company} className='w-24 sm:mr-10 m-auto' />
      </div>



      <div className="mb-4">
        <h3 className="text-lg font-bold text-[#489cb4]">About Us</h3>
        
        <p>
          {information.companyDescription.substring(0, 200)}
          <span className=' hidden sm:inline'>{information.companyDescription.substring(200, 300)}</span>
          ...
        </p>
      </div>


      <div className='w-32'>
        <Link href={`/pasantias/${information.id}`}  >
          <p className='text-center rounded-md bg-[#489cb4] text-white text-lg py-1 px-5 hover:bg-[#296474]'>Ver más</p>
        </Link>
      </div>


    </div>
  )

}