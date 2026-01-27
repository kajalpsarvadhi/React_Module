import React, {useState, type ChangeEvent, type FormEvent, type MouseEvent} from 'react';
import type { Product } from '../utils/types';

export const ProductSearch = ()=>{
    const [searchTerm,setSearchTerm] = useState<string>("");
    const [results,setResults] = useState<number>(0);

    const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }

    const handleSearchSubmit = (event:FormEvent) =>{
        event.preventDefault()
        alert(`Searching for: ${searchTerm}`)
        setResults(Math.floor(Math.random()*10))
    }

    const handleClear = (event:MouseEvent<HTMLButtonElement>)=>{
        setSearchTerm("")
        setResults(0)
    }

    return(
        <div style={{padding:'20px', border:'1px solid #444',borderRadius:'8px'}}>
            <form onSubmit={handleSearchSubmit}>
                <label htmlFor='search'>Find Product:</label>
                <input id="search" type ="text" value={searchTerm} onChange={handleInputChange} placeholder='Type something'></input>
                <button type="submit">Search</button>
            </form>

            <div style ={{marginTop:'10px'}}>
                <p>Current Input: <strong>{searchTerm}</strong></p>
                <p>Found {results} items.</p>

                <button onClick={handleClear}>Clear Results</button>
            </div>

        </div>
    )
}