import React, {useState, useEffect} from 'react';
import './Projects.css';

import ProjectItem from "./Projectitem";
import axios from "../axios";

function Projects() {

	const [projectlst, setProjectlst] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const req = await axios.get('/projects');
			console.log(req);
			setProjectlst(req.data);
		}
		fetchData();
	}, [])

	return (
		<div className="projects">
			<div className="projects_list">
				{
					projectlst.map(
						(elem, index) => (	
							<ProjectItem title={elem.name} technos={elem.technos} url={elem.url} image={elem.img} key={index} site={elem.site}/>
						)	
					)
				}
				<ProjectItem title="Maybe new projects soon &#128512;"/>
			</div>
		</div>
	);
}

export default Projects;