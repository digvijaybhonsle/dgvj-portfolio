import { FaArrowUp, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <div className="bg-[#1c1c1c] text-white py-8 px-4">
      {/* Back to Top Section */}
      <div className="flex flex-col items-center mb-6">
        <FaArrowUp
          size={30}
          className="mb-2 cursor-pointer hover:text-gray-400 transition duration-300"
          onClick={scrollToTop} 
        />
        <h2
          className="text-lg font-semibold cursor-pointer hover:text-gray-400 transition duration-300"
          onClick={scrollToTop} 
        >
          BACK TO TOP
        </h2>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center items-center gap-6 mb-6">
        <a
          href="https://www.linkedin.com/in/digvijay-bhonsle/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-400 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/digvijaybhonsle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-400 transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:digvijaybhonsle007@gmail.com"
          className="text-2xl hover:text-gray-400 transition duration-300"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Copyright Section */}
      <div className="text-center">
        <h3 className="text-sm font-light tracking-widest">
          &copy; 2024 DIGVIJAY BHONSLE. All rights reserved!
        </h3>
      </div>
    </div>
  );
};

export default Footer;
