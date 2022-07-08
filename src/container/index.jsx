import React from "react";
import Statistics from "../components/statistics";
import FeedbackOptions from "../components/feedback";
import Section from "../components/section";
import Notification from "../components/message";


class Container extends React.Component{

    state={
        good: 0,
        neutral: 0,
        bad: 0,
        total:0,
        positivePercentage:"0%"
    };
    

    totalPoint=()=>{
        this.setState(prevState=>({positivePercentage:prevState.good/(prevState.good+prevState.neutral+prevState.bad)*100+"%"}));
        this.setState(prevState=>({total:prevState.good+prevState.neutral+prevState.bad}))
    };

    goodPoint=()=>{
        this.setState(prevState=>({good:prevState.good+1}));
        this.totalPoint();
    };
    neutralPoint=()=>{
        this.setState(prevState=>({neutral:prevState.neutral+1}));
        this.totalPoint();
    };
    badPoint=()=>{
        this.setState(prevState=>({bad:prevState.bad+1}));
        this.totalPoint();
    };

    onLeaveFeedback=(e)=>{
        if(e.target.value==="good"){
            this.goodPoint();
        }else if(e.target.value==="neutral"){
            this.neutralPoint();
        }else if(e.target.value==="bad"){
            this.badPoint();
        }
            
    }

    

    render(){
        const {good,neutral,bad,total,positivePercentage} =this.state;
        // добавити options
        
        return(
            <Section title="Please leave feedback">
                <FeedbackOptions options={"d"} onLeaveFeedback={this.onLeaveFeedback}/>
                <h2>Statistics</h2>
                {this.state.good===0 && this.state.bad===0 && this.state.neutral===0?<Notification message="There is no feedback"/>:<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>}
            </Section>
            
        );
    }

    
};

export default Container;