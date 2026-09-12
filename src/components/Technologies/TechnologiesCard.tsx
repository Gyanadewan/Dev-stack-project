
import { FcRating } from 'react-icons/fc'
import type { ITechnology } from '../Types/technology'

interface TechnologiesCardProps {
  technology : ITechnology;
  handleSelectTechnology: (technology: ITechnology)=>void
}
 
function TechnologiesCard({technology, handleSelectTechnology}: TechnologiesCardProps) {
  

  return (
    <div className='bg-white shadow-xl rounded-xl p-2 py-3'>
         <div className='flex justify-between py-2'>
              <img className='w-8 h-8' src={technology.icon} alt="" />
               <div className=''>
               <h3 className='bg-[#D1FAE5] rounded-2xl px-3 py-1'>{technology.badge}</h3>
         </div>
         </div>
         <div className='py-2'> 
             <p className='text-[14px] text-gray-500'>{technology.description}</p>
              <h2 className='text-lg font-semibold'>{technology.name}</h2>
            
         </div>
         <div className='flex justify-between gap-1 py-2'>
              <p className='text-gray-700'>{technology.category}</p>
               <p className='text-[14px] text-gray-700'>{technology.difficulty}</p>
              <p className="flex items-center gap-1"> <FcRating /> <span className='font-[400px]'>{technology.rating}</span> </p>
         </div>
           <div className='flex justify-center items-center'>  
            <button 
               onClick={()=>handleSelectTechnology(technology)} className='bg-black text-white rounded-xl px-12 py-1' >Add to Stack</button>
           </div>
    </div>
  )
}

export default TechnologiesCard
