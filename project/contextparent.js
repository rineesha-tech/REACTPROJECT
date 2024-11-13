import React, { createContext,useContext, useState} from "react";
const StepContext=createContext();
function ContextParent()
{
    const[name,setName]=useState("Prathi");
    return(
    <StepContext.Provider value={name}>
        <h1>Parent Component</h1>
        <ChildA />
    </StepContext.Provider>
    );
}
function ChildA()
{
    return(
        <div>
            <h1>Child A</h1>
            <ChildB />
        </div>
    );
}
function ChildB()
{
    const Name=useContext(StepContext);
    return(
        <>
        <h1>Child B Component</h1>
        <p>Name:{Name}</p>
        </>
    );
}
export default ContextParent;
