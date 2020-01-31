import React, { useContext } from 'react';
import ThemeContext from './context/ThemeContext';
import AppTheme from './themes/ThemeDefault';




const Teste = () => {
  return (
    <>
      <ThemeContext.Consumer> 
        {(theme) => (
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        )}
      </ThemeContext.Consumer>
    </>    
  );
}

const App = () => {
  return(
      <ThemeContext.Provider value={ AppTheme }>
        <Teste />
      </ThemeContext.Provider>
  );
}




export default App;