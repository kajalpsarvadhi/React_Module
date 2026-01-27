const ListsTS = () =>{
    const mixedList : (string|number|boolean)[] = ["Hello",328,"React",848,true];
    console.log(mixedList);
    return(
        <div>
            {mixedList.map((m,index)=>(
                <ul key = {index}>Element {index}: <strong>{m}</strong> | <strong> {typeof m}</strong></ul>
            ))}
        </div>
    )
    
}

export default ListsTS


