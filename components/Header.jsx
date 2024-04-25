import React from 'react'
import { FaHeartPulse } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
        <div className='flex items-center bg-white px-6 py-5 justify-between'>

            <div className='flex items-center gap-2'>
                <h3 className='font-bold text-xl'>Heart Score</h3>
                <FaHeartPulse />
            </div>

            <div>
                <button className='px-3 py-2 flex items-center gap-2 rounded whitespace-nowrap bg-purple-600 text-white'>check your heart <FaHeartPulse /></button>
            </div>

        </div>
    </div>
  )
}

export default Header