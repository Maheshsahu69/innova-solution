import React from 'react';
import './AddRemoveElementFromStack.css';
let Days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thusday",
    "Friday",
    "Saturday",
    "Sunday"];
class AddRemoveElementFromStack extends React.Component {
    constructor(props){
        super(props);
        this.state={
            days:[],
            count:0
        }
    }
    onAddDay = () => {
if((this.state.days.length) !==Days.length+1){
        this.setState((state)=>{
            const count=state.count+1;
            const days=[...state.days,Days[state.count]]
            return{
                days,
                count
            }
        }) 
    }
    }
    onRemoveDay = () => {
        if(this.state.count >=1){
        this.setState({
             count:this.state.count-1,
             days:this.state.days.splice(1,this.state.count)
        })
    }
    }
    loadRender = () => {
        return (
            this.state.days.map((item, index) => {
                return (
                    <div key={index}> {item} </div>
                );
            })
        )
    }
    render() {
        return (
            <div className="outer-div-add-remove-element">
                <h3>Add and Remove elements from stack</h3>
                <button style={{ margin:"5px"}} onClick={this.onAddDay}>Add Day</button>
                <button onClick={this.onRemoveDay}>Remove Day</button>
                {this.loadRender()}
            </div>
        )
    }
}
export default AddRemoveElementFromStack;