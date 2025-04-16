import React, { useState, useEffect, useRef } from "react";
import { FaFilter, FaSort } from "react-icons/fa";

// Single CustomSelect component that takes options as props
const CustomSelect = ({ options, defaultLabel, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const selectRef = useRef(null);

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-select flex-shrink-0 relative" ref={selectRef}>
      <div
        className={`select-selected whitespace-nowrap flex items-center ${
          isOpen ? "select-arrow-active" : ""
        }`}
        onClick={toggleDropdown}
      >
        {icon}
        {selectedOption ? selectedOption.label : defaultLabel}
      </div>
      <div className={`select-items ${isOpen ? "" : "select-hide"}`}>
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`select-item ${
              selectedOption === option ? "same-as-selected" : ""
            }`}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

// Parent component with both selects side by side
const FilterSortSelects = () => {
  const filterOptions = [
    { label: "By Date", value: "date" },
    { label: "By Category", value: "category" },
    { label: "By Status", value: "status" },
  ];

  const sortOptions = [
    { label: "Ascending", value: "asc" },
    { label: "Descending", value: "desc" },
    { label: "Most Recent", value: "recent" },
  ];

  return (
    <div className="flex space-x-4">
      <CustomSelect
        options={filterOptions}
        defaultLabel="Filter"
        icon={<FaFilter className="inline mr-2" />}
      />
      <CustomSelect
        options={sortOptions}
        defaultLabel="Sort By"
        icon={<FaSort className="inline mr-2" />}
      />
    </div>
  );
};

// CSS styles
const styles = `
  .custom-select {
    position: relative;
    width: 150px; /* Adjust width as needed */
  }
  .select-selected {
    padding: 8px 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    background: white;
  }
  .select-items {
    position: absolute;
    background: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    z-index: 10;
  }
  .select-hide {
    display: none;
  }
  .select-item {
    padding: 8px 16px;
    cursor: pointer;
  }
  .select-item:hover {
    background: #f0f0f0;
  }
  .same-as-selected {
    background: #e0e0e0;
  }
  .select-arrow-active {
    border-radius: 4px 4px 0 0;
  }
`;

export default FilterSortSelects;