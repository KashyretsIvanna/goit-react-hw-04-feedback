import { Fragment } from "react"

const FeedbackOptions=({onLeaveFeedback})=>{
    return(
    <Fragment>
        <button onClick={(e)=>{onLeaveFeedback(e)}} value="good">good</button>
        <button onClick={(e)=>{onLeaveFeedback(e)}} value="neutral">neutral</button>
        <button onClick={(e)=>{onLeaveFeedback(e)}} value="bad">bad</button>
    
    </Fragment>)
}

export default FeedbackOptions;