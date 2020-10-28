import React from 'react';
import './Footer.css';

import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
	return (
		<div className="footer">
			<div className="footer_icons">
				<EmailIcon/>
				<LinkedInIcon/>
				<GitHubIcon/>
			</div>
		</div>
	);
}

export default Footer;