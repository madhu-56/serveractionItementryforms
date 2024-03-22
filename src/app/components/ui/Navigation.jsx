"use client"

import Link from "next/link"

function Navigation() {
  return (
    <>
     <div className='w-[300px] md:max-w-4xl bg-sky-600 text-white min-h-screen'>
        <div className='px-4 flex flex-col gap-5 mt-20'>
       

        <Link href="/user/dashboard">Dashboard</Link>
        <Link href="/user/settings">Setting</Link>
        
        <Link href="/user/about">About</Link>
        <Link href="/logout">Logout</Link>
        </div>
    </div>   
    </>
  )
}

export default Navigation