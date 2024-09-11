import { FaUserLock } from "react-icons/fa";
import { MdAppRegistration } from "react-icons/md";

const Content2 = () => {
    return(
        <div className="w-full grid md:grid-cols-2 grid-cols-1  h-auto md:mt-[8rem] mt-[4rem] px-2 md:px-0">
            <div className="flex justify-center items-center">
               <div className="w-full h-auto flex md:justify-start md:items-start justify-center items-center ">
                <img src='/content2.jpg' alt='images' className=' md:w-[90%] w-full md:h-[355px] h-[270px] rounded-sm'/>
               </div>
            </div>

            <div className="flex flex-col justify-center items-start">
                <h1 className="font-[900] md:text-[30px] text-[25px] md:leading-[40px] leading-[32px] mb-3 pt-6 text-center md:text-start md:pt-0">Welcome to the Local Civil<br />Registrar System - Simplifying Registration, Verification, and Issuance</h1>
                <p className="text-[15px] text-justify">Our system streamlines the process of registering, verifying, and issuing certificates, making it quick and convenient for individuals and organizations.</p>
                <div className="flex justify-center items-center gap-10 mt-6">

                    <div className="flex flex-col justify-center items-center bg-secondary dark:bg-darksecondary text-text dark:text-darktext shadow-md py-10 rounded-sm cursor-pointer">
                       <div className="flex justify-center items-center">
                         <MdAppRegistration className="text-[18px]99"/>
                        </div>
                        <h1 className="font-[700] text-[16px] mb-2 text-center">Efficient Registration</h1>
                        <p className="text-[13px] leading-4 text-center">Register births, marriages, and deaths with ease, ensuring accurate and reliable records.</p>

                    </div>

                    <div className="flex flex-col justify-center items-center bg-secondary dark:bg-darksecondary text-text dark:text-darktext shadow-md py-10 rounded-sm cursor-pointer">

                        <div className="flex justify-center items-center">
                         <FaUserLock className="text-[18px] "/>
                        </div>
                        
                       
                        <h1 className="font-[700] text-[16px] mb-2 text-center">Secure Verification</h1>
                        <p className="text-[13px] leading-4 text-center">Verify the authenticity of certificates quickly and securely, preventing fraud and misuse.</p>

                    </div>
                </div>
                               
            </div>


           
            
        </div>
    )
}
export default Content2