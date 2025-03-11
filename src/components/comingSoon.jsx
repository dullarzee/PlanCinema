import Footer, { Address, NewsLetter } from "./footer";
import NavBar from "./navBar";

export default function ComingSoon(){
    return(
        <>
         <div className="bg-slate-200 min-h-[100vh]">
            <NavBar />
            <img alt="" className="w-[30%] rounded-md mx-auto mt-10" src="../../public/images/comingSoon.webp"></img>
         </div>
         <Footer>
            <NewsLetter />
            <Address />
         </Footer>
        </>
    );
}