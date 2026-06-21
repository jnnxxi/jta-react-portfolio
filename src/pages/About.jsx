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
  FaJs, FaGithub, FaGitlab
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiExpress,
} from "react-icons/si";

function About() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] flex flex-col justify-center px-6 py-16 text-[#DEFFF2] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000009]/80"></div>

        <div className="relative z-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0FF4C6] text-center drop-shadow-lg">
            About Me
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl max-w-4xl mx-auto text-center leading-relaxed text-[#DEFFF2]">
            A passionate developer with a love for building things that solve real
            problems. I have experience with web development, automation, and
            software development. I enjoy turning ideas into interactive experiences
            while continuously learning new technologies.
          </p>

          <div className="flex justify-center mt-8">
            <span className="px-6 py-3 rounded-full bg-[#0FF4C6]/20 border border-[#0FF4C6] text-[#0FF4C6]">
              Full Stack Developer • RPA Developer • Problem Solver
            </span>
          </div>
        </div>
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
                skills: [
                  { icon: <FaReact />, name: "React" },
                  { icon: <FaNodeJs />, name: "Node.js" },
                  { icon: <FaAngular />, name: "Angular" },
                  { icon: <FaPhp />, name: "PHP" },
                  { icon: <FaJs />, name: "JavaScript" },
                  { icon: <SiExpress />, name: "Express.js" },
                ],
              },
              {
                title: "Automation",
                skills: [
                  { icon: <FaPython />, name: "Python" },
                  { icon: <FaTerminal />, name: "Scripting / Shell" },
                ],
              },
              {
                title: "Frontend",
                skills: [
                  { icon: <FaHtml5 />, name: "HTML5" },
                  { icon: <FaCss3Alt />, name: "CSS3" },
                  { icon: <FaBootstrap />, name: "Bootstrap" },
                  { icon: <SiTailwindcss />, name: "TailwindCSS" },
                  { icon: <FaReact />, name: "React" },
                  { icon: <FaAngular />, name: "Angular" },
                  { icon: <FaJs />, name: "JavaScript" },
                ],
              },
              {
                title: "Version Control",
                skills: [
                  { icon: <FaGitAlt />, name: "Git" },
                  { icon: <FaGithub />, name: "GitHub" },
                  { icon: <FaGitlab />, name: "GitLab" },
                ],
              },
              {
                title: "Backend",
                skills: [
                  { icon: <FaNodeJs />, name: "Node.js" },
                  { icon: <FaJava />, name: "Java" },
                  { icon: <FaPhp />, name: "PHP" },
                  { icon: <SiExpress />, name: "Express.js" },
                ],
              },
              {
                title: "Database",
                skills: [
                  { icon: <FaDatabase />, name: "SQL / General" },
                  { icon: <SiMongodb />, name: "MongoDB" },
                  { icon: <SiMysql />, name: "MySQL" },
                  { icon: <SiPostgresql />, name: "PostgreSQL" },
                ],
              },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl shadow-lg bg-[#DEFFF2] hover:scale-105 transition-transform border border-[#aaf3e4] min-h-[240px] flex flex-col justify-start"
              >
                <h3 className="text-xl font-semibold mb-4 text-[#000009]">
                  {skill.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-5xl text-[#0FF4C6] items-start">
                  {skill.skills.map((s, i) => (
                    <div key={i} className="relative group cursor-pointer">
                      {s.icon}
                      {/* Tooltip */}
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded bg-[#000009] text-white opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50">
                        {s.name}
                      </span>
                    </div>
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
      {/* <section className="w-full py-16 px-6 bg-[#000009] text-white">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#0FF4C6]">
          Education
        </h2>

        <div className="w-full sm:w-2/3 lg:w-1/2 mx-auto">
          <div className="relative bg-[#000009] rounded-2xl shadow-xl overflow-hidden border border-[#0FF4C6]/40">
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
      </section> */}

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
                className={`sm:w-[45%] p-6 rounded-2xl shadow-lg bg-[#000009] text-[#DEFFF2] ${idx % 2 === 0
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

      {/* Certifications Section */}
      <section className="w-full py-16 px-6 bg-[#DEFFF2]">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#0FF4C6]">
          Certifications
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold">
              Six Sigma Yellow Belt (SSYB)
            </h3>

            <p className="text-gray-600 mt-2">
              Understanding of process improvement, quality management,
              problem-solving, and operational efficiency techniques.
            </p>

            <div className="mt-4 text-sm text-gray-500">
              <p><strong>Issue Date:</strong> April 2026</p>
              <p><strong>Credential ID:</strong> 1160273</p>
            </div>

            <a
              href="https://www.6sigmastudy.com/certification/verify?type=SSYB&number=1160273"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 rounded-lg bg-[#0FF4C6] text-[#000009] font-medium hover:bg-[#00C2A8] transition"
            >
              View Credential
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold">
              Scrum Fundamentals Certified (SFC)
            </h3>

            <p className="text-gray-600 mt-2">
              Demonstrated knowledge of Agile and Scrum methodologies, team collaboration,
              project planning, and iterative development practices.
            </p>

            <div className="mt-4 text-sm text-gray-500">
              <p><strong>Issue Date:</strong> March 2026</p>
              <p><strong>Credential ID:</strong> 1151839</p>
            </div>

            <a
              href="https://www.scrumstudy.com/certification/verify?type=SFC&number=1151839"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 rounded-lg bg-[#0FF4C6] text-[#000009] font-medium hover:bg-[#00C2A8] transition"
            >
              View Credential
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold">
              GitHub Foundations
            </h3>

            <p className="text-gray-600 mt-2">
              Demonstrated knowledge of Git, GitHub workflows, version control,
              collaboration, and modern software development practices.
            </p>

            <div className="mt-4 text-sm text-gray-500">
              <p><strong>Issue Date:</strong> February 2026</p>
              <p><strong>Credential ID:</strong> 838BC217DF91AE74</p>
            </div>

            <a
              href="https://learn.microsoft.com/en-us/users/janinalintana-6610/credentials/838bc217df91ae74"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 rounded-lg bg-[#0FF4C6] text-[#000009] font-medium hover:bg-[#00C2A8] transition"
            >
              View Credential
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold">
              UiPath Training Certificate
            </h3>

            <p className="text-gray-600 mt-2">
              Demonstrated knowledge of UiPath, robotic process automation, workflow design,
              automation development, and process optimization.
            </p>

            <div className="mt-4 text-sm text-gray-500">
              <p><strong>Issue Date:</strong> June 2025</p>
              <p><strong>Credential ID:</strong> 151182324</p>
            </div>

            <a
              href="https://credentials.uipath.com/85670955-79d4-44a1-9882-b47e2ed7c5b5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 rounded-lg bg-[#0FF4C6] text-[#000009] font-medium hover:bg-[#00C2A8] transition"
            >
              View Credential
            </a>
          </div>

        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="w-full py-16 px-6 bg-[#1B2223] text-[#DEFFF2]">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#0FF4C6]">
          Awards & Recognition
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

          <div className="bg-[#000009] p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-[#0FF4C6]">
              Leadership Award
            </h3>
            <p className="mt-2 text-gray-300">
              Recognized for leadership, team coordination, and guiding project
              members throughout the bootcamp program.
            </p>
          </div>

          <div className="bg-[#000009] p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-[#0FF4C6]">
              Above and Beyond Award
            </h3>
            <p className="mt-2 text-gray-300">
              Awarded for consistently exceeding expectations and contributing
              beyond assigned responsibilities.
            </p>
          </div>

          <div className="bg-[#000009] p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-[#0FF4C6]">
              Best Project Award
            </h3>
            <p className="mt-2 text-gray-300">
              Led a team that delivered the highest-rated project during the
              company bootcamp program.
            </p>
          </div>

        </div>
      </section>

      {/* Resume Section */}
      <section className="w-full py-20 px-6 bg-white text-[#000009]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#0FF4C6]">
            Resume
          </h2>

          <p className="text-lg mb-8 text-gray-700">
            Download my latest resume to learn more about my experience,
            technical skills, and professional background.
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-block px-8 py-4 rounded-lg bg-[#0FF4C6] text-[#000009] font-semibold hover:bg-[#00C2A8] transition-all shadow-md"
          >
            Download Resume
          </a>
        </div>
      </section>



    </div>
  );
}

export default About;
