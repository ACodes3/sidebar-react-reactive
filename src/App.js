import React, { useState } from 'react'
import { Helmet } from "react-helmet";
import {ThemeProvider} from "styled-components";
import { darkTheme, lightTheme } from './styles/theme';
import { GlobalStyle } from './styles/globalStyles';
import Layout from './components/layout/Layout';
import Routes from "./Routes";

export const ThemeContext = React.createContext(null);

const App = () => {
    const [theme, setTheme]= useState("light"); 
    const themeStyle = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{setTheme, theme}}>
    <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet>
            <title>React Sidebar - by Aspasija</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Lobster&family=Roboto:wght@500;700&display=swap" rel="stylesheet"></link>
        </Helmet>
        <>
            <Layout>
                <Routes></Routes>
            </Layout>
        </>
    </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App