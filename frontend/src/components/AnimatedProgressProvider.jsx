import React, { useState, useEffect, useCallback } from "react";
import { Animate } from "react-move";

const AnimatedProgressProvider = ({
  valueStart = 0,
  valueEnd,
  duration,
  easingFunction,
  repeat,
  children
}) => {
  const [isAnimated, setIsAnimated] = useState(false);

  // Function to toggle animation
  const toggleAnimation = useCallback(() => {
    setIsAnimated((prev) => !prev);
  }, []);

  useEffect(() => {
    let interval;
    if (repeat) {
      interval = setInterval(toggleAnimation, duration * 1000);
    } else {
      toggleAnimation();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [repeat, duration, toggleAnimation]);

  return (
    <Animate
      start={{ value: valueStart }}
      update={{
        value: isAnimated ? valueEnd : valueStart,
        timing: { duration: duration * 1000, ease: easingFunction }
      }}
    >
      {({ value }) => children(value)}
    </Animate>
  );
};

export default AnimatedProgressProvider;
