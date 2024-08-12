import "./App.css"
import { useState } from "react";
import {Task,updateProps} from "./components/Task.jsx"
import Header from "./components/Header.jsx"

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
    function updatePropsFunc(e){
        e.target.style.display="none";
        e.target.parentNode.children[0].style.display="block";
        Tasks[updateProps.content.id].taskName=inputValue;
        taskMethod(totalTasks+1);
    }
    return (
    <>
        <Header/>
        <section id="inputSection">
            <div>
                <div>
                    <input id="taskInput" placeholder="E.g: Meeting with Kiran" type="text" onInput={(e)=>{inputData(e)}}/>
                </div>
                <div>
                    <button id="idButton" onClick={taskAdder}>ADD</button>
                    <button id="updateButton" onClick={(e)=>{updatePropsFunc(e)}}>UPDATE</button>
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