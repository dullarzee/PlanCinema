import NavBar from '../components/navBar'
import HomeInitialPace from '../components/homeInitialPace'
import MidSection, { FilterByGenre } from '../components/midSection';
import { FilterByYear } from '../components/midSection';
import HomeContactForm from '../components/homeContactFormSection';
import Footer, { NewsLetter, Address } from '../components/footer'
import TrendingSection from '../components/trendingSection';

export default function HomePage({trendingData, movies, searchValue, showSearchSection, setHash, setMovieData}){
    return(
       <>
       <div className="">
            <NavBar/>
            <HomeInitialPace />
            <TrendingSection trendingData={trendingData} searchValue={searchValue} setMovieData={setMovieData} showSearchSection={showSearchSection} setHash={setHash} />
            <MidSection>
                <FilterByYear />
                <FilterByGenre />
                <HomeContactForm />
            </MidSection>
            <Footer>
                <NewsLetter />
                <Address />           
            </Footer>
        </div>
       </>
    );
}