import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { getCompletedTodos, getIncompleteTodos, getTodosLoading } from './selectors';
import { loadTodos, removeTodoRequest, updateTodoRequest } from './thunks';

const TodoList = ({completedTodos, incompleteTodos, onRemovePressed, onMarkAsCompleted, isLoading, startLoadingTodos}) => {
    useEffect(()=> {
        startLoadingTodos()
    }, []);

    const loadingMessage = <div>Loading todos ...</div>
    const content = (
        <div className="list-wrapper">
            <h2>To-do:</h2>
            <NewTodoForm/>
            <h3>Incomplete:</h3>
            {incompleteTodos.map((todo, i)=> 
                <TodoListItem 
                    key={i} 
                    todo={todo} 
                    onRemovePressed={onRemovePressed}
                    onMarkAsCompleted={onMarkAsCompleted}
                />)
            }
            <h3>Completed:</h3>
            {completedTodos.map((todo, i)=> 
                <TodoListItem 
                    key={i} 
                    todo={todo} 
                    onRemovePressed={onRemovePressed}
                    onMarkAsCompleted={onMarkAsCompleted}
                />)
            }
        </div>
    )
    return isLoading ? loadingMessage : content;
}

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onMarkAsCompleted: id => dispatch(updateTodoRequest(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);