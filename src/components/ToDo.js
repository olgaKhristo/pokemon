import React, { useState, useReducer } from 'react';
import '../App.css';
import Todo1 from './Todo1';

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

function reducer(todos, action) {
    switch(action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name) ]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if(todo.id === action.payload.id) {
                    return {...todo, complete: !todo.complete}
                }
                return todo
            })           
            case ACTIONS.DELETE_TODO:
                return todos.filter(todo => todo.id !== action.payload.id)              
                default:
                    return todos
    }}

    function newTodo(name) {
        return { id: Date.now(), name: name, complete: false }
    }



function Todo() {

    const [todos, dispatch] = useReducer(reducer, []);
    const [todonow, setTodonow] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: todonow }});
        setTodonow("");
    }

    return(

        <>
        <form onSubmit={handleSubmit}>
        <input type="text" value={todonow} onChange={e => setTodonow(e.target.value)}/>

        </form>
        {todos.map(todo => {
           return <Todo1 key={todo.id} todo={todo} dispatch={dispatch} />
        })}
        </>
    )
}
export default Todo;










