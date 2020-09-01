import React from 'react';
import StopWatch from './components/StopWatch';
import IncDecOperation from './components/IncDecOperation';
import AddRemoveElementFromStack from './components/AddRemoveElementFromStack';
import ProgressBar from './components/ProgressBar';
const App =()=>{
    return(
        <div> <h1 style={{textAlign:"center"}}>Apps</h1>
        <div style={{textAlign:"center"}}><StopWatch/></div>
        <div><IncDecOperation /></div>
            <div><AddRemoveElementFromStack /></div>
            <div><ProgressBar/></div>
        </div>
    )
}
export default App ;