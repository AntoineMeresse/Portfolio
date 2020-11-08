import React, {useState, useEffect} from 'react';
import './Aboutme.css';

import Typing from 'react-typing-animation';
import Educationtimeline from "./Educationtimeline";
import SkillCard from "./Skillcard";

import axios from '../axios';

function Aboutme() {

	const [skillInfos, setSkillInfos] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const req = await axios.get('/skillcards');
			console.log(req);
			setSkillInfos(req.data);
		}
		fetchData();
	}, [])

	return (
		<div className="aboutme">
			<div className="aboutme_topmessage">
				<Typing speed={300}>
					<h1 className="title">&nbsp; &#128075; Hey !  &#128075;&nbsp;&nbsp;</h1>
				</Typing>
				<Typing speed={50} loop={true}>
					<h1>I'm Antoine Méresse, nice to see you here !</h1>
					<Typing.Reset count={1} delay={500} />
					</Typing>
			</div>
			<hr/>
			<div className="skills">
				<Typing speed={300}>
					<h1 className="title"> Programming :</h1>
				</Typing>
				<div className="skills_cards">
					{
						skillInfos.map(
							(elem, index) => (
								<SkillCard title={elem.name} skills={elem.liste} key={index}/>
							)
						)
					}
				</div>
			</div>
			<hr/>
			<div className="education">
				<Typing speed={300}>
					<h1 className="title"> Education :</h1>
				</Typing>
				<Educationtimeline/>
			</div>
		</div>
	);
}

export default Aboutme;