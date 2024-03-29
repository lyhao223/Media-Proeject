import React from "react";
import classNames from "classnames";

const Skeleton = ({ times, classExtend }) => {
  const outerClasses = classNames(
    "relative",
    "overflow-hidden",
    "bg-gray-200",
    "rounded",
    "mb-2.5",
    classExtend
  );
  const innerClasses = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white",
    "to-gray-400"
  );
  const renderBoxes = Array(times)
    .fill(0)
    .map((_, index) => {
      return (
        <div key={index} className={outerClasses}>
          <div className={innerClasses} />
        </div>
      );
    });
  return renderBoxes;
};

export default Skeleton;
