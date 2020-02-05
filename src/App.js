import React, { useState } from 'react';
import Home from './components/home/Home';
import { ThemeDefault } from './themes';
import ThemeContext from './context/ThemeContext';
import { MuiThemeProvider } from '@material-ui/core/styles';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState(ThemeDefault);

  const handleChange = (e) => {
    setTheme(e.target.value);
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