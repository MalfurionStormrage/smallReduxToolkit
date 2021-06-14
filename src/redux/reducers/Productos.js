import { createReducer } from "@reduxjs/toolkit";
import { AGREGAR_PRODUCTO, REMOVER_PRODUCTO, ACTUALIZAR_PRODUCTO } from "../actions/Productos";

const ReducerProducto = createReducer({ productos: [] }, (builder) => {
  builder
    .addCase(AGREGAR_PRODUCTO.toString(), (state, { payload }) => {
      return { ...state, productos: [...state.productos, payload] };
    })
    .addCase(REMOVER_PRODUCTO.toString(), (state, { payload }) => {
      return { ...state, productos: payload };
    })
    .addCase(ACTUALIZAR_PRODUCTO.toString(), (state, { payload }) => {
      return { ...state, productos: payload };
    });
});

export default ReducerProducto;