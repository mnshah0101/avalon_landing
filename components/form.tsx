'use client'
import { useState } from 'react';
import emailjs from '@emailjs/browser';


export default function Form() {
    const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_TEMPLATE_ID || '',
        e.currentTarget,
        process.env.NEXT_PUBLIC_PUBLIC_KEY || ''
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage('');
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          console.log(error);
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage('');
          }, 5000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.currentTarget.reset();
  };



    return(
         <div className="max-w-[25rem] mx-auto p-6 rounded-lg shadow-2xl bg-gradient-to-b from-zinc-100 to-zinc-50/70 relative before:absolute before:-top-12 before:-left-16 before:w-96 before:h-96 before:bg-zinc-900 before:opacity-[.15] before:rounded-full before:blur-3xl before:-z-10">

              <form onSubmit={e=>sendEmail(e)}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-zinc-800 font-medium mb-2" htmlFor="name">Full Name</label>
                    <input name='name' id="name" className="form-input text-sm w-full" type="text" placeholder="Patrick Rossi" required />
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-800 font-medium mb-2" htmlFor="email">Work Email</label>
                    <input name='email' id="email" className="form-input text-sm w-full" type="email" placeholder="mark@acmecorp.com" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="message">Project Details</label>
                    <textarea name='message' id="message" className="form-textarea text-sm w-full" rows={4} placeholder="Share your requirements" required></textarea>
                  </div>
                </div>
                <div className="mt-5">
                  <button className="btn text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-full shadow">Request Demo</button>
                </div>

                {isSubmitting && <p className="text-sm text-zinc-500 mt-4">Sending...</p>}
                {stateMessage && <p className="text-sm text-zinc-500 mt-4">{stateMessage}</p>}


              </form>

             

            </div>
    )
}