import { createReducer } from '@reduxjs/toolkit';

import { AGREGAR_PRODUCTO } from '../actions/Productos';

/*
	
	return { ...state, tareas: [...state.tareas, payload] }

*/

const ReducerProducto = createReducer({ productos:[]} , (builder) => {
	builder.addCase(AGREGAR_PRODUCTO.toString() , (state , { action , payload}) => {
		return {...state , productos:[...state.productos , payload]};
	})
});

export default ReducerProducto;