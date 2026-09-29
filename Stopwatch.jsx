import { useState, useRef } from "react";

function Stopwatch() {
    const [seconds, setSeconds] = useState(0);

    const timerRef = useRef(null);

    function startTimer() {
        if (timerRef.current) {
            return;
        }

        timerRef.current = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timerRef.current);
        timerRef.current = null;
    }

    function resetTimer() {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setSeconds(0);
    }

    return (
        <>
            <h1>{seconds}</h1>

            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </>
    );
}

export default Stopwatch;