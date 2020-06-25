import React from 'react';

const Button = (props) => {
	const { onClick, name } = props;
	return (
		<button
			onClick={onClick}
			type='submit'
			id={name}
			key={name}
			name={name}
			className='btn btn-danger login_btn'
		>
			{name}
		</button>
	);
};

export default Button;
