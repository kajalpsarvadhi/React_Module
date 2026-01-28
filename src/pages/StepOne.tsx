import { useContext, useEffect, useRef } from "react";
import { FormContext } from "../context/FormContext";

function StepOne({ next, isValid }: any) {
    const context = useContext(FormContext)

    if (!context) {
        throw new Error("StepOne must be used inside FormProvider")
    }

    const { state, dispatch } = context
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    return (
        <div>
            <input ref={inputRef}
                placeholder="Name"
                value={state.name}
                onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "name", value: e.target.value })}>
            </input>

            <input
                placeholder="Email"
                value={state.email}
                onChange={(e) =>
                    dispatch({ type: "UPDATE_FIELD", field: "email", value: e.target.value })
                }
            />
            <button disabled={!isValid} onClick={next}>Next</button>
        </div>
    )
}

export default StepOne