import { useState } from "react";

function Counter() {
    const [number, setNumber] = useState(0)
    // local variables in UI cannot be updated
    function handleClick(e) {
        e.stopPropagation()
        // setNumber(number + 1);
        setNumber(number=>number+1)
    }
    return (
        <>
            <h1>{number}</h1>
            <button onClick={handleClick}>ADD</button>
        </>
    )
}

export default Counter