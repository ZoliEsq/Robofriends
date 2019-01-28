import React from 'react';

const Card = ({ name, email, id }) => {
	return (
		<div className='tc bg-light-green pa3 br3 ma2 dib grow shadow-5 bw2'>
			<img alt='robots' src={`https://robohash.org/${id}200x200`} />		
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;
	
