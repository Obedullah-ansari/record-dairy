import Task from "./Task";

export default function Selectproject({ project , ondelete,onAddtask,ondeletetask , tasks, showtaskid}){

    const formatedate= new Date(project.duedate).toLocaleDateString('en-us',{
    year :'numeric',
    month: 'short',
    day: 'numeric'
    }
    );
    return(

        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-stone-800 mb-2">{project.title} </h1>
                <button  onClick={ondelete} className="text-stone-600 hover:text-stone-950">Delete</button>
                </div>
                <p className="mb-4 text-stone whitespace-pre-wrap">{formatedate} </p>
                <p> {project.Description} </p>
            </header>
           <Task onadd={onAddtask} ondelete={ondeletetask} tasks={tasks} showtaskid={showtaskid}></Task>
        </div>
    );
}