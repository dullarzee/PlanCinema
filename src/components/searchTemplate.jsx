export default function SearchTemplate({children}){
    return(
        <>
         <section className="grid grid-cols-1 lg:grid-cols-4 w-[80%] space-y-[1rem] lg:gap-y-[3%] mx-auto mt-[1rem]">
            {children}
         </section>
        </>

    );
}