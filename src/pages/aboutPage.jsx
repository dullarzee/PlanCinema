import chart from '/images/statPic.jpeg'
import Footer from '../components/footer';
import { Address, NewsLetter } from '../components/footer';
import NavBar from '../components/navBar';
export default function AboutPage(){
    return(
        <>
         <NavBar />
         <div className="bg-slate-500 p-[3%]">
            <h1 className="text-5xl text-white">About <span className="text-red-400">Plan</span></h1>
         </div>
         <div className="min-h-[100vh] bg-slate-500 p-[5%]">
            <p className="text-2xl text-white font-karla">
            Plan Cinema is a Media and Entertainment Company, We provide our viewers and subscribers with the following services
            </p>
            <div><img alt="picture of an ascending chart" className="rounded-[10px] mt-10 w-[50%]" src={chart}></img></div>

            <p className='text-white text-2xl font-karla'>
            1) Business/Brand promotion We help businesses and brands like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall sales. Send us a message.
            <br /><span className='inline-block text-white text-2xl font-karla mt-[2rem]'>*We provide the largest engagement on your campaigns and advertisements with our professional campaign and advert strategy *We are your best bet to scale up your business/brand/events using internet Marketing</span>
            </p>

            <h2 className="text-4xl text-slate-200 my-[2rem]">Movie Blockbusters</h2>
            <img alt="popcorn" className="rounded-lg w-[50%] mt-[2rem]" src="../../public/images/popcorn.webp"></img>
            
            <p className="text-2xl text-white mt-[2rem]">
            We provide you with Unlimited and Recent Movie updates of your choice fully ready for Download, which includes.
            </p>
            <ul className="mt-[0.6rem] list-disc text-xl text-slate-800">
                <li>MOVIES</li>
                <li>CARTOON</li>
                <li>SERIES</li>
                <li>ANIME</li>
            </ul>

            <div className="mt-[5rem] text-xl text-slate-300">
                Contact Us now for more enquiries
                <div></div>
            </div>
         </div>

         <Footer>
            <NewsLetter />
            <Address />
         </Footer>
        </>
    );
}