import React, { useEffect, useState } from "react";
import { formatTime } from "~/utils/timeTransform";

interface PomodoroTimerProps {
    duration?: number;
    onComplete?: () => void
}

const twentyFiveMinutesInMs = 25 * 60; // 1,500,000 milliseconds

export default function PomodoroTimer({
    duration = twentyFiveMinutesInMs,
    onComplete
}:PomodoroTimerProps): React.ReactElement {
    const [time, setTime] = useState<number>(duration)
    const [countdown, setCountdown] = useState<boolean>(false)

    useEffect(() => {
        if (time > 0 && countdown) {
            const timer = setTimeout(() => setTime(t => t - 1), 1000)
            return () => clearTimeout(timer)
        }
        if (time === 0 && countdown) {
            setCountdown(false);
            onComplete?.();
        }
    }, [time, countdown])

    return (
        <>
            <div>
                {/* Timer */}
                <span>{formatTime(time)}</span>
                <div>
                    <button onClick={()=> { setCountdown(true) }} className="p-2 bg-[#222222] text-white rounded-lg" role="Start Time" aria-label="Start Time">Start</button>
                    <button onClick={()=> { setCountdown(false) }}className="p-2 bg-[#222222] text-white rounded-lg" role="Pause Time" aria-label="Pause Time">Pause</button>
                    <button onClick={() =>{ setTime(duration); setCountdown(false); }} className="p-2 bg-[#222222] text-white rounded-lg" role="Reset Time" aria-label="Reset Time">Reset</button>
                </div>
            </div>
        </>
    );
}