import { useEffect, useState } from 'react';

interface TimerProps {
  initialSeconds: number;
  totalSeconds: number;
  onChange?: (value: number) => void;
  interval: number;
}

const Timer = ({
  initialSeconds,
  totalSeconds,
  onChange,
  interval,
}: TimerProps) => {
  const [elapsed, setElapsed] = useState(0);
  const [intervalId, setIntervalId] = useState<number | undefined>();

  useEffect(() => {
    start(intervalId);

    return () => clear(intervalId);
  }, []);

  useEffect(() => {
    onChange?.(elapsed);
  }, [elapsed]);

  const start = (intervalId: number | undefined) => {
    clear(intervalId);

    const newIntervalId = window.setInterval(() => {
      setElapsed((prevElapsed) => {
        if (prevElapsed + initialSeconds >= totalSeconds) {
          window.clearInterval(newIntervalId);
          return prevElapsed;
        }
        return prevElapsed + 1;
      });
      setIntervalId(newIntervalId);
    }, interval);
  };

  const clear = (intervalId: number | undefined) => {
    if (intervalId !== undefined) {
      window.clearInterval(intervalId);
    }
  };

  return null;
};

export default Timer;
