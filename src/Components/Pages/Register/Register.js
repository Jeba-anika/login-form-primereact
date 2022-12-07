import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';


const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [checked, setChecked] = useState(false)

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className=' justify-center items-center my-auto mb-10'>
            <div className='flex justify-center'>
                <div className='card'>
                    <h5 className="text-center text-2xl my-8">Register</h5>
                    <div className='border p-8 rounded-xl'>
                        <form onSubmit={handleSubmit(onSubmit)} className='p-fluid'>
                            <div className='field w-96 mt-4 mb-8'>
                                <span className='p-float-label'>
                                    <InputText type='text' id="name" {...register('name', { required: true })}></InputText>
                                    <label htmlFor="name">Full Name<span className='text-red-700'>*</span></label>
                                    {errors.name && <span className='text-left text-red-700'>Full Name is required</span>}
                                </span>
                            </div>
                            <div className='field w-96 mt-4 mb-8'>
                                <span className='p-float-label'>
                                    <InputText type='email' id="email" {...register('email', { required: true })}></InputText>
                                    <label htmlFor="email">Email address<span className='text-red-700'>*</span></label>
                                    {errors.email && <span className='text-left text-red-700'>Email is required</span>}
                                </span>
                            </div>
                            <div className='field w-96 mt-4 mb-8'>
                                <span className='p-float-label'>
                                    <InputText type='number' id="phone" {...register('phone', { required: true })}></InputText>
                                    <label htmlFor="phone">Phone Number<span className='text-red-700'>*</span></label>
                                    {errors.phone && <span className='text-left text-red-700'>Phone Number is required</span>}
                                </span>
                            </div>
                            <div className='field w-96 mt-4 mb-8'>
                                <span className='p-float-label'>
                                    <InputText type='text' id="company" {...register('email')}></InputText>
                                    <label htmlFor="company">Company</label>
                                </span>
                            </div>
                            <div className='field mt-4 mb-8'>
                                <span className='p-float-label'>
                                    <InputText type='password' id="password" {...register('password', { required: true })}></InputText>
                                    <label htmlFor="password">Password<span className='text-red-700'>*</span></label>
                                    {errors.password && <span className='text-left text-red-700'>Password is required</span>}
                                </span>
                            </div>
                            <div className='field mt-4 mb-8'>
                                <span className='p-float-label'>
                                    <InputText type='password' id="confirmPassword" {...register('password', { required: true })}></InputText>
                                    <label htmlFor="confirmPassword">Confirm Password<span className='text-red-700'>*</span></label>
                                    {errors.confirmPassword && <span className='text-left text-red-700'>Confirm Password is required</span>}
                                </span>
                            </div>
                            <button disabled className='w-full rounded border py-2 px-4 bg-green-800 text-white hover:bg-green-700 disabled:opacity-75'>Register</button>
                        </form>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;