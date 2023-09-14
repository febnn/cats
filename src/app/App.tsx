import { useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/AboutPage/AboutPage';
import MainPage from '../pages/MainPage/MainPage';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Routes>
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/'} element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default App;
