'use client'

import Image from 'next/image';
import Link from 'next/link';
import {BiSolidSun, BiSolidMoon} from 'react-icons/bi';
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown,IoIosArrowUp  } from "react-icons/io";
import { useState, useEffect } from 'react';
import { FaWpforms } from "react-icons/fa";


const CardArray = [
  {
    artile: 'Lastest Article',
    image: '/img1.png',
    description: 'Read Our latest Article',
    more: 'Read more'
  },
  {
    artile: 'Lastest Article',
    image: '/img2.png',
    description: 'Read Our latest Article',
    more: 'Read more'
  },
  {
    artile: 'Lastest Article',
    image: '/img1.png',
    description: 'Read Our latest Article',
    more: 'Read more'
  },
  {
    artile: 'Lastest Article',
    image: '/img2.png',
    description: 'Read Our latest Article',
    more: 'Read more'
  },
  {
    artile: 'Lastest Article',
    image: '/img1.png',
    description: 'Read Our latest Article',
    more: 'Read more'
  },
  {
    artile: 'Lastest Article',
    image: '/img2.png',
    description: 'Read Our latest Article',
    more: 'Read more'
  },
]

const Navigation = () => {
    const [serviceModal,setServiceModal] = useState(false);
    const [theme, setTheme] = useState('light');

  useEffect(() => {
    if(localStorage.getItem('theme') === null){
      localStorage.setItem('theme', 'light');
    }
  },[]);

  useEffect(()=> {
    const html = document.querySelector('html');
    if(localStorage.getItem('theme') === 'dark'){
      html.classList.add('dark');
      setTheme('dark');
    }else{
      html.classList.remove('dark');
      setTheme('light');
    }
  },[theme])

  const handleThemeSwitch = () => {
    if(localStorage.getItem('theme') === 'light'){
      setTheme('dark');
      localStorage.setItem('theme','dark');
    }else{
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }

    }

    const handlerService = () => {
        setServiceModal(!serviceModal);
    }
    return(
        <nav className='flex justify-between items-center p-2 relative'>
           <div>
            <Image src="/logo.png" alt='logo' width={200} height={700}/>
           </div>

           <form className=' hidden md:flex border justify-between items-center rounded-sm p-[2px] px-2 bg-white w-[30%]'>
             <input type="text" placeholder='search...' className='outline-none p-[2px] rounded-sm bg-white w-[95%]'/>
             <IoSearch className='cursor-pointer'/>
             
           </form>

           <div className=' justify-center items-center gap-4 hidden md:flex'>
            <div className='flex justify-center items-center gap-[2px] cursor-pointer' onClick={handlerService }>
             <button className='font-[500]'>Services</button>
             {
                serviceModal === false ? <IoIosArrowDown /> : <IoIosArrowUp />
             }
             
             
            </div>
             <Link href='/aboutUs' className='font-[500]'>About</Link>
             <Link href='/contactUs' className='font-[500]'>Contact us</Link>
             <Link href='/login' className='font-[500] border px-2 py-1 rounded-md'>Sign In</Link>

             {/**theme */}
             {
              theme === 'light' ? <BiSolidSun onClick={handleThemeSwitch} className='cursor-pointer'/> : <BiSolidMoon onClick={handleThemeSwitch} className='cursor-pointer'/>
             }
              
    
           </div>

           {
            serviceModal && (
            <div className='absolute bg-slate-900 w-full top-[60px] left-0 right-0 h-[450px] flex rounded-lg'>
                <div className='w-[50%] bg-red-900 rounded-tl-lg rounded-bl-lg flex'>
                    {/***left Registration */}
                   <div className="w-[50%] bg-orange-700 p-4">
                    <div className='flex justify-start items-start mb-10 mt-2'>
                        <h1 className='font-bold text-[18px] '>Civil Registrar Services</h1>
                    </div>

                    <div className='flex justify-start items-start gap-2 mb-9'>
                      <FaWpforms className='mt-1'/>
                      <div>
                        <h1 className='font-[600]'>Birth Registration</h1>
                        <p className='text-[14px]'>Get certifiedcopies of birth register</p>
                      </div>
                    </div>

                    <div className='flex justify-start items-start gap-2 mb-9'>
                      <FaWpforms className='mt-1'/>
                      <div>
                        <h1 className='font-[600]'>Marriage Registration</h1>
                        <p className='text-[14px]'>Get certifiedcopies of birth register</p>
                      </div>
                    </div>

                    <div className='flex justify-start items-start gap-2'>
                      <FaWpforms className='mt-1'/>
                      <div>
                        <h1 className='font-[600]'>Death Registration</h1>
                        <p className='text-[14px]'>Get certifiedcopies of birth register</p>
                      </div>
                    </div>



                   </div>
                    
                     {/***left Certification*/}
                     <div className="w-[50%] bg-orange-700 p-4">
                    <div className='flex justify-start items-start mb-10 mt-2'>
                        <h1 className='font-bold text-[18px] '>Request Issuance Certificate</h1>
                    </div>

                    <div className='flex justify-start items-start gap-2 mb-9'>
                      <FaWpforms className='mt-1'/>
                      <div>
                        <h1 className='font-[600]'>Birth Certification</h1>
                        <p className='text-[14px]'>Get certifiedcopies of birth register</p>
                      </div>
                    </div>

                    <div className='flex justify-start items-start gap-2 mb-9'>
                      <FaWpforms className='mt-1'/>
                      <div>
                        <h1 className='font-[600]'>Marriage Certification</h1>
                        <p className='text-[14px]'>Get certifiedcopies of birth register</p>
                      </div>
                    </div>

                    <div className='flex justify-start items-start gap-2'>
                      <FaWpforms className='mt-1'/>
                      <div>
                        <h1 className='font-[600]'>Death Certification</h1>
                        <p className='text-[14px]'>Get certifiedcopies of birth register</p>
                      </div>
                    </div>



                   </div>

                </div>

                <div className='w-[50%] bg-gray-500 rounded-tr-lg rounded-br-lg overflow overflow-y-scroll'>
                    <div className='flex justify-center items-center mb-5 mt-2'>
                        <h1 className='font-bold text-[18px] '>Featured From Blog</h1>
                    </div>

                    {/**Card */}

                    {
                      CardArray.map((card, index) => (
                        <div className='w-full p-4 pl-12 flex justify-evenly items-center gap-2 bg-gray-800 mx-auto ' key={index}>
                       
                          <div className='w-[50%]'>
                            <div className='w-full'>
                              <Image src={card.image}  alt='imges' className='rounded-md' width={300} height={100}/>
                            </div>
                            
                          </div>
                          <div className='w-[50%]'>
                            <h1 className='font-bold text-[16px]'>{card.artile}</h1>
                            <p className='text-[14px]'>{card.description}</p>
                            <button className='underline p-[4px] text-[12px] rounded-sm'>{card.more}</button>
                          </div>
                       
                    </div>
                      ))
                    }

                    
                    
                    
                    

                </div>
              </div>
            )
           }

           

           
        </nav>
    )
}
export default Navigation