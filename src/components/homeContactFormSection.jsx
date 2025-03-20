import {useState} from 'react'
import Supabase from './supabase.jsx'

export default function HomeContactForm(){
const [form, setForm] = useState({
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber:'',
    message:'',
    check:false
});
const [notify, setNotify] = useState(false);

const handleSubmit = async(e)=>{
    e.preventDefault();

    try{
        await Supabase.from('Users Messages').insert([
        {
            name:`${form.lastName} ${form.firstName}`,
            email:form.email,
            phone_number:form.phoneNumber,
            message:form.message
        }
    ])
    }catch(error){
        console.error('error inserting into usersMessages Table:', error)
        return;
    }

    setForm({
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:'',
        message:'',
        check:false
    })

    setNotify(true);
    setTimeout(()=>setNotify(false),5000)

}

function handleFormChange1(e)
{
    setForm({
        ...form,
        firstName:e.target.value
    })
}
function handleFormChange2(e)
{
    setForm({
        ...form,
        lastName:e.target.value
    })
}
function handleFormChange3(e)
{
    setForm({
        ...form,
        email:e.target.value
    })
}
function handleFormChange4(e)
{
    setForm({
        ...form,
        phoneNumber:e.target.value
    })
}
function handleFormChange5(e)
{
    setForm({
        ...form,
        message:e.target.value
    })
}


    return(
        <>
         <div className="h-[70rem] lg:h-[50rem] border-t-2 border-slate-500 border-dashed bg-blue-100 p-[4%] font-karla grid grid-cols-1 lg:grid-cols-2">
            <form onSubmit={handleSubmit} className="w-[19rem] mx-auto order-2 lg:w-[35rem] bg-white p-[2%] rounded-lg shadow-md pt-[7%]">
                <fieldset className="">
                    <legend className="text-2xl ml-[3%]">Contact Us</legend>
                    
                    <section className="grid grid-cols-1 lg:grid-cols-2 mt-[1rem] space-x-[4%] **:rounded-md space-y-[0.2%] lg:space-y-[2%] 
                    **:focus:outline-sky-500 **:pl-[0.8rem]">
                        <div>
                            <label><h6 className="after:text-red-500 after:content-['*']">First Name </h6>
                                <input value={form.firstName} onChange={handleFormChange1} type="text" className="h-[2.5rem] border border-gray-300 w-full" required></input>
                            </label>
                        </div>

                        <div className='col-span-2 lg:col-span-1'>
                            <label><h6 className="after:text-red-500 after:content-['*']">Last Name </h6>
                                <input value={form.lastName} onChange={handleFormChange2} type="text" className="h-[2.5rem] border border-gray-300 w-full" required></input>
                            </label>
                        </div>

                        <div className="col-span-2">
                            <label><h6 className="after:text-red-500 after:content-['*']">Email Address </h6>
                                <input value={form.email} onChange={handleFormChange3} type="email" className="h-[2.5rem] border border-gray-300 w-full" required></input>
                            </label>
                        </div>

                        <div className="col-span-2">
                            <label><h6>Phone Number</h6>
                                <input value={form.phoneNumber} onChange={handleFormChange4} type="text" className="h-[2.5rem] border border-gray-300 w-full"></input>
                            </label>
                        </div>

                        <div className="col-span-2">
                            <label className=""><h6 className="after:text-red-500 after:content-['*']">Message </h6></label>
                            <textarea value={form.message} onChange={handleFormChange5} className="h-[8rem] w-full border border-gray-300 rounded-md" required></textarea>
                        </div>

                    </section>


                </fieldset>

                <span className="inline-flex gap-3 items-center cursor-pointer after:text-red-500 after:content-['*']">
                    <input type="checkbox" value={form.check} required></input>
                    I consent to being contacted by the team 
                </span>
 
               <button className="w-full bg-sky-500 mt-[1.5rem] rounded-full py-[0.5rem] hover:bg-sky-300">Submit</button>

            </form>


            <section className='pt-[2rem] order-1'>
                <img alt="" className="rounded-full" src="/images/customerCare.webp"></img>
            </section>

         </div>


         {notify && <div className="fixed text-center p-2 top-[-5rem] left-[8%] lg:left-[36%] h-[4.7rem] w-[18rem] animate-dropIn bg-slate-100 z-60 rounded-lg">
            <span className='font-karla text-lg text-slate-500'>Your message has been submitted</span>
         </div>}
        </>
    );
}