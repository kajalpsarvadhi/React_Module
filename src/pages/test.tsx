import { useEffect, useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log("Renders only once");
        
    },[])

    useEffect(()=>{
        
        console.log("Runs at every render");
        
    })

    useEffect(()=>{

        if(count>0){
            document.title = `(${count}) New Notifications`;
        }else{
            document.title="My App"
        }
        console.log("Passed count in dependency array so it will run whenever count updates");
        
    },[count])

    // document.title = `Clicked ${count} times`;
    // console.log(count + " Hello");
    return(
        <div>
            <h1>Notification Center</h1>
            <button onClick={() => setCount(count + 1)} >
                Send Notification
            </button>
            <button onClick={()=>setCount(0)}>Mark as Read</button>
            
        </div>
    )
}
