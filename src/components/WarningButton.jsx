import { useNavigate } from "react-router-dom";
export function WarningButton({text,link}) {
    const navigate = useNavigate();
    function handleChange(){
        navigate(`/${link}`)
    }
  return (
    <div className="text-center flex justify-center gap-1">
        <div className="text-sm font-semibold">
            {text}
        </div>
        
        <button className=" text-sm text-indigo-600 cursor-pointer underline underline-offset-1" onClick={handleChange}>{link}</button>
        
        
    </div>
  )
}

