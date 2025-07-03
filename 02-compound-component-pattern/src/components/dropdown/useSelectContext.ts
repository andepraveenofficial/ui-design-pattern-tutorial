import { useContext } from "react";
import { SelectContext } from "./Select";

export const useSelectContext = () => {
	const context = useContext(SelectContext);
	if (!context) {
		throw new Error("useSelectContext must be used within a Select component");
	}
	return context;
};