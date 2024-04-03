import { auth, currentUser } from '@clerk/nextjs';
import React from 'react'

export default async function Dashboard() {
    const { userId } = auth();
    const user = await currentUser()
    console.log(user)
    console.log(userId)
    if(!userId || !user) {
        return 
        <div>
            You Are Not Logged In.
        </div>
    }

  return (
    <div className='mt-10 text-start max-w-xl mx-auto bg-grey-200 p-5 rounded'>
      <h1 className='text-4xl font-bold'>Welcome to GEFX-Dash</h1>
      <ul className='list-none mt-10'>
        <li className='mb-2'>
          <span className='font-semibold'>First Name:</span> {user.firstName}
        </li>
        <li className='mb-2'>
          <span className='font-semibold'>Last Name:</span> {user.lastName}
        </li>
        <li className='mb-2'>
          <span className='font-semibold'>Username:</span> {user.username}
        </li>
        <li className='mb-2'>
          <span className='font-semibold'>Email:</span>{' '}
          {user.emailAddresses[0].emailAddress}
        </li>
        {/* <li className='mb-2'>
          <span className='font-semibold'>Private Message:</span> {user.privateMetadata}
        </li> */}
      </ul>
    </div>
  )
}
