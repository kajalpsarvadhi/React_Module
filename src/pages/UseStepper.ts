import { useCallback, useState } from "react";

export function UseStepper(totalSteps:number){
    const[step,setStep]=useState(1)
    const next = useCallback(()=>{
        setStep((s)=>Math.min(s+1,totalSteps))
    },[totalSteps])

    const back = useCallback(()=>{
        setStep((s)=>Math.max(s-1,1))
    },[])
    return{step,back,next}
}   