import { useRef, useState } from "react";

export default function StopWatchRef(){
    const [now,setNow] = useState<number>(0);
    const [startTime, setStartTime] = useState<number>(0);

    const intervalRef = useRef<number|null>(null);

    function handleStart():void{
        const startFrom = Date.now() - now;
        setStartTime(startFrom)

        if(intervalRef.current !=null){
            clearInterval(intervalRef.current)
        }

        intervalRef.current = window.setInterval(() => {
            setNow(Date.now() - startFrom)
        }, 10);
    }

    function handlePause():void{
        if(intervalRef.current!=null){
            clearInterval(intervalRef.current)
            intervalRef.current = null;
        }
    }

    function handleReset():void{
        if (intervalRef.current != null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setNow(0);
        setStartTime(0);
    }

    return(
        <div>
            <h1>{(now/1000).toFixed(3)}s</h1>

            <button onClick={handleStart}>Start</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleReset}>Reset</button>

            {}
        </div>
    )
}