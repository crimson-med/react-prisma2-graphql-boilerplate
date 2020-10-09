import React, { useState } from "react"
import { FormControl, InputLabel, Input, Box, makeStyles, Button, Typography } from "@material-ui/core"
import { gql, useMutation } from "@apollo/client";
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


const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
          id
          name
          email
      }
    }
  }
`;

const Login = () => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { state, actions } = useOvermind();
    let history = useHistory();
    if (state.user.isAuthed) {
        history.push('/dashboard')
    }
    const [login, { loading: mutationLoading, error: mutationError }] = useMutation(LOGIN);
    const handleLogin = () => {
        login({ variables: { email: email, password: password } }).then(async ({ data }) => {
            await actions.setUser({
                user: {
                    username: data.login.user.name,
                    email: data.login.user.email,
                    token: data.login.token,
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
                        onClick={handleLogin}
                        fullWidth={true}
                        variant="contained"
                        type="button"
                        color="primary">
                        LOGIN
                    </Button>

                </Box>
                <Box>
                    <Typography color="textPrimary">Don't have an account? <Link className="link" to="/register">Create  Account!</Link></Typography>
                    {mutationLoading && <p>Loading...</p>}
                    {mutationError && <p>Error :( Please try again</p>}
                </Box>
            </Box>
        </form>
    )
}

export default Login