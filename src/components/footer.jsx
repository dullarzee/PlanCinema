export default function Footer({children}){
    return(
        <>
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] h-[40rem] lg:h-[20rem] pt-[1rem] lg:pt-[3rem] p-[5%] lg:p-[2%] font-agency bg-gradient-to-r from-sky-500 to-indigo-600 border-t-2 border-gray-500
             border-double">
                {children}

            </div>
            <div className="h-[4rem] text-center bg-slate-700 text-slate-200">
                Copyright <sub>c </sub> 2025 All Rights Reserved By <span className="text-red-400 font-semibold">Plan</span>
            </div>
          </section>
        </>
    );
}
export function NewsLetter(){
    return(
        <>
         <section className="">
            <h3 className="text-white text-2xl lg:text-4xl">Stay up-to-date with what we are doing</h3>
            <form className="mt-[2rem] flex flex-col lg:flex-row items-center space-y-[4%] gap-x-[4%]">
                <div className="h-[4.3rem] bg-red-400 p-[1%] rounded-md">
                    <input type="email" className="bg-white w-[19rem] h-[2.5rem]"></input>
                </div>
                <button className="px-[1.5rem] py-[0.3rem] bg-red-400 text-2xl text-white">Subscribe</button>
            </form>
         </section>
        </>
    );
}

export function Address(){
    return(
        <>
         <div>
            <address className="grid grid-cols-2 lg:grid-cols-3 h-[21.7rem]">
                <section className="col-span-2 lg:col-span-1 relative flex flex-col items-center h-[5rem] lg:h-[21.7rem]">
                    <div className="scale-[0.2] absolute top-[-16rem] lg:top-[-70%] text-center mt-[3rem] rounded-full bg-radial from-[rgb(39,131,168)] via-[rgb(36,127,245)] to-[rgb(0,255,255)] w-[30rem] h-[30rem] text-white text-[3rem]">
                        <section className="relative rounded-full mx-auto w-[30rem] h-[30rem]">
                            <span className="absolute top-[5%] left-[-30%] text-[rgb(55,40,151)] font-broadway text-[12rem]">Plan</span>
                            <span className="font-broadway absolute top-[40%] left-[0%] text-[rgb(55,40,151)] text-[12rem]">Infiniti</span>
                            <span className="absolute top-[70%] left-[40%] text-[7rem] font-french text-white/90">Cinema</span>
                        </section>
                    </div>
                </section>

                <section className="flex flex-col ml-2.5 lg:ml-0 items-center">
                    <ul className="text-2xl text-white space-y-[1rem] *:hover:text-red-400 *:cursor-pointer">
                        <li className="list-image-[url(/images/group-outline.svg)]"><a href="#/about">About Us</a></li>
                        <li className="list-image-[url(/images/phone.svg)]"><a>Contact</a></li>
                        <li className="list-image-[url(/images/cogs.svg)]"><a>Privacy Policy</a></li>
                    </ul>
                </section>

                <section className="flex flex-col items-center">
                    <h3 className="text-center text-3xl font-bold text-white mb-[1rem]">Follow Us</h3>
                    <ul className="*:text-left w-[50%] *:text-xl *:text-white space-y-[0.7rem]
                    *:hover:translate-y-2 *:transition-transform *:duration:600 *:cursor-pointer">
                        <li className="list-image-[url(/images/icon-facebook.svg)]">Facebook</li>
                        <li className="list-image-[url(/images/icon-instagram.svg)]">Instagram</li>
                        <li className="list-image-[url(/images/x.svg)]">X (Formerly Twitter)</li>
                    </ul>
                </section>
            </address>
         </div>
        </>
    );
}