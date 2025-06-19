import Navbar from "./NavBar";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-900 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          {/* Logo and Site Title */}
          <div className="flex items-center space-x-2">
            {/* You can replace this with your actual logo */}
            <div className="bg-white text-blue-700 font-bold rounded-full w-10 h-10 flex items-center justify-center">
              ND
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              <span className="text-yellow-300">Noukari</span>Dekho
            </h1>
          </div>

          {/* Additional Header Content (optional) */}
          <div className="hidden md:flex items-center space-x-4 mt-4 md:mt-0">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-4 py-2 rounded-md transition duration-300">
              Post a Job
            </button>
            <button className="border border-white hover:bg-blue-800 text-white font-medium px-4 py-2 rounded-md transition duration-300">
              Login
            </button>
          </div>
        </div>
      </div>
      
      <Navbar />
    </header>
  );
}