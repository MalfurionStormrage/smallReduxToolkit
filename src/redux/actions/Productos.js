import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

/*
	acciones para el control de productos
*/
export const AGREGAR_PRODUCTO = createAction("AGREGAR_PRODUCTO");
export const REMOVER_PRODUCTO = createAction("REMOVER_PRODUCTO");
export const ACTUALIZAR_PRODUCTO = createAction("ACTUALIZAR_PRODUCTO");
export const ERROR_ACCION = createAction("ERROR_ACCION");
export const SUCCESS_ACCION = createAction("SUCCESS_ACCION");


export const thunkAgregarProducto = (producto) => async (dispatch) => {
	try {

		producto.precio = await (producto.precio + (producto.precio * 19) / 100);
		dispatch(AGREGAR_PRODUCTO(producto));
		dispatch(SUCCESS_ACCION(producto));

	} catch (error) {

		dispatch(ERROR_ACCION(error));
	}
}
