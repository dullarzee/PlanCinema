import proptype from 'prop-types'
import UsersMessage from '../../components/usersMessages';
import { useState, useEffect } from 'react';
import Supabase from '../../components/supabase';

MyDashboard.propTypes = {
    totalMovies: proptype.number
}

export default function MyDashboard({ totalMovies }) {

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMessages() {
            try {
                const it = await Supabase.from('Users Messages').select('*');
                setMessages(it);
            } catch (error) {
                console.error('failed to get messages', error);
            } finally {
                setLoading(false);
            }
        }
        fetchMessages();
    },[])

    const array = [];
    if(!loading)
    {
        messages.data.map(it=>{
            array.push(<UsersMessage name={it['name']} email={it['email']} number={it['phone_number']} message={it['message']} timeStamp={it['created_at']} />)
        })
    }
    return (
        <>
            <div className="">
                <nav className="h-[100vh] w-[20%] fixed top-0  bg-slate-200">
                    <div className="absolute lg:scale-[0.17] scale-[0.13] top-[10%] left-[0%] lg:top-[-26%] lg:left-[-45%] text-center 
                    mt-[3rem] rounded-full bg-radial from-[rgb(39,131,168)] via-[rgb(36,127,245)] to-[rgb(0,255,255)] w-[30rem] h-[30rem] text-white text-[3rem]">
                        <section className="relative rounded-full mx-auto w-[30rem] h-[30rem]">
                                <span className="font-broadway font-bold absolute top-[3%] left-[-30%] text-[rgb(55,40,151)] text-[12rem]">Plan</span>
                            <span className="font-broadway font-bold absolute top-[38%] left-[0%] text-[rgb(55,40,151)] text-[12rem]">Infiniti</span>
                            <span className="absolute top-[75%] left-[30%] text-[7rem] font-french text-slate-300">Cinema</span>
                        </section>
                    </div>
                </nav>
                <section className="min-h-[100vh] w-full bg-white p-[3%] pl-[23%]">
                    <h1 className="text-4xl text-sky-500">Dashboard</h1>
                    <main className="flex flex-col gap-y-[1.5rem] *:rounded-lg">
                        <div className="border-2 font-bold border-sky-200 text-center py-10 mt-10 text-2xl text-slate-700
                    ">Total Movies: <span className="text-sky-500">{totalMovies}</span></div>
                        <div></div>

                        <button className="outline cursor-pointer w-full text-slate-500 py-[1rem] text-xl font-semibold
                        hover:outline-3 hover:outline-sky-500 ">Add new movie</button>
                        <button className="border-2 border-red-400 w-full py-[1rem] text-red-400 
                        hover:bg-red-400 hover:text-white text-xl font-semibold cursor-pointer">Delete Movie</button>
                        <section className="bg-slate-100 min-h-20 mt-[5rem] p-[3%]">
                            <h2 className="text-3xl font-agency text-sky-500 font-semibold">Users Messages</h2>
                            <hr className="block border-1 border-slate-500 my-5" />
                            {array}
                        </section>
                    </main>
                </section>

            </div>
        </>
    );
}