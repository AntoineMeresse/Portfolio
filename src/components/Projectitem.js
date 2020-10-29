import React from 'react';
import './Projectitem.css';

function Projectitem({title, url, technos}) {
	return (
		<div className="projectitem">
			<h1>{title}</h1>
			<h2>Technos : </h2>
			<ul>
				{
					technos.map(
						(elem) => (<li>{elem}</li>)
					)
				}
			</ul>
			<p>Url : <a href={url}>Link</a></p>
		</div>
	);
}

export default Projectitem;