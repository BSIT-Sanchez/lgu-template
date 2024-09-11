'use client'
import Image from 'next/image';
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { LiaFacebook } from "react-icons/lia";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import Link from 'next/link';


export default function page(){
    const [showPassword, setShowPassword] = useState(false);
    const PassHandler = () => {
        setShowPassword(!showPassword);
    }

    return(
        <div className="flex h-screen w-full bg-white">
           <div className="w-[50%] h-full flex justify-center items-center">           
            <form className="flex flex-col justify-center items-center gap-4">
                <label className="font-[800] text-[25px] mb-3">Civil Registrar</label>
                <div className="flex p-2 border focus-within:border-[#d2d6db] shadow-inner text-[#363a42] placeholder-[#363a42]  rounded-md gap-3 w-full pl-4 relative custom-inner-shadow focus-within:bg-[#e8f0fd] placeholder-transparent mb-2">
              <Image src="/person.svg" alt="person" width={20} height={20}/>
              <input type="text" placeholder="username" className=" outline-none w-[80%] p-[4px] focus-within:bg-[#e8f0fd]" />
          </div>

                <div className="flex p-2 border focus-within:border-[#d2d6db] shadow-inner text-[#363a42] placeholder-[#363a42]  rounded-md gap-3 w-full pl-4 relative custom-inner-shadow focus-within:bg-[#e8f0fd] placeholder-transparent mb-2">
              <MdOutlineMail className="w-[27px] h-[27px] text-[#9CA3AF] pl-0"/>
              <input type="email" placeholder="email" className=" outline-none w-[80%] p-[4px] focus-within:bg-[#e8f0fd] " />
          </div>

          <div className="flex p-2 border focus-within:border-[#d2d6db] shadow-inner text-[#363a42] placeholder-[#363a42]  rounded-md gap-3 w-full pl-4 relative custom-inner-shadow focus-within:bg-[#e8f0fd]">
            <Image src="/key.svg" alt="key" width={20} height={20}/>
            <input type={showPassword ? "text" : "password"}  placeholder="password"  className="outline-none w-[80%] p-[4px] focus-within:bg-[#e8f0fd] " />
                {
                  showPassword ? (
                    <IoEye className="absolute top-2 right-0 text-[#98A2B1] w-[33px] h-[33px] cursor-pointer hover:bg-slate-200 rounded-[50%] p-2" onClick={PassHandler}/>
                  ) : (
                    <IoEyeOff className="absolute top-2 right-0  w-[33px] h-[33px] cursor-pointer hover:bg-slate-200 rounded-[50%] p-2 text-[#1c008b]" onClick={PassHandler}/>
                  )
                }
          </div>

          <p className="text-center text-[#9da5b2] font-[500] text-[17px] pt-1">Forgot password?</p>
          <div className='flex justify-between items-center gap-2'>
            <p className='text-[12px] font-[400]'>Already have account?</p>
            <Link href='/login'className='text-[12px] font-[700] text-[#24336c]'>Sign In</Link>
          </div>

          <div className='flex justify-between items-center gap-6'>
            <div className='flex justify-center items-center gap-2 border px-2 py-1 cursor-pointer rounded-md'>
              <FcGoogle/>
              <p>Google</p>
            </div>
            <div className='flex justify-center items-center gap-2 border px-2 py-1 cursor-pointer rounded-md'>
              <LiaFacebook className='text-[#24336c]'/>
              <p>Facebook</p>
            </div>
          </div>

          <input type="submit" value="Sign Up" className="w-full p-4 bg-[#24336c] mt-4 rounded-md text-[#fff] cursor-pointer font-semibold "/>
        </form>
            
           </div>


           {/**right side */}
           <div className="w-[50%] bg-red-700 banner">

           </div>
        </div>
    )
}