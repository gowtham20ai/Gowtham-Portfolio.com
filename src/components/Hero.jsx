// / Hero Component

const Hero = () => {
  return(
    <>
  {/* hero sec  */}
  <div className=" puff-in-center flex justify-around  p-3  ml-5 mt-5  " id="Hero">
    <div className=" w-fit ml-2 justify-center items-center ">
      <p
        className="text-[22px] w-fit font-[Roboto]  mt-5  bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text
          md:w-[600px] lg:w-[600px] xl:w-[900px] 2xl:w-[1200px]"
      >
        <span className="text-[50px] text-white">
          Hello! I'm Gowtham MERN Stack Developer
        </span>
        <br />
        Welcome to My Portfolio ,A MERN Full Stack Developer and UI/UX Designer
        with internship experience in building modern, responsive, and
        user-friendly web applications. I combine strong technical skills with a
        creative design mindset. I am also a National Medalist in Taekwondo, a
        certified Referee, and an NCC Cadet, which has helped me develop
        discipline, leadership, and a strong work ethic. Tech Stack: React,
        Node.js, Express.js, MongoDB, Tailwind CSS, Figma
      </p>
    </div>
    {/* image */}
    <div className="hidden lg:block mt-5 justify-end items-center overflow-hidden  ]">
      <img
        src="https://ik.imagekit.io/8wxvbajv2/1766157556553.jpg"
        className="mt-10 w-[400px]  rounded-br-[50px]"
      />
    </div>
  </div>
  {/* bttn */}
  <div className=" mx-auto flex justify-start mt-4 ml-8 md:ml-24 lg:ml-15 mb-5 ">
    <p
      className="vibrate-2 py-2 px-4 bg-slate-500 w-fit bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 font-[Roboto]
      rounded-2xl flex  items-center gap-1 "
    >
      {" "}
      View All
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-arrow-right-icon lucide-arrow-right"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </p>
  </div>
</>

    
  
  )
}
export default Hero;