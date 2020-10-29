import React from 'react';
import './Projectitem.css';

import GitHubIcon from '@material-ui/icons/GitHub';

function Projectitem({title, url, technos, image}) {
	return (
		<div className="projectitem">
			<h1>{title}</h1>
			{image && (
				<img src={`/screenshots/${image}`} alt="projectImage"/>
			)}
			<ul>
				{ technos && 
					technos.map(
						(elem) => (<li>{elem}</li>)
					)
				}
			</ul>
			{ url && <GitHubIcon onClick={event => window.open(`${url}`,"_blank")}/>}
		</div>
	);
}

export default Projectitem;