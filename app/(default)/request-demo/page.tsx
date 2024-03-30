
import React from 'react'
import Form from '@/components/form'
export const metadata = {
  title: 'Request Demo - Avalon',
  description: "Talk to an expert about your requirements, needs, and timeline. Complete the form and we'll make sure to reach out. Get Avalon today.",
}



export default function Home() {
 
  return (
    <>
      {/* Demo form */}
      <section className="relative before:absolute before:inset-0 before:h-80 before:pointer-events-none before:bg-gradient-to-b before:from-zinc-100 before:-z-10">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="px-4 sm:px-6">

            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="font-inter-tight text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 pb-4">Get started with Rachel</h1>
              <p className="text-lg text-zinc-500">Talk to an expert about your requirements, needs, and timeline. Complete the form and we'll make sure to reach out.</p>
            </div>

            <Form />

          </div>
        </div>
      </section>

    </>
  )
}
