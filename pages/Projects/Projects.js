import React from "react";
import Image from "next/image";

const Projects = () => {

    return (

       
    
        <main className="px-10 py-5 bg-stone-900">
        <section className="min-h-screen">
        <h1 className=" text-amber-50 text-3xl font-sans">Projects I`ve Done</h1>
        <ul className="grid max-w-[26rem] sm:max-w-[52.5rem] mt-16 sm:mt-20 md:mt-32 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8">
        <li className="group relative rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50">
            <div className="aspect-[672/494] relative rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700">
                <Image src="/ai-text.jpg" alt="AI Text" width="416" height="100" />  

                        </div>
            <div className="flex flex-wrap items-center mt-6">
                <h2 className="text-sm leading-6 text-slate-900 dark:text-white font-semibold group-hover:text-sky-500 dark:group-hover:text-sky-400">
                    <a className="inline-flex" target="_blank" rel="noreferrer" href="https://github.com/byronsandoval1998/Ai-App">
                    
                        AI App
                        <svg className="w-6 h-6 flex-none opacity-0 group-hover:opacity-100" viewBox="0 0 24 24" fill="none">
                    <path d="M9.75 15.25L15.25 9.75M15.25 9.75H10.85M15 9.75V14.15" stroke="#0EA5E9" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"></path>
                </svg>
                        </a>
                </h2>
                
                <p className="w-full flex-none text-[0.8125rem] leading-6 text-slate-500 dark:text-slate-400">An app to process text</p>
            </div>
                                            </li>
        <li className="group relative rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50">
            <div className="aspect-[672/494] relative rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700">
                <Image alt="Book" src="/book.jpg" width="416" height="100" />
                </div>
                <div className="flex flex-wrap items-center mt-6">
                    <h2 className="text-sm leading-6 text-slate-900 dark:text-white font-semibold group-hover:text-sky-500 dark:group-hover:text-sky-400">
                        <a href="" target="_blank" rel="noreferrer" className="inline-flex">Book Management App
                        <svg className="w-6 h-6 flex-none opacity-0 group-hover:opacity-100" viewBox="0 0 24 24" fill="none">
                            <path d="M9.75 15.25L15.25 9.75M15.25 9.75H10.85M15.25 9.75V14.15" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </a></h2>
                            <p className="w-full flex-none text-[0.8125rem] leading-6 text-slate-500 dark:text-slate-400">C++ OOP application</p></div>
                            </li>

        </ul>


        </section>
        </main>
    )
}


export default Projects;