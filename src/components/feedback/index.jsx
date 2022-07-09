import { Fragment } from "react"
import PropTypes from "prop-types"
import { Component } from "react"

class FeedbackOptions extends Component{

    static propTypes={
        onLeaveFeedback:PropTypes.func
    }

    render(){
        return(
            <Fragment>
                <button onClick={(e)=>{this.props.onLeaveFeedback(e)}} value="good">good</button>
                <button onClick={(e)=>{this.props.onLeaveFeedback(e)}} value="neutral">neutral</button>
                <button onClick={(e)=>{this.props.onLeaveFeedback(e)}} value="bad">bad</button>
            
            </Fragment>)
    }
    
}

export default FeedbackOptions;