import './App.css';
import { ThemeProvider } from '@material-ui/core';
import theme from '../src/config/theme';

import HomePage from './views/home';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <HomePage/>
    </ThemeProvider>
  );
}

export default App;
