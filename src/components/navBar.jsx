import dropDown from "/images/chevron-down.png";
import MobileNav from "./mobileNav";

export default function NavBar() {
    let [home, trending, about] = "";
    if (window.location.hash === "#/home" || window.location.hash === "")
        home = "font-semibold text-sky-500 border-b-3 border-indigo-500";
    else home = "text-slate-500";

    if (window.location.hash === "#/trending")
        trending = "font-semibold text-sky-500 border-b-3 border-indigo-500";
    else trending = "text-slate-500";

    if (window.location.hash === "#/about")
        about = "font-semibold text-sky-500 border-b-3 border-indigo-500";
    else about = "text-slate-500";

    function openMobileMenu() {
        document.querySelector("#mobileNav").style.display = "block";
    }
    return (
        <>
            <nav
                id="navBar"
                className="relative flex px-[4%] pl-[8%] h-[5rem] lg:h-[6rem] w-full justify-between bg-white z-50"
            >
                {/*the logo part*/}
                {/*<img
                    alt="plan infinity logo"
                    className="w-[5rem] h-[4rem]"
                    src={logo}
                ></img>*/}
                <div
                    className="text-center self-center rounded-full bg-radial from-[rgb(39,131,168)]
                 via-[rgb(36,127,245)] to-[rgb(113, 133, 133)] w-[4.5rem] h-[4.5rem] text-white"
                >
                    <section className="relative rounded-full mx-auto w-[4.5rem] h-[4.5rem]">
                        <span className="font-broadway font-bold absolute top-[3%] left-[-30%] text-[rgb(55,40,151)] text-[1.7rem]">
                            Plan
                        </span>
                        <span className="font-broadway font-bold absolute top-[38%] left-[0%] text-[rgb(55,40,151)] text-[1.7rem]">
                            Infiniti
                        </span>
                        <span className="absolute top-[75%] left-[30%] text-[0.95rem] font-french text-slate-300">
                            Cinema
                        </span>
                    </section>
                </div>

                <div className="hidden lg:flex gap-x-[3%] w-[35%] font-inter text-lg ml-[25%]">
                    <div className={`h-full flex items-center ${home}`}>
                        <button className="hover:text-slate-700 hover:bg-white px-[1rem] py-[0.3rem] hover:outline-[3px] outline-grey-500 rounded-md">
                            <a href="#/home">Home</a>
                        </button>
                    </div>

                    <div className={`h-full flex items-center ${trending}`}>
                        <button
                            className="hover:text-slate-700 hover:bg-white px-[1rem] py-[0.3rem] hover:outline-[3px] outline-grey-500 
            rounded-md"
                        >
                            <a href="#/trending">Trending Movies</a>
                        </button>
                    </div>

                    <div className="relative group flex items-center ">
                        <button
                            className="flex items-center text-slate-500 hover:outline-3 outline-sky-500
                hover:bg-white px-[1rem] py-[0.3rem]"
                        >
                            Genres
                            <img
                                alt=""
                                className="group-hover:rotate-180 transition-transform duration-300"
                                src={dropDown}
                            ></img>
                        </button>
                        <div className="absolute top-[6rem] hidden left-[20%] group-hover:block z-40">
                            <ul className="bg-white text-slate-500 px-[2rem] py-[1rem] rounded-lg divide-y">
                                <li
                                    className="hover:bg-sky-500 hover:text-white cursor-pointer"
                                    href="#comingsoon"
                                >
                                    Action
                                </li>
                                <li className="hover:bg-sky-500 hover:text-white cursor-pointer">
                                    Animation
                                </li>
                                <li className="hover:bg-sky-500 hover:text-white cursor-pointer">
                                    Anime
                                </li>
                                <li className="hover:bg-sky-500 hover:text-white cursor-pointer">
                                    BollyWood
                                </li>
                                <li className="hover:bg-sky-500 hover:text-white cursor-pointer">
                                    Korean
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={`h-full hidden lg:flex items-center ${about}`}>
                    <button
                        className="hover:text-slate-700 hover:bg-white px-[1.5rem] py-[0.3rem] hover:outline-[3px] outline-grey-500 
               rounded-md font-semibold text-blue-500"
                    >
                        <a href="#/about">About Us</a>
                    </button>
                </div>

                <div className="h-full hidden lg:flex items-center">
                    <button
                        className="outline-3 outline-slate-800 bg-white hover:text-white hover:bg-blue-500 px-[1.5rem] py-[0.3rem] hover:outline-[3px] outline-grey-500 
            rounded-md font-semibold text-slate-600"
                    >
                        <a href="#/comingsoon">Advertise with Us</a>
                    </button>
                </div>

                <img
                    alt=""
                    onClick={openMobileMenu}
                    className="block lg:hidden w-[1.5rem] self-center cursor-pointer"
                    src="/images/icon-menu.svg"
                ></img>
            </nav>

            <MobileNav />
        </>
    );
}
