import { useState, useEffect } from "react";
import "./tailwind/App.css";
import HomePage from "./pages/homePage";
import SearchSection from "./pages/searchSection";
import TrendingPage from "./pages/trendingPage";
import CheckOutPage from "./pages/checkOutPage";
import AdminLogin from "./pages/adminDashboard/loginPage";
import MyDashboard from "./pages/adminDashboard/myDashboard";
import Supabase from "./components/supabase";
import AboutPage from "./pages/aboutPage";
import ComingSoon from "./components/comingSoon";
import proptype from "prop-types";

AppBackground.propTypes = {
    children: proptype.object,
};
function AppBackground({ children }) {
    return (
        <>
            <div className="bg-white">{children}</div>
        </>
    );
}

function App() {
    const [mainFetchedData, setMainFetchedData] = useState([]);
    const [trendingData, setTrendingData] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [hash, setHash] = useState(window.location.hash);
    const [movieData, setMovieData] = useState({
        title: "",
        img: "",
        genres: [],
        year: "",
        id: null,
    });

    useEffect(() => {
        const handleHashChange = () => setHash(window.location.hash);
        window.addEventListener("hashchange", handleHashChange);

        return () => window.removeEventListener("hashChange", handleHashChange);

        // const allLinks = document.querySelector('#mobileNav').querySelectorAll('li');
    });

    //for fetching and rendering trending movies from trending table in supabase
    useEffect(() => {
        async function getTrending() {
            const { data, error } = await Supabase.from(
                "TrendingSection"
            ).select("*");

            if (error) {
                console.error("error fetching movies", error);
            } else {
                setTrendingData(data);
            }
        }

        getTrending();
    }, []);

    useEffect(() => {
        async function getMain() {
            const { data, error } = await Supabase.from(
                "Plan Infiniti movies"
            ).select("*");

            if (error) {
                console.error("error fetching movies", error);
            } else {
                setMainFetchedData(data);
                console.log(data);
            }
        }

        getMain();
    }, []);

    /*useEffect(() => {
        async function getDummyData() {
            try {
                const data = await fetch("/movieData.json");
                setMainFetchedData(data);
            } catch (error) {
                console.error("failed to get dummy data:", error);
            }
        }
        getDummyData();
    }, []);*/

    function handlePageChange() {
        if (hash === "#/home" || hash === "")
            return (
                <HomePage
                    searchValue={searchValue}
                    trendingData={trendingData}
                    setMovieData={setMovieData}
                    setHash={setHash}
                />
            );
        else if (hash === "#/search")
            return (
                <SearchSection
                    mainFetchedData={mainFetchedData}
                    searchValue={searchValue}
                    setMovieData={setMovieData}
                    setSearchValue={setSearchValue}
                />
            );
        else if (hash === "#/checkout")
            return <CheckOutPage movieData={movieData} />;
        else if (hash === "#/adminsRight") return <AdminLogin />;
        else if (hash === "#myDashBoard")
            return <MyDashboard totalMovies={mainFetchedData.length} />;
        else if (hash === "#/trending")
            return <TrendingPage trendingData={trendingData} />;
        else if (hash === "#/about") return <AboutPage />;
        else if (hash === "#/comingsoon") return <ComingSoon />;
    }

    return (
        <>
            <AppBackground>{handlePageChange()}</AppBackground>
        </>
    );
}

export default App;
