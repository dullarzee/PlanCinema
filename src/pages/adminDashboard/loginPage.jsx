import {useState} from 'react'

export default function AdminLogin(){
    const defaultUserName = 'timilehin0505@gmail.com' 
    const defaultPassword = 'Shadowsss'
    const [form, setForm] = useState({
        userName:'',
        password:''
    });

    const handleForm0 = (e)=>{
        setForm({
            ...form,
            userName:e.target.value
        })
    }

    const handleForm1 = (e)=>{
        setForm({
            ...form,
            password:e.target.value
        })
    }

    function handleLogin(e)
    {
        console.log('passed through');   
        e.preventDefault();
        if(form.userName === defaultUserName && form.password === defaultPassword)
        {
            setForm({
                userName:'',
                password:''
            })
            window.location.hash = '#myDashBoard';
        }
        else if(form.userName !== defaultUserName || form.password !== defaultPassword)
        {
             document.querySelector('#error').classList.add('animate-dropIn');
             console.log('passed through');
             setTimeout(()=>{
                document.querySelector('#error').classList.remove('animate-dropIn');
             },4000);
        }


        function handleSubmit()
        {
            if(e.key === 'Enter')
            {
                document.querySelector('#loginButton').click()
            }
        }
        document.querySelector('#loginPage').addEventListener('keyup', handleSubmit);
        
    }
    return(
        <>
         <div id="loginPage" className="bg-blue-200 min-h-[100vh] pt-[10%]">
            <div className="bg-white w-[35rem] mx-auto p-[2%] rounded-xl">
                <h1 className="text-3xl text-sky-500 text-center font-bold font-inter">Admin Login</h1>
                <form className="flex flex-col p-[4%] font-agency space-y-[2rem]">
                    <label className="flex flex-col text-xl text-slate-500">Username
                       <input value={form.userName} onChange={handleForm0} className="outline-1 rounded-md h-[2.5rem] font-inter text-slate-700 focus:outline-2
                       focus:outline-sky-500 px-[2%]" type="text" required></input>
                    </label>

                    <label className="flex flex-col text-xl text-slate-500">Password
                        <input value={form.password} onChange={handleForm1} type="password" className="outline-1 rounded-md h-[2.5rem] font-inter text-slate-700 focus:outline-2
                       focus:outline-sky-500 px-[2%]" required></input>
                    </label>

                    <button id="loginButton" onClick={handleLogin} className="bg-indigo-500 py-[0.5rem] rounded-full text-white text-xl font-inter
                    hover:shadow-indigo-300 hover:shadow-lg cursor-pointer">Login</button>
                </form>
            </div>

            <div id="error" className="absolute backdrop-blur-2xl rounded-md bg-slate-200 text-red-500 top-[-5rem] left-[40%] p-[1%]
            font-inter">
                Incorrect Username or Password

            </div>

         </div>
        </>
    );
}