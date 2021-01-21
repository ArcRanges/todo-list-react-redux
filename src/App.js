import React from 'react';
import { hot } from 'react-hot-loader';
import TodoList from './todos/TodoList';
import styled from 'styled-components';

import './App.css';

const AppContainer = styled.div`
    max-width: 1174px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: center;
    background-color: #eaeaea;
    padding: 25px;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
`;
const App = () => (
    <div className="App">
        <AppContainer>
            <TodoList/>
        </AppContainer>
    </div>
);

export default hot(module)(App);