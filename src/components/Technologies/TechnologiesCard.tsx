
import { FcRating } from 'react-icons/fc'
import type { ITechnology } from '../Types/Technology'
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

interface TechnologiesCardProps {
  technology : ITechnology;
  handleSelectTechnology: (technology: ITechnology)=>void
}
 
function TechnologiesCard({technology, handleSelectTechnology}: TechnologiesCardProps) {
   const [isSelected,setIsSelected] = useState(false)
     
  return (
    <div className={`shadow-xl rounded-xl  p-10 md:p-2 md:py-3 border border-amber-50 ${isSelected?"border border-yellow-500":"border-amber-50"}`}>
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
               onClick={()=>
                {
                  handleSelectTechnology(technology);
                   setIsSelected(true)
                }} className={`bg-black text-white rounded-xl px-12 py-1
                   ${isSelected?"bg-yellow-600"
                   : "bg-black hover:bg-gray-800"}`} >
                {isSelected?<><FaCheck className="inline mr-2"/>Added to Stack</>: "Add to Stack"}      
               </button>
           </div>
    </div>
  )
}

export default TechnologiesCard
