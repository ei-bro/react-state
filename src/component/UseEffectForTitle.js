import React, { useState, useEffect } from "react";

function UseEffectForTitle() {
    const [count, setCount] = useState(0);

    // componentDidMount
    useEffect(() => {
        alert("Component is mounted");
    }, []);

    // componentDidUpdate (count)
    useEffect(() => {
        document.title = `TitleCount : (${count})`;
    }, [count]);

    function increseCount() {
        setCount((count) => count + 1);
    }

    return (
        <div className="container">
            <button onClick={increseCount}>Click here</button>
            <h1>Counter displayer : {count}</h1>
        </div>
    );
}

export default UseEffectForTitle;
