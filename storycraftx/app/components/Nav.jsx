import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function Nav() {
  return (
    <nav className="fixed top-0 w-full flex justify-between p-5 bg-transparent z-50 bg-gradient-to-r from-purple-600 to-indigo-600">
      <Link href="/" className="flex items-center space-between text-2xl font-bold">
          <Image 
          src='/storycraftx.png' 
          width={50}
          height={50}
          alt="StoryCraft X Logo"
          unoptimized={true}
          className='mr-4'
          >           
          </Image>
          StoryCraft X
        </Link>
      <div className='space-x-8 text-xl'>
        <Link href="/craft" className="mx-2">Craft</Link>
        <Link href="/about" className="mx-2">About</Link>
        <Link href="/signin" className="mx-2">Sign In</Link>
      </div>
    </nav>
  )
}

export default Nav