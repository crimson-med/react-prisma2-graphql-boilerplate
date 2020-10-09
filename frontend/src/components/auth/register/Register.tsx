import { gql, useMutation } from "@apollo/client";
import { makeStyles, Box, FormControl, InputLabel, Input, Button, Typography } from "@material-ui/core";
import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";
import { useOvermind } from "../../../overmind";
import HomeButton from "../../navigation/HomeButton";


const useStyles = makeStyles(() => ({
    line: {
        margin: "20px"
    },
    login: {
        margin: "20px",
        minWidth: "200px"
    },
}));


const SIGNUP = gql`
  mutation Signup($username: String!, $email: String!, $password: String!) {
    signup(name: $username, email: $email, password: $password) {
      token
      user {
          id
          name
          email
      }
    }
  }
`;

const Register = () => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const { actions } = useOvermind();
    let history = useHistory();
    const [signup, { loading: mutationLoading, error: mutationError }] = useMutation(SIGNUP);
    const handleSignup = () => {
        signup({ variables: { username, email, password } }).then(async ({ data }) => {
            await actions.setUser({
                user: {
                    username: data.signup.user.name,
                    email: data.signup.user.email,
                    token: data.signup.token,
                    isAuthed: true
                }
            })
            history.push('/dashboard')
        }).catch(e => {
            alert(e)
        })
    }
    return (
        <form>
            <HomeButton />
            <Box display="flex" alignItems="center" flexDirection="column">
                <Box className={classes.line}>
                    <FormControl>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input
                            id="username"
                            aria-describedby="username-helper-text"
                            value={username}
                            onChange={e => setUsername(e.target.value.trim().toLowerCase())}
                        />
                    </FormControl>
                </Box>
                <Box className={classes.line}>
                    <FormControl>
                        <InputLabel htmlFor="email">Email address</InputLabel>
                        <Input
                            id="email"
                            aria-describedby="email-helper-text"
                            value={email}
                            onChange={e => setEmail(e.target.value.trim().toLowerCase())}
                        />
                    </FormControl>
                </Box>
                <Box className={classes.line}>
                    <FormControl >
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            id="password"
                            type="password"
                            aria-describedby="password-helper-text"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </FormControl>
                </Box>
                <Box className={classes.login}>
                    <Button
                        onClick={handleSignup}
                        fullWidth={true}
                        variant="contained"
                        type="button"
                        color="primary">
                        SIGNUP
                    </Button>

                </Box>
                <Box>
                    <Typography color="textPrimary">Have an account? <Link className="link" to="/login">Login!</Link></Typography>
                    {mutationLoading && <p>Loading...</p>}
                    {mutationError && <p>Error :( Please try again</p>}
                </Box>
            </Box>
        </form>
    )
}

export default Register