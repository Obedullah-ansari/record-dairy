
import Newtask from "./Newtask";
export default function Task( { tasks, onadd, ondelete,showtaskid} ){
 
    return(
        <section>
            <h2 className="text-2xl font-bold text-stone-800 mb-4" >Task</h2>
            <Newtask onaddnew={onadd}></Newtask>
            {tasks.length===0 && (<p className="text-stone-800 mb-4 ">this project dose not contain any tasks</p>)}
            {tasks.length >0 &&   
                
               <ul className="p-4 mt-8 rounnded-md bg-stone-200"> 
               

                 {  tasks.map((task)=> {
                 
                 let showtaskbar='';
                 if(showtaskid===task.projectId){
                    showtaskbar=( <li className="flex justify-between my-4" key={task.id}> 
                    <span>{task.text}</span>  
                   <button onClick={()=> ondelete(task.id)} className="text-stone-700 hover:text-red-500">clear</button>
                   </li>);
                 }
                 
                 return showtaskbar;
                })
                 }
               
                </ul> }
        </section>
    );
}