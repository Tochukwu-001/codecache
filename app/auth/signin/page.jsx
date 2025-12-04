import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { AiOutlineApple } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { signIn } from "@/auth"

const page = () => {
    return (
        <main className='min-h-dvh lg:w-1/3 mx-auto py-10 px-3'>
            <div className='flex items-center flex-col gap-10'>
                <h1 className='text-2xl font-semibold'>Sign in to your account</h1>

                <div className='space-y-5'>
                    <form className='w-full'>
                        <input type="text" className='w-full outline-none border border-gray-300 p-2' placeholder='Enter your email address...' />
                        <button className='bg-amber-600 text-white w-full mt-3 p-2 font-semibold'>Confirm Email</button>
                    </form>

                    <div className='flex items-center'>
                        <div className='border w-full border-gray-700'></div>
                        <p className='px-2'>or</p>
                        <div className='border w-full border-gray-700'></div>
                    </div>

                    <div className='space-y-5'>

                        <form
                            action={async () => {
                                "use server"
                                await signIn("google")
                            }}
                        >
                            <button className='border w-full border-gray-300 flex items-center justify-center gap-3 py-2'>
                                <FcGoogle className='text-xl' />
                                <span>Continue with Google</span>
                            </button>
                        </form>

                        <button className='border w-full border-gray-300 flex items-center justify-center gap-3 py-2'>
                            <AiOutlineApple className='text-xl' />
                            <span>Continue with Apple</span>
                        </button>
                        <button className='border w-full border-gray-300 flex items-center justify-center gap-3 py-2'>
                            <FaFacebook className='text-xl text-blue-600' />
                            <span>Continue with Facebook</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page
