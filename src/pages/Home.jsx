import React, { useEffect } from 'react';
import myImage from '../assets/pro.png';
import logo from '../assets/logo1.png';
import p1 from '../assets/1.png';
import p2 from '../assets/2.jpg';
import p3 from '../assets/3.jpg';
import { ReactTyped } from "react-typed";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Home() {
    // For Home
    const homeControls = useAnimation();
    const [homeRef, homeInView] = useInView({ triggerOnce: false, threshold: 0.3 });

    // For About
    const aboutControls = useAnimation();
    const [aboutRef, aboutInView] = useInView({ triggerOnce: false, threshold: 0.3 });

    // For Featured Projects
    const projectControls = useAnimation();
    const [projectsRef, projectsInView] = useInView({ triggerOnce: false, threshold: 0.2 });

    useEffect(() => {
        homeInView ? homeControls.start('visible') : homeControls.start('exit');
    }, [homeControls, homeInView]);

    useEffect(() => {
        aboutInView ? aboutControls.start('visible') : aboutControls.start('exit');
    }, [aboutControls, aboutInView]);

    useEffect(() => {
        if (projectsInView) {
            projectControls.start('visible');
        } else {
            projectControls.start('hidden'); // reset when out of view
        }
    }, [projectsInView, projectControls]);

    const fadeInLeft = {
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeInOut' } },
        hidden: { opacity: 0, x: -100 },
        exit: { opacity: 0, x: -100, transition: { duration: 0.6, ease: 'easeInOut' } },
    };

    const fadeInRight = {
        visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.2, ease: 'easeInOut' } },
        hidden: { opacity: 0, x: 100 },
        exit: { opacity: 0, x: 100, transition: { duration: 0.6, ease: 'easeInOut' } },
    };

    // Project card animation
    const cardVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
        }),
    };

    return (
        <>
            {/* HOME */}
            <div name="home" className="w-full bg-[#000009] text-white py-36" ref={homeRef}>
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 items-center px-8 gap-8 md:gap-4">

                    <motion.div
                        className="flex justify-center md:justify-end"
                        variants={fadeInLeft}
                        initial="hidden"
                        animate={homeControls}
                    >
                        <img
                            src={myImage}
                            alt="Janin Alintana"
                            className="w-[300px] h-auto object-contain drop-shadow-[0_0_15px_#64ffda]"
                        />
                    </motion.div>

                    <motion.div
                        className="md:col-span-2"
                        variants={fadeInRight}
                        initial="hidden"
                        animate={homeControls}
                    >
                        <p className="text-[#0FF4C6]">Hi, my name is</p>
                        <h1 className="text-4xl sm:text-7xl font-bold">Janin Alintana</h1>
                        <h2 className="text-2xl sm:text-5xl font-bold text-gray-300 flex items-center gap-2">
                            I'm a{' '}
                            <span className="text-[#0FF4C6]">
                                <ReactTyped
                                    strings={[
                                        'Frontend Developer',
                                        'Backend Developer',
                                        'Full Stack Developer',
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
                                <a href="/jta-react-portfolio/projects">View Work</a>
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* ABOUT */}
            <div className="w-full bg-[#DEFFF2] text-black py-20 px-8" ref={aboutRef}>
                <motion.div
                    className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-10"
                    variants={fadeInRight}
                    initial="hidden"
                    animate={aboutControls}
                >
                    <div className="flex-shrink-0">
                        <img
                            src={myImage}
                            alt="Janin Alintana"
                            className="w-[220px] h-[220px] object-cover rounded-full border-4 border-[#64ffda] shadow-md"
                        />
                    </div>

                    <div className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4 border-b-4 border-[#64ffda] inline-block">
                            About Me
                        </h2>
                        <p className="text-gray-700 text-md leading-relaxed">
                            Hi! I'm <span className="font-semibold text-[#0a192f]">Janin Alintana</span>, a passionate developer with a love for building things that solve real problems.
                            I have experience with <span className="font-semibold text-[#0a192f]">web development</span> and enjoy turning ideas into interactive experiences.
                            I'm always eager to learn new technologies and continuously improve my skills to build better, smarter applications.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* FEATURED PROJECTS */}
            <div className="w-full bg-[#464F51] text-black py-20 px-8" ref={projectsRef}>
                <div className="max-w-[1200px] mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-12 text-[#DEFFF2]">Featured Projects</h2>

                    <div className="grid gap-8 md:grid-cols-3">
                        {/* Website Development */}
                        <motion.div
                            custom={0}
                            variants={cardVariant}
                            initial="hidden"
                            animate={projectControls}
                            className="bg-[#f9f9f9] p-6 rounded-lg shadow-md border border-transparent 
                                hover:shadow-2xl hover:scale-105 hover:border-[#0FF4C6] 
                                transition-all duration-300 ease-in-out"
                        >
                            <img src={p2} alt="Website Development" className="w-full h-48 object-cover rounded" />
                            <h3 className="text-xl font-semibold mt-4 text-[#0a192f]">Website Development</h3>
                            <p className="text-gray-700 mt-2 text-sm">
                                Designed and built dynamic websites for publishing, bookings, and content management with modern frontend-backend integration.
                            </p>
                            <p className="mt-3 text-sm italic text-gray-500">React | Angular</p>
                        </motion.div>

                        {/* Automation */}
                        <motion.div
                            custom={1}
                            variants={cardVariant}
                            initial="hidden"
                            animate={projectControls}
                            className="bg-[#DEFFF2] p-6 rounded-lg shadow-md border border-transparent 
                                hover:shadow-2xl hover:scale-105 hover:border-[#0FF4C6] 
                                transition-all duration-300 ease-in-out"
                        >
                            <img src={p3} alt="Automation" className="w-full h-48 object-cover rounded" />
                            <h3 className="text-xl font-semibold mt-4 text-[#0a192f]">Automation</h3>
                            <p className="text-gray-700 mt-2 text-sm">
                                Automated repetitive business processes like data entry and extraction using RPA tools for efficiency and accuracy.
                            </p>
                            <p className="mt-3 text-sm italic text-gray-500">UiPath | Python</p>
                        </motion.div>

                        {/* Data Handling */}
                        <motion.div
                            custom={2}
                            variants={cardVariant}
                            initial="hidden"
                            animate={projectControls}
                            className="bg-[#f9f9f9] p-6 rounded-lg shadow-md border border-transparent 
                                hover:shadow-2xl hover:scale-105 hover:border-[#0FF4C6] 
                                transition-all duration-300 ease-in-out"
                        >
                            <img src={p1} alt="Data Handling" className="w-full h-48 object-cover rounded" />
                            <h3 className="text-xl font-semibold mt-4 text-[#0a192f]">Data Handling</h3>
                            <p className="text-gray-700 mt-2 text-sm">
                                Processed and visualized large data sets with dashboard insights and AI-based interpretation for smarter decision-making.
                            </p>
                            <p className="mt-3 text-sm italic text-gray-500">MongoDB | AI | Node.js</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
