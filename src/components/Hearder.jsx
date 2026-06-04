


// Header Component
const Header = () => {
  return (
    <>
      <div className="hidden md:block 2xl-container mx-auto fade-in-up">
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between items-center gap-2 mt-3 mb-3">
            <h1 className="text-xl font-[Roboto] text-white scale-in">Gowtham Portfolio</h1>
            <div className="stagger-child">
              <ul className="flex justify-around gap-10 text-md font-[Roboto] text-white">
                <a href="#Hero">
                  <li className="hover:bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 hover:p-3 hover:text-white hover:shadow-2xl hover:translate-y-2 hover:rounded-lg transition-all duration-300 icon-bounce">Home</li>
                </a>
                <a href="#MyProject">
                  <li className="hover:bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 hover:p-3 hover:text-white hover:shadow-2xl hover:translate-y-2 hover:rounded-lg transition-all duration-300 icon-bounce">Projects</li>
                </a> 
                <a href="#Skill">
                  <li className="hover:bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 hover:p-3 hover:text-white hover:shadow-2xl hover:translate-y-2 hover:rounded-lg transition-all duration-300 icon-bounce">Resume</li>
                </a> 
                <a href="#Footer">
                  <li className="hover:bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 hover:p-3 hover:text-white hover:shadow-2xl hover:translate-y-2 hover:rounded-lg transition-all duration-300 icon-bounce">Contact</li>
                </a> 
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* md display */}
      <div className="md:hidden 2xl-container mx-auto ">
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between gap-2 mt-3 mb-3">
            <h1 className="text-2xl font-[Roboto] text-white scale-in">Gowtham</h1>
            <img src="https://ik.imagekit.io/8wxvbajv2/IMG-20251021-WA0037.jpg" alt="" className="w-[50px] h-[50px] object-cover rounded-2xl icon-bounce" />
          </div>
          <div className="block md:hidden">
            <div className="fixed bottom-4 left-3 right-3 z-50 mx-auto max-w-[95%] rounded-3xl bg-gradient-to-r from-[#2dd4bf]/95 to-[#1f2937]/95 shadow-2xl p-3 fade-in-up stagger-child">
              <ul className="blink-1 text-[15px] font-[Roboto] flex flex-wrap justify-around  items-center  grid grid-cols-5">
                <li className="hover:text-white hover:bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-[#9ca3af] via-[#4b5563] to-[#1e40af] hover:rounded-lg py-1 px-2 icon-bounce">
                  <a href="#Hero">Home</a>
                </li>
                <li className="hover:text-white hover:bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-[#9ca3af] via-[#4b5563] to-[#1e40af] hover:rounded-lg py-1 px-2 icon-bounce">
                  <a href="#About">About</a>
                </li>
                <li className="hover:text-white hover:bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-[#9ca3af] via-[#4b5563] to-[#1e40af] hover:rounded-lg py-1 px-2 icon-bounce">
                  <a href="#MyProject">Projects</a>
                </li>
                <li className="hover:text-white hover:bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-[#9ca3af] via-[#4b5563] to-[#1e40af] hover:rounded-lg py-1 px-2 icon-bounce">
                  <a href="#Skill">Resume</a>
                </li>
                <li className="hover:text-white hover:bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-[#9ca3af] via-[#4b5563] to-[#1e40af] hover:rounded-lg py-1 px-2 icon-bounce">
                  <a href="#Footer">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header;
