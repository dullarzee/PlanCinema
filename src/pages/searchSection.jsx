import { SearchBarinSearch } from "../components/searchBar";
import SearchSuggestion from "../components/searchSuggestions";
import SearchTemplate from "../components/searchTemplate";
import searchLogic from "../components/searchLogic";
import proptype from "prop-types";

SearchSection.propTypes = {
    mainFetchedData: proptype.array,
    searchValue: proptype.string,
    setSearchValue: proptype.func,
};
SearchSuggestionsContainer.propTypes = {
    children: proptype.object,
};

document.querySelector("body").style.backgroundColor = "black";
export default function SearchSection({
    mainFetchedData,
    searchValue,
    setSearchValue,
}) {
    function handleReturnToHomepage() {
        window.location.hash = "#/home";
        setTimeout(() => {
            const searchBar = document.querySelector("#searchMovie0");
            searchBar.scrollIntoView({ block: "center" }), 200;
        });
    }

    return (
        <>
            <section
                className=" w-[100vw] min-h-[80vh] bg-black starting:opacity-0 duration-500 z-50 p-[0%] zbg-[url(/images/searchPattern1.webp)]
         bg-blend-darken bg-fixed"
            >
                {/*a fixedly positioned div for styling purposes*/}
                <div className="hidden lg:block fixed w-1/3 h-1/3 bg-teal-500/40 blur-3xl z-0"></div>
                <div className="fixed w-1/4 h-1/4 right-0 top-3/5 bg-teal-500/40 blur-3xl z-0"></div>
                <div className="flex items-center gap-x-[4%] fixed top-0 w-full z-20 bg-black h-[4rem] lg:h-[6rem] pl-[2%]">
                    <span
                        className="group hover:outline-2 rounded-md hover:outline-sky-500 py-[0.3rem] px-[1rem]"
                        onClick={handleReturnToHomepage}
                    >
                        <span className="group-hover:border-1 group-hover:border-red-500">
                            <img
                                alt=""
                                className="w-[2rem] shrink-0 cursor-pointer"
                                title="back to Home"
                                src="/images/delete.svg"
                            ></img>
                        </span>
                    </span>
                    <SearchBarinSearch
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />
                </div>

                {/*suggestions for large screens*/}
                <div className="lg:fixed lg:w-[18%] lg:h-3/4 mt-[20%] lg:mt-0 lg:top-[20%] lg:border-r-2 border-gray-400 left-0 z-50">
                    <SearchSuggestionsContainer>
                        <SearchSuggestion
                            setSearchValue={setSearchValue}
                            value="the beekeeper"
                        />
                        <SearchSuggestion
                            setSearchValue={setSearchValue}
                            value="the unbreakable boy"
                        />
                        <SearchSuggestion
                            setSearchValue={setSearchValue}
                            value="Black Widow"
                        />
                        <SearchSuggestion
                            setSearchValue={setSearchValue}
                            value="plankton"
                        />
                        <SearchSuggestion
                            setSearchValue={setSearchValue}
                            value="Escape"
                        />
                        <SearchSuggestion
                            setSearchValue={setSearchValue}
                            value="heart eyes"
                        />
                        <SearchSuggestion
                            setSearchValue={setSearchValue}
                            value="counterstrike"
                        />
                        <SearchSuggestion
                            setSearchValue={setSearchValue}
                            value="under paris"
                        />
                    </SearchSuggestionsContainer>
                </div>
                <SearchTemplate>
                    {!searchValue ? (
                        <AboutToType />
                    ) : (
                        searchLogic(mainFetchedData, searchValue)
                    )}
                </SearchTemplate>
            </section>
        </>
    );
}

function SearchSuggestionsContainer({ children }) {
    return (
        <>
            <div
                id="searchSuggestionsContainer"
                className="flex flex-wrap gap-[0.3rem] lg:w-[70%] lg:ml-[9%] pl-[2%] z-50 "
            >
                {children}
            </div>
        </>
    );
}

function AboutToType() {
    return (
        <>
            <div className="text-slate-400 text-center text-3xl lg:text-6xl w-full lg:w-[400%] mt-[10%]">
                Your results will show here
            </div>
        </>
    );
}
