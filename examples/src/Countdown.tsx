import React, { useState } from 'react';
import ProgressBar from 'react-customizable-progressbar';
import { startOfDay, setSeconds, getHours, getMinutes, format } from 'date-fns';
import Timer from './Timer';
import ExampleCard from './ExampleCard';

const totalSeconds = 60;
const initialSeconds = 15;
const initialProgress = (initialSeconds / totalSeconds) * 100;

const getText = (date: Date) => {
  const h = getHours(date);
  const m = getMinutes(date);

  if (h) return format(date, "h'h' m'm' s's'");
  else if (m) return format(date, "m'm' s's'");
  else return format(date, "s's'");
};

interface IndicatorProps {
  elapsedSeconds: number;
}

const Indicator = ({ elapsedSeconds }: IndicatorProps) => {
  const seconds = totalSeconds - elapsedSeconds - initialSeconds;
  const date = setSeconds(startOfDay(new Date()), seconds);

  return (
    <div className="flex items-center justify-center text-center absolute top-0 w-full h-full m-auto text-[1.3em]">
      <div>
        <div
          className={
            seconds > 0
              ? 'text-[0.8em] font-thin text-[#777] mb-[5px] transition-all duration-300'
              : 'text-[1.1em] font-thin mb-0 text-[indianred] transition-all duration-300 animate-blinking'
          }
        >
          Popcorn ready {seconds > 0 && <span>in</span>}
        </div>
        <div
          className={
            seconds > 0
              ? 'text-[1.6em] font-thin max-h-[100px] transition-all duration-300'
              : 'text-[1.6em] font-thin max-h-0 overflow-hidden text-white transition-all duration-300'
          }
        >
          {getText(date)}
        </div>
      </div>
    </div>
  );
};

const Countdown = () => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [progress, setProgress] = useState(initialProgress);

  const roundProgress = (progress: number) => {
    const factor = Math.pow(10, 2);
    return Math.round(progress * factor) / factor;
  };

  const handleTimer = (elapsedSeconds: number) => {
    const progress = roundProgress(
      ((elapsedSeconds + initialSeconds) / totalSeconds) * 100
    );

    setProgress(progress);
    setElapsedSeconds(elapsedSeconds);
  };

  return (
    <ExampleCard
      title="Countdown"
      href="https://github.com/martyan/react-customizable-progressbar/blob/master/examples/Countdown.tsx"
    >
      <div className="flex justify-center">
        <ProgressBar
          radius={100}
          progress={progress}
          strokeWidth={3}
          strokeColor="indianred"
          trackStrokeWidth={3}
          trackStrokeColor="#e6e6e6"
          pointerRadius={5}
          pointerFillColor="white"
          pointerStrokeWidth={2}
          pointerStrokeColor="indianred"
        >
          <Indicator elapsedSeconds={elapsedSeconds} />
        </ProgressBar>

        <Timer
          initialSeconds={initialSeconds}
          totalSeconds={totalSeconds}
          onChange={handleTimer}
          interval={1000}
        />
      </div>
    </ExampleCard>
  );
};

export default Countdown;
