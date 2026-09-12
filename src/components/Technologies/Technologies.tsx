import { use, useState } from "react"
import TechnologiesCard from "./TechnologiesCard"
import type { ITechnology } from "../Types/technology"
import YourStackItems from "../YourStack/YourStackItems"
import { MdDelete } from "react-icons/md"
import { toast } from "react-toastify"
import YourStackYetText from "../YourStack/YourStackYetText"


interface TechnologiesProps {
  techDataPromise: Promise<ITechnology[]>
}
function Technologies({techDataPromise}:TechnologiesProps) {
    const  technologies = use(techDataPromise)
      const [selectedTechnologies, setSelectedTechnologies] = useState<ITechnology[]>([])
 
    const handleSelectTechnology = (technology:ITechnology) => {
           if(selectedTechnologies.find(item=> item.id === technology.id) ){
             toast.error(`${technology.name} is already selected!`)
           }
           else{
             toast.success(`${technology.name} selected successfully!`);
             setSelectedTechnologies((prev) => [...prev, technology])
            }
        
           }
          
          const handleDeleteTechnology = (id: number) => {
         setSelectedTechnologies((prev) =>
          prev.filter((technology) => technology.id !== id)
             );
};
            
  return (
    <div className="container mx-auto">
         <h1 className="text-3xl font-bold">Explore the Technologies</h1>
          <p className="text-gray-50000">Pick one technology per category to build your ideal stack.</p>

 <div className="container mx-auto grid grid-cols-4 gap-3 py-5">
     <div className="col-span-3">
      <div className="grid grid-cols-3 gap-3">
        {
            technologies.map((technology,index) => <TechnologiesCard key={index}  technology={technology}  handleSelectTechnology={ handleSelectTechnology} ></TechnologiesCard>)
        }
    </div>
  </div>
  <div className="col-span-1">
  
     <div className=" shadow-md rounded-xl p-5 ">
        <h1>Your Stack</h1>

   {selectedTechnologies.length === 0 ? (
    <div>
          <YourStackYetText></YourStackYetText>
  </div>
    ) : (
  <div>
     {
       selectedTechnologies.map((selectCard,index )=>  <YourStackItems key={index} selectCard ={selectCard}  handleDeleteTechnology={ handleDeleteTechnology}></YourStackItems>  )
     }
  </div>
)}
     
     <div className="flex justify-center"> 
      
      <button className=" border border-red-300 text-red-600 hover:bg-red-300 rounded-lg px-6 py-2 flex text-center items-center"><span><MdDelete/></span>Remove All</button>
      </div>
     </div>
     
    
  </div>

   </div>
          </div>
 
  )
}

export default Technologies
