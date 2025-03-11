export default function SearchBar({searchValue, setHash}){
    function handleScrollIntoView()
    {
        window.location.hash = '#/search';
        
        setTimeout(()=>{
            const searchBar = document.querySelector('#searchSuggestionsContainer');
            searchBar.scrollIntoView({block:'center'})
        },200)
    }
    
    return(
        <>
         <input id="searchMovie0" onClick={handleScrollIntoView}
            type='search' className="w-[70%] h-[3rem] bg-white/10 outline-2 outline-sky-500 rounded-full
            text-white px-[1rem] text-lg mb-[3rem]" placeholder="Search a movie"></input>
        </>
    );
}

export function SearchBarinSearch({searchValue, setSearchValue}){
    
    return(
        <>
         <input id="searchMovie1" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}
            type='search' className="w-[70%] h-[3rem] bg-white/10 outline-2 outline-sky-500 rounded-full
            text-white px-[1rem] text-lg" placeholder="Search a movie"></input>
        </>
    );
}