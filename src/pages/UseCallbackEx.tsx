import { useCallback, useState } from "react";



export default function UseCallbackEx(){
    const [count,setCount] = useState(0);
    const [theme,setTheme] = useState(false);

    // 1. Without useCallback: This is a "new" function every render.
  // 2. With useCallback: This function is "cached" and stays the same.
    const handleIncrement = useCallback(()=>{
        setCount((prev)=>prev +1);
    },[])

    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>setTheme(!theme)}>Toggle theme</button>
            {/* If handleIncrement wasn't wrapped in useCallback, 
          this child would re-render every time you toggle*/}
          {/* <ExpensiveChild onButtonClick={handleIncrement} /> */}
        </div>
    )
}