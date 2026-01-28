import { createContext, useReducer, type ReactNode } from "react";

type FormState ={
    name:string;
    email:string;
    gender:string;
    skills:string[];
    experience:string
}

type Action = | {type:"UPDATE_FIELD";field:string; value:any}
|{type:"RESET"}

const initialState:FormState={
    name:"",
    email:"",
    gender:"",
    skills:[],
    experience:""
}

function formReducer(state:FormState,action:Action):FormState{
    switch(action.type){
        case "UPDATE_FIELD":
            return {...state,[action.field]:action.value}
        case "RESET":
            return initialState
        default:
            return state
    }
}

export const FormContext = createContext<{state: FormState
  dispatch: React.Dispatch<Action>
} | null>(null)

export function FormProvider({children}:{children:ReactNode}){
    const [state,dispatch] = useReducer(formReducer,initialState)

    return(
        <FormContext.Provider value={{state,dispatch}}>
            {children}
        </FormContext.Provider>
    )
}


