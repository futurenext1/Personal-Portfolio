import React from "react";

const SkillSection = () => {
  return (
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading Section */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-800">
            My Skills
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 md:text-xl">
            Here are some of the skills I’m mastering to create impactful projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-8 mt-12 sm:grid-cols-3 lg:grid-cols-5 lg:gap-12">
          {[
            {
              src: "https://static-00.iconduck.com/assets.00/apps-figma-icon-2048x2048-ctjj5ab7.png",
              alt: "Figma",
            },
            {
              src: "https://cdn.iconscout.com/icon/free/png-512/free-javascript-2038874-1720087.png?f=webp&w=256",
              alt: "JavaScript",
            },
            {
              src: "https://cdn.iconscout.com/icon/free/png-512/free-react-1-282599.png?f=webp&w=256",
              alt: "React",
            },
            {
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3qKSabSGdbp4qpgYUaD-bx_uM9oMV5M_gRA&s",
              alt: "Next.js",
            },
            {
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDML5CFq70Y9FJ52YnyCjfdyUA3g9B6is_jA&s",
              alt: "Tailwind CSS",
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-3 group transition-transform duration-300 hover:scale-105"
            >
              <img
                src={skill.src}
                alt={skill.alt}
                width={90}
                height={90}
                className="rounded-full shadow-lg transition-all duration-300 group-hover:shadow-xl"
              />
              <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                {skill.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
