import React from "react";
import { Grid, TextField, Paper, Avatar, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AImg from "../../public/icon-woman-3.png";
import { IconContext } from "react-icons";
import { FcBusinesswoman } from "react-icons/fc"

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
        <Paper variant="outlined" style={{margin:30, borderRadius:5}}>
          <Box
            className={classes.root}
            display="flex"
            justifyContent="flex-start"
            bgcolor="#fff3e0"
          >
            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
            {/* <Avatar alt="Remy Sharp" src={ WomanIcon } /> */}
            <IconContext.Provider value={{ size: '3em' }}>
              <FcBusinesswoman />
            </IconContext.Provider>
            <Box color="text.secondary" fontSize={16} pt={1}>{work}</Box> 
            <Box color="text.secondary" fontSize={16} pt={1}>|</Box>
            <Box color="text.secondary" fontSize={16} pt={1}>{age}</Box>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-start"
            p={4} // 口コミを記載する部分の縦幅
            fontSize={16}
          >
            {comment}
          </Box>
        </Paper>
      </Grid>
    </>
  );
};
