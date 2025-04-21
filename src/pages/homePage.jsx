import NavBar from "../components/navBar";
import HomeInitialPace from "../components/homeInitialPace";
import MidSection, { FilterByGenre } from "../components/midSection";
import { FilterByYear } from "../components/midSection";
import HomeContactForm from "../components/homeContactFormSection";
import Footer, { NewsLetter, Address } from "../components/footer";
import TrendingSection from "../components/trendingSection";
import proptype from "prop-types";

HomePage.propTypes = {
    trendingData: proptype.array,
    searchValue: proptype.string,
    showSearchSection: proptype.bool,
};
export default function HomePage({
    trendingData,
    searchValue,
    showSearchSection,
}) {
    return (
        <>
            <div className="">
                <NavBar />
                <HomeInitialPace />
                <TrendingSection
                    trendingData={trendingData}
                    searchValue={searchValue}
                    showSearchSection={showSearchSection}
                />
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
