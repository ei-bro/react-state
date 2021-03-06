import React, { useState } from "react";

const Increasedecreasecount = () => {
    const [count, setCount] = useState(0);
    const IncreaseCount = () => {
        setCount((count) => count + 1);
    };

    const DecreaseCount = () => {
        setCount((count) => count - 1);
    };
    const ResetCount = () => {
        setCount(0);
    };
    return (
        <div className="container">
            <h1>Initial click count : {count} </h1>
            <div>
                <button onClick={ResetCount}>Reset count</button>
                <button onClick={IncreaseCount}>Increase count</button>
                <button onClick={DecreaseCount}>Decrease count</button>
            </div>
        </div>
    );
};

export default Increasedecreasecount;
