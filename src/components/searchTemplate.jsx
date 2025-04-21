import proptype from 'prop-types'

SearchTemplate.propTypes = {
    children:proptype.object
}
export default function SearchTemplate({children}){
    return(
        <>
         <section className="grid grid-cols-1 lg:grid-cols-4 w-[80%] gap-y-[1.5rem] lg:ml-[18%] lg:gap-y-[1.5%] mx-auto mt-[8%]">
            {children}
         </section>
        </>

    );
}