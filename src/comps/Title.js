import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const Title = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className="appBarCustom" position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography className={classes.title} variant="h6">
            PicBook
          </Typography>
          <Button className="loginBtn" color="inherit">
            Coming Soon
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Title;
