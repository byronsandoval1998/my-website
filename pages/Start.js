import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Start = () => {
    return (
        <>
     
        <main className="bg-stone-900 px-10">
        
        <section className="min-h-screen">

          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium font-Slovic_S">Byron Sandoval</h2>
            <h3 className="text-amber-50 text-2xl py-5">Developer & Writer</h3>
            <p className="text-gray-300 text-md py-5 leading-8">
              Developer of thought provoking and problem-solving applications. 
              Contact me and let's get creating!
            </p>
            <div className="fs-4 mb-3">
          <div className="inline-flex items-center">
            <a href="https://github.com/byronsandoval1998" target="_blank" className="inline-flex items-center hover:opacity-75"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(255 251 235)" class="bi bi-github" viewBox="0 0 16 16">
             <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg><p className="text-amber-50 mx-2">GitHub</p></a> 
          <a className="inline-flex items-center hover:opacity-75" target="_blank" href="mailto:byron.sandoval1998@gmail.com">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(255 251 235)" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg><p className="text-amber-50 mx-2">Email</p>
          </a>

          </div>


              </div>
            
          </div>

        </section>
      </main>
        </>
    );
};

export default Start;