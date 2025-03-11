import {useState} from 'react'

export default function MovieCard({title, img, genres, year, id, url, embed, storyline}){
   const [like, setLike] = useState(false);


   function handleDownLoad()
   {
      window.location.hash = '#/checkout'
      sessionStorage.setItem("title",title)
      sessionStorage.setItem("img",img)
      sessionStorage.setItem("genres", genres)
      sessionStorage.setItem("year",year)
      sessionStorage.setItem("id",id)
      sessionStorage.setItem('downloadUrl', url)
      sessionStorage.setItem('embed', embed)
      sessionStorage.setItem('storyline', storyline)

      setTimeout(()=>{
         const navBar = document.querySelector('#navBar');
         navBar.scrollIntoView({block:'center'})
      },200);
   }
   function handleLikeChange(e)
   {
       e.stopPropagation();
       {like ? setLike(false) : setLike(true);}
   }

   let genreArray = [];
   genres = genres.split(',')
   genres.map(it=>{
      genreArray.push(<Genre key={it}>{it}</Genre>)
   })

    return(
        <section tabIndex={0} onClick={handleDownLoad} className="mx-auto w-[13rem] h-[25rem] shrink-0 bg-black outline-2 outline-neutral-500 backdrop-blur rounded-md
        hover:outline-2 hover:outline-sky-500 hover:outline-offset-4 transition-all duration-300 cursor-pointer
        focus:outline-2 focus:outline-sky-500 focus:outline-offset-4">
           <div className="p-[5%] h-[75%]">
                <img alt="" src={img} draggable="false"></img>
           </div>

           <div className="relative flex flex-col justify-around top-[-0.6rem] bg-white h-[7.1rem] outline-2 outline-neutral-500 rounded-xs px-[4%]">
                <h6 className="text-slate-800 font-semibold text-xl text-wrap leading-[100%] line-clamp-1">{title}</h6>
                
                <span className="inline-flex flex-wrap gap-x-[0.3rem] gap-y-[0.2rem] my-[0.5rem]">
                  {genreArray}
                </span>

               <div>
                  <span className="flex justify-around items-center">
                     <svg version="1.1" xmlns="http://www.w3.org/2000/svg" onClick={handleLikeChange} className={like ? "fill-red-400 cursor-pointer hover:stroke-gray-500 stroke-2" : 'fill-black active:animate-ping cursor-pointer hover:stroke-gray-500 stroke-2'} width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 21.328l-1.453-1.313q-2.484-2.25-3.609-3.328t-2.508-2.672-1.898-2.883-0.516-2.648q0-2.297 1.57-3.891t3.914-1.594q2.719 0 4.5 2.109 1.781-2.109 4.5-2.109 2.344 0 3.914 1.594t1.57 3.891q0 1.828-1.219 3.797t-2.648 3.422-4.664 4.359z"></path>
                     </svg>

                        <div className="inline-flex items-center">
                           <span className="bg-gray-500 px-[0.3rem] mr-[0.5rem] text-xs text-white rounded-xs">HD</span>
                           
                           <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="fill-gray-500" width="24" height="24" viewBox="0 0 24 24">
                              <path d="M18 15l-2.25-3 2.25-3h-1.734l-1.781 2.25v-2.25h-1.5v6h1.5v-2.25l1.781 2.25h1.734zM9.984 12.516q0.422 0 0.727-0.305t0.305-0.727v-1.5q0-0.422-0.305-0.703t-0.727-0.281h-3.469v1.5h3v0.984h-2.016q-0.422 0-0.703 0.305t-0.281 0.727v2.484h4.5v-1.5h-3v-0.984h1.969zM18.984 3q0.797 0 1.406 0.609t0.609 1.406v13.969q0 0.797-0.609 1.406t-1.406 0.609h-13.969q-0.797 0-1.406-0.609t-0.609-1.406v-13.969q0-0.797 0.609-1.406t1.406-0.609h13.969z"></path>
                           </svg>
                        </div>

                     <span className="font-bold font-barlow text-indigo-500 px-[0.2rem]">{year}</span>

                  </span>
               </div>

           </div>

        </section>
    );
}

function Genre({children}){
   return(
      <>
       <span className="bg-indigo-500 text-sm text-white px-[0.2rem] rounded-sm">{children}</span>
      </>
   );
}