import React from "react";
import Statistics from "../statistics";
import FeedbackOptions from "../feedback";
import Section from "../section";
import Notification from "../message";


class Container extends React.Component{
    
    constructor({state}){
        super();
        this.state=state;
        

    }
    onLeaveFeedback=(e)=>{
        if(e.target.value==="good"){
            this.goodPoint();
        }else if(e.target.value==="neutral"){
            this.neutralPoint();
        }else if(e.target.value==="bad"){
            this.badPoint();
        }
          
    };

    totalPoint=()=>{
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    };
    countTotalFeedback=()=>{
        this.setState(prevState=>({total:prevState.good+prevState.neutral+prevState.bad}))
    }
    countPositiveFeedbackPercentage=()=>{
        this.setState(prevState=>({positivePercentage:prevState.good/(prevState.good+prevState.neutral+prevState.bad)*100+"%"}));
        
    }
  
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

    render(){
        const {good,neutral,bad,total,positivePercentage} =this.state;
        // добавити options
        
        return(
            <Section title="Please leave feedback">
                <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback}/>
                <h2>Statistics</h2>
                {this.state.good===0 && this.state.bad===0 && this.state.neutral===0?<Notification message="There is no feedback"/>:<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>}
            </Section>
            
        );
    }

    
};

export default Container;