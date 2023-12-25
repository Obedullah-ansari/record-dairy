import { useState } from "react";

export default function Newtask( {onaddnew}){
    const [enteredtask , setenteredtask]=useState('');
    function handelchange(event){
       setenteredtask(event.target.value)
    }
    function handelclick(){
        if(enteredtask.trim()==='')
        return;
        onaddnew(enteredtask);
       setenteredtask("");
    }


    return (
        <div className="flex items-center gap-4">
            <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"  value={enteredtask} onChange={handelchange}/>
            <button  className="py-1 px-2 rounded-sm bg-stone-800 text-stone-200 hover:bg-stone-900" onClick={handelclick}>Add new task</button>
        </div>
    );

    
}