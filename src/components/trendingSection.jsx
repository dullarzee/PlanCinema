import TrendingTemplate from "./trendingTemplate.jsx";
import MovieCard from "./movieCard.jsx";
import SearchBar from "./searchBar.jsx";
import proptype from "prop-types";

TrendingSection.propTypes = {
    trendingData: proptype.array,
    searchValue: proptype.string,
    setMovieData: proptype.func,
};

export default function TrendingSection({
    trendingData,
    searchValue,
    setMovieData,
}) {
    let movies = [];

    {
        trendingData.slice(0, 8).map((it) => {
            const year = it.year;
            const genres = it.genres;
            movies.push(
                <MovieCard
                    key={it["id"]}
                    id={it["id"]}
                    setMovieData={setMovieData}
                    title={it["title"]}
                    img={it["image"]}
                    year={year}
                    genres={genres}
                    url={it["url"]}
                    embed={it["youtube_embed_link"]}
                    storyline={it["storyline"]}
                />
            );
        });
    }

    return (
        <>
            <div className="relative h-[68rem] bg-slate-50 p-[3%] pt-[7%]">
                <h2 className="text-slate-500 text-5xl lg:text-7xl w-[60%] font-barlow mb-[4rem]">
                    Looking for <span className="text-red-500">something</span>{" "}
                    specific?
                </h2>

                {/*an absolutely positioned div for styling purposes*/}
                <div className="absolute top-0 right-0 bg-pink-500/10 w-1/2 h-3/5 rounded-full blur-3xl"></div>

                <SearchBar searchValue={searchValue} />

                <h2 className="flex gap-x-1.5 text-4xl text-slate-500 mb-[1rem]">
                    Trending Movies
                    <svg
                        className="fill-red-400 w-[2rem] h-[2rem]"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                    >
                        <path d="M30.335 26.445c-0.128-0.221-0.538-0.289-1.231-0.202-1.275 0.165-2.201-0.251-2.778-1.251-0.437-0.756-0.55-1.516-0.339-2.28s0.836-1.854 1.874-3.272l0.649-0.904c1.928-2.663 2.323-4.979 1.186-6.95-1.157-2.006-4.5-1.837-6.903-0.806-1.944-4.009-6.040-6.78-10.793-6.78-6.628 0-12 5.373-12 12s5.372 12 12 12c6.627 0 12-5.373 12-12 0-1.469-0.277-2.871-0.76-4.171 0.811-0.291 1.781-0.502 2.696-0.536 1.202-0.044 2.29 0.208 2.722 0.956 0.963 1.669 0.498 3.641-1.395 5.913l-0.388 0.466c-2.214 2.657-2.743 4.984-1.591 6.982 0.466 0.806 1.207 1.381 2.225 1.727 1.018 0.345 1.879 0.312 2.585-0.096 0.35-0.202 0.431-0.468 0.241-0.796zM6.5 18.562c-1.381 0-2.5-1.119-2.5-2.5 0-1.38 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5c0 1.381-1.119 2.5-2.5 2.5zM12 24.062c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM11.020 16.062c0-0.552 0.449-1 1.001-1s1 0.447 1 1c0 0.553-0.448 1-1 1s-1.001-0.447-1.001-1zM12 13.062c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5c0 1.381-1.119 2.5-2.5 2.5zM17.5 18.562c-1.381 0-2.5-1.119-2.5-2.5 0-1.38 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5c0 1.381-1.119 2.5-2.5 2.5z"></path>
                    </svg>
                </h2>
                <TrendingTemplate>{movies}</TrendingTemplate>
            </div>
        </>
    );
}
