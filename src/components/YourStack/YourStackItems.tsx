

function YourStackItems({selectCard}) {
  return (
    <div className='flex items-center  px-3 py-2 border border-gray-300 my-3 rounded-xl'>
        <img className='w-20 h-10' src={selectCard.icon} alt="" />
        <div className=''>
        <h3>{selectCard.category}</h3>
       <h1>{selectCard.name}</h1>
        </div>

    </div>
  )
}

export default YourStackItems
