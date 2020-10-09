import { AppBar, Button, createStyles, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Theme, Toolbar, Typography, useTheme } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { useOvermind } from "../../overmind";
import { Link, useHistory } from "react-router-dom";
import { MeetingRoom } from "@material-ui/icons";
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        title: {
            flexGrow: 1,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
        nolink: {
            textDecoration: "none",
            color: "white"
        },
    }),
);




export default function Navigation() {
    const classes = useStyles();
    const theme = useTheme();
    let history = useHistory();
    const [open, setOpen] = React.useState(false);
    const { state, actions } = useOvermind();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const logout = () => {
        actions.signOut()
        history.push('/login')
    }


    const renderLogin = (isLoggedIn:Boolean = true) => {
        if (isLoggedIn) {
            return (<Button onClick={logout} color="inherit">Logout</Button>)
        }
    }

    return (
    <div className={classes.root}>
        <CssBaseline />
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap className={classes.title}>
                    {state.title}
                </Typography>
                {renderLogin(state.user.isAuthed)}
            </Toolbar>
        </AppBar>
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                <Link to="/dashboard">
                    <ListItem button key="dashboard">
                        <ListItemIcon><DashboardIcon color="primary"/></ListItemIcon>
                        <ListItemText className={classes.nolink} primary="Dashboard" />
                    </ListItem>
                </Link>
                <Divider/>
                <ListItem onClick={logout} button key="logout">
                    <ListItemIcon><MeetingRoom color="primary"/></ListItemIcon>
                    <ListItemText className={classes.nolink} primary="Logout" />
                </ListItem>
            </List>
        </Drawer>
    </div>
    );
}