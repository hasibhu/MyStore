import React from 'react';
import { Form, Link } from 'react-router-dom';
import { FormInput, SubmitButton } from '../components';

const Register = () => {
    return (
        <section className='h-screen grid place-items-center bg-gray-600'>
            <Form method='POST'
                className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
                
                <h4 className='text-center text-3xl font-bold'>Register Here</h4>
                <FormInput type='text' label='Username' name='username'></FormInput>
                <FormInput type='email' label='Email' name='email'></FormInput>
                <FormInput type='password' label='Password' name='password'></FormInput>

                <div className="mt-4">
                    <SubmitButton text='Register'></SubmitButton>
                </div>

                <p className='text-center font-bold'> Already registered? <Link to={'/login'}> <span className='text-purple-500'>Login</span> here </Link></p>
            </Form>

        </section>
    );
};

export default Register;