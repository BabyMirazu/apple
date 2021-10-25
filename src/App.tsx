import React, { FC } from 'react';
import Router from './routes/Router';
import './styles/index.scss'
import 'animate.css';
import { BrowserRouter } from 'react-router-dom';

const App: FC = () => {
  return (
    <BrowserRouter>
        <Router />
    </BrowserRouter>
  );
}

export default App;
