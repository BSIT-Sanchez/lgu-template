import Navigation  from '@/components/Navigation'
import Content from '@/components/Content'
import Content1 from '@/components/Content1'
import Content2 from '@/components/Content2'
import Content3 from '@/components/Content3'
import Footer from '@/components/Footer'

export default function Home() {
  return (
   <div className="h-auto w-full dark:bg-dakbackground dark:text-darktext">
    <div className="bg-blue-600">
      <div className="container mx-auto">
        {/**Navigation */}
         <Navigation/>
      </div>
    </div>

    {/**Contents */}
    <div className='container mx-auto h-auto'>
      <Content/>

    </div>

    <div className='container mx-auto h-auto md:mt-10 mt-1 md:mb-10 mb-3'>
      <Content1/>

    </div>
    <div className='container mx-auto h-auto md:mt-10 mt-3 md:mb-[8rem] mb-[3rem]'>
      <Content2/>

    </div>

    <div className='container mx-auto h-auto md:mt-10 mt-1 mb-10 '>
      <Content3/>

    </div>

    <div className='container mx-auto h-auto mt-20 pb-10 '>
      <Footer/>

    </div>


    


   </div>
  );
}
