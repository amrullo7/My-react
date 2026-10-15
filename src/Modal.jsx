
const Modal=({open,setOpen,title,children})=>{
    return (
open?(
    <div>
        <div>
            <div>
                <h1>{title}</h1>
                <button onClick={()=>setOpen((prev)=>!prev)}>x</button>
            </div>
            {children}
        </div>
    </div>
):null

    )
}
export default Modal