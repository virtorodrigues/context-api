import React, { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import ThemeDefault from '../themes/ThemeDefault';
import ThemeDark from '../themes/ThemeDark';
import ThemeLight from '../themes/ThemeLight';
import { FormControl, InputLabel, Select, MenuItem, Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ( theme => ({
  root: {
    height: 500,
    weight: 500,
    backgroundColor: theme.primary.backgroundColor,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <ThemeContext.Consumer>
        {(theme) => (
          <Grid className={classes.root}>
            <FormControl>
              <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Age
              </InputLabel>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value="azul"
                onChange={theme.handleChange}
              >
                <MenuItem value={ThemeDefault}>Default</MenuItem>
                <MenuItem value={ThemeDark}>Dark</MenuItem>
                <MenuItem value={ThemeLight}>Light</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        )}
      </ThemeContext.Consumer>
    </>    
  );
}

export default Home;