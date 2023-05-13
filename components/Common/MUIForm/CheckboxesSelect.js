import React from 'react';
import {Checkbox, FormControl, InputLabel, ListItemText, OutlinedInput, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 10 + ITEM_PADDING_TOP,
		},
	},
};


const CheckboxesSelect = ({id, label = '', options, selected, setSelected}) => {
	const handleChange = (event) => {
		const {
			target: {value},
		} = event;
		setSelected(
			typeof value === 'string' ? value.split(',') : value,
		);
	};
	return (
		<FormControl sx={{m: 1, width: 200}}>
			<InputLabel id={id}>{label}</InputLabel>
			<Select
				labelId={id}
				id={`${id}-checkbox`}
				multiple
				value={selected}
				onChange={handleChange}
				input={<OutlinedInput label={label}/>}
				renderValue={(selected) => selected.join(', ')}
				MenuProps={MenuProps}
			>
				{options.map((opt) => (
					<MenuItem key={opt} value={opt}>
						<Checkbox checked={selected.indexOf(opt) > -1}/>
						<ListItemText primary={opt}/>
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}

export default CheckboxesSelect