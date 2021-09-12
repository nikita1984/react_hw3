// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
const FolderList = () => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem>
                <ListItemText primary="First Chat" secondary="id: 001" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Second Chat" secondary="id: 002" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Third Chat" secondary="id: 003" />
            </ListItem>
        </List>
    );
};

export default FolderList;