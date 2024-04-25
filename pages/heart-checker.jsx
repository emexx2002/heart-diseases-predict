import React from 'react'
import HeartCheckerForm from "../components/HeartChecker/HeartCheckerForm"
import Link from 'next/link'

const HeartCheck = () => {
  return (
    <div className='h-screen w-full relative bg-gray-200 flex items-center justify-center'>
        <Link href={"/"} className='absolute top-3 left-4 z-10' >Back to homepage</Link>
        <HeartCheckerForm />
    </div>
  )
}

export default HeartCheck