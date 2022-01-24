import React, { useState, useCallback } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";


function App() {
    const [showparagraph, setShowParagraph] = useState(false);

    const [allowToggle, setAllowToggle] = useState(false)

    // useCallback store a function across components executions
    // tells react to save a function and should not recreate 
    // the function with every execution
    // dependencies are the same as they are for useEffect
    const toggleParagraphHandler = useCallback(() => {
        if (allowToggle) {
            setShowParagraph((preState) => !preState);
        }
    }, [allowToggle]);

    // because we don't use useCallback on this function
    // we see the button running in console only once
    const allowToggleHanldder = () => {
        setAllowToggle(true)
    }

    console.log('APP RUNNNING');

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={showparagraph}/>
            <Button onClick={allowToggleHanldder}>Allow Toggle!</Button>
            <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
        </div>
    );
}

export default App;
