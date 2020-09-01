import React from 'react';
import './ProgressBar.css';

const ProgressBar =()=>{
      const move=()=>{
        let ele=document.getElementById('myBar');
        let width=20;
        let id=setInterval(frame,100);
         function frame(){
            if(width>=100){
                clearInterval(id);
            }else{
                width++;
                ele.style.width=width +'%';
                ele.innerHTML = width * 1  + '%';
            }
        }
    }

    return(
        <div className="outer-div-progress-bar" id="test"> 
            <h3>Progress Bar</h3>
            <div id="myBar" style={{width:"20%", backgroundColor:"GrayText",color:"white"}}>20%</div>
            <button onClick={move}>Click Me</button>
        </div>
    )
}
export default ProgressBar ;