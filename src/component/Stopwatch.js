import React, { useRef } from 'react'
import { useState } from 'react'

const Stopwatch = () => {
    let timeRef = useRef(null);
    const [second, setSecond] = useState(0);
    let startWatch = () => {
        timeRef.current = setInterval(() => {
            setSecond(pre => pre + 1);
        }, 1000)
    }
    let StopWatch =()=>{
        clearInterval(timeRef.current);
        // timeRef.current = null;
        
    }
    let resetWatch = ()=>{
        StopWatch();
        clearInterval(timeRef.current);
        setSecond(0);
    }
    return (
        <>
            <div className="container">
                <div className="row1"><span>minute 00 : {second}: Second</span></div>
                <div className="row">
                    <button onClick={startWatch}>Start</button>
                    <button onClick={StopWatch}>Stop</button>
                    <button onClick={resetWatch}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Stopwatch