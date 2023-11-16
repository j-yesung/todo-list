import React from 'react';
import styles from '../styles/Main.module.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../theme/theme';
import { useState } from 'react';
import { GlobalStyle } from '../theme/GlobalStyle';

const Box = styled.div`
  background: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
  border: 2px solid ${({ theme }) => theme.textColor};
`;

function Layout(props) {
  const [mode, setMode] = useState(lightTheme);

  const toggleTheme = () => {
    if (mode === lightTheme) {
      setMode(darkTheme);
    } else {
      setMode(lightTheme);
    }
  };

  return (
    <ThemeProvider theme={mode}>
      <GlobalStyle />
      <Box className={styles.container}>
        <header className={styles.heaer}>
          <button onClick={toggleTheme}>모드 변경</button>
          My Todo List
          <div>React</div>
        </header>
        {props.children}
      </Box>
    </ThemeProvider>
  );
}

export default Layout;
