import { useContext } from "react"

import { FormContext } from "../context/FormContext"

const skillsList = ["React", "Node", "TypeScript"]
function StepThree({ next, isValid, back }: any) {
    const context = useContext(FormContext)

    if (!context) {
        throw new Error("StepThree must be used inside FormProvider")
    }

    const { state, dispatch } = context

    const toggleSkill = (skill: string) => {
        const updated = state.skills.includes(skill)
            ? state.skills.filter((s) => s !== skill)
            : [...state.skills, skill]

        dispatch({ type: "UPDATE_FIELD", field: "skills", value: updated })
    }

    return (
        <div>
            {skillsList.map((skill) => (
                <label key={skill}>
                    <input
                        type="checkbox"
                        checked={state.skills.includes(skill)}
                        onChange={() => toggleSkill(skill)}
                    />
                    {skill}
                </label>
            ))}

            <select
                value={state.experience}
                onChange={(e) =>
                    dispatch({
                        type: "UPDATE_FIELD",
                        field: "experience",
                        value: e.target.value
                    })
                }
            >
                <option value="">Select experience</option>
                <option value="junior">Junior</option>
                <option value="mid">Mid</option>
                <option value="senior">Senior</option>
            </select>

            <button onClick={back}>Back</button>
            <button disabled={!isValid} onClick={next}>
                Next
            </button>
        </div>
    )
}

export default StepThree