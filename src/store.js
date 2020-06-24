import {createStore} from 'redux';
import {createAction, createReducer, configureStore} from '@reduxjs/toolkit';

// createAction
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// createReducer
const reducer = createReducer([], {
	[addToDo]: (state, action) => {
		// mutate state 가능
		state.push({text: action.payload, id: Date.now()});
	},
	[deleteToDo]: (state, action) => {
		return state.filter(toDo => toDo.id !== action.payload);
	},
})

// createStore -> configureStore
const store = configureStore({reducer});

export const actionCreater ={
	addToDo,
	deleteToDo
}



export default store;