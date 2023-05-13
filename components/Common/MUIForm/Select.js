import React from 'react';
import {FormControl, InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const CustomSelect = ({id, label = '', options = [], selected, setSelected}) => {
	const handleChange = (event) => {
		setSelected(event.target.value);
	};
	return (
		<FormControl sx={{m: 1, minWidth: 200}}>
			<InputLabel id={id}>{label}</InputLabel>
			<Select
				labelId="demo-simple-select-helper-label"
				id={`${id}-select`}
				value={selected}
				label={label}
				onChange={handleChange}
			>
				{options.map((item) => (<MenuItem key={item} value={item}>{item}</MenuItem>))}
			</Select>
		</FormControl>
	)
}

export default CustomSelect