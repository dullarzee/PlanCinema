import Footer, { Address, NewsLetter } from "./footer";
import NavBar from "./navBar";

export default function ComingSoon(){
    return(
        <>
         <div className="bg-slate-200 min-h-[40vh] pb-10">
            <NavBar />
            <img alt="" className="w-[90%] lg:w-[30%] rounded-md mx-auto mt-10" src="../../public/images/comingSoon.webp"></img>
         </div>
         <Footer>
            <NewsLetter />
            <Address />
         </Footer>
        </>
    );
}