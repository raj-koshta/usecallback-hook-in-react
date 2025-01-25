import React, { memo, useCallback, useState } from 'react'

const Button = memo(({onClick, children}) =>{
    console.log("Rendering Button: " + children)
    return(
        <>
            <button className={`text-white flex m-auto mb-4 py-[1.25rem] px-[5.5rem]
                ${children === "Increment" ?  "bg-green-600": "bg-red-700"}`}
                onClick={onClick}>
                {children}
            </button>
        </>
    )
});

const UseCallback = () => {

    const [count, setCount] = useState(0);

    // Case: 1 -- Not working
    // Memoized the Funtions
    // const inc = () =>setCount((prev) => prev+1);
    // const dec = () =>setCount((prev) => prev-1);
    
    // Case:2 --- Working
    const inc = useCallback(() => { console.log("Inside Inc Function: "); setCount((prev) => prev+1)}, []);
    const dec = useCallback(() => {console.log("Inside Dec Function: "); setCount((prev) => prev-1)}, []);



    return (
        <div className='main-div'>
            <h1 className="my-8 text-5xl font-bold">useCallback Hook In React</h1>
            <hr />
            <p className="my-8 text-[8.56rem] font-bold">{count}</p>
            <Button onClick={inc}>Increment</Button>
            <Button onClick={dec}>Decrement</Button>
        </div>
    )
}

export default UseCallback
