import Button from "./button";

export default function Sidebar( {onstartaddproject , projects, onselectproject, selectedId} ){
    // console.log(selectedId);
    // console.log(projects);
    // console.log(projects.id)
    return(
        <div className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-77 rounded-r-xl ">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Project</h2>
            <div>
                <Button isClick={onstartaddproject}  > + Add project</Button>
            </div>
            <ul className="mt-8">
              

                { projects? projects.map( (project)=>{  

                    let cssclasses="w-full text-left px-2 py-1 rounded-sm text-stone-400 hover:text-stone-200 hover:bg-stone-800";
                   
                    if(project.id===selectedId){
                       
                        cssclasses+=" bg-stone-800 text-stone-100"
                    }else{
                        cssclasses +=" text-stone-400"
                    }
                    
                   return ( <li key={project.id}>
                    <button  className={cssclasses} onClick={()=> onselectproject(project.id)} >{project.title}</button>
                </li> ) }) 
                
                
                : ''}
            </ul>
        </div>
    );
}