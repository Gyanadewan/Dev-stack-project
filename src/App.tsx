
import { Suspense } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Technologies from './components/Technologies/Technologies'
import Navbar from './Navbar/Navbar'
import type { ITechnology } from './components/Types/technology'
import { ToastContainer } from 'react-toastify'

  const  techLoadDataFetch = async ():Promise<ITechnology[]> => {
    const  res = await  fetch ("/data.json")
    const data = await res.json()
    return data
    
  } 
function App() {
  const techDataPromise = techLoadDataFetch()

  return (
    <>
        <Navbar></Navbar>
         <Hero></Hero>
         <Suspense fallback={<div>Loading Data</div>}>
          <Technologies techDataPromise ={techDataPromise} ></Technologies>
         </Suspense>
         <ToastContainer></ToastContainer>
    </>
  )
}

export default App
