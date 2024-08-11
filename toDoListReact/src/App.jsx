import "./App.css"
import { useState } from "react";
import Task from "./components/Task.jsx"

export let Tasks=[];
export let taskMethod;
let count=0;
export let totalTasks;
let inputValue;

export function App(){
    [totalTasks,taskMethod]=useState(0);
    function inputData(e){
        inputValue=e.target.value;
    }
    function taskAdder(){
        if(inputValue){
            Tasks[Tasks.length]={
                id:count,
                taskName:inputValue
            }
            count++;
            taskMethod(totalTasks+1);;
        }
    }
    return (
    <>
        <article>
            <h1><span>To</span><span>-</span><span>Do</span><span> List</span></h1>
        </article>
        <section id="inputSection">
            <div>
                <div>
                    <input id="taskInput" placeholder="E.g: Meeting with Kiran" type="text" onInput={(e)=>{inputData(e)}}/>
                </div>
                <div>
                    <button id="idButton" onClick={taskAdder}>ADD</button>
                </div>
            </div>
        </section>
        <section>
            <div>
            {Tasks.filter((task)=>{
                    if(task){
                        return true
                    }
                    ;return false;
                }).map((task)=>
                    <Task key={task.id} content={task}/>
                )
            }
            </div>
        </section>
    </>
    )
}