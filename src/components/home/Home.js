import React from 'react';
import ThemeContext from '../../context/ThemeContext';
import { ThemeDark, ThemeLight, ThemeDefault } from '../../themes';
import { FormControl, Select, MenuItem, Grid, Typography } from '@material-ui/core';
import useStyles from './Style';


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