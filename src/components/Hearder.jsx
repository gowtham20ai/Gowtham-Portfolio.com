


// Header Component
const Header = () => {
  return (
    <>
      <div className=" hidden md:block 2xl-container mx-auto" >
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between items-center gap-2  mt-3 mb-3 ">
            <h1 className="text-xl font-[Roboto]  text-white">Gowtham </h1>
            <div>
              <ul className="flex justify-around gap-10 text-md font-[Roboto] text-white ">
             <a href="#Hero"> <li className="hover:bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 hover:p-3 hover:text-white  hover:shadow-2xl hover:translate-y-2 hover:rounded-lg transition-all duration-300">Home</li></a>
               <a href="#MyProject"><li className="hover:bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 hover:p-3 hover:text-white  hover:shadow-2xl hover:translate-y-2 hover:rounded-lg transition-all duration-300">Projects</li></a> 
               <a href="#Skill"><li className="hover:bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 hover:p-3 hover:text-white  hover:shadow-2xl hover:translate-y-2 hover:rounded-lg transition-all duration-300">Resume</li></a> 
               <a href="#Footer"><li className="hover:bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 hover:p-3 hover:text-white  hover:shadow-2xl hover:translate-y-2 hover:rounded-lg transition-all duration-300">Contact</li></a> 
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* md dislpay */}
      <div className="md:hidden  2xl-container mx-auto">
        <div className="w-[90%] mx-auto  ">
          <div className="flex justify-between  gap-2  mt-6 mb-3  ml-10 ">
            <h1 className="text-2xl font-[Roboto]  text-white ">
              Gowtham Portfolio
            </h1>
            <img src="https://ik.imagekit.io/8wxvbajv2/IMG-20251021-WA0037.jpg" alt="" className="w-[50px] h-[50px] object-cover rounded-2xl "></img>
          </div>
          <div className=" block md:hidden">
            <div className="bg-gradient-to-r from-[#2dd4bf]  to-[#1f2937] shadow-2xl rounded-3xl p-3 fixed bottom-10  w-[90%] right-6">
              <ul className=" blink-1 text-[18px] font-[Roboto] flex justify-around items-end p-1 ">
                <li className="  hover:text-white hover:bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-[#9ca3af] via-[#4b5563] to-[#1e40af] hover:rounded-lg py-1 px-1 ">
                  <a href="#Hero">Home</a>
                </li>
                <li className=" hover:text-white hover:bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-[#9ca3af] via-[#4b5563] to-[#1e40af] hover:rounded-lg py-1 px-1 " >
                  <a href="#About">About</a>
                </li>
                <li className=" hover:text-white hover:bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-[#9ca3af] via-[#4b5563] to-[#1e40af] hover:rounded-lg py-1 px-1 " >
                  <a href="#MyProject">Projects</a>
                </li>
                <li className=" hover:text-white hover:bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-[#9ca3af] via-[#4b5563] to-[#1e40af] hover:rounded-lg py-1 px-1 " >
                  <a href="#Skill">Resume</a>
                </li>
                <li className=" hover:text-white hover:bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-[#9ca3af] via-[#4b5563] to-[#1e40af] hover:rounded-lg py-1 px-1 " >
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