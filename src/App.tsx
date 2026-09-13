
import './App.css'
import Hero from './components/Hero/Hero'
import Technologies from './components/Technologies/Technologies'
import Navbar from './Navbar/Navbar'
import type { ITechnology } from './components/Types/technology'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer/Footer'
import { Suspense, useState } from 'react'

  const  techLoadDataFetch = async ():Promise<ITechnology[]> => {
    const  res = await  fetch ("/data.json")
    const data = await res.json()
    return data
    
  } 
   const techDataPromise = techLoadDataFetch()
function App() {
   const [count,setCount] = useState(0)
 
  
  return (
    <>
        <Navbar></Navbar>
         <Hero></Hero>
         <Suspense fallback={<div className='text-center font-semibold text-2xl'>Loading.....</div>}>
          <Technologies techDataPromise ={techDataPromise} count={count} setCount={setCount}></Technologies>
         </Suspense>
         <Footer></Footer>
         <ToastContainer></ToastContainer>
    </>
  )
}

export default App
