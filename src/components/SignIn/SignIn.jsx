import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className='p-5 flex justify-center items-center'>
            <div>
                


                <div className="hero min-h-screen">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                        <h1 className='text-black text-3xl pt-5 font-bold'>Sigin to your PopX account</h1>
                <p className='text-gray-400 font-semibold py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-violet-600 font-semibold">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-violet-600 font-semibold">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    {/* please press login to see the account settings page */}
                                  <button className="btn btn-primary"> <Link to='/profile'></Link> Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignIn;