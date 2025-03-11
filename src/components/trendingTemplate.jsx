export default function TrendingSection({children}){
    return(
       <>
            <div className="flex gap-x-[1rem] py-[3rem] lg:gap-x-0 lg:grid lg:grid-cols-5 outline-3 outline-indigo-500 rounded-lg bg-black/70 lg:h-[36rem] p-[4%]
            overflow-auto gap-y-[2rem] odd:bg-sky-500">

                {children}

            </div>
            <button className="bg-indigo-600 mt-[2rem] px-[2rem] py-[0.4rem] rounded-md text-xl text-white 
            hover:outline-2 hover:outline-indigo-700 hover:bg-white hover:text-indigo-500 cursor-pointer
            hover:scale-[1.1] transition-transform duration-300"><a href="#/trending">MORE</a></button>
       </>
    );
}