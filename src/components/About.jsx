// About Component
const About = () => {
  return(
    <>
  {/* About */}
  <div
    className=" puff-in-center 2xl-container mx-auto
   bg-gradient-to-r from-[rgb(15,23,42)]  to-[#334155] ml-5 mr-5 md:ml-20 md:mr-20 py-10  mt-10 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl " id="About"
  >
    <div className="w-[80%] mx-auto py-10 ml-10 mr-10 ">
      <div className="">
        <h1 className="text-3xl font-[Roboto] text-white ml-8  mb-5 ">
          About Me ..
        </h1>
        <br />
        <p className="font-[Roboto] text-xl w-fit h-fit overflow-hidden  bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text ">
          Hi I am Gowtham B ,a passionate{" "}
          <span className=" font-mono text-3xl text-[#7ca5dd]  ">
           MERN Full Stack Developer And  UI/UX Designer
          </span>{" "}
          who has completed a professional internship in full stack development.
          I enjoy creating clean, efficient, and visually appealing web
          applications. I am currently studying at Jamal Mohammed College,
          Trichy , where I continue to strengthen my technical and
          problem-solving skills. Apart from technology, my journey as a
          Taekwondo National Medalist, Referee, and NCC Cadet has shaped me into
          a focused, disciplined, and team-oriented individual
        </p>
        <p className="font-[Roboto] text-xl mt-5 mb-5 text-[#7ca5dd] ">
          Skills
        </p>
        <div className=" skill-wrapper overflow-hidden  ">
          <ul className=" skill-scroll flex  justify-items-center  grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8  gap-y-6">
            <li className="py-1 px-3 bg-slate-500 w-fit bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 font-[Roboto] rounded-2xl ">
              HTML
            </li>
            <li className="py-1 px-3 bg-slate-500 w-fit bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 font-[Roboto] rounded-2xl ">
              CSS
            </li>
            <li className="py-1 px-3 bg-slate-500 w-fit bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 font-[Roboto] rounded-2xl ">
              JavaScript
            </li>
            <li className="py-1 px-3 bg-slate-500 w-fit bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 font-[Roboto] rounded-2xl ">
              React.js
            </li>
            <li className="py-1 px-3 bg-slate-500 w-fit bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 font-[Roboto] rounded-2xl ">
              Node.js
            </li>
            <li className="py-1 px-3 bg-slate-500 w-fit bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 font-[Roboto] rounded-2xl ">
              Express.js
            </li>
            <li className="py-1 px-3 bg-slate-500 w-fit bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 font-[Roboto] rounded-2xl ">
              MongoDB
            </li>
            <li className="py-1 px-3 bg-slate-500 w-fit bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 font-[Roboto] rounded-2xl ">
              Tailwind CSS
            </li>
            <li className="py-1 px-3 bg-slate-500  ml-4 w-fit bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 font-[Roboto] rounded-2xl ">
              Figma
            </li>
          </ul>
        </div>
      </div>
      {/* intern */}
      <div className=" mt-5 space-y-6">
        <h1 className="text-3xl text-[#7ca5dd] font-mono mt-10 ">
          Training &amp; Intern..
        </h1>
        <ul className=" space-y-4 mt-5 ">
          <li className=" font-[Roboto] text-xl bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">
            MERN Full Stack Development Internship in a Revamp Academy
          </li>
          <li className=" font-[Roboto] text-xl bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">
            UI/UX Internship at ILIFE TECHNOLOGIES
          </li>
        </ul>
      </div>
      {/* sprots */}
      <div className=" mt-5 space-y-6">
        <h1 className="text-3xl text-[#7ca5dd] font-mono mt-10 ">
          Sports Achievements..
        </h1>
        <ul className=" space-y-4 mt-5 ">
          <li className=" font-[Roboto] text-xl bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">
            National Medalist in Taekwondo &amp; Silambam
          </li>
          <li className=" font-[Roboto] text-xl bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">
            Certified Taekwondo Referee
          </li>
          <li className=" font-[Roboto] text-xl bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">
            NCC Cadet
          </li>
        </ul>
      </div>
      {/* email */}
      <h1 className="text-2xl text-[#7ca5dd] font-mono mt-10 ">
        Let's Connect!
      </h1>
      <a href="mailto:gowthamtkd80@gmail.com">
        <p
          className="py-1 px-3 bg-slate-500 w-fit bg-gradient-to-l from-blue-500
    via-teal-500 to-green-500 font-[Roboto] p-4 mt-5 rounded-2xl "
        >
          Email Me ..
        </p>
      </a>
    </div>
  </div>
  <br />
</>

  )
}
export default About;