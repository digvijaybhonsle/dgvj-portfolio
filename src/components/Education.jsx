const Education = () => {
    return (
      <div className="px-10 py-8" style={{ marginLeft: "250px", marginRight: "250px" }}>
        {/* Section Header */}
        <div className="flex justify-center items-center mb-8">
          <div
            className="py-2 px-5 font-bold font-sans tracking-widest border-4 border-gray-900 text-gray-900"
            style={{ minWidth: "200px", textAlign: "center" }}
          >
            E D U C A T I O N
          </div>
        </div>
  
        {/* Education Details */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Current College */}
          <div className="flex-1 bg-gray-100 p-6 rounded-md shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Current College</h3>
            <p className="text-gray-700 mt-2">
              <span className="font-medium">INSTITUTION :</span> Shri Sant Gajanan Maharaj College of Engineering, SHEGAON.
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-medium">COURSE :</span> Bachelor of Engineering in Computer Science
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-medium">CURRENT YEAR :</span> Third Year
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-medium">YEAR OF GRADUATION :</span> 2026
            </p>
          </div>
  
          {/* HSC College */}
          <div className="flex-1 bg-gray-100 p-6 rounded-md shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">HSC College</h3>
            <p className="text-gray-700 mt-2">
              <span className="font-medium">INSTITUTION :</span> Radha Mahavidhyalay & Junior College , NAGPUR.
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-medium">YEAR OF GRADUATION :</span> 2022
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-medium">PERCENTAGE :</span> 87.83%
            </p>
          </div>
        </div>
  
        <hr className="border-gray-300 my-8" />
      </div>
    );
  };
  
  export default Education;
  