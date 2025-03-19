import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CounterCounterCard(props) {
  const { contentList = {} } = props;
  // Dynamically get the values from contentList object
  const contentListArray = Object.values(contentList).filter((text) => text !== "");

  const [progress, setProgress] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  // Animate when the component is in view
  React.useEffect(() => {
    if (inView) {
      let start = 0;
      const end = props.percentage; // Change this to props.value if dynamic
      const duration = 1500; // Animation duration in ms
      const stepTime = duration / end;

      const timer = setInterval(() => {
        start += 1;
        setProgress(start);
        if (start === end) clearInterval(timer);
      }, stepTime);
    }
  }, [inView]);

  return (
    <div className="CounterCard" ref={ref}>
      <div className="CounterCard-inner">
        <div className="CounterCard-circle">
          <CircularProgressbar
            value={progress}
            maxValue={100}
            text={props.counterValue}
            styles={buildStyles({
              strokeLinecap: "butt",
              textColor: "#fff",
              pathColor: "#FF8200",
              trailColor: "#452300",
            })}
          />
        </div>
        <div className="CounterCard-content">
          <div className="CounterCard-content-title align-center">
            <h2>{props.title}</h2>
          </div>
          <div className="CounterCard-content-list ">
           {/* Loop over contentListArray and render only non-empty items */}
           {contentListArray.map((text, index) => (
              <div
                className={`CounterCard-content-list-item item-${index}`}
                key={index}
              >
                <div className="CounterCard-content-list-item-icon">
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>
                <div className="CounterCard-content-list-item-content">
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
