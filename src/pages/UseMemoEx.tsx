import { useMemo, useState } from "react";

export default function UseMemoEx(){
    const [num,setNum] = useState(0);
    const [dark,setDark] = useState(false);

    const squares = useMemo(()=>{
        console.log("Calculating square..");
        return num*num
        
    },[num]);

    const theme={
        backgroundColor: dark? 'black':'white',
        color: dark? 'white':'black',
        padding:'20px'
    };

    return(
        <div style={theme}>
            <input type="number" value={num} onChange={(e)=>setNum(parseInt(e.target.value)||0)}></input>

            <h2>Square: {squares}</h2>

            <button onClick={()=>setDark(!dark)}>Toggle theme(does not trigger calculation)</button>
        </div>
    )
}