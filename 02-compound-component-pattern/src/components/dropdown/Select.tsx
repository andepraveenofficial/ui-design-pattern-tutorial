// Select.tsx
import React, { useState, type PropsWithChildren, createContext } from "react";
import { Option } from "./Option";

interface SelectContext {
  activeOption: string;
  setActiveOption: (key: string) => void;
}

export const SelectContext = createContext<SelectContext | undefined>(undefined);

interface SelectProps extends PropsWithChildren {
  defaultValue?: string;
  onValueChange?: (value: string) => void;
} 

// Define the compound component type
interface SelectComponent extends React.FC<SelectProps> {
  Option: typeof Option;
}

const Select: SelectComponent = ({
  children,
  defaultValue = "",
  onValueChange
}) => {
  const [activeOption, setActiveOption] = useState<string>(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setActiveOption(newValue);
    onValueChange?.(newValue);
  };

  return (
    <SelectContext.Provider
      value={{ activeOption, setActiveOption }}
    >
      <select
        style={{ width: "200px", padding: "10px", margin: "10px" }}
        onChange={handleChange}
        value={activeOption}
      >
        <option value="" disabled>
          Select an option...
        </option>
        {children}
      </select>
    </SelectContext.Provider>
  );
};

// Create compound component by attaching Option as static property
Select.Option = Option;

export default Select;