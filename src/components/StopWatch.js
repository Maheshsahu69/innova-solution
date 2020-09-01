import React from 'react';
import './StopWatch.css';

class StopWatch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            second:0
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({second: this.state.second + 1})
        },1000)
    }

    render(){
        return(
        <div className="outer-div-stop-watch">
             <h3>Stop Watch</h3>
            {this.state.second}
        </div>
        );
    };
};
export default StopWatch ;