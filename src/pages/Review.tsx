import { useContext } from "react";
import { FormContext } from "../context/FormContext";

function Review({ back }: any) {
    const context = useContext(FormContext)

    if (!context) {
        throw new Error("Review must be used inside FormProvider")
    }

    const { state } = context

    return (
        <div>
            <pre>{JSON.stringify(state, null, 2)}</pre>
            <button onClick={back}>Back</button>
            <button onClick={() => alert("Submitted!")}>Submit</button>
        </div>
    )
}

export default Review;