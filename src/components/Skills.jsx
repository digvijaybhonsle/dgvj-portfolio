import { FaReact, FaCss3Alt, FaJsSquare, FaGit, FaNodeJs, FaDatabase, } from 'react-icons/fa';
import { SiMongodb, SiExpress, } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="px-10" style={{ marginLeft: "250px", marginRight: "250px" }}>
      {/* Header Section */}
      <div className="head flex justify-center items-center p-10 mt-6 mb-5">
        <div
          className="py-2 px-5 font-bold font-sans tracking-widest border-4 border-gray-900 text-gray-900"
          style={{ minWidth: "150px", textAlign: "center" }}
        >
          T E C H N O L O G Y
        </div>
      </div>

      <div className="px-10 py-5">
        <h1 className="font-bold tracking-widest font-sans my-3 text-2xl text-black mx-10">Using Now:</h1>
        <div className="flex flex-wrap justify-between space-between items-center" style={{ paddingLeft: "130px", paddingRight : "130px", marginTop: "40px"}}>
          <div className="text-center">
            <FaReact size={50} color="#61DAFB" />
            <p className="mt-2 text-lg">React</p>
          </div>
          <div className="text-center">
            <FaCss3Alt size={50} color="#1572B6" style={{marginLeft: "25px"}} />
            <p className="mt-2 text-lg">Tailwind CSS</p>
          </div>
          <div className="text-center">
            <FaJsSquare size={50} color="#F7DF1E" style={{marginLeft: "10px"}} />
            <p className="mt-2 text-lg">JavaScript</p>
          </div>
          <div className="text-center">
            <FaGit size={50} color="#F1502F" />
            <p className="mt-2 text-lg">Git</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-10 items-center" style={{ paddingLeft: "120px", paddingRight : "120px", marginTop: "60px"}}>
          <div className="text-center">
            <SiMongodb size={50} color="#47A248" style={{marginLeft: "10px"}} />
            <p className="mt-2 text-lg">MongoDB</p>
          </div>
          <div className="text-center">
            <SiExpress size={50} color="#000000" />
            <p className="mt-2 text-lg">Express</p>
          </div>
          <div className="text-center">
            <FaNodeJs size={50} color="#8CC84B" style={{marginLeft: "8px"}}/>
            <p className="mt-2 text-lg">Node.js</p>
          </div>
          <div className="text-center">
            <FaDatabase size={50} color="#00758F" style={{marginLeft: "12px"}} />
            <p className="mt-2 text-lg">REST API</p>
          </div>
        </div>

        {/* Horizontal Divider */}
        <hr className="border-gray-400 my-8" />
      </div>
    </div>
  );
};

export default Skills;
