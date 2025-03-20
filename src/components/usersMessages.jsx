import proptype from 'prop-types'

UsersMessage.propTypes = {
    name:proptype.string,
    email:proptype.string,
    message:proptype.string,
    timeStamp:proptype.string,
    number:proptype.string
}

export default function UsersMessage({name, email, message, timeStamp, number}){
    return(
        <>
         <div className="bg-slate-300 grid grid-cols-3 h-[5.5rem] rounded-md p-[1.6%] mb-10 text-slate-700">
            <div className="flex flex-col border-r-2 border-slate-500">
                <h3 className="text-2xl font-inter line-clamp-1 text-slate-500 border-b-2 border-slate-500">{name}</h3>
                <span>{email}</span>
            </div>
            <div className="border-r-2 border-slate-500">
                <div className="border-b-2 border-slate-500 text-center">{timeStamp.slice(0,10)}</div>
                <div className='text-center'>{`0${number}`}</div>
            </div>
            <div className='overflow-y-auto font-karla pl-[4%]'>
                {message}
            </div>
         </div>
        </>
    );
}