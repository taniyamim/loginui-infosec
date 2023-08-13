import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className='flex justify-center items-center'>
           <div>
           <h1 className='text-black text-3xl pt-5 font-bold'>Welcome to PopX</h1>
            <p className='text-black py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptate quod. Eius eveniet accusamus sunt reiciendis? Quasi sapiente corrupti alias!</p>
           <Link to='/signUp' > <button className='btn btn-primary my-3 btn-wide'>Create Account</button> </Link>
           <br />
            <Link to='/signIn'><button className='btn bg-violet-300 btn-wide text-black btn-outline border-0 '>Already Registered? Login</button></Link>
           </div>
        </div>
    );
};

export default LandingPage;