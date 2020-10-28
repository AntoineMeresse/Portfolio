import React from 'react';
import './Maindiv.css';

import {Switch, Route} from "react-router-dom";
import Aboutme from "./Aboutme";

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
                <Aboutme/>
              </Route>
            </Switch>
		</div>
	);
}

export default Maindiv;