const Navbar = ({ aboutRef, skillsRef, educationRef, contactRef }) => {
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full h-55 bg-[#1c1c1c] p-3 px-5">
      <div className="nav flex justify-end items-center space-x-12 px-10">
        {/* About Section Button */}
        <div
          onClick={() => scrollToSection(aboutRef)}
          className="about p-2 rounded-xl text-white hover:bg-white hover:text-black cursor-pointer"
        >
          About
        </div>

        {/* Skills Section Button */}
        <div
          onClick={() => scrollToSection(skillsRef)}
          className="skills p-2 rounded-xl text-white hover:bg-white hover:text-black cursor-pointer"
        >
          Skills
        </div>

        {/* Education Section Button */}
        <div
          onClick={() => scrollToSection(educationRef)}
          className="education p-2 rounded-xl text-white hover:bg-white hover:text-black cursor-pointer"
        >
          Education
        </div>

        {/* Contact Me Button */}
        <button
          onClick={() => scrollToSection(contactRef)}
          className="contact text-black border border-white bg-white px-4 py-2 rounded-3xl hover:bg-black hover:text-white"
        >
          Contact me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
