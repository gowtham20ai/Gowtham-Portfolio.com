


const MyProjects1 = ({image,title,description,t1,t2,t3,t4,site,github}) => {
    return (
        <>
            <div className="font-[Roboto] card-hover rounded-2xl border border-black border-spacing-50 hover:border-none text-white hover:text-black p-5 mt-10 space-y-4 shadow-md hover:shadow-3xl hover:translate-y-2 scale-in flex h-full flex-col bg-slate-900/70">
                <div className="overflow-hidden rounded-xl">
                    <img
                        src={image}
                        alt="image"
                        className="w-full h-[220px] object-cover scale-in"
                    />
                </div>
                <div className="px-2 flex-1">
                    <h1 className="font-mono text-xl text-[#25bda8] p-3 scale-in">{title}</h1>
                    <p className="fade-in-up text-sm leading-relaxed">{description}</p>
                </div>
                <div className="mt-5 stagger-child">
                    <div className="flex flex-wrap justify-between gap-2">
                        <p className="bg-slate-500 py-1 px-2 w-fit bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 font-[Roboto] rounded-2xl card-hover">
                            {t1}
                        </p>
                        <p className="bg-slate-500 py-1 px-2 w-fit bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 font-[Roboto] rounded-2xl card-hover">
                            {t2}
                        </p>
                        <p className="bg-slate-500 py-1 px-2 w-fit bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 font-[Roboto] rounded-2xl card-hover">
                            {t3}
                        </p>
                        <p className="bg-slate-500 py-1 px-2 w-fit bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 font-[Roboto] rounded-2xl card-hover">
                            {t4}
                        </p>
                    </div>
                </div>
                <div className="mt-auto flex justify-between gap-3 p-3 stagger-child">
                    <a href={site} target="_blank" rel="noopener noreferrer">
                        <button className="px-1 py-2 bg-[#4ade80] text-[16px] p-[2px] rounded-lg flex justify-center text-white hover:shadow-xl hover:shadow-green-500 hover:translate-y-2 card-hover icon-bounce">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth={1}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-arrow-up-right"
                            >
                                <path d="M7 7h10v10" />
                                <path d="M7 17 17 7" />
                            </svg>
                            Live link
                        </button>
                    </a>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <button className="px-1 py-2 bg-[#000000] text-[16px] p-[2px] rounded-lg flex justify-center text-white hover:shadow-2xl hover:translate-y-2 card-hover icon-bounce">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth={1}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-github"
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>{" "}
                            Github
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}
export default MyProjects1
