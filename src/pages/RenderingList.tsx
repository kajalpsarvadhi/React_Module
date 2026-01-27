import { useState } from "react";

interface list{
    id:number;
    label:string;
    volume:number;
}

const RenderingList = ()=>{
    const [ch, setCh] = useState<list[]>([
        {id: 1,label:'ABC',volume:65},
        {id:2, label:'XYZ',volume:89},
        {id:3,label:'ddis',volume:78}
    ])

    const updateVolume=(id:number, newVol:number)=>{
        // console.log(newVol);
        
        setCh(prev =>
            prev.map(c=>
                c.id === id ? {...c,volume:newVol} : c
            )
        )
    }

    const reset = () =>{
        setCh(pre=>pre.map(c=>({...c,volume:50})))
    }

    return(
        <div>
            Rendering Lists<br></br>
            <button onClick={reset}>Reset to 50</button>

            {ch.map((channel)=>(
                <div key={channel.id}>
                    <div style = {{height:`${channel.volume}`}}></div>

                    <input type="range" min="0" max="100"
                    value={channel.volume}
                    onChange={(e) => updateVolume(channel.id, parseInt(e.target.value))}
                    
                    />
                </div>
            ))}
            
        </div>
    )
}

export default RenderingList