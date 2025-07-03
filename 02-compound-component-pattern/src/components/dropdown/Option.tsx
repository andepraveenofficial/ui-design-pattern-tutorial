import {type PropsWithChildren } from "react";


export interface OptionProps extends PropsWithChildren {
	value: string;
}

export const Option: React.FC<OptionProps> = ({ value, children }) => {
	return (
		<option value={value}>
			{children}
		</option>
	);
};
