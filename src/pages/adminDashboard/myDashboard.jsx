export default function MyDashboard(){
    return(
        <>
         <div className="">
             <nav className="h-[100vh] w-[20%] fixed top-0  bg-slate-200">
                    d
             </nav>
            <section className="h-[200vh] w-full bg-white p-[3%] pl-[23%]">
                <h1 className="text-4xl text-sky-500">Dashboard</h1>
                <main className="space-y-[1.5rem] *:rounded-lg">
                    <div className="border-2 border-sky-200 text-center py-10 mt-10 text-2xl text-slate-700
                    ">Total Movies: <span className="text-sky-500">0</span></div>
                    <div></div>

                    <button className="border w-full text-slate-500 py-[1rem] text-xl font-semibold">Add new movie</button>
                    <button className="border w-full border-sky-500 py-[1rem] text-red-400 text-xl font-semibold">Delete Movie</button>
                </main>
            </section>
         </div>
        </>
    );
}