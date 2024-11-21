import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirect
import SoloAlert from 'soloalert';
import axios from 'axios';
import './cuslogin.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import BootstrapImage from '../image';

export default function AddReg() {
    const [isLoading, setLoading] = useState(false);
    const [cusname, setcusname] = useState('');
    const [cusemail, setcusemail] = useState('');
    const [phoneno, setphoneno] = useState('');
    const [password, setpassword] = useState('');
    const [Confirmpw, setconfirmpw] = useState('');

    const navigate = useNavigate(); // Hook to redirect user

    async function submitData(e) {
        setLoading(true);
        try {
            e.preventDefault();

            // Check if passwords match
            if (password !== Confirmpw) {
                SoloAlert.alert({
                    title: 'Oops!',
                    body: 'Password Mismatch!',
                    icon: 'warning',
                    theme: 'dark',
                    useTransparency: true,
                    onOk: function () {},
                });
            } else if (!cusname || !cusemail || !phoneno || !password) {
                SoloAlert.alert({
                    title: 'Oops!',
                    body: 'Please fill all fields',
                    icon: 'warning',
                    theme: 'dark',
                    useTransparency: true,
                    onOk: function () {},
                });
            } else {
                let role = 'admin';
                const newDetails = { cusname, cusemail, phoneno, password, role };

                // Send data to the backend
                const response = await axios.post('http://localhost:5000/customer/', newDetails);
                if (response.status === 200) {
                    SoloAlert.alert({
                        title: 'Welcome!',
                        body: 'Registered Successfully',
                        icon: 'success',
                        theme: 'dark',
                        useTransparency: true,
                        onOk: function () {
                            // After successful registration, redirect to login page
                            navigate('/cuslogin');
                        },
                    });
                }
            }
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    }

    return (
        <section className='vh-100'>
            <div className='container-fluid h-custom'>
                <div className='row d-flex justify-content-center align-items-center h-100'>
                    <div className='col-md-9 col-lg-6 col-xl-5'>
                        {/* Image shown only on large screens */}
                        <BootstrapImage name='hotel1.jpg' className='img-fluid d-none d-lg-block' alt='Sample image' />
                    </div>
                    <div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1'>
                        <h3>Register</h3>
                        <form onSubmit={submitData}>
                            <div className='form-outline mb-3'>
                                <input
                                    type='text'
                                    id='form3Example3'
                                    className='form-control form-control-lg'
                                    placeholder='Name'
                                    required
                                    onChange={e => {
                                        setcusname(e.target.value);
                                    }}
                                />
                            </div>
                            <div className='form-outline mb-3'>
                                <input
                                    type='email'
                                    id='form3Example4'
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
                                    type='number'
                                    id='form3Example4'
                                    className='form-control form-control-lg'
                                    placeholder='Phone Number'
                                    required
                                    onChange={e => {
                                        setphoneno(e.target.value);
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
                            <div className='form-outline mb-3'>
                                <input
                                    type='password'
                                    id='form3Example4'
                                    className='form-control form-control-lg'
                                    placeholder='Confirm Password'
                                    onChange={e => {
                                        setconfirmpw(e.target.value);
                                    }}
                                />
                            </div>

                            <div className='text-center text-lg-start mt-4 pt-2 d-flex justify-content-start'>
                                <button type='submit' className='btn btn-primary btn-lg' disabled={isLoading}>
                                    Register
                                </button>

                                <p className='small fw-bold mt-2 pt-1 mb-0 mx-5'>
                                    Already have an account?{' '}
                                    <a href='/cuslogin' className='link-danger'>
                                        Login
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
