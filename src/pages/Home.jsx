import React from 'react';
import myImage from '../assets/pro.png';
import { ReactTyped } from "react-typed";

function Home() {
    return (
        <div name="home" className="w-full bg-black text-white py-24">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 items-center px-8 gap-8 md:gap-4">

                <div className="flex justify-center md:justify-end">
                    <img
                        src={myImage}
                        alt="Janin Alintana"
                        className="w-[300px] h-auto object-contain fade-bottom drop-shadow-[0_0_15px_#64ffda]"
                    />
                </div>

                <div className="md:col-span-2">
                    <p className="text-[#64ffda]">Hi, my name is</p>
                    <h1 className="text-4xl sm:text-7xl font-bold">Janin Alintana</h1>
                    <h2 className="text-2xl sm:text-5xl font-bold text-gray-300 flex items-center gap-2">
                        I'm a{' '}
                        <span className="text-[#64ffda]">
                            <ReactTyped
                                strings={[
                                    'Frontend Developer',
                                    'Backend Developer',
                                    'Full Stack Developer',
                                    // 'Automation Developer',
                                    'RPA Developer'
                                ]}
                                typeSpeed={100}
                                backSpeed={80}
                                loop
                            />
                        </span>
                    </h2>
                    <div>
                        <button className="text-white border-2 px-6 py-3 my-2 hover:bg-[#64ffda] hover:text-black transition rounded-4xl">
                            <a href="/projects">View Work</a>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
