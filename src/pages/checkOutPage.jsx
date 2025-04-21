import NavBar from "../components/navBar";
import MovieTrailer from "../components/MovieTrailer";
import Footer from "../components/footer";
import { NewsLetter, Address } from "../components/footer";
import proptype from "prop-types";

export default function CheckOutPage() {
    const array = [];
    const array0 = sessionStorage.getItem("genres").split(",");
    array0.map((it) => {
        array.push(<Genre key={it.id}>{it}</Genre>);
    });
    return (
        <>
            <div className="min-h-[120vh] bg-slate-300">
                <NavBar />
                <div className="p-[3%]">
                    <h1 className="text-3xl lg:text-5xl text-white mb-[3rem]">
                        {sessionStorage.getItem("title")}
                    </h1>
                    <section className="grid grid-cols-1 grid-rows-2 md:grid-rows-none md:grid-cols-[22.5%_77.5%] bg-white lg:h-[28.5rem] rounded-lg p-[2%]">
                        <div className="">
                            <img
                                alt=""
                                className="w-full rounded-lg"
                                src={sessionStorage.getItem("img")}
                            ></img>
                        </div>

                        <article className="relative pl-[4%] lg:pt-[2%] flex flex-col gap-y-[4%]">
                            <h3 className="text-xl lg:text-3xl text-sky-500 font-semibold">
                                Movie Title:
                                <span className="inline-block pl-[0.5rem] text-slate-500 text-xl lg:text-2xl">
                                    {sessionStorage.getItem("title")}
                                </span>
                            </h3>

                            <div className="flex flex-wrap items-end gap-[1%] gap-y-0.5">
                                <h3 className="text-xl lg:text-3xl text-sky-500 font-semibold mr-[1rem]">
                                    Genre(s):
                                </h3>
                                {array}
                            </div>

                            <h3 className="text-xl lg:text-3xl text-sky-500 font-semibold">
                                Year:
                                <span className="inline-block pl-[0.5rem] text-slate-500 text-2xl">
                                    {sessionStorage.getItem("year")}
                                </span>
                            </h3>

                            <div>
                                <h3 className="text-xl lg:text-3xl text-sky-500 font-semibold">
                                    Storyline:
                                    <span className=" pl-[0.5rem] text-slate-500 text-[1rem] lg:text-xl line-clamp-4 lg:line-clamp-3 ">
                                        {sessionStorage.getItem("storyline")}
                                    </span>
                                </h3>
                            </div>

                            <div className="absolute top-[80%] lg:top-[85%] font-inter flex gap-x-[4rem]">
                                <button
                                    className="bg-indigo-500 px-[1rem] py-[0.3rem] lg:py-[0.5rem] lg:text-xl text-white rounded-lg
                            shadow-lg shadow-indigo-400 cursor-pointer hover:outline-2 hover:outline-indigo-500
                            hover:bg-white hover:text-indigo-500"
                                >
                                    <a
                                        href={sessionStorage.getItem(
                                            "downloadUrl"
                                        )}
                                    >
                                        Download
                                    </a>
                                </button>

                                <button
                                    className="bg-slate-500 px-[1rem] py-[0.3rem] lg:py-[0.5rem] lg:text-xl text-white rounded-lg
                            shadow-lg shadow-slate-400 cursor-pointer hover:outline-2 hover:outline-slate-500
                            hover:bg-white hover:text-slate-500"
                                >
                                    Download Subtitle
                                </button>
                            </div>
                        </article>
                    </section>

                    <MovieTrailer embed={sessionStorage.getItem("embed")} />
                </div>
                <Footer>
                    <NewsLetter />
                    <Address />
                </Footer>
            </div>
        </>
    );
}

Genre.propTypes = {
    children: proptype.object,
};
function Genre({ children }) {
    return (
        <>
            <span className="bg-sky-500 text-md lg:text-xl text-white px-[0.6rem] rounded-none font-inter">
                {children}
            </span>
        </>
    );
}
