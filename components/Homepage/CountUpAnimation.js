"use client"
import React, { useEffect, useState } from 'react';

const CountUpAnimation = ({ end, duration, trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (trigger) {
      let start = 0;
      const endVal = end;
      const increment = endVal / (duration / 1000 * 60);
      const stepTime = Math.abs(Math.floor(1000 / 60)); // 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start > endVal) {
          start = endVal;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [trigger, end, duration]);

  return (
    <div>
      <h5 className='mb-0'>{count}+</h5>
    </div>
  );
};

export default CountUpAnimation;