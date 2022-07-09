import { Component } from "react";
import PropTypes from "prop-types"

class Notification extends Component{

    static propTypes={
        message:PropTypes.string
    }

    render(){
        return(<div>{this.props.message}</div>)
    }
    
}

export default Notification;