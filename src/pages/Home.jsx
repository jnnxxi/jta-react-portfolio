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
            {/* HERO SECTION */}
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
                        <p className="text-[#0FF4C6]">Hi, I'm</p>

                        <h1 className="text-4xl sm:text-7xl font-bold">
                            Janin Alintana
                        </h1>

                        <h2 className="text-2xl sm:text-5xl font-bold text-gray-300 flex items-center gap-2">
                            <span>I'm a</span>
                            <span className="text-[#0FF4C6]">
                                <ReactTyped
                                    strings={[
                                        'Full Stack Developer',
                                        'Frontend Developer',
                                        'Backend Developer',
                                        'RPA Developer'
                                    ]}
                                    typeSpeed={100}
                                    backSpeed={80}
                                    loop
                                />
                            </span>
                        </h2>

                        <p className="mt-6 text-gray-400 max-w-2xl leading-relaxed">
                            Full-Stack Developer passionate about building modern web applications,
                            automation solutions, and digital experiences that solve real-world
                            business problems.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <button className="text-white border-2 px-6 py-3 hover:bg-[#64ffda] hover:text-black transition rounded-full">
                                <a href="/jta-react-portfolio/projects">View Projects</a>
                            </button>

                            <button className="bg-[#64ffda] text-black px-6 py-3 hover:opacity-90 transition rounded-full">
                                <a href="/jta-react-portfolio/contact">Contact Me</a>
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* FEATURED SKILLS */}
            <div className="w-full bg-[#0a192f] text-white py-20 px-8">
                <div className="max-w-[1200px] mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-12 text-[#64ffda]">
                        Featured Skills
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {[
                            "HTML",
                            "CSS",
                            "JavaScript",
                            "React",
                            "Angular",
                            "Node.js",
                            "Python",
                            "MongoDB",
                            "UiPath",
                            "Bootstrap",
                            "Tailwind CSS",
                            "Git"
                        ].map((skill, index) => (
                            <div
                                key={index}
                                className="bg-[#112240] py-6 rounded-lg shadow-md hover:scale-105 transition"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
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
                            <button className="mt-4 bg-[#64ffda] text-black px-4 py-2 rounded-full hover:opacity-90 transition">
                                View Project
                            </button>
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
                            <button className="mt-4 bg-[#64ffda] text-black px-4 py-2 rounded-full hover:opacity-90 transition">
                                View Project
                            </button>
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
                            <button className="mt-4 bg-[#64ffda] text-black px-4 py-2 rounded-full hover:opacity-90 transition">
                                View Project
                            </button>
                        </motion.div>
                    </div>
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
                            Hi! I'm <span className="font-semibold text-[#0a192f]">Janin Alintana</span>,
                            a Full Stack and RPA Developer passionate about building web applications,
                            automation solutions, and digital experiences that solve real-world
                            business challenges. I enjoy learning new technologies and continuously
                            improving my skills to create efficient and user-friendly systems.
                        </p>

                        <div className="mt-6">
                            <a
                                href="/jta-react-portfolio/about"
                                className="inline-block bg-[#0a192f] text-white px-6 py-3 rounded-full font-medium hover:bg-[#64ffda] hover:text-black transition"
                            >
                                Learn More About Me
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* CONTACT CTA */}
            <div className="w-full bg-[#64ffda] text-black py-24 px-8">
                <div className="max-w-[900px] mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        Interested in Working Together?
                    </h2>

                    <p className="mb-8 text-gray-700">
                        I'm always open to discussing new projects, creative ideas,
                        and opportunities to build something amazing.
                    </p>

                    <button className="bg-[#0a192f] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition">
                        <a href="/jta-react-portfolio/contact">
                            Contact Me
                        </a>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Home;
