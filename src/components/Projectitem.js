import React from 'react';
import './Projectitem.css';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';

function Projectitem({title, url, technos, image, site}) {
	return (
		<div className="projectitem">
			<h1>{title}</h1>
			{image && (
				<img src={`/screenshots/${image}`} alt="projectImage" onClick={event => window.open(`/screenshots/${image}`,"_blank")}/>
			)}
			<ul>
				{ technos && 
					technos.map(
						(elem) => (<li>{elem}</li>)
					)
				}
			</ul>
			<div className="projectitem_icons">
				{ url && <GitHubIcon onClick={event => window.open(`${url}`,"_blank")}/>}
				{ site && <LinkIcon onClick={event => window.open(`${site}`,"_blank")}/>}
			</div>
		</div>
	);
}

export default Projectitem;