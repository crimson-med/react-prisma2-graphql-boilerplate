import { Button, makeStyles } from "@material-ui/core"
import React from "react"
import { useHistory } from "react-router-dom";
import Author from "./Author";
import Backend from "./Backend";
import Frontend from "./Frontend";



const useStyles = makeStyles(() => ({
    image: {
        maxWidth: "100%"
    },
    part: {
        minHeight: "30vh"
    },
    half: {
        minHeight: "80vh"
    },
    menu: {
        position: "fixed",
        top: 0,
        right: 0
    },
    button: {
        margin: '15px'
    }
}));

const Home = () => {
    const classes = useStyles();
    let history = useHistory();
    const handleLogin = () => {
        history.push('/login')
    }
    const handleSignup = () => {
        history.push('/register')
    }
    return (
        <div>
            <div
                className={classes.menu}>
                <Button
                    onClick={handleLogin}
                    variant="outlined"
                    type="button"
                    className={classes.button}
                    size="small"
                    color="primary">
                    LOGIN
                    </Button>
                <Button
                    onClick={handleSignup}
                    className={classes.button}
                    variant="outlined"
                    size="small"
                    type="button"
                    color="primary">
                    Signup
                    </Button>
            </div>
            <Frontend />
            <Backend />
            <Author />
        </div>
    )
}


export default Home