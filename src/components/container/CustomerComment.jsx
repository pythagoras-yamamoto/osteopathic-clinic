import React from 'react';
import { Grid, Paper, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { IconContext } from 'react-icons';
import { FcBusinesswoman } from 'react-icons/fc';

export const CustomerComment = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1)
      }
    }
  }));

  const classes = useStyles();
  const { work, age, comment } = props;

  return (
    <>
      <Grid item xs={12}>
        <Paper
          variant="outlined"
          style={{ width: '100%', marginBottom: '40px' }}
        >
          <Box
            className={classes.root}
            display="flex"
            justifyContent="flex-start"
            bgcolor="#fff3e0"
          >
            <IconContext.Provider value={{ size: '3em' }}>
              <FcBusinesswoman />
            </IconContext.Provider>
            <Box
              color="text.secondary"
              py={1.5}
              sx={{
                fontSize: '20px',
                '@media screen and (max-width:600px)': {
                  fontSize: '16px'
                }
              }}
            >
              {age}
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-start"
            textAlign="left"
            p={4} // 口コミを記載する部分の縦幅
            sx={{
              fontSize: '20px',
              '@media screen and (max-width:600px)': {
                fontSize: '16px'
              }
            }}
          >
            {comment}
          </Box>
        </Paper>
      </Grid>
    </>
  );
};
