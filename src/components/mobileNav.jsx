import dropDown from '/images/chevron-down.png'

export default function MobileNav(){
    let [home, trending, about] = ''
    if(window.location.hash === '#/home' || window.location.hash === '') home = 'font-semibold border-r-5 text-blue-500 border-sky-500'
    else if(window.location.hash === '#/trending') trending = 'font-semibold border-r-5 text-blue-500 border-sky-500'
    else if(window.location.hash === '#/about') about = 'font-semibold border-r-5 text-blue-500 border-sky-500' 
    function showGenres()
    {
        const genres = document.querySelector('#mobileGenres');
        const arrow = document.querySelector('#arrowDown');
        if(genres.style.display === 'block')
        {
            genres.style.display = 'none';
            arrow.style.transform = 'rotate(0deg)'
           
        }
        else{
            genres.style.display = 'block';
            arrow.style.transform = 'rotate(180deg)'
        }

    }
    function handleNavClose()
    {
        document.querySelector('#mobileNav').style.display = '';
    }
    return(
        <>
         <div id="mobileNav" className="hidden">
            <div id="navOverlay" onClick={handleNavClose} className="fixed top-0 w-[100vw] h-[100vh] bg-black/50 z-50"></div>
            <div className="fixed font-inter top-0 left-[40%] h-[100vh] w-[60%] text-lg bg-white z-50 starting:translate-x-[10rem] duration-500
            p-[3%]">
                <img alt="" onClick={handleNavClose} className="relative top-[3%] cursor-pointer left-[79%] w-[2rem]" src="images/cancel.png"></img>
               <ul className="mt-[4rem] space-y-[0.8rem]">
                  <li className={`w-full ${home}`}><a href="#/home">Home</a></li>
                  <li className={`${trending}`}><a href="#/trending">Trending Movies</a></li>
                  <li><div className="relative group flex flex-col items-start">
                                 <button onClick={showGenres} className="flex items-center text-slate-500 cursor-pointer
                                  px-[1rem] py-[0.3rem]">Genres
                                    <img id="arrowDown" alt="" className="transition-transform duration-300" src={dropDown}></img>
                                 </button>
                                    <div id="mobileGenres" className="relative top-[1rem] hidden left-[0%] z-40">
                                       <ul className="bg-white text-slate-500 px-[2rem] py-[1rem] text-base rounded-lg divide-y">
                                          <li className="hover:bg-sky-500 hover:text-white cursor-pointer">Action</li>
                                          <li className="hover:bg-sky-500 hover:text-white cursor-pointer">Animation</li>
                                          <li className="hover:bg-sky-500 hover:text-white cursor-pointer">Anime</li>
                                          <li className="hover:bg-sky-500 hover:text-white cursor-pointer">BollyWood</li>
                                          <li className="hover:bg-sky-500 hover:text-white cursor-pointer">Korean</li>
                                       </ul>
                                    </div>
                              </div>
                    </li>

                  <li className={`${about}`} ><a href="#/about">About Us</a></li>
                  <li><a href="#/comingsoon">Advertise with Us</a></li>

               </ul>
            </div>
         </div>
        </>
    );
}