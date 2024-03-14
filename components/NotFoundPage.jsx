"use client";
import React from 'react'
import Layout from "@/components/layout.tsx"
import ButtonSecondary from './ButtonSecondary';

function NotFoundPage() {
  return (
    <>
     <div>
       <Layout>
       <div className=''>
       <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-500 via-purple-500 to-white text-transparent bg-clip-text h-20">
            404 Page not Found
          </h1>
          <p className="mt-2 text-2xl leading-8 text-gray-200">
          The page you are trying to search for does not exist
            </p>
       </div>
       <img src="https://cdn.icon-icons.com/icons2/3178/PNG/512/error_window_icon_193931.png" alt="" />
      <ButtonSecondary buttonLink='/' buttonText={"Return Home"}/>
      </Layout>
     </div>
    </>
  )
}

export default NotFoundPage
