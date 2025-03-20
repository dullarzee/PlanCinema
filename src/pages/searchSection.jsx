import {SearchBarinSearch} from '../components/searchBar'
import SearchSuggestion from '../components/searchSuggestions';
import SearchTemplate from '../components/searchTemplate'
import searchLogic from '../components/searchLogic'
import proptype from 'prop-types'

SearchSection.propTypes ={
    mainFetchedData:proptype.array,
    searchValue:proptype.string,
    setSearchValue:proptype.func,
    
}
SearchSuggestionsContainer.propTypes = {
    children:proptype.object
}

document.querySelector('body').style.backgroundColor = 'black';
export default function SearchSection({mainFetchedData, searchValue, setSearchValue}){
    function handleReturnToHomepage(){
        window.location.hash = '#/home';
        setTimeout(()=>{
            const searchBar = document.querySelector('#searchMovie0');
            searchBar.scrollIntoView({block:"center"})
            ,200})
    }

    
    return(
        <>
         <section className=" w-[100vw] min-h-[100vh] bg-black/90 starting:opacity-0 duration-500 z-50 p-[0%] bg-[url(/images/searchPattern1.webp)]
         bg-blend-darken">
            <div className="flex items-center gap-x-[4%] fixed top-0 w-full z-20 bg-black h-[4rem] lg:h-[6rem] pl-[2%]">
                <span className="group hover:outline-2 rounded-md hover:outline-sky-500 py-[0.3rem] px-[1rem]"
                onClick={handleReturnToHomepage}>
                    <span className="group-hover:border-1 group-hover:border-red-500"><img alt="" className="w-[2rem] shrink-0 cursor-pointer" title='back to Home' src='/images/delete.svg' ></img></span>
                </span>
                <SearchBarinSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>

            <div className="mt-[17%] lg:mt-[6.5%] z-20 w-full bg-auto bg-blend-darken py-[0.5rem]">   
                <SearchSuggestionsContainer>
                        <SearchSuggestion setSearchValue={setSearchValue} value='the beekeeper'/>
                        <SearchSuggestion setSearchValue={setSearchValue} value='the unbreakable boy' />
                        <SearchSuggestion setSearchValue={setSearchValue} value='Black Widow' />
                        <SearchSuggestion setSearchValue={setSearchValue} value='plankton' />
                        <SearchSuggestion setSearchValue={setSearchValue} value="Escape" />
                        <SearchSuggestion setSearchValue={setSearchValue} value="heart eyes" />
                        <SearchSuggestion setSearchValue={setSearchValue} value="counterstrike" />
                        <SearchSuggestion setSearchValue={setSearchValue} value="under paris" />
                    </SearchSuggestionsContainer>
            </div>

                <SearchTemplate>
                    {!searchValue ? <AboutToType /> : searchLogic(mainFetchedData, searchValue)}
                </SearchTemplate>
         </section>
        </>
    );
}

function SearchSuggestionsContainer({children}){
    return(
        <>
         <div id="searchSuggestionsContainer" className="flex flex-wrap gap-[0.3rem] lg:w-[70%] lg:ml-[9%] pl-[2%]">
            {children}
         </div>
        </>
    );
}

function AboutToType(){
    return(
        <>
         <div className='text-slate-400 text-center text-3xl lg:text-6xl w-full lg:w-[400%] mt-[10%]'>
            Your results will show here
         </div>
        </>
    );
}
