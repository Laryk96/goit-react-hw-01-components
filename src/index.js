import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import './index.css';
import App from 'components/App/App';
import { theme } from './constants';
console.log(App);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
console.log('geoooo');

localStorage.setItem('Name', 'Mango');
console.log([1, 23, 34, 124, 15, 13123123]);
console.log({
  name: 'mango',
  age: 20,
  local: {
    city: 'kiev',
    adress: 'Petrovka',
  },
  getId() {
    console.log(10);

    console.log(this);
    return 21;
  },
});
