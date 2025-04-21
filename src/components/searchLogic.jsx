import MovieCard from "./movieCard";
import NoResultsFound from "./noResultFound";

export default function searchLogic(
    mainFetchedData,
    searchValue,
    setMovieData
) {
    const array = [];
    mainFetchedData.map((it) => {
        if (it["title"].toUpperCase().includes(searchValue.toUpperCase())) {
            array.push(
                <MovieCard
                    key={it["title"]}
                    setMovieData={setMovieData}
                    id={it["id"]}
                    title={it["title"]}
                    img={it["image"]}
                    year={it["year"]}
                    genres={it["genres"]}
                    url={it["url"]}
                    embed={it["youtube_embed_link"]}
                    storyline={it["storyline"]}
                />
            );
        }
    });
    if (array.length > 0) return array;
    else return <NoResultsFound />;
}
