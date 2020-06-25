import React from 'react';

const LikeBtn = (props) => {
	const { handleFav, id, text, className } = props;
	return (
		<button className={className} id={id} onClick={(e) => handleFav(e)}>
			{text}
		</button>
	);
};

export default LikeBtn;
