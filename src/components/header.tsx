import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default async function Header() {

  const{ userId } = auth();


  return (
    <div className='bg-red-600 text-neutral-100'>
      <div className='container mx-auto flex items-center justify-between py-4'>
        <Link href='/' className="font-bold">GlobalEmpireFx</Link>
        <div>
          {userId ? (
            <div className='flex gap-4 items-center'>
              <Link href='/dashboard' className="font-bold">Dashboard</Link>
              <UserButton afterSignOutUrl='/' />
            </div>
          ) : (
            <div className='flex gap-4 items-center'>
              <Link href='/sign-up'>Sign up</Link>
              <Link href='/sign-in'>Sign In</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
