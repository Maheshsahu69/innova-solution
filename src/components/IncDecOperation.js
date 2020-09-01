import React from 'react';
import './IncDecOperation.css';
class IncDecOperation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
     onIncreament=()=>{
        this.setState({count: this.state.count + 1})
    }

    onDecreament=()=>{
        if(this.state.count >0)
        this.setState({count: this.state.count - 1})
    }

    render(){
        return(
            <div className="outer-div-inc-dec-operation">
               <h3 style={{textAlign:"center"}}> Increament & Decreament Operation</h3>
               <div style={{textAlign:"center"}}> 
                   <button style={{margin:"5px"}} onClick={this.onIncreament}>Increament</button>
                    <div style={{textAlign:"center", fontWeight:"bold"}}>{this.state.count}</div>
                   <button onClick={this.onDecreament}>Decreament</button>
               </div>
             </div>
        )
    }
}
export default IncDecOperation ;