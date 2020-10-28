import React from 'react';
import './Educationtimeline.css';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	paper: {
	  padding: '6px 16px',
	},
	secondaryTail: {
	  backgroundColor: theme.palette.secondary.main,
	},
  }));

function Educationtimeline() {

	const classes = useStyles();

	return (
		<div className="educationtimeline">
			<React.Fragment>
     	<Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">2020-2021</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
		  <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              M2 E-services
            </Typography>
          </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">2019-2020</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
		  <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              M1 Computer Science
            </Typography>
          </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">2016-2019</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
		  <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Computer Science Licence
            </Typography>
          </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
		</div>
	);
}

export default Educationtimeline;