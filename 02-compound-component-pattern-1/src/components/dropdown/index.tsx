import React from "react";
import Select from "./Select";

const DropDown: React.FC = () => {

	return (
		<div>
			<Select>
				<Select.Option value='1'>Option 1</Select.Option>
				<Select.Option value='2'>Option 2</Select.Option>
				<Select.Option value='3'>Option 3</Select.Option>
				<Select.Option value='4'>Option 4</Select.Option>
				<Select.Option value='5'>Option 5</Select.Option>
			</Select>
		</div>
	);
};

export default DropDown;
