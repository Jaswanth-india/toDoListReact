import "./App.css"
import { useState } from "react";
import Task from "./components/Task.jsx"

function App(){
    let [Tasks,taskMethod]=useState([]);
    let inputValue;
    function inputData(e){
        inputValue=e.target.value;
    }
    function taskAdder(){}
    return (
    <>
        <article>
            <h1><span>To</span><span>-</span><span>Do</span><span> List</span></h1>
        </article>
        <section id="inputSection">
            <div>
                <div>
                    <input id="taskInput" placeholder="E.g: Meeting with Kiran" type="text" onChange={(e)=>{inputData(e)}}/>
                </div>
                <div>
                    <button id="idButton" onClick={taskAdder}>ADD</button>
                </div>
            </div>
        </section>
        <section>
            <div>
            <Task/>
            </div>
        </section>
    </>
    )
}

export default App;