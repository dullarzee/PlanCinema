import proptype from "prop-types";

SearchBarinSearch.propTypes = {
    searchValue: proptype.string,
    setSearchValue: proptype.func,
};
export default function SearchBar() {
    function handleScrollIntoView() {
        window.location.hash = "#/search";

        setTimeout(() => {
            const searchBar = document.querySelector(
                "#searchSuggestionsContainer"
            );
            searchBar.scrollIntoView({ block: "center" });
        }, 200);
    }

    return (
        <>
            <input
                id="searchMovie0"
                onClick={handleScrollIntoView}
                type="search"
                className="w-[70%] h-[3rem] bg-white/10 outline-2 outline-red-400 rounded-full
            text-slate-500 px-[1rem] text-lg mb-[3rem]"
                placeholder="Search a movie"
            ></input>
        </>
    );
}

export function SearchBarinSearch({ searchValue, setSearchValue }) {
    return (
        <>
            <input
                id="searchMovie1"
                value={searchValue}
                autoFocus
                onChange={(e) => setSearchValue(e.target.value)}
                type="search"
                className="w-[70%] h-[3rem] bg-white/10 outline-2 outline-teal-400 rounded-full
            text-white px-[1rem] text-lg"
                placeholder="Search a movie"
            ></input>
        </>
    );
}
