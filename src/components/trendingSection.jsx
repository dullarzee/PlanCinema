import TrendingTemplate from "./trendingTemplate.jsx";
import MovieCard from './movieCard.jsx'
import SearchBar from './searchBar.jsx'
import film1 from '/images/film1.svg'



export default function TrendingSection({trendingData, searchValue, setMovieData}){
    let movies = [];

    {trendingData.slice(0, 8).map((it, index)=>{
        const year = it.year;
        const genres = it.genres;
         movies.push(<MovieCard key={it['id']} id={it['id']} setMovieData={setMovieData} title={it['title']} img={it['image']} year={year} 
            genres={genres} url={it['url']} embed={it['youtube_embed_link']} storyline={it['storyline']} />);
           
       })}

    return(
       <>
       
        <div className="h-[68rem] bg-black/80 bg-[url(/images/poster3.jpg)] 
        bg-cover bg-blend-darken p-[3%]">
            <h2 className="text-slate-200 text-5xl lg:text-7xl w-[60%] font-barlow mb-[4rem]">
                Looking for <span className="text-red-500">something</span> specific?
            </h2>
            
            <SearchBar searchValue={searchValue} />
            

            <h2 className="flex gap-x-1.5 text-4xl text-slate-200 mb-[1rem]">Trending Movies
                <img alt="" src={film1}></img>
            </h2>
            <TrendingTemplate>
               {movies}
            </TrendingTemplate> 

        </div>
       </>
    );
}