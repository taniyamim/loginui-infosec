import React from 'react';

const SignUp = () => {
    return (
        <div className='p-5 flex justify-center items-center'>
            <div>



                <div className="hero min-h-screen">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className='text-black text-3xl pt-5 font-bold'>Create your PopX account</h1>
                            <p className='text-black py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-violet-600 font-semibold">Full Name</span>
                                    </label>
                                    <input type="text" placeholder="enter full name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-violet-600 font-semibold">Phone Number</span>
                                    </label>
                                    <input type="text" placeholder="enter phone number" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-violet-600 font-semibold">Email Address</span>
                                    </label>
                                    <input type="text" placeholder="enter email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-violet-600 font-semibold">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-violet-600 font-semibold">Company Name</span>
                                    </label>
                                    <input type="text" placeholder="enter company name" className="input input-bordered" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Are you an Agency? <span className="required text-red-500">*</span></span>
                                    </label>
                                    <div className='flex'>
                                        <label className=''>
                                            <input type="radio" name="radio-2" className="radio radio-primary mx-3" checked />
                                            Yes
                                        </label>
                                        <label>
                                            <input type="radio" name="radio-2" className="radio radio-primary mx-3" />
                                            No
                                        </label>
                                    </div>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Create Account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;