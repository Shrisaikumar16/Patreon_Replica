"use client"
import React, {useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link';

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false);
    // if (session) {
    //     return (
    //     <>
    //         Signed in as {session.user.email} <br />
    //         <button onClick={() => signOut()}>Sign out</button>
    //     </>
    //     )
    // }
    return (
    // fixed w-full top-0 left-0
    <nav className='bg-gray-900 text-white flex justify-between items-center px-4 h-16 '>
        <Link href={"/"} className='logo font-bold text-xl flex gap-2 justify-center items-center'>         
          <img className="invertImg" src='/tea.gif' alt='tea_gif' width={44}></img>  
          <span>Get me a chai!</span>
        </Link>
          
        {/* <ul classNameName='flex justify-between gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Signup</li>
            <li>Login</li>
        </ul> */}

          <div className='relative'>
          {session && <>
            <button onClick={()=>setShowdropdown(!showdropdown)} onBlur={()=> {setTimeout(()=> {setShowdropdown(false)}, 300)}} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="inline-flex mx-2 bg-blue-600 rounded-xl items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-1 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
              Welcome! {session.user.email}
              <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/></svg>
            </button>

            {/* <!-- Dropdown menu --> */}
            <div id="dropdown" className={`${showdropdown?"":"hidden"} bg-gray-600 rounded-xl absolute left-24 z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44`}>
                <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <Link href="/dashboard" className="inline-flex items-center w-full p-2  hover:bg-gray-500 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</Link>
                  </li>
                  <li>
                    <Link href="#" className="inline-flex items-center w-full p-2  hover:bg-gray-500 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Your Page</Link>
                  </li>
                  {/* <li>
                    <Link href="#" className="inline-flex items-center w-full p-2  hover:bg-gray-500 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</Link>
                  </li> */}
                  <li>
                    <button onClick={()=>signOut({callbackUrl: "/"})} className="inline-flex items-center w-full p-2 hover:bg-gray-500 hover:bg-neutral-tertiary-medium  hover:text-heading rounded">Sign out</button>
                  </li>
                </ul>
            </div>

          </>}

          {/* {session && <Link rel="stylesheet" href={"/dashboard"}>
          <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2">Dashboard</button>
          </Link>
          } */}
          {/* {session && <button onClick={() => signOut()} type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2">Logout</button>
          } */}
          {!session && 
          <Link rel="stylesheet" href={"/login"}>
          <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
          </Link>
          }
          </div>
        
    </nav>
  );
};

export default Navbar