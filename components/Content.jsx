
const Content = () => {
    return(       
        <div className="w-full grid grid-cols-1 md:grid-cols-2 h-auto mt-4 md:mt-4 px-2 md:px-0">
            <div className="flex flex-col justify-center items-start">
              <h1 className="font-[900] md:text-[45px] text-[30px] md:leading-[46px] leading-[32px] mb-3">
               <span className="block md:hidden font-[900] md:text-[45px] text-[30px] md:leading-[46px] leading-[32px] mb-3">Streamlining Civil Registration for a Better Future</span>
               <span className="hidden md:block font-[900] md:text-[45px] text-[30px] md:leading-[46px] leading-[32px] mb-3">Streamlining Civil <br /> Registration for a <br /> Better Future</span>
              </h1>
               <p className="text-[16px]">Welcome to the Local Civil Registrar System, where we simplify the process of registration, verification, and issuance of certificates. Our user-friendly platform ensures a hassle-free experience for all.</p>

                <div className="flex justify-center md:justify-start items-center gap-3 mt-6 ">
                  <button className="p-2 bg-cyan-500 rounded-sm">Get Started</button>
                  <button className="p-2 border-[1px] border-[#000] rounded-sm">Learn More</button>

                </div>
                
            </div>

            <div className="flex justify-center items-center">
               <div className="w-full md:h-[430px] h-[400px] flex justify-center items-center md:mt-9 -mt-5">
                <img src='/content2.jpg' alt='images' className=' md:w-[90%] w-full h-[290px] md:h-[400px] rounded-sm'/>
               </div>
            </div>
            
        </div>

        
        
    )
}
export default Content