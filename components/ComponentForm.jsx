"use client";
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from '@mui/material';
import * as Yup from 'yup';

const ComponentForm = () => {
    return (
        <main className='p-10 max-md:p-3'>
            <h1 className='text-center text-2xl mb-10 text-gray-700'>Fill this form to contribute to our ever growing community</h1>

            <section className='lg:w-1/2 mx-auto'>
                <Formik>
                    <Form className='space-y-5'>
                        <div className=''>
                            <label htmlFor="" className='text-xs'>Component Name:</label>
                            <Field className="w-full outline-none border border-gray-300 rounded-md p-2" />
                            {/* <ErrorMessage/> */}
                        </div>
                        <div>
                            <label htmlFor="" className='text-xs'>Code:</label>
                            <Field as="textarea" rows="10" className="w-full outline-none border border-gray-300 rounded-md p-2" />
                            {/* <ErrorMessage/> */}
                        </div>

                        <Button variant='outlined' type='submit' className='w-full mt-3'>
                            Add your component
                        </Button>
                    </Form>
                </Formik>
            </section>
        </main>
    )
}

export default ComponentForm
