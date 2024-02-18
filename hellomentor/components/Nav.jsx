"use client"; //We will render Nav on client side as we are using hooks here.

import Link from "next/link" //In order to ease the access of pages from Nav bar
import Image from "next/image" //Automatically optimizes images on the website
import {useState, useEffect} from 'react'; //Hooks from react
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'; //Utility fxns for easing sign in and sign out flow.

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [toggleDropdown, setToggleDropdown] = useState(false); //For drop down Nav

  return (
    <nav className="flex-between w-full mb-16 pt-3">
     <Link href="/" className="flex gap-2 flex-center">
      <Image 
        src="/assets/images/logo.svg"
        alt="Promptify"
        width={30}
        height={30}
        className="object-contain"
      />
      <p className="logo_text">Hello Mentor</p>
     </Link>

     {/* Desktop navigation */}
     <div className="sm:flex hidden">
     <div className="flex gap-3 md:gap-5">
          <Link href="/#testimonials"
           className="outline_btn">
            Testimonials
           </Link>
          
          <Link href="/#about"
           className="outline_btn">
            About Us
           </Link>

           <button type="button" onClick={signOut} className="outline_btn">
           {isLoggedIn ? "Sign Out" : "Sign In"}
           </button>
     </div>
     </div>

     {/* Mobile Navigation */}
     <div className="sm:hidden flex relative">
     <div className="flex gap-3 md:gap-5">
          <Link href="/#testimonials"
           className="outline_btn">
            Testimonials
           </Link>
          
          <Link href="/#about"
           className="outline_btn">
            About Us
           </Link>

           <button type="button" onClick={signOut} className="outline_btn">
           {isLoggedIn ? "Sign Out" : "Sign In"}
           </button>
     </div>
     </div>

    </nav>
  )
}

export default Nav