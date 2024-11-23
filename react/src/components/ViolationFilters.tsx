import React from "react";

interface FiltersProps {
  onFilterChange: (type: string) => void;
}

const ViolationFilters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(event.target.value);
  };

  return (
    <div>
      <select onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="Speeding">Speeding</option>
        <option value="Parking">Parking</option>
        <option value="Traffic light">Traffic light</option>
      </select>
    </div>
  );
};

export default ViolationFilters;
