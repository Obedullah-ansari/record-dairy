import Input from "./input";
import { useRef } from "react";
import Modal from "./modal";
export default function Newproject( {Add , oncancel} ){
    const modal=useRef();

    const title=useRef();
    const Description=useRef();
    const duedate=useRef();
   
  function handelsave(){
   const eneteredTitle=title.current.value;
   const eneteredDescription=Description.current.value;
   const enetereddueDate=duedate.current.value;

   if(eneteredTitle.trim()==="" || eneteredDescription.trim()==="" || enetereddueDate.trim()==="")
   {
    modal.current.open();
    return;
   }



    Add({
        title:eneteredTitle,
        Description: eneteredDescription,
        duedate: enetereddueDate
    })

   
  }


    return(
        <>
        <Modal ref={modal} btn="Close">
            <h2 className="text-xl font-bold text-stone-600 my-4">Invalid Input</h2>
            <p className='text-stone-700 mb-4'>oops you froget to add any project</p>
            <p className='text-stone-700 mb-4' >Fill all the details please to add a new project </p>
           
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button onClick={oncancel} className=  " px-6 py-2 rounded-md  bg-stone-200 text-stone-800 hover:text-stone-950"> Cancel </button></li>
                <li><button onClick={handelsave} className= "px-6 py-2 rounded-md  bg-stone-800 text-stone-50 hover:bg-stone-950" > Save </button></li>
            </menu>
            <div>
             <Input  ref={title} label="Title"      ></Input>
             <Input ref={Description} label="Description" textarea={true}  ></Input>
             <Input type="date" ref={duedate} label="Due Date" ></Input>
            </div>
        </div>
        </>
    );

}