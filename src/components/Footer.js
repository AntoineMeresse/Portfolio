import React from 'react';
import './Footer.css';

import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
	return (
		<div className="footer">
			<div className="footer_icons">
				<EmailIcon onClick={event => window.location.href="mailto:ant.meresse@gmail.com"}/>
				<LinkedInIcon onClick={event => window.open("https://www.linkedin.com/in/antoine-meresse","_blank")}/>
				<GitHubIcon onClick={event => window.open("https://github.com/AntoineMeresse","_blank")}/>
			</div>
		</div>
	);
}

export default Footer;