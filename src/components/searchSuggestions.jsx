import proptype from "prop-types";
SearchSuggestion.propTypes = {
    setSearchValue: proptype.func,
    value: proptype.string,
};
export default function SearchSuggestion({ setSearchValue, value }) {
    function handleSearch() {
        setSearchValue(value);
    }
    return (
        <>
            <span
                onClick={handleSearch}
                className="inline-block outline-1 outline-teal-500 rounded-full
          px-[0.4rem] text-white hover:bg-teal-200/40 hover:text-white hover:outline-teal-200/40
          cursor-pointer"
            >
                {value}
            </span>
        </>
    );
}
