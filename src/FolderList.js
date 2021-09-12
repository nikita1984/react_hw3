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

const chatsAray = [
    {id: "1", name: "Chat 1"},
    {id: "2", name: "Chat 2"},
    {id: "3", name: "Chat 3"},
];

const chatsList = chatsAray.map((chat) => (
<ListItem>
    <ListItemText primary={chat.name} />
</ListItem>));

const FolderList = () => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {chatsList}
        </List>
    );
};

export default FolderList;