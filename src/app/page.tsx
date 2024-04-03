import { useAuth } from '@clerk/nextjs'
import supabase from '../lib/supabaseClient'
import React from 'react'

export default function Home() {

  return (

    <div className='flex text-4xl font-bold mt-20 items-center justify-center'>
      <h1>Welcome To Globalempirefx</h1>
    </div>

  )
}
