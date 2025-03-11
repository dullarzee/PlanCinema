import dropDown from '/images/chevron-down.png'
import MobileNav from './mobileNav';


export default function NavBar(){

   function openMobileMenu()
   {
      document.querySelector('#mobileNav').style.display = 'block';
   }
    return(
       <>
        <nav id="navBar" className="relative flex px-[4%] h-[5rem] lg:h-[6rem] w-full justify-end lg:justify-between bg-white z-50">

          {/*the logo part*/}
          <div className="absolute lg:scale-[0.17] scale-[0.13] top-[-310%] left-[-50%] lg:top-[-250%] lg:left-[-5%] text-center 
          mt-[3rem] rounded-full bg-radial from-[rgb(39,131,168)] via-[rgb(36,127,245)] to-[rgb(0,255,255)] w-[30rem] h-[30rem] text-white text-[3rem]">
                  <section className="relative rounded-full mx-auto w-[30rem] h-[30rem]">
                        <span className="absolute top-[5%] left-[-30%] text-[rgb(55,40,151)] font-broadway text-[12rem]">Plan</span>
                      <span className="font-broadway absolute top-[40%] left-[0%] text-[rgb(55,40,151)] text-[12rem]">Infiniti</span>
                      <span className="absolute top-[70%] left-[40%] text-[7rem] font-french text-white/90">Cinema</span>
                  </section>
            </div>


           
         <div className='hidden lg:flex gap-x-[3%] w-[35%] font-inter text-lg ml-[25%]'>

            <div className="h-full flex items-center border-b-3 border-indigo-500">
            <button className="hover:text-slate-700 hover:bg-white px-[1rem] py-[0.3rem] hover:outline-[3px] outline-grey-500 
            rounded-md font-semibold text-sky-500"><a href="#/home">Home</a></button>
            </div>

            <div className="h-full flex items-center">
            <button className="hover:text-slate-700 hover:bg-white px-[1rem] py-[0.3rem] hover:outline-[3px] outline-grey-500 
            rounded-md text-slate-500"><a href="#/trending">Trending Movies</a></button>
            </div>

            <div className="relative group flex items-center">
               <button className="flex items-center text-slate-500 hover:outline-3 outline-sky-500
                hover:bg-white px-[1rem] py-[0.3rem]">Genres
                  <img alt="" className="group-hover:rotate-180 transition-transform duration-300" src={dropDown}></img>
               </button>
                  <div className="absolute top-[6rem] hidden left-[20%] group-hover:block z-40">
                     <ul className="bg-white text-slate-500 px-[2rem] py-[1rem] rounded-lg divide-y">
                        <li className="hover:bg-sky-500 hover:text-white cursor-pointer" href="#comingsoon">Action</li>
                        <li className="hover:bg-sky-500 hover:text-white cursor-pointer">Animation</li>
                        <li className="hover:bg-sky-500 hover:text-white cursor-pointer">Anime</li>
                        <li className="hover:bg-sky-500 hover:text-white cursor-pointer">BollyWood</li>
                        <li className="hover:bg-sky-500 hover:text-white cursor-pointer">Korean</li>
                     </ul>
                  </div>
            </div>


         </div>



           <div className="h-full hidden lg:flex items-center">
            <button className="hover:text-slate-700 hover:bg-white px-[1.5rem] py-[0.3rem] hover:outline-[3px] outline-grey-500 
            rounded-md font-semibold text-blue-500"><a href="#/about">About Us</a></button>
            </div>

            <div className="h-full hidden lg:flex items-center">
            <button className="outline-3 outline-slate-800 bg-white hover:text-white hover:bg-blue-500 px-[1.5rem] py-[0.3rem] hover:outline-[3px] outline-grey-500 
            rounded-md font-semibold text-slate-600"><a href="#/comingsoon">Advertise with Us</a></button>
            </div>
            

            <img alt="" onClick={openMobileMenu} className="block lg:hidden w-[1.5rem] self-center cursor-pointer" src="/images/icon-menu.svg"></img>
        </nav>

         <MobileNav />
       </>
    );
}