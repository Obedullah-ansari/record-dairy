export default function Button ( {children, isClick} ){
return(
 <button  onClick={isClick} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover: hover:text-stone-100"

  >{children} </button>
);
}