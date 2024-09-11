import Image from 'next/image';
import Link from 'next/link';
import { LiaFacebook } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return(
        <div>
            <div className="grid grid-cols-3 md:grid-cols-5 px-2 md:px-0">
                <div className="md:col-span-2 col-span-3 mb-6 md:mb-0">
                    <div className='mb-5'>
                      <Image src="/logo.png" alt='logo' width={200} height={700}/>
                    </div>
                    <div>
                        <p className='hidden md:block'>Stay up to date on the latest features and releases by joining <br/>our newsletter.</p>
                        <p className='md:hidden'>Stay up to date on the latest features and releases by joining our newsletter.</p>
                        <form className='mt-5 md:mt-2 flex justify-start items-center gap-2'>
                            <input type='email' placeholder='Email Address' className='w-[63%] outline-none border border-[#000] rounded-md p-2 '/>
                            <input type='submit' value="Subscribe" className='border border-[#000] rounded-md p-2 ml-2 cursor-pointer'/>
                        </form>
                    </div>
                </div>

                <div>
                    <div className='mb-2 md:mb-5'>
                        <h2 className='font-[600]'>About us</h2>
                    </div>
                    <ul className='flex flex-col gap-1'>
                        <Link href="#">Services</Link>
                        <Link href="#">Contact Us</Link>
                        <Link href="#">Support</Link>
                        <Link href="#">FAQ</Link>

                    </ul>
                </div>
                <div>
                    <div className='mb-2 md:mb-5'>
                        <h2 className='font-[600]'>News</h2>
                    </div>
                    <ul className='flex flex-col gap-1'>
                        <Link href="#">Blog</Link>
                        <Link href="#">Career</Link>
                        <Link href="#">Partners</Link>
                        <Link href="#">Events</Link>

                    </ul>
                </div>

                <div>
                    <div className='mb-2 md:mb-5'>
                        <h2 className='font-[600]'>Follow us</h2>
                    </div>
                    <ul className='flex flex-col gap-1'>
                        <Link href="#" className='flex justify-start items-center gap-1'>
                          <LiaFacebook className='text-[#24336c]'/>
                          <p className='text-[12px]'>Facebook</p>                        
                        </Link>
                        <Link href="#" className='flex justify-start items-center gap-1'>
                          <FaInstagram className='text-[#24336c]'/>
                          <p className='text-[12px]'>Instagram</p>                        
                        </Link>
                        <Link href="#" className='flex justify-start items-center gap-1'>
                          <FaXTwitter className='text-[#24336c]'/>
                          <p className='text-[12px]'>Twiiter</p>                        
                        </Link>
                        <Link href="#" className='flex justify-start items-center gap-1'>
                          <FaYoutube className='text-[#24336c]'/>
                          <p className='text-[12px]'>Youtube</p>                        
                        </Link>

                    </ul>
                </div>
                
                

            </div>

            <div className='border-gray-300 border-[.1px] w-full mt-10 mb-10'></div>
            <div className='flex justify-between items-center px-2 md:px-0'>
                <div>
                  <p className='text=[14px]'>&copy; 2024 Your Company Name. All rights reserved.</p>
                </div>
                <div className='flex justify-evenly items-center gap-4 text-[14px] underline'>
                    <Link href='#'>Private Policy</Link>
                    <Link href='#'>Terms and Conditions</Link>
                    <Link href='#'>Cookie Policy</Link>
                </div>
            </div>
        </div>
    )
}
export default Footer