import { use, useState, type Dispatch, type SetStateAction } from "react"
import TechnologiesCard from "./TechnologiesCard"

import YourStackItems from "../YourStack/YourStackItems"
import { MdDelete } from "react-icons/md"
import { toast } from "react-toastify"
import YourStackYetText from "../YourStack/YourStackYetText"
import type { ITechnology } from "../Types/Technology"


interface TechnologiesProps {
  techDataPromise: Promise<ITechnology[]>
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

function Technologies({techDataPromise,count,setCount}:TechnologiesProps) {
    const  technologies = use(techDataPromise)
      const [selectedTechnologies, setSelectedTechnologies] = useState<ITechnology[]>([])
 
    const handleSelectTechnology = (technology:ITechnology) => {
           if(selectedTechnologies.find(item=> item.id === technology.id) ){
             toast.error(`${technology.name} is already selected!`)
           }
           else{
             toast.success(`${technology.name} selected successfully!`);
             setSelectedTechnologies((prev) => [...prev, technology])
             setCount(count+1)
            }
         
           }
          
          const handleDeleteTechnology = (id: string, name:string) => {
         setSelectedTechnologies((prev) =>
          prev.filter((technology) => technology.id !== id)
             )       
              toast.success(`${name} Technology removed successfully!`);
               setCount(count-1)
          };

          const handleRemoveAll= () => {
          setSelectedTechnologies([])
             toast.success(` All Technologies remove `);
             setCount(0)
          }
            
  return (
    <div className="container mx-auto ">
       <div className="mx-5 md:mx-0">
          <h1 className="text-3xl font-bold">Explore the <span className="text-gradient">Technologies</span></h1>
          <p className="text-gray-50000">Pick one technology per category to build your ideal stack.</p>
       </div>

   <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 py-5 ">
     <div className=" col-span-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-5 md:mx-0">
        {
            technologies.map((technology,index) => <TechnologiesCard key={index}  technology={technology}  handleSelectTechnology={ handleSelectTechnology} ></TechnologiesCard>)
        }
    </div>
  </div>
  <div className="col-span-1">
  
     <div className=" shadow-md rounded-xl p-5 ">
        <h1 className="text-xl font-bold">Your Stack</h1>
        <p className="text-gray-600"><span>{count} </span>Technology Selected</p>
   {selectedTechnologies.length === 0 ? (
    <div className="">
          <YourStackYetText></YourStackYetText>
  </div>
    ) : (
  <div>
     {
       selectedTechnologies.map((selectCard,index )=> <YourStackItems key={index} selectCard ={selectCard}  handleDeleteTechnology={ handleDeleteTechnology}></YourStackItems>  )
     }
  </div>
)}
     
     <div className="flex justify-center"> 
      
      <button onClick={handleRemoveAll} className=" border border-red-300 text-red-600 hover:bg-red-300 rounded-lg px-6 py-2 flex text-center items-center"><span><MdDelete/></span>Remove All</button>
      </div>
     </div>
     
    
  </div>

   </div>
          </div>
 
  )
}

export default Technologies
