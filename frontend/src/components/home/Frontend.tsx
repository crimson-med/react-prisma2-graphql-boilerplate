import { Grid, makeStyles, Typography } from "@material-ui/core"
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from "@material-ui/lab";
import React from "react"

const useStyles = makeStyles(() => ({
  image: {
    maxWidth: "100%"
  },
  half: {
    minHeight: "80vh"
  },
  text: {
    color: "white",
    textAlign: "right"
  }
}));

const Frontend = () => {
  const classes = useStyles();

  return (

    <Grid
      className={classes.half}
      alignItems="center"
      container
      spacing={3}
      direction="row"
      justify="space-evenly">
      <Grid item xs={12} sm={12} md={4}>
        <img alt="Pictogram of Webapp" className={classes.image} src={window.location.origin + '/front.svg'} />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Typography color="textPrimary" variant="h3">
          Frontend
                    </Typography>
        <Typography color="textPrimary" variant="body1">
          Here is the list of frontend technologies
                    </Typography>
        <Timeline align="right">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className={classes.text}>React<br /><small>(user interface)</small></TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className={classes.text}>Overmind JS<br /><small>(state management)</small></TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
            </TimelineSeparator>
            <TimelineContent className={classes.text}>Apollo Client <br /><small>(graphQL interaction)</small></TimelineContent>
          </TimelineItem>
        </Timeline>
      </Grid>

    </Grid>
  )
}
export default Frontend