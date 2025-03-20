import MovieCard from "../components/movieCard"
import proptype from 'prop-types'
import NavBar from "../components/navBar";

TrendingPage.propTypes = {
    trendingData:proptype.array
}
export default function TrendingPage({trendingData}){
    const array = [];
    trendingData.map(it=>{
        array.push(<MovieCard key={it['id']} id={it['id']} title={it['title']} img={it['image']} year={it['year']} 
                    genres={it['genres']} url={it['url']} embed={it['youtube_embed_link']} storyline={it['storyline']} />)
    })
    return(
        <>
        <NavBar />
         <div className="min-h-[100vh] bg-slate-600 p-[2%]">
            <h1 id="trendingPageHeading" className="text-5xl text-white mb-[2rem]">Trending</h1>
                <main className="grid grid-cols-1 lg:grid-cols-4 gap-y-[1.6rem]">
                    {array}
                </main>
         </div>
        </>
    );
}