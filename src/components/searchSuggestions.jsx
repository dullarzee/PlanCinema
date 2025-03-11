export default function SearchSuggestion({setSearchValue, value}){
    function handleSearch()
    {
        setSearchValue(value);
    }
    return(
        <>
         <span onClick={handleSearch} className="inline-block border-1 border-white rounded-full px-[0.4rem] text-sky-500
         hover:bg-sky-500 hover:text-white hover:border-sky-500 cursor-pointer">
            {value}
         </span>
        </>
    );
}