import React from 'react';
import styled from 'styled-components';

const TodoItemContainer = styled.div`
    padding: 2rem;
    margin-top: 1em;
    border-radius: 8px;
    background-color: #fff;
    
`;

export const getBorderStyleForDate = (startingDate, currentDate) => 
    (startingDate > new Date(currentDate - 86400000 * 5) 
    ? 'none'
    : '2px solid red');

const TodoItemContainerWithWarning = styled(TodoItemContainer)`
    border-bottom: ${props => getBorderStyleForDate(new Date(props.createdAt), Date.now())};
`;

const Button = styled.button`
    cursor: pointer;
    border: 0;
    border-radius: 8px;
    height: 55px;
    color: white;
    padding: 0 15px;
`;
const CompletedButton = styled(Button)`
    margin-right: 1em;
    background-color: #53D769;
`;

const RemoveButton = styled(Button)`
    background-color: #FC3158;
`;
const TodoListItem = ({todo, onRemovePressed, onMarkAsCompleted}) => {
    const Container = todo.isCompleted ? TodoItemContainer : TodoItemContainerWithWarning;

    return (
        <Container className="shadow" createdAt={todo.createdAt}>
            <h3>{todo.text}</h3>
            <p>
                Created at:&nbsp;
                {(new Date(todo.createdAt)).toLocaleDateString()}
            </p>
            <div className="buttons-container">
                {!todo.isCompleted && 
                <CompletedButton 
                    className="shadow"
                    onClick={()=> onMarkAsCompleted(todo.id)}
                >
                    Mark As Completed
                </CompletedButton>}
                <RemoveButton 
                    className="shadow" 
                    onClick={() => onRemovePressed(todo.id)}>
                    Remove
                </RemoveButton>
            </div>

        </Container>
    )
}


export default TodoListItem;