export default function withBlueText(OriginalComp:React.ComponentType<any>){
    return function(props:any){
        return(
            <div style = {{color:"blue"}}>
                <OriginalComp {...props}/>
            </div>

        )
    }
}