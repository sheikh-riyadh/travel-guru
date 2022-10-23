import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Sliders from '../Sliders/Sliders';

const Home = () => {

    const options = useLoaderData()

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className='w-9/12 m-auto'>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <h1 className="mb-5 lg:text-6xl font-bold">Lifelong memories just a few seconds away</h1>
                        <p className="mb-5 text-2xl">Let’s start your journey with us, your dream will come true</p>
                        <button className="btn btn-primary">Explore Destinations</button>
                    </div>
                    <div>
                        <div className="h-[410px] carousel carousel-vertical rounded-box">
                            {
                                options.map(option => <Sliders
                                    key={option.id}
                                    option={option}
                                ></Sliders>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;