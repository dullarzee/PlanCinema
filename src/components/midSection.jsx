import filter from '/images/filter.png'
import proptype from 'prop-types'

MidSection.propTypes = {
    children:proptype.object,
}

Button.propTypes = {
    children:proptype.object,
    color:proptype.string
}

function Button({children, color}){
    return(
        <>
         <button className="hover:bg-inherit cursor-pointer px-[1rem] py-[0.3rem] border-2 bg-white text-lg text-semibold font-barlow rounded-md mt-[1rem] lg:mt-[5rem]" style={{
            borderColor:color
         }}>{children}</button>
        </>
    );
}
export function FilterByYear(){
    return(
        <>
          <section className="h-[57rem] bg-gradient-to-b from-teal-800 via-teal-500 to-teal-200 to-80% border-t-2
         border-dashed border-slate-700">
            <div className="pt-[5%]">
                <h2 className="flex text-white items-center justify-center font-barlow mt-[3rem] lg:mt-0 text-4xl lg:text-6xl">TIME TRAVEL
                </h2>
                    <p className="lg:relative top-[6rem] left-[10%] font-karla text-teal-800 text-lg mx-auto lg:mx-0 w-[90%] lg:w-[45%]
                     font-bold border-2 text-balance text-center rounded-md bg-teal-300 p-[4%] border-t-7 mt-[3rem] lg:mt-0">
                        Want to skip to an older collection in time or do you want to stay in vogue with the most recent films?
                    </p>
                    <p className="lg:relative top-[4rem] left-[45%] font-karla text-teal-300 text-lg mx-auto lg:mx-0 w-[90%] lg:w-[45%] 
                    font-bold border-2 text-balance text-center rounded-md bg-teal-800 p-[4%]">
                        Relax as you navigate through our archives as you please with a click
                    </p>

                    <section className="mt-[6rem] p-[4%]">
                        <div className="font-barlow flex text-slate-500 text-3xl items-center gap-x-[1rem]"> <img alt='' src={filter}></img> <h3>Filter By Year</h3></div>
                            <div className="flex gap-[2rem] gap-y-[0.rem] flex-wrap lg:flex-nowrap">
                                <Button color={"oklch(0.386 0.063 188.416)"}>1990</Button>
                                <Button color={"oklch(0.386 0.063 188.416)"}>1995</Button>
                                <Button color={"oklch(0.386 0.063 188.416)"}>2000</Button>
                                <Button color={"oklch(0.386 0.063 188.416)"}>2005</Button>
                                <Button color={"oklch(0.386 0.063 188.416)"}>2010</Button>
                                <Button color={"oklch(0.386 0.063 188.416)"}>2015</Button>
                                <Button color={"oklch(0.386 0.063 188.416)"}>2020</Button>
                                <Button color={"oklch(0.386 0.063 188.416)"}>2025</Button>
                            </div>
                            <form>
                                <input type="text" className="peer border-2 h-[3rem] px-3 border-teal-800 mt-[2rem] rounded-full bg-white 
                                font-karla focus:outline-teal-500 focus:outline-3 outline-offset-2" pattern="\d{4}"></input>
                                <button className="px-[1rem] ml-[2rem] hover:bg-teal-800 py-[0.2rem] bg-teal-700 rounded-full text-white cursor-pointer hover: peer-invalid:bg-teal-200">Enter</button>
                            </form>
                    </section>

            </div>
          </section>
        </>
    );
}

export function FilterByGenre(){
    return(
        <>
         <div className="h-[30rem] bg-gradient-to-b from-teal-200 to-70% to-teal-50">

         </div>
        </>
    );
} 

export default function MidSection({children}){
    return(
        <>
         <section>
            {children}
         </section>
        </>
    );
}