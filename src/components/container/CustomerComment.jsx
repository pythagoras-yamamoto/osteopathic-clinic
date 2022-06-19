import React from "react";
import { Grid, TextField, Paper, Avatar, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const CustomerComment = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();
  const { work, age, comment } = props;

  return (
    <>
      <Grid item xs={12}>
        <Paper variant="outlined">
          <Box
            className={classes.root}
            display="flex"
            justifyContent="flex-start"
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Box color="text.secondary">{work}主婦</Box>
            <Box color="text.secondary">|</Box>
            <Box color="text.secondary">{age}40代</Box>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-start"
            bgcolor="text.disabled"
            p={4}
          >
            {comment}aaaaaaa
          </Box>
        </Paper>
      </Grid>
    </>
  );
};
