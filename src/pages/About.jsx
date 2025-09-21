import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaPython,
  FaTerminal,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaAngular,
  FaPhp,
  FaJs,
} from "react-icons/fa";

function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 py-16 bg-[#464F51] text-[#DEFFF2]">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0FF4C6] text-center">
          About Me
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl max-w-4xl mx-auto text-center leading-relaxed">
          A passionate developer with a love for building things that solve real
          problems. I have experience with web development and enjoy turning
          ideas into interactive experiences. I'm always eager to learn new
          technologies and continuously improve my skills to build better,
          smarter applications.
        </p>
      </section>

      {/* Skills Section */}
      <section className="w-full py-16 px-6 text-[#000009] bg-[#DEFFF2]/10">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#0FF4C6]">
          Skills
        </h2>
        <div className="w-full sm:w-4/5 lg:w-3/4 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Fullstack",
                icons: [<FaReact />, <FaNodeJs />, <FaAngular />],
              },
              {
                title: "Automation",
                icons: [<FaPython />, <FaTerminal />],
              },
              {
                title: "Frontend",
                icons: [
                  <FaJs />,
                  <FaReact />,
                  <FaAngular />,
                  <FaBootstrap />,
                  <FaHtml5 />,
                  <FaCss3Alt />,
                ],
              },
              {
                title: "Version Control",
                icons: [<FaGitAlt />],
                extra: ["GitHub", "GitLab"],
              },
              {
                title: "Backend",
                icons: [<FaNodeJs />, <FaJava />, <FaJs />, <FaPhp />],
              },
              {
                title: "Database",
                icons: [<FaDatabase />],
              },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl shadow-lg bg-[#DEFFF2] hover:scale-105 transition-transform border border-[#aaf3e4] min-h-[240px] flex flex-col justify-between"
              >
                <h3 className="text-xl font-semibold mb-4 text-[#000009]">
                  {skill.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-5xl text-[#0FF4C6]">
                  {skill.icons.map((icon, i) => (
                    <span key={i} className="drop-shadow-md">
                      {icon}
                    </span>
                  ))}
                </div>
                {skill.extra && (
                  <div className="mt-4 flex flex-wrap gap-3 font-bold text-[#000009] text-sm">
                    {skill.extra.map((txt, j) => (
                      <span key={j}>{txt}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="w-full py-16 px-6 bg-[#000009] text-white">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#0FF4C6]">
          Education
        </h2>

        <div className="w-full sm:w-2/3 lg:w-1/2 mx-auto">
          <div className="relative bg-[#000009] rounded-2xl shadow-xl overflow-hidden border border-[#0FF4C6]/40">
            {/* Top accent bar */}
            <div className="h-2 bg-gradient-to-r from-[#0FF4C6] to-[#00C2A8]"></div>

            <div className="p-8 text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-[#0FF4C6]/20 flex items-center justify-center">
                  🎓
                </div>
                <h3 className="text-2xl font-bold text-[#0FF4C6]">
                  Catanduanes State University
                </h3>
              </div>
              <p className="mt-4 text-lg font-semibold text-white">
                BS in Computer Engineering
              </p>
              <p className="text-sm text-gray-400">2018 - 2022</p>
              <p className="mt-3 text-sm text-gray-300 italic">
                Virac, Catanduanes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="w-full py-16 px-6 bg-[#1B2223] text-[#DEFFF2]">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#0FF4C6]">
          Career History
        </h2>

        <div className="relative w-full sm:w-4/5 mx-auto space-y-16">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-[#0FF4C6] hidden sm:block"></div>

          {[
            {
              company: "Fujitsu/WeServ Systems International, Inc. ",
              role: "Application Systems Engineer",
              years: "2024 - Present",
              desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
            },
            {
              company: "Fujitsu/WeServ Systems International, Inc. ",
              role: "Application Systems Engineer Trainee",
              years: "2023 - 2024",
              desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
            },
            {
              company: "Maxtec Solutions Philippines Inc.",
              role: "Pre-Sales Engineer",
              years: "2022 - 2023",
              desc: `- IT Support & Maintenance: Delivered end-to-end IT support for hardware, software, and networks. Managed workstations, peripherals, CCTV, VoIP, and access systems. Assisted with server room upkeep and infrastructure.\n\n- Presales & Quotation Prep: Collaborated with clients to assess requirements, especially for NAS solutions. Prepared tailored quotations and provided product guidance on compatibility and implementation.`,
            },
            {
              company: "Catanduanes State University - MIS",
              role: "Application Systems Development Trainee",
              years: "June 2021 - July 2021",
              desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
            },
          ].map((job, idx) => (
            <div
              key={idx}
              className="relative flex flex-col sm:flex-row items-start sm:items-center w-full"
            >
              {/* Bullet */}
              <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#0FF4C6] border-4 border-[#000009] z-10"></div>

              {/* Card */}
              <div
                className={`sm:w-[45%] p-6 rounded-2xl shadow-lg bg-[#000009] text-[#DEFFF2] ${
                  idx % 2 === 0
                    ? "sm:ml-[calc(50%+0.75rem)] text-left"
                    : "sm:-ml-[calc(-5%+0.75rem)] sm:text-right"
                }`}
              >
                <h3 className="text-xl font-semibold text-[#0FF4C6]">
                  {job.company}
                </h3>
                <p className="text-sm text-[#DEFFF2]/80 mb-2">
                  {job.role} — {job.years}
                </p>
                <p className="text-[#DEFFF2]/90 whitespace-pre-line">
                  {job.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
