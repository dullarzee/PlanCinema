import MovieCard from "./movieCard";

export default function searchLogic(mainFetchedData, searchValue, setMovieData){
    const array = [];
    mainFetchedData.map(it=>{
        if(it['title'].toUpperCase().includes(searchValue.toUpperCase()))
        {
            array.push(<MovieCard key={it['id']} setMovieData={setMovieData} id={it['id']} title={it['title']} img={it['image']} year={it['year']}
                genres={it['genres']} embed={it['youtube_embed_link']} storyline={it['storyline']} />);
        }
        
    });
    if(array.length > 0)return array;
    else return <NoResultsFound />

}

function NoResultsFound(){
    return(
        <>
         <div className="text-slate-400 w-[400%] text-center text-6xl pt-[30%]">
            No Results Found!
         </div>
        </>
    );
}