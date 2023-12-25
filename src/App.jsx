import Sidebar from "./components/projectsidebar";
import Noprojectselected from "./components/Noprojectselected";
import { useState } from "react";
import Newproject from "./components/Newproject";
import Selectproject from "./components/selectedProject";




function App() {
 const [projectstate, setprojectstate]=useState({
  selectedprojectId :undefined,
  project : [],
  tasks:[]
 })

function handeladdtask(text){
  setprojectstate( prevstate=>{
   
    const taskId=  Math.random()
    const Newtask={
     text :text,
     projectId: prevstate.selectedprojectId,
     id: taskId,
    }
    return{
      ...prevstate,
      tasks : [...prevstate.tasks, Newtask ]
    };
  } );
}

function handeldeletetask(id){
  setprojectstate((prevstate)=>{
    return{
      ...prevstate,
      tasks : prevstate.tasks.filter( (task)=>task.id !== id   ),
    };
  });
  
}

 function handelstartaddproject(){
  setprojectstate((prevstate)=>{
    return{
      ...prevstate,
      selectedprojectId: null,

    };
  });
  
 }

 function handelcancelproject(){
  setprojectstate((prevstate)=>{
    return{
      ...prevstate,
      selectedprojectId: undefined,
    };
  });
 }

  function handeladdproject(projectdata){
   
    setprojectstate( prevstate=>{
   
      const projectId=  Math.random()
      const Newproject={
       ...projectdata,
       id: projectId
      }
      return{
        ...prevstate,
        selectedprojectId: undefined,
        project :[...prevstate.project, Newproject ]
      }
    } )
   
  }


  function handeselectproject(id){
    setprojectstate((prevstate)=>{
      return{
        ...prevstate,
        selectedprojectId: id,
  
      };
    });

  }

  function handeldeleteProject(){
    setprojectstate((prevstate)=>{
      return{
        ...prevstate,
        selectedprojectId: undefined,
        project : prevstate.project.filter( (project)=>project.id !== prevstate.selectedprojectId    ),
      };
  
    });
    console.log(projectstate.project)
  }

const selectedProject= projectstate.project.find(project=> project.id===projectstate.selectedprojectId);


 let content= <Selectproject
  project={selectedProject}  
 ondelete={handeldeleteProject} 
 onAddtask={handeladdtask} 
 ondeletetask={handeldeletetask}
 tasks={projectstate.tasks}
 showtaskid={projectstate.selectedprojectId}
 ></Selectproject>;
 if(projectstate.selectedprojectId===null){
  content= <Newproject  Add={handeladdproject}  oncancel={handelcancelproject}  />
 }else if(projectstate.selectedprojectId===undefined){
  content=  <Noprojectselected onstartaddproject={handelstartaddproject} />;
 }
 
//  console.log(projectstate.selectedprojectId)

 
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onstartaddproject={handelstartaddproject} projects={projectstate.project}   onselectproject={handeselectproject}  selectedId={projectstate.selectedprojectId} />
      {content}
    </main>
      
   
  );
}


export default App;
