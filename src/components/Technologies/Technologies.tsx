import { use, useState } from "react"
import TechnologiesCard from "./TechnologiesCard"
import type { ITechnology } from "../Types/technology"

interface TechnologiesProps {
  techDataPromise: Promise<ITechnology[]>
}
function Technologies({techDataPromise}:TechnologiesProps) {
    const  technologies = use(techDataPromise)
      const [selectedTechnologies, setSelectedTechnologies] = useState<ITechnology[]>([])
    const handleSelectTechnology = (technology:ITechnology) => {
           setSelectedTechnologies((prev) => [...prev, technology])
            }
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
     {/* {
       selectedTechnologies.map(selectCard =>   )
           
     } */}
     
    <div className="">
    
    </div>
  </div>

   </div>
          </div>
 
  )
}

export default Technologies
