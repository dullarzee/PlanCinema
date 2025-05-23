import proptype from "prop-types";

TrendingTemplate.propTypes = {
    children: proptype.object,
};
export default function TrendingTemplate({ children }) {
    const handleScrollUp = () => {
        setTimeout(() => {
            document.querySelector("#trendingPageHeading").scrollIntoView();
        }, 200);
    };
    return (
        <>
            <div
                className="flex gap-x-[1rem] py-[3rem] lg:gap-x-0 lg:grid lg:grid-cols-5
                  rounded-lg bg-black/20 lg:h-[33rem] p-[4%] overflow-auto
                 md:gap-y-[2rem] [scrollbar-width:none]"
            >
                {children}
            </div>
            <button
                onClick={handleScrollUp}
                className="bg-red-400 mt-[2rem] px-[2rem] py-[0.4rem] rounded-md text-xl text-white 
            hover:outline-2 hover:outline-red-400 hover:bg-white hover:text-red-400 cursor-pointer
            hover:scale-[1.1] transition-transform duration-300"
            >
                <a href="#/trending">MORE</a>
            </button>
        </>
    );
}
