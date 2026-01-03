import MyProjects1 from "./MyProjects1";


const CardData = [{
  key: 1,
  image: "https://ik.imagekit.io/8wxvbajv2/food-logo_878566-147.jpg",
  title: "Food Store",
  description: " A responsive food odering website that allows users to browse food items and full E-commerce site and so Smooth user experience ...",
  t1: " HTML5",
  t2: "  CSS",
  t3: " JavaScript",
  t4: "   tailwindCSS",
  site: "https://gowtham20ai.github.io/food-store.pjt/food.html",
  github: "https://github.com/gowtham20ai/food-store.pjt.git",


}, {
  key: 2,
  image: "https://ik.imagekit.io/8wxvbajv2/images.jpeg?updatedAt=1766306853709",
  title: "Simple Portfolio.com",
  description: "A Simple Prortfolio website to showcase my skills and projects full E-commerce site and so a Smooth users experience a little bit of Animations",
  t1: " HTML5",
  t2: "  CSS",
  t3: " JavaScript",
  t4: "   tailwindCSS",
  site: "https://gowtham20ai.github.io/Prortfolio.pjt/home.html",
  github: "https://github.com/gowtham20ai/Prortfolio.pjt",


},  {
  key: 3,
  image: "https://ik.imagekit.io/8wxvbajv2/unnamed%20(4).png?updatedAt=1759686220963",
  title: "Thing Store",
  description:"A full-stack e-commerce application with user authentication, product listing, and cart management. Built with React and Tailwind CSS for a smooth and responsive user experience.Tech Used: HTML, Tailwind CSS, JavaScript, React.js, Node.js, MongoDB. ",
  t1: " React.js",
  t2: "  Node.js",
  t3: " JavaScript",
  t4: "  API Handling ",
  site: "https://gowtham20ai.github.io/food-store.pjt/food.html",
  github: "https://github.com/gowtham20ai/food-store.pjt.git",


}, {
  key: 4,
  image: "https://ik.imagekit.io/8wxvbajv2/Health-Insurance.jpg",
  title: "HealthCare",
  description:"HealthCare Center with Doctor appoinments user authentication, Built with React and Tailwind CSS for a smooth and responsive user experience.Tech Used: HTML, Tailwind CSS, JavaScript, React.js, Node.js, FireBase. ",
  t1: " React",
  t2: "  Node",
  t3: " FireBase",
  t4: "  API Handling ",
  site: "https://health-care-ai-7m6s.vercel.app",
  github: "https://github.com/gowtham20ai/HealthCare.ai",


}];


// my project Component
const MyProjects = () => {
  return (
    <>
      <>
        {/* my projects */}
        {/* card section */}
        <h1 className="text-3xl font-[Roboto] text-white ml-20 mt-12 ">
          My Projects ..
        </h1>
        <div className=" puff-in-center 2xl-container mx-auto ml-5 mr-5" id="MyProject">
          <div className="  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 ">
            {/* 1 */}


            {
              CardData.map((items, index) => {
                console.log(CardData)
                return (
                  <MyProjects1

                    key={index}
                    image={items.image}
                    title={items.title}
                    description={items.description}
                    t1={items.t1}
                    t2={items.t2}
                    t3={items.t3}
                    t4={items.t4}
                    site={items.site}
                    github={items.github}
                  />

                )
              })
            }






          </div>
        </div>
      </>



    </>


  )
}




export default MyProjects;