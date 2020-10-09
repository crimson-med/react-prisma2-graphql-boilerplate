import { Chip, Grid, Link, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const useStyles = makeStyles(() => ({
  image: {
    maxWidth: "128px",
    borderRadius: "50%"
  },
  half: {
    minHeight: "80vh"
  },
  text: {
    color: "white",
    textAlign: "left"
  },
  badge: {
    marginTop: "15px"
  }
}));

const Author = () => {
  const classes = useStyles();
  const handleInstagram = () => {
    window.open('https://instagram.com/crimson_med', '_blank');
  }
  const handleGithub = () => {
    window.open('https://github.com/crimson-med', '_blank');
  }
  const handleTwitter = () => {
    window.open('https://twitter.com/crimson_med', '_blank');
  }
  const handleLinkedin = () => {
    window.open('https://www.linkedin.com/in/mederic-burlet/', '_blank');
  }
  return (

    <Grid
      className={classes.half}
      alignItems="center"
      container
      spacing={3}
      direction="row"
      justify="space-evenly">
      <Grid item xs={12} sm={12} md={12}>
        <img alt="Mederic" className={classes.image} src={window.location.origin + '/me.jpg'} />
        <Typography color="textPrimary" variant="h3">
          Burlet  Mederic
                    </Typography>
        <Typography color="textPrimary" variant="subtitle1">
          Passionate Coder | Idea Hurricane
                    </Typography>
        <Typography color="textPrimary" variant="subtitle1">
          <Link href="https://mederic.me" target="_blank" rel="noopener">
            https://mederic.me
                      </Link>
        </Typography>


        <Chip
          size="small"
          icon={<InstagramIcon />}
          label="crimson_med"
          className={classes.badge}
          clickable
          color="default"
          onClick={handleInstagram}
        /><br />
        <Chip
          size="small"
          icon={<GitHubIcon />}
          label="crimson-med"
          className={classes.badge}
          clickable
          color="default"
          onClick={handleGithub}
        /><br />
        <Chip
          size="small"
          icon={<TwitterIcon />}
          label="crimson_med"
          className={classes.badge}
          clickable
          color="default"
          onClick={handleTwitter}
        /><br />
        <Chip
          size="small"
          icon={<LinkedInIcon />}
          label="mederic-burlet"
          className={classes.badge}
          clickable
          color="default"
          onClick={handleLinkedin}
        />

      </Grid>
    </Grid>
  )
}
export default Author