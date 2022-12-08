import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Link } from 'react-router-dom';
import { Password } from 'primereact/password';

const Login = () => {
    const { register, formState: { errors }, handleSubmit,  } = useForm({ mode: 'all' })
    const [checked, setChecked] = useState(false)


    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className=' justify-center items-center my-auto'>
            <div className='lg:flex md:flex justify-center'>
                <div className='card'>
                    <h5 className="text-center text-2xl my-8">Login</h5>
                    <div className='border p-8 rounded-xl mx-5'>
                        <form onSubmit={handleSubmit(onSubmit)} className='p-fluid'>
                            <div className='field lg:w-96 md:w-96  mt-4 mb-8'>
                                <span className='p-float-label'>
                                    <InputText type='email' id="email" {...register('email', { required: 'Email Address is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address. E.g. example@email.com' } }, )} className={`${errors.email && 'p-invalid'}`}></InputText>
                                    <label htmlFor="email">Email address<span className='text-red-700'>*</span></label>

                                </span>
                                <span>
                                    {errors.email && <span className='text-left text-red-700'>{errors.email.message}</span>}
                                </span>
                            </div>
                            <div className='field mt-10'>
                                <span className='p-float-label'>
                                <InputText type='password' id="password" {...register('password', { required: true })}></InputText>
                                    
                                    <label htmlFor="password">Password<span className='text-red-700'>*</span></label>

                                </span>
                                <span>
                                    {errors.password && <span className='text-left text-red-700'>Password is required</span>}
                                </span>
                            </div>
                            <div className="field-checkbox mt-5 mb-5">
                                <Checkbox inputId="cb1" onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                                <label htmlFor="cb1" className="p-checkbox-label ml-3 text-sm">Keep me Logged In</label>
                            </div>
                            <button className='w-full rounded border py-2 px-4 bg-green-800 text-white hover:bg-green-700'>Login</button>
                        </form>
                        <div className='flex justify-between my-4 text-blue-700'>
                            <Link to='/register'>Register</Link>
                            <Link>Forgot Password</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;