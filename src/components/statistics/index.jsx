import { Fragment } from "react";

const Statistics=({good,neutral,bad,total,positivePercentage})=>{
    return(
        <Fragment>
            {
                (good!==0 && neutral!==0 && bad!==0)
            }
            <div>good:{good}</div>           
            <div>neutral:{neutral}</div>
            <div>bad:{bad}</div>
            <div>total:{total}</div>
            <div>positivePercentage:{positivePercentage}</div>
            
        </Fragment>
        
    );
};

export default Statistics;