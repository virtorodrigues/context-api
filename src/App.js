import React, { useContext, useState, useEffect } from 'react';
import ThemeDefault from './themes/ThemeDefault';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import Home from './components/Home';
import { MuiThemeProvider } from '@material-ui/core/styles';
import ThemeContext from './context/ThemeContext';
import { createMuiTheme } from '@material-ui/core/styles';

const App = () => {
  const [theme, setTheme] = useState(ThemeDefault);

  useEffect(() => {
    createMuiTheme(theme);
  }, []);

  const handleChange = (e) => {
    setTheme(e.target.value);
    createMuiTheme(theme);
  };

  const themeAssign = {
    theme,
    handleChange
  };

  return(
    <MuiThemeProvider theme={ theme }>
      <ThemeContext.Provider value={ themeAssign }>
        <Home />
      </ThemeContext.Provider>
    </MuiThemeProvider>
  );
}

export default App;