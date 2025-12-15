import React from 'react'
import { FaTrash } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";

const page = () => {
    return (
        <main className="min-h-dvh">
            <section className="bg-[url('/bg.png')] h-[20vh]">
                <div className='h-[20vh] bg-black/50 flex items-center justify-center p-3'>
                    <h1 className='text-white text-center md:text-2xl text-lg font-semibold'>Explore our catalogue of Components from diverse Developers</h1>
                </div>
            </section>

            <section className='grid lg:grid-cols-3 md:grid-cols-2 md:p-10 p-3'>
                <div className='shadow-md p-4 rounded-md'>
                    <div>
                        <span>
                            <img src="bg.png" alt="john doe" className='w-10 h-10 rounded-full' />
                            <p>John Doe</p>
                        </span>
                        <button>
                            <FaTrash />
                        </button>
                    </div>

                    <div>
                        <h1>Drop Down Menu</h1>
                        <p className='line-clamp-5'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt eaque dolore facilis exercitationem itaque! Laboriosam asperiores nulla ipsum numquam fugit sed, debitis, consectetur optio non vero laborum repellendus animi ex labore molestias vel. Culpa voluptatibus nisi ex delectus, minus repellendus aliquid dolor ut blanditiis distinctio in iusto beatae ea veritatis? Quibusdam non totam facere, numquam, hic error natus tempore repellat deserunt corrupti similique ducimus incidunt mollitia accusantium architecto, dolore earum ullam quod impedit quae neque voluptatem nesciunt! Vel ipsam cum molestias, voluptatem blanditiis corrupti sit minima dignissimos assumenda. Debitis veritatis pariatur, rem iusto dignissimos est hic expedita reprehenderit alias incidunt.
                        </p>
                    </div>

                    <div>
                        <p>12/34/2344</p>
                        <span>
                            <IoCopyOutline />
                            <p>Copy Code</p>
                        </span>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default page
