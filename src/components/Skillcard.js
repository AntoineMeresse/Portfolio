import {React, useState} from 'react';
import './Skillcard.css';

function Skillcard({title , skills}) {
	return (
		<div className="skillcard">
			<h1 className="card-title">{title}</h1>
			<ul>
				{skills.map(
					(elem, index) => (
						<li>{elem}</li>
					)
				)}
			</ul>
		</div>
	);
}

export default Skillcard;