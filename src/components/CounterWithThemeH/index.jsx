import React, { useContext, useState, useEffect, useCallback } from 'react';
import CONSTANTS from '../../constants';
import { ThemeContext } from '../../contexts';

const styleMap = {
  [CONSTANTS.THEMES.LIGHT]: {
    color: 'black',
    backgroundColor: 'white',
    height: '100vh',
  },
  [CONSTANTS.THEMES.DARK]: {
    color: 'white',
    backgroundColor: 'black',
    height: '100vh',
  },
};

function CounterWithThemeH () {
  const [theme, setTheme] = useContext(ThemeContext);
  const [count, setCount] = useState(0);

  // Not memoised
  // const logCount = () => {
  //   console.log(`count =`, count);
  // };

  const logCount = useCallback(() => {
    console.log(`count =`, count);
  }, [count]);

  // useEffect(() => {
  //   console.log('function logCount has been created :>> ');
  // }, [count]);

  const themeSwitcher = () => {
    setTheme(
      theme === CONSTANTS.THEMES.DARK
        ? CONSTANTS.THEMES.LIGHT
        : CONSTANTS.THEMES.DARK
    );
  };

  const changeCount = ({ target: { value } }) => {
    setCount(Number(value));
  };

  return (
    <div style={styleMap[theme]}>
      <button onClick={themeSwitcher}>Switch theme</button>
      <input type='number' value={count} onChange={changeCount} />
      <button onClick={logCount}>Log count</button>
    </div>
  );
}

export default CounterWithThemeH;
