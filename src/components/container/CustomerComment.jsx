import React from "react";
import { Grid, TextField, Paper, Avatar, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const CustomerComment = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(2),
      },
    },
  }));

  const classes = useStyles();
  const { work, age, comment } = props;

  return (
    <>
      <Grid item xs={12}>
        <Paper variant="outlined" style={{margin:20, borderRadius:5}}>
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
            bgcolor="text.disabled" // コメント部分の背景色
            p={4} // 口コミを記載する部分の縦幅
          >
            {comment}aaaaaaa
          </Box>
        </Paper>
      </Grid>
    </>
  );
};
