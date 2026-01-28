import { useContext, useEffect, useMemo, useRef } from "react";
import { FormContext } from "../context/FormContext";
import { UseStepper } from "./UseStepper";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import Review from "./Review";

function StepperForm() {
    const context = useContext(FormContext)
    if (!context) {
        throw new Error("StepperForm must be used inside FormProvider")
    }

    const { state } = context
    const { step, next, back } = UseStepper(4)
    const topRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        topRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [step])

    useEffect(() => {
        localStorage.setItem("form", JSON.stringify(state))
    }, [state])

    const isValid = useMemo(() => {
        if (step === 1) return state.name && state.email
        if (step === 2) return state.gender
        if (step === 3) return state.skills.length > 0
        return true
    }, [step, state])

    return (
        <div ref={topRef}>
            {step === 1 && <StepOne next={next} isValid={isValid} />}
            {step === 2 && <StepTwo next={next} back={back} isValid={isValid} />}
            {step === 3 && <StepThree next={next} back={back} isValid={isValid} />}
            {step === 4 && <Review back={back} />}
        </div>
    )
}

export default StepperForm