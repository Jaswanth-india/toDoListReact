function Task(props){
    return(
        <div>
            <input type="checkbox"/>
            <div>{props.taskName}</div>
            <button><img src="../assets/delete.png" width={100} height={100}/></button>
        </div>
    )
}

export default Task;