import "./App.css"

function App(){
    return (
    <>
        <article>
            <h1><span>To</span><span>-</span><span>Do</span><span> List</span></h1>
        </article>
        <section id="inputSection">
            <div>
                <div>
                    <input placeholder="E.g: Meeting with Kiran" type="text"  />
                </div>
                <div>
                    <button id="idButton" onClick={console.log("Task Added")}>ADD</button>
                </div>
            </div>
        </section>
        <section>
            
        </section>
    </>
    )
}

export default App;