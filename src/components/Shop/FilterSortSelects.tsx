"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaSort } from "react-icons/fa";

// Custom Select Component
interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: Option[];
  defaultLabel: string;
  icon: React.ReactNode;
  onChange: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, defaultLabel, icon, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option.value);
  };

  return (
    <div className="custom-select relative" ref={selectRef}>
      <div
        className={`select-selected flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors ${
          isOpen ? "border-[#800000]" : ""
        }`}
        onClick={toggleDropdown}
      >
        {icon}
        <span>{selectedOption ? selectedOption.label : defaultLabel}</span>
      </div>
      <div
        className={`select-items absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-10 ${
          isOpen ? "" : "hidden"
        }`}
      >
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`select-item px-4 py-2 hover:bg-gray-100 cursor-pointer ${
              selectedOption?.value === option.value ? "bg-gray-100" : ""
            }`}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

// FilterSortSelects Component
interface FilterSortSelectsProps {
  onSortChange: (value: "normal" | "low-to-high" | "high-to-low") => void;
}

const FilterSortSelects: React.FC<FilterSortSelectsProps> = ({ onSortChange }) => {
  const sortOptions: Option[] = [
    { label: "Default", value: "normal" },
    { label: "Price: Low to High", value: "low-to-high" },
    { label: "Price: High to Low", value: "high-to-low" },
  ];

  return (
    <div className="flex gap-4">
      <CustomSelect
        options={sortOptions}
        defaultLabel="Sort By"
        icon={<FaSort className="text-gray-600" />}
        onChange={onSortChange}
      />
    </div>
  );
};

export default FilterSortSelects;