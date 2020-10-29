import React from 'react';
import './Projects.css';

import projectlst from "./../datas/projects.json";
import ProjectItem from "./Projectitem";

function Projects() {
	return (
		<div className="projects">
			<div className="projects_list">
				{
					projectlst.map(
						(elem, index) => (	
							<ProjectItem title={elem.name} technos={elem.technos} url={elem.url} image={elem.img} key={index}/>
						)	
					)
				}
				<ProjectItem title="Maybe new projects soon &#128512;"/>
			</div>
		</div>
	);
}

export default Projects;