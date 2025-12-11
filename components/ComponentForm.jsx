"use client";
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from '@mui/material';
import * as Yup from 'yup';
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/config/firebase';

const ComponentForm = ({ session }) => {

    const formValidation = Yup.object({
        name: Yup.string().required("Please enter the component's name"),
        component: Yup.string().required("Please pass in your component")
    })

    const initialValues = {
        name: "",
        component: ""
    }

    return (
        <main className='p-10 max-md:p-3'>
            <h1 className='text-center text-2xl mb-10 text-gray-700'>Fill this form to contribute to our ever growing community</h1>

            <section className='lg:w-1/2 mx-auto'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={formValidation}
                    onSubmit = { async (values) => {
                        const componentData = {
                            ...values,
                            author: session.user.name,
                            img: session.user.image,
                            timestamp: new Date().toLocaleDateString(),
                            userId: session.user.id
                        }
                        // console.log(componentData)
                        const docRef = await addDoc(collection(db, "library"), componentData)
                        // console.log("Document written with ID: ", docRef.id);

                    }}
                >
                    <Form className='space-y-5'>
                        <div className=''>
                            <label htmlFor="" className='text-xs'>Component Name:</label>
                            <Field
                                name="name"
                                className="w-full outline-none border border-gray-300 rounded-md p-2" placeholder="Enter component's name..." />
                            <ErrorMessage name='name' component={"p"} className='text-red-600 text-xs' />
                        </div>
                        <div>
                            <label htmlFor="" className='text-xs'>Code:</label>
                            <Field name="component" as="textarea" rows="10" className="w-full outline-none border border-gray-300 rounded-md p-2" placeholder="Pass in your component..." />
                            <ErrorMessage name='component' component={"p"} className='text-red-600 text-xs' />
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
