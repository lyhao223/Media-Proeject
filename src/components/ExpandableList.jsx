import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
const ExpandableList = ({ header, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mb-2.5 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        {isOpen ? (
          <GoChevronDown onClick={handleClick} />
        ) : (
          <GoChevronLeft onClick={handleClick} />
        )}
      </div>
      {isOpen && <div className="p-2 border-t">{children}</div>}
    </div>
  );
};

export default ExpandableList;
