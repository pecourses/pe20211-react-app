import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
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

// useCallback - мемоизирует (запоминает, не пересоздает) обработчик
//   синтаксис: useCallback(() => {}, []);
//   при изменении значения во втором аргументе пересоздает первый

const calcValue = v => {
  let i = 1;
  for (let j = 1; j <= 400000000; j++) {
    i = j * i;
  }
  return v ** 3;
};

function CounterWithThemeH () {
  const [theme, setTheme] = useContext(ThemeContext);
  const [count, setCount] = useState(0);

  // Not memoised
  // const logCount = () => {
  //   console.log(`count =`, count);
  // };

  // change count
  const logCount = useCallback(() => {
    console.log(`count =`, count);
  }, [count]);

  // once
  const themeSwitcher = useCallback(() => {
    setTheme(theme =>
      theme === CONSTANTS.THEMES.DARK
        ? CONSTANTS.THEMES.LIGHT
        : CONSTANTS.THEMES.DARK
    );
  }, []);

  // useState don`t change
  const changeCount = useCallback(({ target: { value } }) => {
    setCount(Number(value));
  }, []);

  const calculatedValue = useMemo(() => calcValue(count), [count]);

  return (
    <div style={styleMap[theme]}>
      <button onClick={themeSwitcher}>Switch theme</button>
      <input type='number' value={count} onChange={changeCount} />
      <button onClick={logCount}>Log count</button>
      <div>{calculatedValue}</div>
    </div>
  );
}

export default CounterWithThemeH;
