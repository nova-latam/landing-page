import { count } from 'console'
import Image from 'next/image'
import Link from "next/link"


export default function ViewDetails({ information }: any) {
  const more_information = Object.keys(information).slice(6)

  return (
    <div className="text-white p-6 my-10">

      <div className="mb-4 sm:flex items-center justify-between">
        <div >
          <h2 className="text-xl font-bold">{information.title}</h2>
          <h3 className="my-4 text-lg font-bold">{information.company}</h3>
        </div>
        <img src={information.logo} alt={information.company} className='w-24 sm:mr-10 m-auto' />
      </div>


      <div className="mb-4">
        <h3 className="text-lg font-bold text-[#489cb4]">About Us</h3>
        <p>{information.companyDescription}</p>
      </div>


      {more_information.map((element, index) => {
        if (element === 'tips') {
          const tips_list = information[element][1]
   
          return (
            <div className="mb-4" key={index}>
              <h3 className="text-lg font-bold text-[#489cb4]">{information[element][0]}</h3>
              {tips_list.map((tips_element: any, index_tip: any) => {
                return (
                  <div key={index_tip} className='mb-5'>
                    <p dangerouslySetInnerHTML={{ __html: tips_element[0] }}></p>
                    {tips_element[1].map((item: any, index_item: any) => (
                      <p dangerouslySetInnerHTML={{ __html: item }} key={index_item}></p>
                    ))}
                  </div>)
              })}

            </div>
          );
        }
        return (
          <div className="mb-4" key={index}>
            <h3 className="text-lg font-bold text-[#489cb4]">{information[element][0]}</h3>
            <p>{information[element][1]}</p>
          </div>
        )
      })}





      <h3 className="text-lg font-semibold">Información obtenida de  <span className='text-[#489cb4]'><a href={information.linkOfficial}>{information.company}</a></span></h3>

      <div className='w-64 justify-center m-auto mt-10'>
        <Link href={information.linkOfficial}  >
          <p className='text-center rounded-md bg-[#489cb4] text-white text-lg py-1 px-5 hover:bg-[#296474]'>Estoy Interesado</p>
        </Link>
      </div>
    </div>
  )

}