import React from 'react';

const InputForm = (props) => {
	if (props.type === 'textarea') {
		return (
			<div className="element">
				<label htmlFor={props.name}>{props.label}</label>
				<textarea
					name={props.name}
					id={props.name}
					onChange={props.change}
					value={props.value}
					className={props.class}
				></textarea>
			</div>
		);
	} else {
		return (
			<div className="element">
				<label htmlFor={props.name}>{props.label}</label>
				<input
					type={props.type}
					name={props.name}
					id={props.name}
					onChange={props.change}
					value={props.value}
					className={props.class}
					placeholder={props.placeholder}
				/>
			</div>
		);
	}
};

export default InputForm;
