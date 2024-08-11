import {Tasks,taskMethod,totalTasks} from "../App.jsx";

function Task(props){
    function checkboxInput(e){
        if(e.target.checked){
            e.target.parentNode.children[1].style.background="rgb(51, 251, 118)";
            e.target.parentNode.children[1].style.textDecoration="100% dashed line-through";
            taskMethod(totalTasks-1);
        }else{
            e.target.parentNode.children[1].style.background="white";
            e.target.parentNode.children[1].style.textDecoration="";
            taskMethod(totalTasks+1);
        }
        
    }
    function deleteFunc(){
        delete Tasks[props.content.id];
        taskMethod(totalTasks-1);
    }
    return(
        <div>
            <input type="checkbox" onChange={(e)=>checkboxInput(e)}/>
            <div>{props.content.taskName}</div>
            <button onClick={deleteFunc}><img src="../assets/delete.png" width={100} height={100}/></button>
        </div>
    )
}

export default Task;