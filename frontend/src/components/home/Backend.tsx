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
        textAlign: "left"
    }
}));

const Backend = () => {
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
                <Typography color="textPrimary" variant="h3">
                    Backend
                    </Typography>
                <Typography color="textPrimary" variant="body1">
                    Here is the list of backend technologies
                    </Typography>
                <Timeline>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent className={classes.text}>GraphQL Shield<br /><small>(access control)</small></TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent className={classes.text}>GraphQL Yoga<br /><small>(server)</small></TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary" />
                        </TimelineSeparator>
                        <TimelineContent className={classes.text}>Prisma2 <br /><small>(database orm)</small></TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <img alt="Pictogram of Server" className={classes.image} src={window.location.origin + '/back.svg'} />
            </Grid>
        </Grid>
    )
}
export default Backend