import React from 'react'
import { FaHeartPulse } from "react-icons/fa6";
import Header from '../components/Header.jsx'
import { useRouter } from 'next/router.js';

const index = () => {
  const router = useRouter()
  return (
    <div className='bg-gray-200'>
      <Header />
      <div className='h-[80vh] flex items-center justify-center'>
        <div>
          <h3 className='lg:text-8xl font-semibold h-4xl text-center' >Predict Your Risk</h3>
          <h3 className=''>Advanced AI Analysis</h3>

          <div className='mt-6'>
            <button onClick={() => router.push("/heart-checker")} className='px-3 py-2 flex h-[60px] text-3xl mx-auto font-semibold items-center gap-2 rounded whitespace-nowrap bg-purple-600 text-white'> <FaHeartPulse /> check your heart</button>
          </div>
        </div>


      </div>
      <div className='w-full bg-white flex items-center justify-center h-[10vh]'>
        <h3>AI-Driven Heart Disease Predictor By ODERA NWOSU FRANCIS</h3>
      </div>
    </div>
  )
}

export default index