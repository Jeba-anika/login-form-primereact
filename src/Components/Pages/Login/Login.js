import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [checked, setChecked] = useState(false)

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className=' justify-center items-center my-auto'>
            <div className='flex justify-center'>
                <div className='card'>
                    <h5 className="text-center text-2xl my-8">Login</h5>
                    <div className='border p-10 rounded-xl'>
                        <form onSubmit={handleSubmit(onSubmit)} className='p-fluid'>
                            <div className='field w-96 mt-4 mb-8'>
                                <span className='p-float-label'>
                                    <InputText type='email' id="email" {...register('email', { required: true })}></InputText>
                                    <label htmlFor="email">Email address<span className='text-red-700'>*</span></label>
                                    {errors.email && <span className='text-left text-red-700'>Email is required</span>}
                                </span>
                            </div>
                            <div className='field mt-10'>
                                <span className='p-float-label'>
                                    <InputText type='password' id="password" {...register('password', { required: true })}></InputText>
                                    <label htmlFor="password">Password<span className='text-red-700'>*</span></label>
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