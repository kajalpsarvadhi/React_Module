import { useContext } from "react";
import { FormContext } from "../context/FormContext";

function StepTwo({next,back,isValid}:any){
    const context = useContext(FormContext)

if (!context) {
  throw new Error("StepTwo must be used inside FormProvider")
}

const { state, dispatch } = context

    return(
        <div>
            <label>
                <input type="radio"
                name="gender"
                checked={state.gender==="male"}
                onChange={()=>dispatch({type:"UPDATE_FIELD",field:"gender",value:"male"})}>
                </input>
                Male
            </label>

            <label>
                <input type="radio"
                name="gender"
                checked={state.gender==="female"}
                onChange={()=>dispatch({type:"UPDATE_FIELD",field:"gender",value:"female"})}>
                </input>
                Female
            </label>

            <button onClick={back}>Back</button>
            <button disabled={!isValid} onClick={next}>Next</button>
        </div>
    )
}

export default StepTwo