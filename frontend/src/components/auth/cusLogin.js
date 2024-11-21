import React, { useState } from 'react';
import axios from 'axios';
import './cuslogin.css';
import BootstrapImage from '../image';

export default function CusLogin() {
    const [isLoading, setLoading] = useState(false);
    const [cusemail, setcusemail] = useState('');
    const [password, setpassword] = useState('');

    async function loginData(e) {
        setLoading(true);
        try {
            const loginDetails = { cusemail, password };
            const data = (await axios.post('http://localhost:5000/customer/login', loginDetails)).data;
            console.log(data);

            // Check if login is successful and role is 'customer'
            if (data.status === 'success' && data.data.role === 'customer') {
                // Store the token in localStorage
                localStorage.setItem('access_token', data.token);

                // Redirect based on user role
                window.location = '/rooms';
            }
            if(data.status === 'success' && data.data.role === 'admin'){
                localStorage.setItem('access_token', data.token);
                window.location = '/dashboard';
            }
        } catch (e) {
            alert('Unauthorized user');
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className='vh-100'>
            <div className='container-fluid h-custom'>
                <div className='row d-flex justify-content-center align-items-center h-100'>
                    <div className='col-md-9 col-lg-6 col-xl-5'>
                        {/* Hide the image on large screens and above */}
                        <BootstrapImage name='hotel1.jpg' className='img-fluid d-none d-lg-block' alt='Sample image' />
                    </div>
                    <div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1'>
                        <form>
                            <h3 mb-5>Login</h3>
                            <div className='form-outline mb-4 mt-5'>
                                <input
                                    type='email'
                                    id='form3Example3'
                                    className='form-control form-control-lg'
                                    placeholder='Email'
                                    required
                                    onChange={e => {
                                        setcusemail(e.target.value);
                                    }}
                                />
                            </div>

                            <div className='form-outline mb-3'>
                                <input
                                    type='password'
                                    id='form3Example4'
                                    className='form-control form-control-lg'
                                    placeholder='Password'
                                    required
                                    onChange={e => {
                                        setpassword(e.target.value);
                                    }}
                                />
                            </div>

                            <div className='text-center text-lg-start mt-4 pt-2 d-flex justify-content-start'>
                                <button type='button' className='btn btn-primary btn-lg' onClick={loginData}>
                                    Login
                                </button>
                                <p className='small fw-bold mt-2 pt-1 mb-0 mx-5'>
                                    Don't have an account?{' '}
                                    <a href='/cusreg' className='link-danger'>
                                        Register
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-dark'>
                <div className='text-white mb-3 mb-md-0'>Copyright © 2020. All rights reserved.</div>
                <div>
                    <a href='#!' className='text-white me-4'>
                        <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='#!' className='text-white me-4'>
                        <i className='fab fa-twitter'></i>
                    </a>
                    <a href='#!' className='text-white me-4'>
                        <i className='fab fa-google'></i>
                    </a>
                    <a href='#!' className='text-white'>
                        <i className='fab fa-linkedin-in'></i>
                    </a>
                </div>
            </div>
        </section>
    );
}
