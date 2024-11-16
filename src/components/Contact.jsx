const Contact = () => {
  return (
    <div
      className="px-10"
      style={{ marginLeft: "250px", marginRight: "250px" }}
    >
      <div className="head flex justify-center items-center p-10 mt-6 mb-5">
        <div
          className="py-2 px-5 font-bold font-sans tracking-widest border-4 border-gray-900 text-gray-900"
          style={{ minWidth: "150px", textAlign: "center" }}
        >
          C O N T A C T
        </div>
      </div>
      <div style={{ paddingLeft: "120px", paddingRight: "120px" }}>
        <p className="mb-10">
        You can connect with me on social media platforms like LinkedIn, Twitter, or via Email. Additionally, feel free to leave me a message by filling out the provided form.
        </p>
      </div>
      {/* Horizontal Divider */}
      <hr className="border-gray-400 my-8" />
      <div className="form flex justify-center items-center py-10">
        <form className="w-full max-w-lg bg-gray-100 p-8 rounded-md shadow-md">
          <div className="mb-5">
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200"
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200"
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200"
            />
          </div>
          <div className="mb-5">
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 h-32 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
