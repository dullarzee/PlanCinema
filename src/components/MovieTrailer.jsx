export default function MovieTrailer({embed}){
    return(
        <>
         <div className="h-[25rem] bg-white/80 mt-[5rem] rounded-lg p-[2%] mb-[5rem]">
            <h1 className="text-4xl font-semibold text-slate-700">Movie Trailer</h1>
            <iframe className="w-full lg:w-[30%] h-[80%] mt-6" src={embed} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

            </iframe>
         </div>
        </>
    );
}