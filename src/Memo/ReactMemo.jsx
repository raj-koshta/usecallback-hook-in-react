import React, { useMemo, useState } from 'react'
import MemoCount from './MemoCount'

const ReactMemo = () => {

    const [count, setCount] = useState(0)

    // Do not pass object directly to the child component 
    // const myBioData = {
    //     name: "Raj",
    //     age: 24
    // }

    const myBioData = useMemo(()=>{
        return {
            name: "Raj",
            age: 24
        }
    },[])

    return (
        <>
            <div className='main-div'>
                <h1 className="my-8 text-5xl font-bold">React.memo Function In React</h1>
                <hr />
                <p className="my-8 text-3xl font-bold">{count}</p>
                <button onClick={() => setCount((prev)=> prev + 1) }>
                    Increment
                </button>
            <MemoCount bioData={myBioData} />
            </div>
        </>
    )
}

export default ReactMemo
