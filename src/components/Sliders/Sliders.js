import React from 'react';
import { Link } from 'react-router-dom';

const Sliders = ({ option }) => {
    const { photoURL, title, id } = option
    return (
        <Link to={``}>
            <div className="carousel-item mt-5">
                <div className="card w-full glass">
                    <figure><img className='w-full' src={photoURL} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl uppercase">{title}</h2>
                    </div>
                </div>
            </div>

        </Link>
    );
};

export default Sliders;