import React from 'react'
import Image from 'next/image'
import CoverImage from '../../../public/Gemini_Generated_Image_csato3csato3csat.png' // 2. Import your image file as an asset
import { FaCircleUser } from "react-icons/fa6";

const Username = async ({params}) => {
  return (
    <>
    
    <div className='cover w-full bg-red-50 relative'>
      <Image className='object-cover w-full h-[350]' src={CoverImage} alt="Cover Page" />
      <div className='absolute -bottom-12.5 left-1/2 -translate-x-1/2 border-white border-2 rounded-full'>
        <Image 
          className='rounded-full object-cover w-25 h-25' 
          width={100} height={100}
          src={"https://w0.peakpx.com/wallpaper/52/500/HD-wallpaper-cat-noir-miraculous.jpg"} 
          alt='Catnoir'
          />
        </div>
    </div>

    <div className='info flex flex-col gap-2 justify-center items-center my-15'>
      <div>
        @{(await params).username}
      </div>
      <div className='text-slate-400'>
        Creating Animated Art for VTT's
      </div>
      <div className='text-slate-400'>
        9,719 members 82 posts $15,450/release
      </div>

      <div className='payment flex gap-3 w-[80%] mt-11'>
        <div className='supporters w-1/2 bg-slate-900 rounded-lg text-white p-10'>
          {/* Show list of all supporters as a leaderboard */}
          <h2 className='text-2xl font-bold my-5'>Supporters</h2>
          <ul className='mx-5 text-lg'>
            <li className='my-4 flex gap-2 items-center'>
                <FaCircleUser className='text-5xl pr-1.5' /> 
                <span>
                  Shivkumar donated <span className='font-bold'> $30 </span>  with a message "Love you bro, love your work"
                </span>
              </li>
              <li className='my-4 flex gap-2 items-center'>
                <FaCircleUser className='text-5xl pr-1.5' /> 
                <span>
                  Shivkumar donated <span className='font-bold'> $30 </span>  with a message "Love you bro, love your work"
                </span>
              </li>
              <li className='my-4 flex gap-2 items-center'>
                <FaCircleUser className='text-5xl pr-1.5' /> 
                <span>
                  Shivkumar donated <span className='font-bold'> $30 </span>  with a message "Love you bro, love your work"
                </span>
              </li>
              <li className='my-4 flex gap-2 items-center'>
                <FaCircleUser className='text-5xl pr-1.5' /> 
                <span>
                  Shivkumar donated <span className='font-bold'> $30 </span>  with a message "Love you bro, love your work"
                </span>
              </li>
              <li className='my-4 flex gap-2 items-center'>
                <FaCircleUser className='text-5xl pr-1.5' /> 
                <span>
                  Shivkumar donated <span className='font-bold'> $30 </span>  with a message "Love you bro, love your work"
                </span>
              </li>
          </ul>
        </div>

        <div className='makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10'>
          <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
          <div className='flex gap-2 flex-col'>
            <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name'/>
            <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message'/>
            <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount'/>
            {/* <button className='bg-slate-800 p-3 rounded-lg'>Pay</button> */}
            <button type="button" className="text-white bg-slate-800 p-3 rounded-lg bg-linear-to-br from-black-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Pay</button>

          </div>
          {/* Or choose from these amounts */}

          <div className='flex gap-2 mt-5'>
            <button className='bg-slate-800 p-3 rounded-lg'>Pay $10</button>
            <button className='bg-slate-800 p-3 rounded-lg'>Pay $10</button>
            <button className='bg-slate-800 p-3 rounded-lg'>Pay $10</button>
            
          </div>
        </div>
      </div>
      
    </div>


    </>
  )
}

export default Username
