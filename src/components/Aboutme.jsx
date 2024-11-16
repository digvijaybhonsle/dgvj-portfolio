const AboutMe = () => {
  return (
    <div className="px-10 py-8" style={{ marginLeft: "250px", marginRight: "250px" }}>
      {/* Header Section */}
      <div className="flex justify-center items-center mb-8">
        <div
          className="py-2 px-5 font-bold font-sans tracking-widest border-4 border-gray-900 text-gray-900"
          style={{ minWidth: "200px", textAlign: "center" }}
        >
          A B O U T M E
        </div>
      </div>

      {/* Description Section */}
      <div className="px-12 text-gray-700 mb-8">
      <p className="leading-relaxed text-lg text-gray-800">
  I am a passionate and dedicated Software Developer Engineer Enthusiast with a strong foundation in development, specializing in the MERN stack. I thrive on solving complex problems and continuously expanding my technical skills. With a focus on building efficient and user-friendly applications, I am committed to delivering high-quality solutions while always staying curious and driven to learn more.
</p>

      </div>

      {/* Explore More Section */}
      <div className="flex justify-center items-center my-10">
        <div className="font-medium font-sans text-gray-800 hover:text-gray-600 transition duration-300 cursor-pointer">
          | Explore more |
        </div>
      </div>

      {/* Horizontal Divider */}
      <hr className="border-gray-300 my-8" />

      {/* Skills Section */}
      <div className="flex flex-wrap justify-between items-start gap-4">
        {/* Skill 1: Web Development */}
        <div className="flex-1 bg-gray-100 p-6 rounded-md shadow-md">
          <h1 className="font-bold text-xl tracking-wide text-gray-800 mb-2">Full Stack Development</h1>
          <p className="text-gray-700 leading-relaxed">
          Skilled in designing and building responsive, user-friendly websites and applications using the MERN stack (MongoDB, Express, React, Node.js). Proficient in modern web technologies and frameworks to create seamless digital experiences.
          </p>
        </div>

        {/* Skill 2: Problem Solving */}
        <div className="flex-1 bg-gray-100 p-6 rounded-md shadow-md">
          <h1 className="font-bold text-xl tracking-wide text-gray-800 mb-2">Problem Solving</h1>
          <p className="text-gray-700 leading-relaxed">
          Adept at analyzing complex issues and implementing effective solutions. Enjoys tackling challenges with a logical approach and optimizing performance through innovative thinking.
          </p>
        </div>

        {/* Skill 3: Maintenance */}
        <div className="flex-1 bg-gray-100 p-6 rounded-md shadow-md">
          <h1 className="font-bold text-xl tracking-wide text-gray-800 mb-2">Maintenance</h1>
          <p className="text-gray-700 leading-relaxed">
          Focused on ensuring the stability and efficiency of software systems. Committed to troubleshooting, updating, and maintaining applications for optimal performance and reliability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
