"use client";
//This is the home page of the app.
//No need to import react in Next js
//Rest everything is same as React 
import Testimonials from '@components/Testimonials'
import About from '@components/About'
import Link from 'next/link'
import { useState } from 'react';

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="w-full flex-center flex-col">
      <div className='mt-36 mb-36'>
      <h1 className="main_text text-center"> 
        Find your  
        <span className="violet_gradient"> Mentor </span> today!
         
      </h1>
      <p className="desc text-center">
      HelloMentor is a platform for mentees to find thier mentors, 
      and for mentors to find thier mentees.
      </p>
      <div className='flex mt-12 justify-center'>
        <Link href={isLogin ? `/search` : `/signup`}
           className="big_btn">
        Get Started  →
      </Link>
      </div>
     
   </div>
   
   <div className='mt-12'>
    <Testimonials />
   </div>
   <div className='mt-20'>
    <About />
   </div>
      

      
      

      
    </section>
  )
}

export default Home