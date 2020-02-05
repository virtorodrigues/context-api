import React, { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import ThemeDefault from '../themes/ThemeDefault';
import ThemeDark from '../themes/ThemeDark';
import ThemeLight from '../themes/ThemeLight';
import { FormControl, InputLabel, Select, MenuItem, Grid, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ( theme => ({
  root: {
    height: '100%',
    
    '& .modal': {
      height: 500,
      width: 500,
      backgroundColor: theme.primary.backgroundColor,
      padding: 20,
      borderRadius: 15,
      boxShadow: '2px 2px 3px rgba(50, 30, 50, 0.5)',
    },
    
    '& .select': {
      minWidth: 300,
      color: theme.primary.textColor,
    },
    '& .mainTitle': {
      color: theme.primary.textColor,
      fontSize: 15,
      fontWeight: '800',
      margin: 0,
      textAlign: 'center',
      marginBottom: 30,
    },
    '& .description': {
      color: theme.secondary.textColor,
      fontSize: 10,
      fontWeight: '800',
      margin: 0,
      textAlign: 'justify',
      marginTop: 30,
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <ThemeContext.Consumer>
        {(theme) => (
          <Grid container alignItems="center" justify="center" direction="column" className={classes.root}>
            <Grid item>
              <Grid container className="modal" justify="center" alignItems="center" direction="column">
                <Grid item className="mainTitle">
                  <Typography
                    gutterBottom
                    variant="h1"
                    className="mainTitle">
                    Theme: {theme.theme.name}
                  </Typography>
                </Grid>
                <Grid item>
                  <FormControl >
                    <Select
                      labelId="demo-simple-select-placeholder-label-label"
                      id="demo-simple-select-placeholder-label"
                      value={theme.theme}
                      onChange={theme.handleChange}
                      className="select"
                    >
                      <MenuItem className="item" value={ThemeDefault}>Default</MenuItem>
                      <MenuItem className="item" value={ThemeDark}>Dark</MenuItem>
                      <MenuItem className="item" value={ThemeLight}>Light</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item className="description">
                  <Typography
                    gutterBottom
                    variant="caption">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id convallis ligula, euismod maximus purus. In convallis neque erat, in sodales ex efficitur et. Quisque eu purus at quam imperdiet blandit eget vitae lorem. Donec posuere est at est semper, in mattis arcu blandit. Sed venenatis nisi ut mi convallis, quis bibendum lorem cursus. Quisque elit tellus, accumsan nec elementum et, laoreet quis libero. Phasellus non ante at erat convallis auctor in eget felis. Nullam vitae mattis nisl, in efficitur ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id neque id sem imperdiet faucibus
                  </Typography>
                </Grid>
              </Grid>

            </Grid>
          </Grid>
        )}
      </ThemeContext.Consumer>
    </>    
  );
}

export default Home;