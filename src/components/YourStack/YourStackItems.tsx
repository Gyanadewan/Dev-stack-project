import { FiX } from "react-icons/fi";
import type { ITechnology } from "../Types/Technology";



interface YourStackItemsProps {
  selectCard:ITechnology;
  handleDeleteTechnology: (id: string,name:string) => void

}


function YourStackItems({selectCard,handleDeleteTechnology}:YourStackItemsProps ) {
  return (
   <div className="flex items-center gap-3 px-3 py-2 border border-gray-300 my-3 rounded-xl">
  
  <img
    className="w-10 h-8 object-contain"
    src={selectCard.icon}
    alt={selectCard.name}
  />

  <div className="">
    <h3 className="text-[16px] font-medium">
      {selectCard.category}
    </h3>
    <h1 className="text-[14px]">{selectCard.name}</h1>
  </div>

  <button onClick={()=>handleDeleteTechnology(selectCard.id,selectCard.name)}  className="ml-auto  hover:text-red-700">
    <FiX size={20} />
  </button>

</div>
  )
}

export default YourStackItems
