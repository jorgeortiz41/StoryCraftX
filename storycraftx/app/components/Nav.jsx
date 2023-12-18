'use client'

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { TbSettings, TbBookmarks, TbUser } from "react-icons/tb";
import {signIn, signOut, useSession} from 'next-auth/react';
import { useState } from 'react';

function ProfileButton({username}) {
  const [open, setOpen] = useState(false);
  const {data: session} = useSession();

  function handleMenu() {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  return (
    <div className="relative inline-block text-left hover:shadow-xl rounded-md p-2">
      <div>
        <button type="button" className="mx-2" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={() => handleMenu()}>
        <Image src={session?.user?.image} width={30} height={30} alt="Profile Picture" className="rounded-full"/>
        </button>
      </div>

      {open ?
      <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
        <div className="py-2 flex flex-col justify-start" role="none">
          <div className='flex items-center text-gray-700 w-full px-4 py-2 gap-4'>
            <Image src={session?.user?.image} width={30} height={30} alt="Profile Picture" className="rounded-full"/>
            <p className="text-gray-700 block py-2" role="menuitem" tabIndex="-1" id="menu-item-0">{username}</p>
          </div>
          <button className="flex items-center text-gray-700 w-full px-4 py-2 gap-4 hover:bg-gray-200" role="menuitem" tabIndex="-1" id="menu-item-0"><TbUser/>Your profile</button>
          <button className="flex items-center text-gray-700 w-full px-4 py-2 gap-4 hover:bg-gray-200" role="menuitem" tabIndex="-1" id="menu-item-1"><TbBookmarks/>Your stories</button>
          <button className="flex items-center text-gray-700 w-full px-4 py-2 gap-4 hover:bg-gray-200" role="menuitem" tabIndex="-1" id="menu-item-3" ><TbSettings />Settings</button>
          <button className="flex text-gray-700 w-full px-4 py-2 gap-4 hover:bg-gray-200" role="menuitem" tabIndex="-1" id="menu-item-4" onClick={() => signOut()}>Sign out</button>
        </div>
      </div>
      :
      null
      }
      
    </div>
  )

}

function AuthButton() {

  const {data: session} = useSession();

  if (session) {
    return (
      <ProfileButton username={session?.user?.name}/>
    )
  }
  return (
    <button className="mx-2 hover:shadow-xl rounded-md p-2" onClick={() => signIn()}>Sign In</button>
  )
}

function Nav() {


  return (
    <nav className="fixed top-0 w-full flex justify-between p-5 bg-transparent z-50 bg-gradient-to-r from-purple-600 to-indigo-600">
      <Link href="/" className="flex items-center space-between text-2xl font-bold hover:shadow-xl rounded-md p-2">
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
      <div className='flex space-x-8 text-xl items-center'>
        <Link href="/craft" className="mx-2  hover:shadow-inner rounded-md p-2">Discover</Link>
        <Link href="/craft" className="mx-2  hover:shadow-xl rounded-md p-2">Craft</Link>
        <Link href="/about" className="mx-2  hover:shadow-xl rounded-md p-2">About</Link>
        <AuthButton />
      </div>
    </nav>
  )
}

export default Nav