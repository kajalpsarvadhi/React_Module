import StopWatchRef from "./StopWatchRef"
import Counter from "./test"
import UseMemoEx from "./UseMemoEx"
import UseReducerEx from "./UseReducerEx"
import UseRefEx from "./useRefEx"
import withBlueText from "./HOCEx"
import Hello from "./Hello"

const BlueHello = withBlueText(Hello);
const HooksPage = ()=>{
    return(
        <div>
            
            <BlueHello/>
            <Counter/>
            <UseRefEx/>
            <StopWatchRef/>
            <UseReducerEx/>
            <UseMemoEx/>
           
        </div>
    )
}

export default HooksPage