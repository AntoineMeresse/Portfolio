import React from 'react';
import './Projects.css';

import projectlst from "./../datas/projects.json";
import ProjectItem from "./Projectitem";

function Projects() {
	return (
		<div className="projects">
			<h1>Still building</h1>
			<div className="projects_list">
				{
					projectlst.map(
						(elem, index) => (	
							<ProjectItem title={elem.name} technos={elem.technos} url={elem.url} image={elem.img} key={index}/>
						)	
					)
				}
			</div>
		</div>
	);
}

export default Projects;