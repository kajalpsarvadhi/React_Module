import { useReducer } from "react";

interface bankState{
    balance:number;
    isActive:boolean;
    error:string;
}

type bankAction= | { type: 'openAccount' }
  | { type: 'deposit'; payload: number }
  | { type: 'withdraw'; payload: number }
  | { type: 'closeAccount' };

const initialState:bankState={balance:0,
    isActive:false,
    error:""
}


function reducer(state:bankState,action:bankAction):bankState{
    if(!state.isActive && action.type !== "openAccount"){
        return {...state,error:"Please open an account first"}
    }

    // console.log(state);
    
    switch(action.type){
        
        case "openAccount":
            return {...initialState,isActive:true,balance:10000};
        case "deposit":
            // console.log(state);
            return {...state,balance:state.balance+action.payload,
                error:""
            }
        case "withdraw":
            // console.log(state);
            if(state.balance<action.payload){
                return{...state,error:"Insufficient funds!"}
            }
            return{
                ...state,balance:state.balance-action.payload,
                error:""
            }
        case "closeAccount":
            // console.log(state);
            if(state.balance > 0){
                return{...state,error:"Must have 0 balance to close the account"}
            }
            return initialState
        default:
            return state
        
    }
    
    
}

export default function UseReducerEx(){
    const [state, dispatch] = useReducer(reducer,initialState);

    return(
        <div>
            <h1>UseReducer Example</h1>

            <strong>Status:</strong> {state.isActive ? "Active" : "Closed"}

            <h2>Balance: Rs.{state.balance}</h2>

            {state.error && (
            <p style={{ color: "black", padding: "10px" }}>
                {state.error}
                </p>
            )}

            <button onClick={()=>dispatch({type:"openAccount"})}>Open Account</button>

            <button onClick={()=>dispatch({type:"deposit",payload:1200})}>Deposit Rs 1200</button>

            <button onClick={()=>dispatch({type:"withdraw",payload:3000})}>Withdraw Rs 3000</button>

            <button onClick={()=>dispatch({type:"closeAccount"})}>Close Account</button>

        </div>
    )
}