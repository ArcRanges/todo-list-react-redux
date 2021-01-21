import React, {useState} from 'react';
import { connect } from 'react-redux';
import { getTodos } from './selectors';
import { addTodoRequest } from './thunks';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 450px;
`;

const TodoInput = styled.input`
    margin-right: 1rem;
    padding: 0 20px;
    width: 100%;
    height: 55px;
    border: 0;
    border-radius: 8px;
    background-color: #fff;
`;

const AddTodoButton = styled.button`
    border: 0;
    border-radius: 8px;
    height: 55px;
    color: white;
    padding: 0 15px;
`;

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('')

    return (
        <FormContainer>
            <TodoInput 
                className="shadow" 
                type="text" 
                value={inputValue} 
                placeholder="Input todo" 
                onChange={e => setInputValue(e.target.value)}
            />
            <AddTodoButton 
                className="shadow primary"
                onClick={()=> {
                    const isDuplicateText = todos.some(todo => todo.text === inputValue)

                    if (!isDuplicateText) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }    
                }}
            >
                ADD</AddTodoButton>
        </FormContainer>
    )
    
}

const mapStateToProps = state => ({
    todos: getTodos(state),
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);