import React from 'react';
import './Maindiv.css';

import {Switch, Route} from "react-router-dom";

function Maindiv() {
	return (
		<div className="maindiv">
			<Switch>
              <Route path="/projects">
                <p>Projects</p>
              </Route>
              
              <Route path="/contact">
                <p>Contact me</p>
              </Route>
              
              <Route path="/">
                <p>About me</p>
              </Route>
            </Switch>
		</div>
	);
}

export default Maindiv;