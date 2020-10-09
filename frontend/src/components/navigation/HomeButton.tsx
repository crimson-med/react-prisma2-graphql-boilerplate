import { Button, makeStyles } from "@material-ui/core"
import React from "react"
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from "react-router-dom";
const useStyles = makeStyles(() => ({
    menu: {
        position: "fixed",
        top: 0,
        right: 0
    },
    button: {
        margin: '15px'
    }
}));

const HomeButton = () => {
    const classes = useStyles();
    let history = useHistory();

    const handleHome = () => {
        history.push('/')
    }
    return (
        <div
            className={classes.menu}>
            <Button
                onClick={handleHome}
                variant="outlined"
                type="button"
                className={classes.button}
                size="small"
                color="primary">
                <HomeIcon />
            </Button>
        </div>
    )
}
export default HomeButton