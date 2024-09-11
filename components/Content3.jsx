import { FaUserLock } from "react-icons/fa";
import { MdAppRegistration } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Content3 = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-10 px-2 md:px-0"> 
          <div className="md:col-span-3 col-span-1">
            <h1 className="font-[900] text-[30px] leading-[40px] mb-3 text-center hidden md:block">Register, Verify, and Request Certificates <br/>with Ease</h1>

            <h1 className="font-[900] text-[25px] leading-[32px] mb-3 text-center md:hidden">Register, Verify, and Request Certificates with Ease</h1>

          </div>

          <div className="p-6 rounded-md bg-secondary dark:bg-darksecondary shadow-md cursor-pointer w-full h-[260px] text-text dark:text-darktext">
            <div className="flex justify-center items-center mb-4">
             <MdAppRegistration className="text-[18px]"/>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-[700] text-center mb-3">Simple and Efficient Certificate  <br/>Management</h2>
            </div>
            <div>
              <p className="text-justify text-[14px]">Our Local Civil Registrar System provides a step-by-step guide on how to register, verify, and request the issuance of certificates. With our user-friendly interface, you can easily navigate through the process and complete your tasks hassle-free.</p>
              <div className="flex justify-center items-center gap-1 mt-2 text-[13px]">
                <button className="">Request</button>
                <MdKeyboardArrowRight/>
              </div>
            </div>

          </div>

          

          <div className="p-6 rounded-md bg-secondary dark:bg-darksecondary shadow-md cursor-pointer w-full h-[260px] text-text dark:text-darktext">
            <div className="flex justify-center items-center mb-4">
             <FaUserLock  className="text-[18px]"/>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-[700] text-center mb-3">Fast and Reliable Certificate<br/>Verification</h2>
            </div>
            <div>
              <p className="text-justify text-[14px]">With our advanced verification system, you can quickly validate the authenticity of certificates. Say goodbye to manual verification processes and enjoy the convenience of our automated solution.</p>
              <div className="flex justify-center items-center gap-1 mt-2 text-[13px]">
                <button className="">Verify</button>
                <MdKeyboardArrowRight/>
              </div>
            </div>

          </div>
         
          <div className="p-6 rounded-md bg-secondary dark:bg-darksecondary shadow-md cursor-pointer w-full h-[260px] text-text dark:text-darktext">
            <div className="flex justify-center items-center mb-4">
             <MdAppRegistration className="text-[18px]"/>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-[700] text-center mb-3">Creating Certificates and Issuing <br/>them is an easy task.</h2>
            </div>
            <div>
              <p className="text-justify text-[14px]">Requesting certificates has never been easier. Our system streamlines the issuance process, ensuring that you receive your certificates promptly. Experience hassle-free certificate management today.</p>
              <div className="flex justify-center items-center gap-1 mt-2 text-[13px]">
                <button className="">Request</button>
                <MdKeyboardArrowRight/>
              </div>
            </div>

          </div>
          
        </div>
    )
}
export default Content3