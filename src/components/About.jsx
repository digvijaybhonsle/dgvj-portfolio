import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import dgvj from "../assets/dgvj.jpg";

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateText(true);
    }, 2000); // Delay of 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      {/* Top Section with Image and Navbar */}
      <div className="flex" style={{ height: "500px" }}>
        <div className="w-1/2 bg-[#1c1c1c] text-white flex flex-col items-center justify-center">
          <Navbar />
          <div className="flex justify-center items-center mt-6">
            <div
              className="rounded-full overflow-hidden bg-white shadow-lg"
              style={{ width: "350px", height: "350px" }}
            >
              <img
                src={dgvj}
                alt="Digvijay Bhonsle"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="w-1/2 bg-gray-300 flex flex-col justify-center items-center space-y-4 p-6">
          <div className={`transition-all duration-1000 transform ${animateText ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}>
            <h2 className="text-lg font-semibold text-gray-700">Hi, I am</h2>
            <h1 className="text-3xl font-bold text-gray-800 pt-10 pb-4">
              Digvijay Bhonsle
            </h1>
            <h3 className="text-md font-medium text-gray-600 pb-11">
              Software Developer Engineer Enthusiast / Problem Solver
            </h3>
            <div className="flex space-x-6 mt-2">
              {/* Social Icons */}
              {[
                { href: "https://twitter.com/yourprofile", icon: faTwitter },
                { href: "https://github.com/digvijaybhonsle", icon: faGithub },
                { href: "https://www.linkedin.com/in/digvijay-bhonsle/", icon: faLinkedin },
              ].map(({ href, icon }, index) => (
                <div
                  key={index}
                  className="p-2 rounded-md bg-gray-200 transition-transform transform duration-300 hover:scale-110 hover:bg-gray-400"
                >
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                      icon={icon}
                      size="md"
                      className="text-black hover:text-gray-800"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="p-9 px-10 bg-[#292a2b]">
        <div className="px-10">
          <h1 className="text-2xl text-white mb-4">About Me</h1>
          <p className="text-white text-sm">
            {showMore
              ? "I'm a passionate Software Developer Engineer Enthusiast with a strong focus on the MERN stack. I enjoy tackling complex challenges, building scalable applications, and continuously improving my technical skills. I'm always eager to learn new technologies and stay updated with industry trends."
              : "I specialize in web development, focusing on creating efficient, user-friendly applications using technologies like React, Node.js, MongoDB, and Express. I'm committed to delivering high-quality solutions and enjoy problem-solving."}
          </p>

          {/* Show More / Show Less Button */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 py-2 px-4 font-sm bg-[#292a2b] text-white rounded-md hover:bg-white hover:text-black transition duration-300"
          >
            {showMore ? "| Show Less |" : "| Read More |"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
