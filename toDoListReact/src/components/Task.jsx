import {Tasks,taskMethod,totalTasks} from "../App.jsx";

export let updateProps;
export let editValue;
export function Task(props){
    updateProps=props;
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
    function editFunc(e){
        if(e.target.src){
            editValue=e.target.parentNode.parentNode.children[1].innerHTML;
            e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0].children[0].children[0].value=editValue;
            e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0].children[1].children[0].style.display="none";
            e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0].children[1].children[1].style.display="block";
        }else{
            editValue=e.target.parentNode.children[1].innerHTML;
            e.target.parentNode.parentNode.parentNode.parentNode.children[1].children[0].children[0].children[0].value=editValue;
        }
    }
    return(
        <div>
            <input type="checkbox" onChange={(e)=>checkboxInput(e)}/>
            <div>{props.content.taskName}</div>
            <button onClick={(e)=>editFunc(e)}><img src="../assets/pencil.png"/></button>
            <button onClick={deleteFunc}><img src="../assets/delete.png" width={100} height={100}/></button>
        </div>
    )
}

;