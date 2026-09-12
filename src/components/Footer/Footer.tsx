import FooterImg from "../../assets/logo-text.png"
function Footer() {
  return (
<footer className=" container mx-auto py-10">
     <div className="bg-gray-50 rounded-sm p-8" >
           <div className="grid grid-cols-5 gap-5 p-6 ">
           <div className="col-span-2">
        <img className="" src={FooterImg} alt="" />
      <p className="py-3 text-gray-600">Curated tools, technologies, and resources for developers building
       modern software.
       </p>
         <ul className="flex gap-5">
             <li><a href="">Github</a></li>
             <li><a href="">Twiter</a></li>
              <li><a href="">Linkdin</a></li>
         </ul>
      </div>
      <div className="col-span-1">
          <h2 className="font-semibold">Product</h2>
           <ul className="text-gray-600">
             <li><a href="">Home</a></li>
             <li className="py-1"><a href="">Technologie</a></li>
              <li><a href="">Projects</a></li>
         </ul>
      </div>
      <div className="col-span-1">
         <h2 className="font-semibold">Company</h2>
          <ul className="text-gray-600">
             <li><a href="">About</a></li>
             <li className="py-1"><a href="">Contact</a></li>
              <li><a href="">Careers</a></li>
         </ul>
      </div>
      <div className="col-span-1 ">
         <h2 className="font-semibold ]">Legal</h2>
         <ul className="text-gray-600">
             <li className="py-1"><a href="">Privacy Policy</a></li>
              <li><a href="">Terms of Service</a></li>
         </ul>
      </div>
      </div>
     </div>
      <div className="px-2 py-4">
        <p className="text-gray-400">© 2026 Dev Stack. All rights reserved.</p>
      </div>
    </footer>
   
  )
}

export default Footer
